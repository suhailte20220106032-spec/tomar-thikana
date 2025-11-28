import { Resend } from "resend";
import { formatPrice } from "./cart";
import type { Order } from "./cart";

const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface EmailOrderItem {
  name: string;
  quantity: number;
  price: number;
}

export async function sendAdminOrderNotification(order: Order) {
  const itemsHtml = order.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatPrice(item.price)}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">${formatPrice(item.price * item.quantity)}</td>
    </tr>
  `
    )
    .join("");

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order - ${order.id}</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">🎉 New Order Received!</h1>
      <p style="color: #fff7ed; margin: 8px 0 0 0; font-size: 14px;">তোমার ঠিকানা (Tomar Thikana)</p>
    </div>

    <!-- Order Info -->
    <div style="padding: 30px 20px;">
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
        <p style="margin: 0; font-weight: 600; color: #92400e;">Order ID: <span style="color: #78350f;">${order.id}</span></p>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: #92400e;">Date: ${new Date(order.createdAt).toLocaleString("en-GB", { timeZone: "Asia/Dhaka" })}</p>
      </div>

      <!-- Customer Details -->
      <div style="margin-bottom: 24px;">
        <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Customer Information</h2>
        <table style="width: 100%; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">${order.customerInfo.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #1f2937;">${order.customerInfo.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;">Email:</td>
            <td style="padding: 8px 0; color: #1f2937;">${order.customerInfo.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Address:</td>
            <td style="padding: 8px 0; color: #1f2937;">${order.customerInfo.address}</td>
          </tr>
          ${
            order.customerInfo.notes
              ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Notes:</td>
            <td style="padding: 8px 0; color: #1f2937; font-style: italic;">${order.customerInfo.notes}</td>
          </tr>
          `
              : ""
          }
        </table>
      </div>

      <!-- Order Items -->
      <div style="margin-bottom: 24px;">
        <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Order Items</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="background-color: #f9fafb;">
              <th style="padding: 12px; text-align: left; font-weight: 600; color: #4b5563;">Product</th>
              <th style="padding: 12px; text-align: center; font-weight: 600; color: #4b5563;">Qty</th>
              <th style="padding: 12px; text-align: right; font-weight: 600; color: #4b5563;">Price</th>
              <th style="padding: 12px; text-align: right; font-weight: 600; color: #4b5563;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
      </div>

      <!-- Total -->
      <div style="background-color: #f0fdf4; border: 2px solid #86efac; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 18px; font-weight: 600; color: #166534;">Total Amount:</span>
          <span style="font-size: 24px; font-weight: 700; color: #15803d;">${formatPrice(order.totalAmount)}</span>
        </div>
      </div>

      <!-- Action Required -->
      <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 6px;">
        <p style="margin: 0; font-weight: 600; color: #1e40af;">📞 Action Required:</p>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: #1e40af;">Please contact the customer to confirm order and payment details.</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; font-size: 12px; color: #6b7280;">This is an automated notification from your Tomar Thikana website</p>
      <p style="margin: 8px 0 0 0; font-size: 12px; color: #9ca3af;">Order Status: <span style="color: #f59e0b; font-weight: 600;">Pending</span></p>
    </div>

  </div>
</body>
</html>
  `;

  try {
    if (!resend) {
      console.warn("Resend not configured. Admin email not sent.");
      return;
    }

    await resend.emails.send({
      from: "Tomar Thikana Orders <onboarding@resend.dev>",
      to: "tomarthikanaaa@gmail.com",
      subject: `🛍️ New Order - ${order.id} - ${formatPrice(order.totalAmount)}`,
      html: htmlContent,
    });
  } catch (error) {
    console.error("Failed to send admin notification:", error);
    throw error;
  }
}

export async function sendCustomerOrderConfirmation(order: Order) {
  // Customer email notifications are disabled because we don't have a verified domain
  // Resend requires a verified domain to send emails to customers
  // For now, admin will contact customers directly after receiving order notification
  console.log("Customer email notification skipped (no verified domain):", order.id);
  return;
  
  /* DISABLED - Requires verified domain
  const itemsHtml = order.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatPrice(item.price * item.quantity)}</td>
    </tr>
  `
    )
    .join("");

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - ${order.id}</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">✅ Order Confirmed!</h1>
      <p style="color: #fff7ed; margin: 8px 0 0 0; font-size: 14px;">Thank you for your order</p>
    </div>

    <!-- Greeting -->
    <div style="padding: 30px 20px 20px 20px;">
      <p style="font-size: 16px; color: #1f2937; margin: 0 0 16px 0;">Dear <strong>${order.customerInfo.name}</strong>,</p>
      <p style="font-size: 14px; color: #4b5563; margin: 0 0 24px 0;">
        We've received your order and we'll contact you shortly to confirm delivery details and payment method. 
        ধন্যবাদ আপনার অর্ডারের জন্য!
      </p>

      <!-- Order Summary -->
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
        <p style="margin: 0; font-weight: 600; color: #92400e;">Order ID: <span style="color: #78350f;">${order.id}</span></p>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: #92400e;">Date: ${new Date(order.createdAt).toLocaleString("en-GB", { timeZone: "Asia/Dhaka" })}</p>
      </div>

      <!-- Order Items -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 16px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Your Order</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
        <thead>
          <tr style="background-color: #f9fafb;">
            <th style="padding: 12px; text-align: left; font-weight: 600; color: #4b5563;">Product</th>
            <th style="padding: 12px; text-align: center; font-weight: 600; color: #4b5563;">Qty</th>
            <th style="padding: 12px; text-align: right; font-weight: 600; color: #4b5563;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <!-- Total -->
      <div style="background-color: #f0fdf4; border: 2px solid #86efac; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 16px; font-weight: 600; color: #166534;">Total Amount:</span>
          <span style="font-size: 22px; font-weight: 700; color: #15803d;">${formatPrice(order.totalAmount)}</span>
        </div>
      </div>

      <!-- Delivery Address -->
      <div style="margin-bottom: 24px;">
        <h3 style="color: #1f2937; font-size: 16px; margin: 0 0 12px 0;">Delivery Address:</h3>
        <p style="font-size: 14px; color: #4b5563; margin: 0; padding: 12px; background-color: #f9fafb; border-radius: 6px;">${order.customerInfo.address}</p>
      </div>

      <!-- Next Steps -->
      <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
        <p style="margin: 0; font-weight: 600; color: #1e40af;">What's Next?</p>
        <ul style="margin: 8px 0 0 0; padding-left: 20px; font-size: 14px; color: #1e40af;">
          <li>We'll call you within 24 hours to confirm your order</li>
          <li>Payment: Cash on Delivery or bKash</li>
          <li>Delivery: 2-3 business days within Dhaka</li>
        </ul>
      </div>

      <!-- Contact -->
      <div style="text-align: center; padding: 20px; background-color: #fef2f2; border-radius: 6px;">
        <p style="margin: 0 0 12px 0; font-size: 14px; color: #991b1b;">Questions about your order?</p>
        <p style="margin: 0; font-size: 14px; color: #991b1b;">
          📞 WhatsApp us or 📧 Reply to this email
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #f97316;">তোমার ঠিকানা (Tomar Thikana)</p>
      <p style="margin: 0; font-size: 12px; color: #6b7280;">Handmade Resin Jewelry & Custom Gifts | Dhaka, Bangladesh</p>
    </div>

  </div>
</body>
</html>
  `;

  try {
    if (!resend) {
      console.warn("Resend not configured. Customer email not sent.");
      return;
    }

    await resend.emails.send({
      from: "Tomar Thikana Orders <onboarding@resend.dev>",
      to: order.customerInfo.email,
      subject: `Order Confirmed - ${order.id} - তোমার ঠিকানা`,
      html: htmlContent,
    });
  } catch (error) {
    console.error("Failed to send customer confirmation:", error);
    // Don't throw - customer confirmation failure shouldn't block order
  }
  */
}
