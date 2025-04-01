import React from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingCart, HiStar, HiHeart, HiCurrencyDollar, HiGift, HiTrophy } from 'react-icons/hi';

const BuyerDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Welcome Back!</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <HiShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Orders</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
          </div>
          <Link to="/dashboard/orders" className="text-primary-600 text-sm font-medium mt-4 inline-block">
            View Orders
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <HiHeart className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Wishlist</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
          <Link to="/dashboard/wishlist" className="text-primary-600 text-sm font-medium mt-4 inline-block">
            View Wishlist
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <HiCurrencyDollar className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Wallet Balance</p>
              <p className="text-2xl font-semibold">$125.40</p>
            </div>
          </div>
          <Link to="/dashboard/wallet" className="text-primary-600 text-sm font-medium mt-4 inline-block">
            Manage Wallet
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-yellow-100 p-3 mr-4">
              <HiStar className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Reward Points</p>
              <p className="text-2xl font-semibold">850</p>
            </div>
          </div>
          <Link to="/dashboard/rewards" className="text-primary-600 text-sm font-medium mt-4 inline-block">
            View Rewards
          </Link>
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
                    Order
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-primary-600">
                    #ORD-1258
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    May 15, 2023
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    $156.99
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-primary-600">
                    #ORD-1257
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    May 10, 2023
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      Shipping
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    $89.99
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-primary-600">
                    #ORD-1256
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    May 2, 2023
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    $212.50
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
        
        {/* Wishlist Preview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Wishlist</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <img src="https://images.unsplash.com/photo-1455853828816-0c301a011711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxzbWFydHdhdGNoJTIwd2l0aCUyMGhlYWx0aCUyMHRyYWNraW5nJTJDJTIwcHJvZHVjdCUyMHRodW1ibmFpbHxlbnwwfHx8fDE3NDM0ODc5MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Smart Watch"
                data-image-request="smartwatch with health tracking, product thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Smart Watch Series 5</h3>
                <p className="text-xs text-gray-500 mb-1">Health tracking, notifications, GPS</p>
                <p className="text-sm font-semibold text-gray-900">$199.99</p>
              </div>
              <div>
                <button className="btn btn-primary py-1 px-3 text-xs cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <img src="https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBpbiUyMGNhc2UlMkMlMjBwcm9kdWN0JTIwdGh1bWJuYWlsfGVufDB8fHx8MTc0MzQ4NzkxM3ww&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Wireless Earbuds"
                data-image-request="wireless earbuds in case, product thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Wireless Earbuds</h3>
                <p className="text-xs text-gray-500 mb-1">Noise cancellation, 24h battery life</p>
                <p className="text-sm font-semibold text-gray-900">$59.99</p>
              </div>
              <div>
                <button className="btn btn-primary py-1 px-3 text-xs cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <img src="https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMjByZXVzYWJsZSUyMHdhdGVyJTIwYm90dGxlJTJDJTIwcHJvZHVjdCUyMHRodW1ibmFpbHxlbnwwfHx8fDE3NDM0ODc5MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Eco-Friendly Water Bottle"
                data-image-request="eco-friendly reusable water bottle, product thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Eco-Friendly Water Bottle</h3>
                <p className="text-xs text-gray-500 mb-1">BPA-free, insulated, 32oz</p>
                <p className="text-sm font-semibold text-gray-900">$29.99</p>
              </div>
              <div>
                <button className="btn btn-primary py-1 px-3 text-xs cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/wishlist" className="text-sm text-primary-600 hover:text-primary-700">
              View all items
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gamification & Rewards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Active Challenges</h2>
            <span className="badge badge-primary">2 Challenges</span>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="rounded-full bg-yellow-100 p-2 mr-3">
                  <HiStar className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Review Champion</h3>
                  <p className="text-xs text-gray-500 mt-1">Leave 5 reviews on your recent purchases</p>
                  
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-gray-700">Progress</span>
                      <span className="text-xs font-medium text-gray-700">3/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-primary-600 font-medium mt-2">Reward: 200 Points</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-2 mr-3">
                  <HiGift className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Referral Rally</h3>
                  <p className="text-xs text-gray-500 mt-1">Refer 3 friends to earn a special discount</p>
                  
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-gray-700">Progress</span>
                      <span className="text-xs font-medium text-gray-700">1/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-primary-600 font-medium mt-2">Reward: 15% Off Coupon</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Link to="/dashboard/challenges" className="text-sm text-primary-600 hover:text-primary-700">
              View all challenges
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your Achievements</h2>
            <Link to="/dashboard/achievements" className="text-sm text-primary-600">
              View All
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="text-center w-20">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <HiShoppingCart className="h-8 w-8 text-primary-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">First Order</span>
            </div>
            
            <div className="text-center w-20">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <HiStar className="h-8 w-8 text-purple-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">First Review</span>
            </div>
            
            <div className="text-center w-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 opacity-50">
                <HiTrophy className="h-8 w-8 text-gray-400" />
              </div>
              <span className="text-xs font-medium text-gray-400">Top Referrer</span>
            </div>
            
            <div className="text-center w-20">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <HiCurrencyDollar className="h-8 w-8 text-green-600" />
              </div>
              <span className="text-xs font-medium text-gray-700">Crypto User</span>
            </div>
            
            <div className="text-center w-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 opacity-50">
                <HiHeart className="h-8 w-8 text-gray-400" />
              </div>
              <span className="text-xs font-medium text-gray-400">Loyal Buyer</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-secondary-700 to-secondary-500 rounded-lg text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Buyer Level</h3>
              <span className="text-sm">Silver</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2 mb-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-xs">Spend $320 more to reach Gold level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;