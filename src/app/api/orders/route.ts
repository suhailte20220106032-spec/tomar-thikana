import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendAdminOrderNotification, sendCustomerOrderConfirmation } from "@/lib/email";
import { generateOrderId } from "@/lib/cart";
import type { Order } from "@/lib/cart";

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      return NextResponse.json(
        { error: "Database not configured. Please set up environment variables." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { customerInfo, items, totalAmount } = body;

    // Validate request
    if (!customerInfo || !items || !totalAmount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate order ID
    const orderId = generateOrderId();
    const createdAt = new Date().toISOString();

    // Create order object
    const order: Order = {
      id: orderId,
      customerInfo: {
        name: customerInfo.name,
        phone: customerInfo.phone,
        email: customerInfo.email,
        address: customerInfo.address,
        notes: customerInfo.notes || "",
      },
      items: items.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        category: item.category || "",
      })),
      totalAmount,
      status: "pending",
      createdAt,
    };

    // Save to Supabase
    const { error: dbError } = await supabase.from("orders").insert({
      id: orderId,
      customer_name: customerInfo.name,
      customer_phone: customerInfo.phone,
      customer_email: customerInfo.email,
      customer_address: customerInfo.address,
      customer_notes: customerInfo.notes || null,
      items: items,
      total_amount: totalAmount,
      status: "pending",
      created_at: createdAt,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save order to database" },
        { status: 500 }
      );
    }

    // Send email notifications (don't block on this)
    try {
      // Only send admin notification (customer emails disabled without verified domain)
      await sendAdminOrderNotification(order);
    } catch (emailError) {
      console.error("Email notification error:", emailError);
      // Continue - order is saved even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        orderId,
        message: "Order placed successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch order by ID (for confirmation page)
export async function GET(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("id");

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order: {
        id: data.id,
        customerInfo: {
          name: data.customer_name,
          phone: data.customer_phone,
          email: data.customer_email,
          address: data.customer_address,
          notes: data.customer_notes,
        },
        items: data.items,
        totalAmount: data.total_amount,
        status: data.status,
        createdAt: data.created_at,
      },
    });
  } catch (error) {
    console.error("Get order error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
