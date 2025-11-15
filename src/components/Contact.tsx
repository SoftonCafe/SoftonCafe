import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#f5f1eb]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#6b5744] mb-4 tracking-tight">
            Visítanos
          </h2>
          <p className="text-lg text-[#a3917a] font-light">
            Nos encantaría verte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#8b7355]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#6b5744] mb-2">Ubicación</h3>
                  <p className="text-[#a3917a] font-light leading-relaxed">
                    C. Padre Acosta, 12<br />
                    30850 Totana<br />
                    Murcia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#8b7355]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#6b5744] mb-2">Horario de Martes a Domingo</h3>
                  <div className="text-[#a3917a] font-light space-y-1">
                    <p>Mañana: 8:00 - 12:00</p>
                    <p>Tarde: 16:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#8b7355]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-light text-[#6b5744] mb-2">Contacto</h3>
                  <p className="text-[#a3917a] font-light">
                    Teléfono: 621 62 10 85<br />
                    Email: softontotana2025@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-full h-64 bg-[#d4c5b9]/30 rounded-xl flex items-center justify-center">
                <MapPin className="w-12 h-12 text-[#a3917a]/50" strokeWidth={1.5} />
                <p className="text-[#a3917a] ml-3 font-light">Ver Mapa</p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-3xl font-light text-[#6b5744] mb-6">Eníanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#6b5744] font-light mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/80 border border-[#d4c5b9]/50 rounded-xl focus:outline-none focus:border-[#8b7355] transition-colors text-[#6b5744] font-light"
                  required
                />
              </div>

              <div>
                <label className="block text-[#6b5744] font-light mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/80 border border-[#d4c5b9]/50 rounded-xl focus:outline-none focus:border-[#8b7355] transition-colors text-[#6b5744] font-light"
                  required
                />
              </div>

              <div>
                <label className="block text-[#6b5744] font-light mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/80 border border-[#d4c5b9]/50 rounded-xl focus:outline-none focus:border-[#8b7355] transition-colors text-[#6b5744] font-light resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#8b7355] text-[#f5f1eb] rounded-xl font-light tracking-wider transition-all duration-300 hover:bg-[#6b5744] hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
