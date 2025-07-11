
'use client';

import { useState, useMemo } from 'react';
import PoemCard from './PoemCard';
import PoemModal from './PoemModal';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import NightModeToggle from './NightModeToggle';

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

const mockPoems: Poem[] = [
  {
    id: 1,
    title: "Susurros del Amanecer",
    content: "Los susurros que el amanecer nos ha dado,\n son esos que el corazon siempre habia esperado, \n esos susurros que el viendo llevo,\n y ha sido el mismo viento quien los ha traido.\n Ahora pasa que te extraño cada mañana, \n cada que canta el pajaro en la montaña,\n y es que como no hacerlo si siempre fuiste mi susurro de vida.",
    category: "Naturaleza",
    theme: "amanecer esperanza luz",
    date: "07-11-2025",
    excerpt: "Los susurros que el amanecer nos ha dado...",
    coverImage: "https://readdy.ai/api/search-image?query=Beautiful%20sunrise%20over%20misty%20mountains%20with%20golden%20light%20rays%20piercing%20through%20fog%2C%20peaceful%20dawn%20landscape%20with%20soft%20colors%20and%20ethereal%20atmosphere%2C%20nature%20poetry%20inspiration%20with%20gentle%20morning%20light%20illuminating%20dew%20drops%20on%20grass%20and%20leaves&width=400&height=300&seq=poem1&orientation=landscape"
  },
  {
    id: 2,
    title: "Corazón Errante",
    content: "Navegue sin rumbo sin sentido,\n sin esperanza alguna y sin fe, \n esta de mas decir que lo que quise, \n nunca fue. Navegue y siendo testigo de lo prohido,\n me adentre en el destino, \n triste y cruel de lo que nunca se ha poseido. Y es que no es facil tener conciencia, \n de aquello que no podemos ver, \n mas sin embargo es cuestion de paciencia, si se quiere aquello en lo que es imposible creer.",
    category: "Amor",
    theme: "corazón viaje hogar",
    date: "07-11-2025",
    excerpt: "Mi corazón es un viajero que nunca encuentra su hogar...",
    coverImage: "https://readdy.ai/api/search-image?query=Lonely%20figure%20walking%20on%20winding%20path%20through%20romantic%20landscape%20with%20heart-shaped%20clouds%20in%20purple%20and%20pink%20sunset%20sky%2C%20dreamy%20love%20poetry%20scene%20with%20soft%20pastel%20colors%20and%20ethereal%20romantic%20atmosphere&width=400&height=300&seq=poem2&orientation=landscape"
  },
  {
    id: 3,
    title: "Reflexiones de Medianoche",
    content: "Cuando cae la media noche, cuando el \n silencio y yo somos amigos infinitos, cuando \n  el destello del ultimo brillo de la luna se \n une a lo que charlamos, ahi comienza el \n verdadero desahogo. Cuando las brisas de la dulce noche se \n mezclan ineditas con todo aquello que \n pudiera ser pero no es, es ahi cuando todo \n parece tener sentido, es ahi cuando te \n sientes vivo, es ahi donde la soledad y no \n tiene espacio, porque estas hablando con tu \n ser que para mi ver, es lo mas esencial.",
    category: "Reflexión",
    theme: "noche pensamientos paz",
    date: "07-11-2025",
    excerpt: "En el silencio de la noche...",
    coverImage: "https://readdy.ai/api/search-image?query=Peaceful%20midnight%20scene%20with%20person%20silhouette%20by%20window%20looking%20at%20starry%20night%20sky%2C%20contemplative%20mood%20with%20soft%20moonlight%20and%20deep%20blue%20colors%2C%20philosophical%20poetry%20atmosphere%20with%20gentle%20shadows%20and%20serene%20night%20ambiance&width=400&height=300&seq=poem3&orientation=landscape"
  },
  
];

const categories = ["Todos", "Naturaleza", "Amor", "Reflexión", "Espiritual", "Urbano"];

export default function PoemasPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [nightMode, setNightMode] = useState(false);

  const filteredPoems = useMemo(() => {
    return mockPoems.filter(poem => {
      const matchesCategory = selectedCategory === "Todos" || poem.category === selectedCategory;
      const matchesSearch = poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           poem.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           poem.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${nightMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${nightMode ? 'text-white' : 'text-gray-800'}`}>
              <span className="font-pacifico text-purple-600">Mis</span> Poemas
            </h1>
            <p className={`text-lg ${nightMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Una colección de versos de RapsodAz
            </p>
          </div>
          <NightModeToggle nightMode={nightMode} onToggle={setNightMode} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm}
              nightMode={nightMode}
            />
          </div>
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            nightMode={nightMode}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoems.map(poem => (
            <PoemCard 
              key={poem.id} 
              poem={poem} 
              onClick={() => setSelectedPoem(poem)}
              nightMode={nightMode}
            />
          ))}
        </div>

        {filteredPoems.length === 0 && (
          <div className={`text-center py-16 ${nightMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <i className="ri-search-line text-6xl mb-4 opacity-50"></i>
            <p className="text-xl">No se encontraron poemas que coincidan con tu búsqueda</p>
          </div>
        )}

        {selectedPoem && (
          <PoemModal 
            poem={selectedPoem} 
            onClose={() => setSelectedPoem(null)}
            nightMode={nightMode}
          />
        )}
      </div>
    </div>
  );
}
