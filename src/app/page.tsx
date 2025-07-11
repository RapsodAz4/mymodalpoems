
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            <span className="font-pacifico text-purple-600">Bienvenido</span> a mi Mundo Poético
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Esta es una coleccion de poemas que nace de la necesidad del corazon de gritar,
            lo que siente y lo que lo ahoga. Espero te guste.
          </p>
          
          <Link href="/poemas">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap">
              <span className="flex items-center gap-3">
                Explorar Poemas
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-search-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Búsqueda Inteligente</h3>
            <p className="text-gray-600 text-sm">Encuentra poemas por título, tema o contenido</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-image-line text-2xl text-pink-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Galería Visual</h3>
            <p className="text-gray-600 text-sm">Cada poema tiene su propia portada artística</p>
          </div>
          
          <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-moon-line text-2xl text-indigo-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Modo Nocturno</h3>
            <p className="text-gray-600 text-sm">Lectura cómoda en cualquier momento del día</p>
          </div>
        </div>
      </div>
    </div>
  );
}
