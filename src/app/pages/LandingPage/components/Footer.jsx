import React from 'react';
import { Link } from 'react-router-dom';
import { HiFacebook, HiTwitter, HiInstagram, HiYoutube, HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1556228578-567ba127e37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBpbiUyMGNhc2UlMkMlMjBwcm9kdWN0JTIwdGh1bWJuYWlsfGVufDB8fHx8MTc0MzQ4NzkxM3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
                alt="Budroom Logo" 
                className="w-8 h-8 mr-2"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Wireless Earbuds</h3>
                <p className="text-xs text-gray-500">$59.99</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">58 sold</p>
                <p className="text-xs text-green-600">$3,479 revenue</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxzbWFydHdhdGNoJTIwd2l0aCUyMGhlYWx0aCUyMHRyYWNraW5nJTJDJTIwcHJvZHVjdCUyMHRodW1ibmFpbHxlbnwwfHx8fDE3NDM0ODc5MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Smart Watch"
                data-image-request="smartwatch with health tracking, product thumbnail"
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Smart Watch Series 5</h3>
                <p className="text-xs text-gray-500">$199.99</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">32 sold</p>
                <p className="text-xs text-green-600">$6,399 revenue</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHx3aXJlbGVzcyUyMGNoYXJnaW5nJTIwcGFkJTIwZm9yJTIwc21hcnRwaG9uZSUyQyUyMHByb2R1Y3QlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzQzNDg3OTE0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                
                alt="Wireless Charging Pad"
                data-image-request="wireless charging pad for smartphone, product thumbnail"
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Wireless Charging Pad</h3>
                <p className="text-xs text-gray-500">$39.99</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">24 sold</p>
                <p className="text-xs text-green-600">$959 revenue</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-sm text-primary-600 hover:text-primary-700">
              View all products
            </button>
          </div>
        </div>
      </div>
      
      {/* Gamification & AR Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Gamification Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Product Diversity</span>
                <span className="text-sm font-medium text-gray-700">8/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Add 2 more product categories to earn the "Diverse Seller" badge</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">AR Products</span>
                <span className="text-sm font-medium text-gray-700">3/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Add 2 more AR-enabled products to earn the "AR Pioneer" badge</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Sales Target</span>
                <span className="text-sm font-medium text-gray-700">$12,628/$15,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Reach $15,000 in monthly sales to earn 5% commission bonus</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-lg shadow-sm p-6 text-white">
          <h2 className="text-lg font-semibold mb-4">Enhance Your Products with AR</h2>
          <p className="mb-4">Products with AR experiences sell 40% better and have 30% lower return rates.</p>
          <div className="flex items-center space-x-4 mb-4">
            <img src="https://images.unsplash.com/photo-1556228578-567ba127e37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxzbWFydHBob25lJTIwc2hvd2luZyUyMGF1Z21lbnRlZCUyMHJlYWxpdHklMjBwcm9kdWN0JTIwZGlzcGxheSUyQyUyMG1vZGVybiUyMGFuZCUyMHNsZWVrfGVufDB8fHx8MTc0MzQ4NzkxNHww&ixlib=rb-4.0.3&q=80&w=1080"
              
              alt="AR Experience Demo"
              data-image-request="smartphone showing augmented reality product display, modern and sleek"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <p className="font-medium">Your AR Status:</p>
              <p className="text-primary-100">3 Products with AR</p>
              <p className="text-primary-100">12 Products without AR</p>
            </div>
          </div>
          <button className="bg-white text-primary-700 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors cursor-pointer">
            Convert Products to AR
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;