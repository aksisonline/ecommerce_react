import React, { useState } from 'react';

export default function ShopKeeper() {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopkeeper Dashboard</h1>
      <div className="mb-8">
        <nav className="flex space-x-4 border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'inventory' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('inventory')}
          >
            Inventory
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'orders' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </nav>
      </div>
      <div>
        {activeTab === 'inventory' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Manage Inventory</h2>
            {/* Inventory management content */}
          </div>
        )}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">View Orders</h2>
            {/* Order management content */}
          </div>
        )}
      </div>
    </div>
  );
}
