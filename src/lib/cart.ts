// Cart types and utilities

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  called_customer?: boolean;
  createdAt: string;
}

// Calculate cart total
export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Format currency in BDT
export function formatPrice(amount: number): string {
  return `৳${amount.toLocaleString('en-BD')}`;
}

// Generate order ID
export function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
}
