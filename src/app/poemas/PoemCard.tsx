
'use client';

interface Poem {
  id: number;
  title: string;
  content: string;
  category: string;
  theme: string;
  date: string;
  excerpt: string;
  coverImage: string;
}

interface PoemCardProps {
  poem: Poem;
  onClick: () => void;
  nightMode: boolean;
}

export default function PoemCard({ poem, onClick, nightMode }: PoemCardProps) {
  return (
    <div 
      className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
        nightMode ? 'hover:shadow-2xl hover:shadow-purple-500/20' : 'hover:shadow-2xl'
      }`}
      onClick={onClick}
    >
      <div className={`rounded-2xl overflow-hidden ${
        nightMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'
      }`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={poem.coverImage} 
            alt={poem.title}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              nightMode ? 'bg-purple-600 text-white' : 'bg-white/90 text-purple-600'
            }`}>
              {poem.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
              {poem.title}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className={`text-sm mb-4 line-clamp-3 ${
            nightMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {poem.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className={`ri-calendar-line text-sm ${
                nightMode ? 'text-gray-400' : 'text-gray-400'
              }`}></i>
              <span className={`text-xs ${
                nightMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {new Date(poem.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className={`flex items-center gap-1 text-purple-600 group-hover:text-purple-700 transition-colors ${
              nightMode ? 'text-purple-400 group-hover:text-purple-300' : ''
            }`}>
              <span className="text-sm font-medium whitespace-nowrap">Leer más</span>
              <i className="ri-arrow-right-line text-sm transform group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
