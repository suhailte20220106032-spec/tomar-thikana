import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const calledCustomer = searchParams.get('calledCustomer');

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    let query = supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    // Filter by status
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    // Filter by called_customer
    if (calledCustomer === 'true') {
      query = query.eq('called_customer', true);
    } else if (calledCustomer === 'false') {
      query = query.eq('called_customer', false);
    }

    // Search by customer name, phone, or order ID
    if (search && search.trim()) {
      query = query.or(
        `customer_name.ilike.%${search}%,customer_phone.ilike.%${search}%,id.ilike.%${search}%`
      );
    }

    const { data, error } = await query;

    if (error) {
      console.error('Fetch orders error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch orders' },
        { status: 500 }
      );
    }

    // Transform data to match frontend Order interface
    const transformedOrders = (data || []).map((order: any) => ({
      id: order.id,
      customerInfo: {
        name: order.customer_name,
        phone: order.customer_phone,
        email: order.customer_email,
        address: order.customer_address,
        notes: order.customer_notes,
      },
      items: order.items,
      totalAmount: order.total_amount,
      status: order.status,
      called_customer: order.called_customer,
      createdAt: order.created_at,
    }));

    return NextResponse.json({ orders: transformedOrders });
  } catch (error) {
    console.error('Fetch orders error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('id');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const updates = await request.json();

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from('orders')
      .update(updates)
      .eq('id', orderId)
      .select()
      .single();

    if (error) {
      console.error('Update order error:', error);
      return NextResponse.json(
        { error: 'Failed to update order' },
        { status: 500 }
      );
    }

    // Transform response to match frontend Order interface
    const transformedOrder = {
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
      called_customer: data.called_customer,
      createdAt: data.created_at,
    };

    return NextResponse.json({ success: true, order: transformedOrder });
  } catch (error) {
    console.error('Update order error:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('id');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('id', orderId);

    if (error) {
      console.error('Delete order error:', error);
      return NextResponse.json(
        { error: 'Failed to delete order' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Delete order error:', error);
    return NextResponse.json(
      { error: 'Failed to delete order' },
      { status: 500 }
    );
  }
}
