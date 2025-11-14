import { Coffee, Croissant, IceCream, Sparkles, Sandwich, GlassWater, CookingPot, Beer, CupSoda, Martini } from 'lucide-react';

const Menu = () => {
  const categories = [
    {
      icon: Coffee,
      title: 'Café',
      color: '#8b7355',
      items: [
        { name: 'Café Solo', description: 'Cafe Solo', price: '1€' },
        { name: 'Café con leche', description: 'Café con leche', price: '1.20€' },
        { name: 'Café Cortado', description: 'Café Cortado', price: '1.10€' },
        { name: 'Café Manchado', description: 'Café Manchado', price: '1.10€' },
        { name: 'Café Bombon', description: 'Café Bombon', price: '1.20€' },
        { name: 'Café Mixto', description: 'Café Mixto', price: '1.40€' },
        { name: 'Café Americano', description: 'Café Americano', price: '1.10€' },
        { name: 'Café Asiático', description: 'Café Asiático', price: '2€' },
        { name: 'Café Carajillo', description: 'Café Carajillo', price: '1.30€' },
        { name: 'Café Belmonte', description: 'Café Belmonte', price: '1.40€' },
      ],
    },
    {
      icon: Croissant,
      title: 'Dulces',
      color: '#d4a574',
      items: [
        { name: 'Lazos', description: 'Lazos 1 Unidad', price: '1.30€' },
        { name: 'Crepe simple', description: 'Crepe simple', price: '3.50€' },
        { name: 'Plus de sirope', description: 'Plus de sirope', price: '0.50€' },
        { name: 'Plus de Toping', description: 'Plus de Toping', price: '0.50€' },
        { name: 'Plus de Nata', description: 'Plus de Nata', price: '0.50€' },
        { name: 'Plus de Bola de Helado', description: 'Plus de Bola de Helado', price: '1€' },
        { name: 'Batido', description: 'Batido', price: '3.50€' },
        { name: 'Copa de Helado', description: 'Copa de Helado', price: '3.50€' },
        { name: 'Magdalena', description: 'Magdalena', price: '1€' },
        { name: 'Croissant', description: 'Croissant', price: '1€' },
      ],
    },
    {
      icon: Sandwich,
      title: 'Tostadas',
      color: '#b8a99a',
      items: [
        { name: 'Tostada aceite y tomate', description: 'Tostada aceite y tomate', price: '1.50€' },
        { name: 'Tostada mantequilla y mermelada', description: 'Tostada mantequilla y mermelada', price: '1.50€' },
        { name: 'Tostada atún y tomate', description: 'Tropical con coco y limón', price: '2€' },
        { name: 'Tostada jamón y tomate', description: 'Recién exprimida con bayas mixtas', price: '2€' },
      ],
    },
    {
      icon: CookingPot,
      title: 'Tapas',
      color: '#b8a99a',
      items: [
        { name: 'Tapa Albondigas en salsa', description: 'Tapa Albondigas en salsa', price: '3.50€' },
        { name: 'Tapa Magra al ajillo', description: 'Tapa Magra al ajillo', price: '3.50€' },
        { name: 'Tapa Pollo al Curry', description: 'Tapa Pollo al Curry', price: '3.50€' },
        { name: 'Tapa Pincho de Donosti', description: 'Tapa Pincho de Donosti', price: '2.50€' },
        { name: 'Tapa carrillera', description: 'Tapa carrillera', price: '4.50€' },
        { name: 'Tapa calamar', description: 'Tapa calamar', price: '4.30€' },
        { name: 'Gyozas', description: 'Gyozas 4 Unidades', price: '3.50€' },
        { name: 'Plato embutido grande', description: 'Plato embutido grande', price: '9€' },
        { name: 'Plato embutido individual', description: 'Plato embutido individual', price: '3.50€' },
        { name: 'Almendras', description: 'Almendras', price: '1€' },
        { name: 'Olivas', description: 'Olivas', price: '1€' },
        { name: 'Plato ensaladilla', description: 'Plato ensaladilla', price: '2.50€' },
        { name: 'Marinera', description: 'Marinera', price: '1.70€' },
        { name: 'Marinero', description: 'Marinero', price: '1.70€' },
        { name: 'Bicicleta', description: 'Bicicleta', price: '1.50€' },
        { name: 'Marinera con sardina', description: 'Marinera con sardina', price: '1.70€' },
        { name: 'Banderillas', description: 'Banderillas 2 Unidades', price: '0.50€' },
        { name: 'Bolsa patatas fritas', description: 'Bolsa patatas fritas', price: '1€' },
      ],
    },
    {
      icon: GlassWater,
      title: 'Otras Bebidas',
      color: '#e8c4a3',
      items: [
        { name: 'Cola cao', description: 'Cola cao', price: '1.50€' },
        { name: 'Batido Puleva', description: 'Batido Puleva', price: '2€' },
        { name: 'Zumo piña/melocotón', description: 'Zumo piña/melocotón', price: '1.20€' },
        { name: 'Agua 500ml', description: 'Agua 500ml', price: '0.70€' },
        { name: 'Agua 1L', description: 'Agua 1L', price: '1.10€' },
        { name: 'Te e Infusiones', description: 'Manzanilla, Te negro con canela, Te rojo, Te verde, Te de hierba buena, Infusion de albahaca, menta poleo, infusion de frutos del bosque', price: '1.10€' },
      ],
    },
    {
      icon: Beer,
      title: 'Cervezas',
      color: '#e8c4a3',
      items: [
        { name: 'Caña', description: 'Caña', price: '1.30€' },
        { name: 'Caña Promocion', description: 'Caña Promocion', price: '1€' },
        { name: 'Estrella 1/3', description: 'Estrella 1/3', price: '2€' },
        { name: 'Estrella Sin', description: 'Estrella Sin', price: '2.14€' },
        { name: 'Heineken', description: 'Heineken', price: '2€' },
        { name: 'Corona', description: 'Corona', price: '2.50€' },
        { name: 'Alhambra especial', description: 'Alhambra especial', price: '2.50€' },
      ],
    },    
    {
      icon: CupSoda,
      title: 'Refrescos',
      color: '#e8c4a3',
      items: [
        { name: 'Coca cola', description: 'Coca cola', price: '1.50€' },
        { name: 'Coca cola Zero', description: 'Coca cola Zero', price: '1.50€' },
        { name: 'Fanta Naranja/Limon', description: 'Fanta Naranja/Limon', price: '1.50€' },
        { name: 'Aquarius', description: 'Aquarius', price: '1.80€' },
        { name: 'Nestea', description: 'Nestea', price: '1.50€' },
        { name: 'Powerking', description: 'Powerking', price: '1.50€' },
        { name: 'Tónica', description: 'Tónica', price: '1.50€' },
        { name: 'Royal bliss', description: 'Royal bliss', price: '1.50€' },
      ],
    },    
    {
      icon: Martini,
      title: 'Copas',
      color: '#e8c4a3',
      items: [
        { name: 'Copa Normal', description: 'Copa Normal', price: '5€' },
        { name: 'Copa Premium', description: 'Copa Premium', price: '7€' },
      ],
    },    
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-gradient-to-b from-[#f5f1eb] to-[#e8dfd6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#6b5744] mb-4 tracking-tight">
            Nuestro Menú
          </h2>
          <p className="text-lg text-[#a3917a] font-light">
            Elaborado con cuidado, servido con calidez
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-8 h-8" style={{ color: category.color }} strokeWidth={1.5} />
                <h3 className="text-3xl font-light text-[#6b5744]">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-b border-[#d4c5b9]/30 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg text-[#6b5744] font-normal">{item.name}</h4>
                      <span className="text-[#8b7355] font-light whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                    <p className="text-sm text-[#a3917a] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
