import { Heart, Music, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#f5f1eb]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#6b5744] mb-4 tracking-tight">
            Nuestra Historia
          </h2>
          <p className="text-lg text-[#a3917a] font-light">
            Donde la comodidad se encuentra con la creatividad
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-lg mb-12">
          <p className="text-lg text-[#6b5744] font-light leading-relaxed mb-6">
            Softon nació de una idea simple: crear un espacio que se sienta como llegar a casa.
            Inspirados por los ritmos suaves de la música y la calidez de una taza de café perfecta,
            queríamos crear más que solo una cafetería — queríamos construir un santuario.
          </p>

          <p className="text-lg text-[#6b5744] font-light leading-relaxed mb-6">
            Cada detalle, desde nuestra lista de reproducción cuidadosamente seleccionada hasta la iluminación suave
            y los rincones acogedores, está diseñado para ayudarte a desacelerar, respirar y estar presente. Ya sea que
            estés aquí para estudiar, trabajar en tu próxima gran idea, reunirte con amigos o simplemente disfrutar de
            un momento tranquilo con un buen libro, Softon es tu refugio del ruido.
          </p>

          <p className="text-lg text-[#6b5744] font-light leading-relaxed">
            Creemos en la calidad sin pretensión, la comodidad sin compromisos, y la comunidad
            construida sobre momentos compartidos de calma. Bienvenido a Softon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/40 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#8b7355]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-light text-[#6b5744] mb-2">Comodidad Primero</h3>
            <p className="text-[#a3917a] font-light text-sm leading-relaxed">
              Cada rincón diseñado para la relajación y la tranquilidad
            </p>
          </div>

          <div className="text-center p-8 bg-white/40 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
              <Coffee className="w-8 h-8 text-[#8b7355]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-light text-[#6b5744] mb-2">Calidad Elaborada</h3>
            <p className="text-[#a3917a] font-light text-sm leading-relaxed">
              Ingredientes premium y preparación cuidadosa en cada taza
            </p>
          </div>

          <div className="text-center p-8 bg-white/40 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
              <Music className="w-8 h-8 text-[#8b7355]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-light text-[#6b5744] mb-2">Buena Musica</h3>
            <p className="text-[#a3917a] font-light text-sm leading-relaxed">
              Sonidos cuidadosamente seleccionados que te ayudan a enfocarte y relajarte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
