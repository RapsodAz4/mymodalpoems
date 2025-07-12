'use client';

import { useEffect } from 'react';
// Importamos los íconos que vamos a usar desde react-icons
import { RiCloseLine, RiHeartLine, RiShareLine, RiEyeLine } from 'react-icons/ri';

interface PoemModalProps {
  poem: {
    title: string;
    content: string;
    coverImage: string;
    category: string;
    date: string;
  };
  nightMode: boolean;
  onClose: () => void;
}

export default function PoemModal({ poem, nightMode, onClose }: PoemModalProps) {
  useEffect(() => {
    // Bloquea el scroll de fondo al abrir el modal
    document.body.style.overflow = 'hidden';
    return () => {
      // Restablece el scroll cuando el modal se cierra
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* Fondo oscuro con blur y clic para cerrar */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${nightMode ? 'bg-black/70' : ''}`}
        onClick={onClose}
      />

      <div className="flex items-center justify-center h-full p-4">
        <div
          className={`relative w-full max-w-4xl max-h-screen overflow-y-auto ${
            nightMode ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl shadow-xl`}
        >
          {/* Botón para cerrar el modal */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              nightMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="Cerrar"
          >
            {/* Usamos el ícono de react-icons */}
            <RiCloseLine className="text-xl" />
          </button>

          {/* Imagen de cabecera con degradado */}
          <div className="relative h-64">
            <img
              src={poem.coverImage}
              alt={poem.title}
              className="w-full h-full object-cover object-top rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-black/30 rounded-t-2xl" />
          </div>

          {/* Contenido del poema */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    nightMode
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {poem.category}
                </span>
                <span
                  className={`text-sm ${
                    nightMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {new Date(poem.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <h2
                className={`text-3xl font-bold mb-4 ${
                  nightMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                {poem.title}
              </h2>
            </div>

            <div
              className={`prose prose-lg max-w-none ${
                nightMode ? 'prose-invert' : ''
              }`}
            >
              <div
                className={`whitespace-pre-line leading-relaxed text-lg ${
                  nightMode ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                {poem.content}
              </div>
            </div>
          </div>

          {/* Pie de modal con botones y lecturas */}
          <div
            className={`p-4 border-t ${
              nightMode
                ? 'border-gray-700 bg-gray-900/50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    nightMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-white hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <RiHeartLine />
                  <span className="text-sm">Me gusta</span>
                </button>

                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    nightMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-white hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <RiShareLine />
                  <span className="text-sm">Compartir</span>
                </button>
              </div>

              <div
                className={`text-sm ${
                  nightMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <RiEyeLine className="inline mr-1" />
                {Math.floor(Math.random() * 500) + 100} lecturas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
