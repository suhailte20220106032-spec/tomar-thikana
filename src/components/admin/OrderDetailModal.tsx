'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, MessageCircle, MapPin, Trash2, X, Save } from 'lucide-react';
import { Order, CartItem, formatPrice } from '@/lib/cart';

interface OrderDetailModalProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
  onDelete: (orderId: string) => void;
}

export default function OrderDetailModal({
  order,
  isOpen,
  onClose,
  onUpdate,
  onDelete,
}: OrderDetailModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form state
  const [customerName, setCustomerName] = useState(order.customerInfo.name);
  const [customerPhone, setCustomerPhone] = useState(order.customerInfo.phone);
  const [customerEmail, setCustomerEmail] = useState(order.customerInfo.email);
  const [customerAddress, setCustomerAddress] = useState(order.customerInfo.address);
  const [customerNotes, setCustomerNotes] = useState(order.customerInfo.notes || '');
  const [status, setStatus] = useState(order.status);
  const [calledCustomer, setCalledCustomer] = useState(order.called_customer || false);
  const [items, setItems] = useState<CartItem[]>(order.items);

  // Reset form when order changes
  useEffect(() => {
    setCustomerName(order.customerInfo.name);
    setCustomerPhone(order.customerInfo.phone);
    setCustomerEmail(order.customerInfo.email);
    setCustomerAddress(order.customerInfo.address);
    setCustomerNotes(order.customerInfo.notes || '');
    setStatus(order.status);
    setCalledCustomer(order.called_customer || false);
    setItems(order.items);
    setIsEditing(false);
  }, [order]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const response = await fetch(`/api/admin/orders?id=${order.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail,
          customer_address: customerAddress,
          customer_notes: customerNotes,
          status,
          called_customer: calledCustomer,
          items,
          total_amount: totalAmount,
        }),
      });

      if (response.ok) {
        onUpdate();
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Failed to update order:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    if (items.length === 1) {
      alert('Cannot remove the last item. Delete the order instead.');
      return;
    }
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleWhatsApp = () => {
    const cleanPhone = customerPhone.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('88') ? cleanPhone : `88${cleanPhone}`;
    window.open(`https://wa.me/${formattedPhone}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${customerPhone}`;
  };

  const handleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(customerAddress)}`,
      '_blank'
    );
  };

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getStatusColor = (s: string) => {
    switch (s) {
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl">Order Details</DialogTitle>
              <p className="text-sm text-gray-500 mt-1">{order.id}</p>
              <p className="text-xs text-gray-400">
                {new Date(order.createdAt).toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </p>
            </div>
            <Badge className={getStatusColor(status)} variant="outline">
              {status}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={handleCall}>
              <Phone className="w-4 h-4 mr-2" />
              Call Customer
            </Button>
            <Button size="sm" variant="outline" onClick={handleWhatsApp} className="hidden sm:flex">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button size="sm" variant="outline" onClick={handleMaps}>
              <MapPin className="w-4 h-4 mr-2" />
              Open in Maps
            </Button>
          </div>

          <Separator />

          {/* Customer Information */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Customer Information</h3>
              {!isEditing && (
                <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                  Edit Order
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                {isEditing ? (
                  <Input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                ) : (
                  <p className="text-sm py-2">{customerName}</p>
                )}
              </div>

              <div>
                <Label>Phone</Label>
                {isEditing ? (
                  <Input
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                ) : (
                  <p className="text-sm py-2">{customerPhone}</p>
                )}
              </div>

              <div>
                <Label>Email</Label>
                {isEditing ? (
                  <Input
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                ) : (
                  <p className="text-sm py-2">{customerEmail || 'Not provided'}</p>
                )}
              </div>

              <div>
                <Label>Status</Label>
                {isEditing ? (
                  <Select value={status} onValueChange={(v) => setStatus(v as Order['status'])}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="text-sm py-2 capitalize">{status}</p>
                )}
              </div>
            </div>

            <div>
              <Label>Address</Label>
              {isEditing ? (
                <Textarea
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows={2}
                />
              ) : (
                <p className="text-sm py-2">{customerAddress}</p>
              )}
            </div>

            <div>
              <Label>Customer Notes</Label>
              {isEditing ? (
                <Textarea
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  rows={2}
                  placeholder="No notes"
                />
              ) : (
                <p className="text-sm py-2">{customerNotes || 'No notes'}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="called"
                checked={calledCustomer}
                onCheckedChange={(checked) => setCalledCustomer(checked as boolean)}
                disabled={!isEditing}
              />
              <Label
                htmlFor="called"
                className="text-sm font-normal cursor-pointer"
              >
                Called customer
              </Label>
            </div>
          </div>

          <Separator />

          {/* Order Items */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Order Items</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 border rounded-lg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
                  </div>
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t-2">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold text-[#D4A574]">
                {formatPrice(totalAmount)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            {isEditing ? (
              <>
                <Button onClick={handleSave} disabled={saving} className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  disabled={saving}
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="destructive"
                  onClick={() => onDelete(order.id)}
                  className="flex-1"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Order
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
