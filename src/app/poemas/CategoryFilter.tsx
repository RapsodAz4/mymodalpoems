
'use client';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  nightMode: boolean;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  nightMode 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
            selectedCategory === category
              ? nightMode 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                : 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
              : nightMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
