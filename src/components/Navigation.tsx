import { Coffee } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'menu', label: 'Menú' },
    { id: 'about', label: 'Acerca de' },
    { id: 'gallery', label: 'Galería' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1eb]/95 backdrop-blur-sm border-b border-[#d4c5b9]/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          onClick={() => scrollToSection('home')}
        >
          <Coffee className="w-7 h-7 text-[#8b7355]" strokeWidth={1.5} />
          <span className="text-2xl font-light text-[#6b5744] tracking-wide">Softon</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-light tracking-wider transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[#8b7355] border-b-2 border-[#8b7355] pb-1'
                    : 'text-[#a3917a] hover:text-[#8b7355]'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-[#8b7355]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
