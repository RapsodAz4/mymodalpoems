
'use client';

import { useEffect } from 'react';

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

interface PoemModalProps {
  poem: Poem;
  onClose: () => void;
  nightMode: boolean;
}

export default function PoemModal({ poem, onClose, nightMode }: PoemModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
        nightMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      } shadow-2xl`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
            nightMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img 
              src={poem.coverImage} 
              alt={poem.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-black/30" />
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <div className="p-8 flex-1 overflow-y-auto">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    nightMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
                  }`}>
                    {poem.category}
                  </span>
                  <span className={`text-sm ${
                    nightMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {new Date(poem.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <h2 className={`text-3xl font-bold mb-4 ${
                  nightMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {poem.title}
                </h2>
              </div>

              <div className={`prose prose-lg max-w-none ${
                nightMode ? 'prose-invert' : ''
              }`}>
                <div className={`whitespace-pre-line leading-relaxed text-lg ${
                  nightMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {poem.content}
                </div>
              </div>
            </div>

            <div className={`p-6 border-t ${
              nightMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    nightMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-600'
                  }`}>
                    <i className="ri-heart-line"></i>
                    <span className="text-sm whitespace-nowrap">Me gusta</span>
                  </button>
                  
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    nightMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-white hover:bg-gray-100 text-gray-600'
                  }`}>
                    <i className="ri-share-line"></i>
                    <span className="text-sm whitespace-nowrap">Compartir</span>
                  </button>
                </div>

                <div className={`text-sm ${
                  nightMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <i className="ri-eye-line mr-1"></i>
                  {Math.floor(Math.random() * 500) + 100} lecturas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
