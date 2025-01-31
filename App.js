import React, { useState } from 'react';
import { Moon, Sun, Search, Languages } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState('tr');
  const [searchTerm, setSearchTerm] = useState('');
  const translations = {
    tr: {
      about: 'Hakkımda',
      posts: 'Yazılarım',
      search: 'Ara...',
      close: 'Kapat',
    },
    en: {
      about: 'About Me',
      posts: 'My Posts',
      search: 'Search...',
      close: 'Close',
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleLanguage = () => setLanguage(language === 'tr' ? 'en' : 'tr');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">IHV</span>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleLanguage} className="focus:outline-none">
            <Languages />
          </button>
          <button onClick={toggleSearch} className="focus:outline-none">
            <Search />
          </button>
          <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      {isSearchOpen && (
        <div className={`fixed inset-0 z-50 ${isDarkMode ? 'bg-black/50' : 'bg-gray-500/50'}`}>
          <div className={`w-1/2 mx-auto mt-20 p-4 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <input 
              type="text" 
              placeholder={translations[language].search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}
            />
            <button 
              onClick={toggleSearch} 
              className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
            >
              {translations[language].close}
            </button>
          </div>
        </div>
      )}

      <section id="about" className="p-8">
        <h2 className="text-3xl font-bold mb-4">{translations[language].about}</h2>
        <p>
          {language === 'tr' 
            ? 'Merhaba, Ben ihv bu siteyi opsec paylaşımlarım hakkında kullanacağım.' 
            : 'Hello, I am ihv. I will use this site about my opsec shares.'}
        </p>
      </section>

      <section id="posts" className="p-8">
        <h2 className="text-3xl font-bold mb-4">{translations[language].posts}</h2>
      </section>
    </div>
  );
}

export default App;
