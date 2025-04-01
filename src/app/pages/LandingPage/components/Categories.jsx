import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'PLACEHOLDER',
    imageRequest: 'modern electronics gadgets, smartphone, laptop, smartwatch, high tech',
    count: 2500
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'PLACEHOLDER',
    imageRequest: 'fashion clothing, trendy outfits, accessories, stylish apparel',
    count: 3200
  },
  {
    id: 3,
    name: 'Home & Garden',
    image: 'PLACEHOLDER',
    imageRequest: 'home decor, interior design, furniture, modern living space',
    count: 1800
  },
  {
    id: 4,
    name: 'Beauty',
    image: 'PLACEHOLDER',
    imageRequest: 'beauty products, cosmetics, skincare, makeup products',
    count: 1200
  },
  {
    id: 5,
    name: 'Sports',
    image: 'PLACEHOLDER',
    imageRequest: 'sports equipment, fitness gear, athletic wear, exercise equipment',
    count: 950
  },
  {
    id: 6,
    name: 'Toys & Games',
    image: 'PLACEHOLDER',
    imageRequest: 'toys, board games, video games, children play things',
    count: 820
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
          <Link to="/categories" className="text-primary-600 hover:text-primary-700 flex items-center">
            View All Categories
            <HiChevronRight className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`}
              className="group"
            >
              <div className="card overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxzbGVlayUyMHZlbmRvciUyMGRhc2hib2FyZCUyMG9uJTIwdGFibGV0JTIwc2hvd2luZyUyMHNhbGVzJTIwYW5hbHl0aWNzJTJDJTIwbW9kZXJuJTIwVUklMkMlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzQzNDg3OTEzfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                    src={category.image} 
                    alt={category.name}
                    data-image-request={category.imageRequest}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;