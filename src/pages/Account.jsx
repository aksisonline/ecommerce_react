import React, { useState } from 'react';

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        My Account
      </h1>
      <div className="mb-8">
        <nav className="flex justify-center space-x-6 border-b">
          <button
            className={`pb-2 px-4 transition duration-300 ${
              activeTab === 'profile'
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`pb-2 px-4 transition duration-300 ${
              activeTab === 'settings'
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>
      </div>
      <div>
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Profile Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-600">Name:</span>
                <span className="text-gray-800">Tendulkar Budida</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-600">Email:</span>
                <span className="text-gray-800">chandu.tendul@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-600">Phone:</span>
                <span className="text-gray-800">+91 9347228525</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-600">Address:</span>
                <span className="text-gray-800">
                  Flat No. 501, Vinayaka Castle, Durga Nagar, Madhurawada,
                  530041
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-600">Joined:</span>
                <span className="text-gray-800">January 12, 2024</span>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Account Settings
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Change Password
                </h3>
                <div className="space-y-2">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
                    Update Password
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Email Notifications
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500"
                    />
                    <span>Receive promotional emails</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500"
                    />
                    <span>Receive account activity alerts</span>
                  </label>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg shadow-inner">
                <h3 className="font-semibold text-red-600 mb-2">
                  Delete Account
                </h3>
                <p className="text-red-500 mb-4">
                  Warning: This action is irreversible.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
