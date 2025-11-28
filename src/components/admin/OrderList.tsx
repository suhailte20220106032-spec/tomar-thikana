'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Edit, Trash2, RefreshCw } from 'lucide-react';
import { Order, formatPrice } from '@/lib/cart';

interface OrderListProps {
  orders: Order[];
  loading: boolean;
  onOrderClick: (order: Order) => void;
  onRefresh: () => void;
}

export default function OrderList({ orders, loading, onOrderClick, onRefresh }: OrderListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const handleWhatsApp = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanPhone = phone.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('88') ? cleanPhone : `88${cleanPhone}`;
    window.open(`https://wa.me/${formattedPhone}`, '_blank');
  };

  const handleCall = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-[#D4A574]" />
          <p className="text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No orders found</p>
        <Button onClick={onRefresh} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={onRefresh} variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <Card
            key={order.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onOrderClick(order)}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-lg">{order.customerInfo.name}</p>
                  <p className="text-sm text-gray-500">{order.id}</p>
                </div>
                <Badge className={getStatusColor(order.status)} variant="outline">
                  {order.status}
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{order.customerInfo.phone}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {order.customerInfo.address}
                </p>
                <p className="text-sm text-gray-500">
                  {order.items.length} item{order.items.length > 1 ? 's' : ''}
                </p>
                <p className="text-lg font-bold text-[#D4A574]">
                  {formatPrice(order.totalAmount)}
                </p>
                {order.called_customer && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    Called Customer
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hidden sm:flex"
                  onClick={(e) => handleWhatsApp(order.customerInfo.phone, e)}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={(e) => handleCall(order.customerInfo.phone, e)}
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
              </div>

              <div className="text-xs text-gray-500 mt-3">
                {new Date(order.createdAt).toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
