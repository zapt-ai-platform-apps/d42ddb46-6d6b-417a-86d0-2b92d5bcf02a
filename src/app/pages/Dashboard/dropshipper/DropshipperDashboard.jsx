import React from 'react';
import { Link } from 'react-router-dom';
import { HiCurrencyDollar, HiShoppingCart, HiCube, HiUserGroup, HiTrendingUp, HiChartPie } from 'react-icons/hi';

const DropshipperDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dropshipper Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <HiCurrencyDollar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-semibold">$8,246</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm font-medium">+12%</span>
              <span className="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <HiShoppingCart className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="text-2xl font-semibold">96</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm font-medium">+7%</span>
              <span className="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <HiCube className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Listed Products</p>
              <p className="text-2xl font-semibold">72</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm font-medium">+14</span>
              <span className="text-gray-500 text-sm ml-2">new this month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-red-100 p-3 mr-4">
              <HiUserGroup className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Suppliers</p>
              <p className="text-2xl font-semibold">14</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-green-500 text-sm font-medium">+2</span>
              <span className="text-gray-500 text-sm ml-2">new this month</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Supplier
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    #ORD-7841
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <p className="text-sm font-medium text-gray-900">Smart Watch Series 5</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    TechSupply
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Fulfilled
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600 font-medium">
                    $54.99
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    #ORD-7840
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <p className="text-sm font-medium text-gray-900">Wireless Earbuds</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    ElectroGoods
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      Processing
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600 font-medium">
                    $21.50
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    #ORD-7839
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <p className="text-sm font-medium text-gray-900">Leather Handbag</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    FashionHub
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600 font-medium">
                    $42.99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/orders" className="text-sm text-primary-600 hover:text-primary-700">
              View all orders
            </Link>
          </div>
        </div>
        
        {/* Performance & Analytics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <HiTrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Conversion Rate</h3>
              </div>
              <p className="text-2xl font-semibold text-gray-900">3.8%</p>
              <p className="text-xs text-green-600">+0.5% from last month</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <HiChartPie className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-sm font-medium text-gray-700">Average Profit Margin</h3>
              </div>
              <p className="text-2xl font-semibold text-gray-900">28.2%</p>
              <p className="text-xs text-green-600">+1.2% from last month</p>
            </div>
          </div>
          
          <h3 className="text-sm font-medium text-gray-700 mb-2">Top Performing Products</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxzbWFydHdhdGNoJTIwd2l0aCUyMGhlYWx0aCUyMHRyYWNraW5nJTJDJTIwcHJvZHVjdCUyMHRodW1ibmFpbHxlbnwwfHx8fDE3NDM0ODc5MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  
                  alt="Smart Watch"
                  data-image-request="smartwatch with health tracking, product thumbnail"
                  className="w-10 h-10 object-cover rounded-md mr-3"
                />
                <p className="text-sm font-medium text-gray-800">Smart Watch Series 5</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">18 sold</p>
                <p className="text-xs text-green-600">$989 profit</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBpbiUyMGNhc2UlMkMlMjBwcm9kdWN0JTIwdGh1bWJuYWlsfGVufDB8fHx8MTc0MzQ4NzkxM3ww&ixlib=rb-4.0.3&q=80&w=1080"
                  
                  alt="Wireless Earbuds"
                  data-image-request="wireless earbuds in case, product thumbnail"
                  className="w-10 h-10 object-cover rounded-md mr-3"
                />
                <p className="text-sm font-medium text-gray-800">Wireless Earbuds</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">24 sold</p>
                <p className="text-xs text-green-600">$516 profit</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1541239370886-851049f91487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBsZWF0aGVyJTIwaGFuZGJhZyUyQyUyMHByb2R1Y3QlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzQzNDg3OTE0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  
                  alt="Leather Handbag"
                  data-image-request="luxury leather handbag, product thumbnail"
                  className="w-10 h-10 object-cover rounded-md mr-3"
                />
                <p className="text-sm font-medium text-gray-800">Leather Handbag</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">12 sold</p>
                <p className="text-xs text-green-600">$515 profit</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link to="/dashboard/analytics" className="text-sm text-primary-600 hover:text-primary-700">
              View detailed analytics
            </Link>
          </div>
        </div>
      </div>
      
      {/* Supplier & Product Opportunities */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-lg shadow-sm p-6 text-white mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Product Sourcing Opportunities</h2>
            <p className="text-primary-100 mb-2">We've identified 18 new trending products from your supplier network</p>
            <p className="text-primary-100">Estimated profit margin: 25-40%</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-primary-700 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors cursor-pointer">
              View Products
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors cursor-pointer">
              Find Suppliers
            </button>
          </div>
        </div>
      </div>
      
      {/* Gamification */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Dropshipper Gamification</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-100 rounded-full p-2 mr-3">
                <HiCube className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">Product Diversity</h3>
            </div>
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-medium text-gray-700">6/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Add 4 more product categories to earn 3% commission bonus</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <HiShoppingCart className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">Sales Champion</h3>
            </div>
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-medium text-gray-700">$8,246/$10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Reach $10,000 in monthly sales to unlock "Gold Seller" status</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <HiUserGroup className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-800">Supplier Network</h3>
            </div>
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">Progress</span>
                <span className="text-xs font-medium text-gray-700">14/15</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Add 1 more verified supplier to earn "Supply Chain Master" badge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropshipperDashboard;