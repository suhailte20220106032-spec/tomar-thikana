'use client';

import { useState, useEffect, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import OrderList from '@/components/admin/OrderList';
import OrderDetailModal from '@/components/admin/OrderDetailModal';
import { Order } from '@/lib/cart';

export default function AdminDashboardPage() {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch all orders once on mount
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/orders');
      const data = await response.json();

      if (response.ok) {
        setAllOrders(data.orders || []);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Filter orders in browser based on active tab and search
  const filteredOrders = useMemo(() => {
    let filtered = [...allOrders];

    // Filter by tab
    if (activeTab === 'pending') {
      filtered = filtered.filter(
        (order) => order.status === 'pending' && !order.called_customer
      );
    } else if (activeTab === 'completed') {
      filtered = filtered.filter((order) => order.called_customer);
    }

    // Filter by search query
    if (debouncedSearch.trim()) {
      const searchLower = debouncedSearch.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchLower) ||
          order.customerInfo.name.toLowerCase().includes(searchLower) ||
          order.customerInfo.phone.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [allOrders, activeTab, debouncedSearch]);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleOrderUpdate = async () => {
    // Refresh orders from database after update
    await fetchOrders();
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleOrderDelete = async (orderId: string) => {
    if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/orders?id=${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Refresh orders from database after delete
        await fetchOrders();
        setIsModalOpen(false);
        setSelectedOrder(null);
      }
    } catch (error) {
      console.error('Failed to delete order:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#D4A574]">Orders</h2>
          <p className="text-gray-600">Manage your customer orders</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending Orders</TabsTrigger>
          <TabsTrigger value="completed">Completed Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <OrderList
            orders={filteredOrders}
            loading={loading}
            onOrderClick={handleOrderClick}
            onRefresh={fetchOrders}
          />
        </TabsContent>

        <TabsContent value="pending">
          <OrderList
            orders={filteredOrders}
            loading={loading}
            onOrderClick={handleOrderClick}
            onRefresh={fetchOrders}
          />
        </TabsContent>

        <TabsContent value="completed">
          <OrderList
            orders={filteredOrders}
            loading={loading}
            onOrderClick={handleOrderClick}
            onRefresh={fetchOrders}
          />
        </TabsContent>
      </Tabs>

      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleOrderUpdate}
          onDelete={handleOrderDelete}
        />
      )}
    </div>
  );
}
