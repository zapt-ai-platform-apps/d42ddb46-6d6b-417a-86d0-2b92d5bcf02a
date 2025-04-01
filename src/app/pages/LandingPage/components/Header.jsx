import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { HiMenu, HiX, HiUser, HiShoppingCart, HiSearch } from 'react-icons/hi';

const Header = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxtYXJrZXRwbGFjZSUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZSUyMHdpdGglMjBBUiUyMG9uJTIwc21hcnRwaG9uZSUyQyUyMGhpZ2glMjBxdWFsaXR5JTJDJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0MzQ4NzkxM3ww&ixlib=rb-4.0.3&q=80&w=1080" 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
              alt="Budroom Logo" 
              className="w-10 h-10 mr-2"
            />
            <div className="absolute -bottom-5 -left-5 bg-accent-500 text-white py-2 px-4 rounded-lg shadow-lg">
              <span className="font-bold">New!</span> AR Shopping Experience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;