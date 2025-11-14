import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8dfd6] via-[#f5f1eb] to-[#e0d5c7]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b8a99a] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#e8c4a3] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8a99a] flex items-center justify-center shadow-lg">
            <span className="text-6xl">☕</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-light text-[#6b5744] mb-6 tracking-tight">
          Softon
        </h1>

        <p className="text-2xl md:text-3xl font-light text-[#a3917a] mb-4 tracking-wide">
          Relájate. Saborea. Desconéctate.
        </p>

        <p className="text-lg text-[#b8a99a] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Un rincón acogedor donde la música se encuentra con el café perfecto.
          Tu santuario para estudiar, trabajar o simplemente estar presente.
        </p>

        <button
          onClick={scrollToMenu}
          className="px-8 py-4 bg-[#8b7355] text-[#f5f1eb] rounded-full font-light tracking-wider transition-all duration-300 hover:bg-[#6b5744] hover:shadow-xl hover:scale-105"
        >
          Explorar Menú
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#a3917a]" strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;
