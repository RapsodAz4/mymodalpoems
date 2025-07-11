
'use client';

interface NightModeToggleProps {
  nightMode: boolean;
  onToggle: (mode: boolean) => void;
}

export default function NightModeToggle({ nightMode, onToggle }: NightModeToggleProps) {
  return (
    <button
      onClick={() => onToggle(!nightMode)}
      className={`relative inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
        nightMode 
          ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 shadow-sm'
      }`}
    >
      <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
        nightMode ? 'bg-purple-600' : 'bg-gray-300'
      }`}>
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
          nightMode ? 'translate-x-7' : 'translate-x-1'
        }`} />
      </div>
      
      <div className="flex items-center gap-2">
        <i className={`text-lg ${nightMode ? 'ri-moon-line' : 'ri-sun-line'}`}></i>
        <span className="text-sm font-medium whitespace-nowrap">
          {nightMode ? 'Modo Nocturno' : 'Modo Diurno'}
        </span>
      </div>
    </button>
  );
}
