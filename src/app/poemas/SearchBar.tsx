
'use client';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  nightMode: boolean;
}

export default function SearchBar({ searchTerm, onSearchChange, nightMode }: SearchBarProps) {
  return (
    <div className="relative">
      <div className={`relative flex items-center ${
        nightMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border rounded-xl shadow-sm focus-within:shadow-md transition-shadow`}>
        <div className="absolute left-4 w-5 h-5 flex items-center justify-center">
          <i className={`ri-search-line text-lg ${
            nightMode ? 'text-gray-400' : 'text-gray-400'
          }`}></i>
        </div>
        
        <input
          type="text"
          placeholder="Buscar por título o tema..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full pl-12 pr-4 py-4 text-sm rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            nightMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'
          }`}
        />
        
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className={`absolute right-4 w-5 h-5 flex items-center justify-center rounded-full transition-colors ${
              nightMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-400'
            }`}
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        )}
      </div>
    </div>
  );
}
