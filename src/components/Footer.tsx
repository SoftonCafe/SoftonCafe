import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#6b5744] text-[#f5f1eb] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-wide">Softon</span>
            </div>
            <p className="text-[#d4c5b9] font-light text-sm leading-relaxed">
              Tu escape para café, calma y comunidad.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#d4c5b9] hover:text-[#f5f1eb] transition-colors font-light"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-[#d4c5b9] hover:text-[#f5f1eb] transition-colors font-light"
                >
                  Menú
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#d4c5b9] hover:text-[#f5f1eb] transition-colors font-light"
                >
                  Acerca de
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-[#d4c5b9] hover:text-[#f5f1eb] transition-colors font-light"
                >
                  Galería
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-4">Conecta</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-[#d4c5b9] font-light">Teléfono: 621 62 10 85</li>
              <li className="text-[#d4c5b9] font-light">Email: softontotana2025@gmail.com</li>
              <li className="text-[#d4c5b9] font-light">C. Padre Acosta, 12, 30850 Totana, Murcia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8b7355] flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8b7355] flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#8b7355] flex items-center justify-center hover:bg-[#d4a574] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
            <p className="text-[#d4c5b9] font-light text-sm mt-4">
              #SoftonCafé
            </p>
          </div>
        </div>

        <div className="border-t border-[#8b7355] pt-8 text-center">
          <p className="text-[#d4c5b9] font-light text-sm">
            &copy; 2025 Softon Café. Todos los derechos reservados. Hecho con cuidado y café.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
