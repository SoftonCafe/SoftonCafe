const Gallery = () => {
  const images = [
    {
      url: 'https://i.ibb.co/7JNxc8pc/IMG-20251113-184019.jpg',
      alt: 'Cozy café interior with warm lighting'
    },
    {
      url: 'https://i.ibb.co/FkNnxTLH/IMG-20251113-183919.jpg',
      alt: 'Latte art on wooden table'
    },
    {
      url: 'https://i.ibb.co/XrPvmHBc/IMG-20251113-184419.jpg',
      alt: 'Cozy reading nook with plants'
    },
    {
      url: 'https://i.ibb.co/JWh7Ht67/IMG-20251113-184335.jpg',
      alt: 'Fresh pastries and coffee'
    },
    {
      url: 'https://i.ibb.co/LdBfCf4q/IMG-20251113-184241.jpg',
      alt: 'Coffee brewing process'
    },
    {
      url: 'https://i.ibb.co/Z1Xjr70g/IMG-20251113-184154.jpg',
      alt: 'Minimalist café corner'
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-[#e8dfd6] to-[#f5f1eb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#6b5744] mb-4 tracking-tight">
            Galería
          </h2>
          <p className="text-lg text-[#a3917a] font-light">
            Momentos capturados en nuestro espacio acogedor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b5744]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white/40 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto">
          <p className="text-lg text-[#6b5744] font-light leading-relaxed mb-4">
            Cada rincón de Softon cuenta una historia de comodidad y cuidado. Desde la luz suave de la mañana
            que entra por nuestras ventanas hasta el brillo cálido del ambiente nocturno, hemos creado
            un espacio que te invita a quedarte un rato.
          </p>
          <p className="text-[#a3917a] font-light">
            Comparte tus momentos en Softon en redes sociales usando #SoftonTotana
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
