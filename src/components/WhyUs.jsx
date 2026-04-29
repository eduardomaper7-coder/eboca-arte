import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dentista atendiendo a un paciente',
    badge: 'Odontología cercana, profesional y personalizada',
  },
  {
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clínica dental moderna',
    badge: 'Tecnología dental para cuidar tu sonrisa',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#f5f8fb] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
        
        {/* IZQUIERDA */}
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-[#2F4F7F] lg:block [writing-mode:vertical-rl]">
            E-Boca&Arte
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#2F4F7F] px-5 py-2 text-sm font-bold text-white">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#2F4F7F] sm:text-5xl">
              ¿Por qué elegir{' '}
              <span className="whitespace-nowrap">
                E-Boca&Arte
              </span>
              ?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En E-Boca&Arte cuidamos tu salud bucodental con una atención
              cercana, tratamientos personalizados y un equipo comprometido con
              tu sonrisa.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-2xl font-extrabold text-[#2F4F7F]">
                  Atención personalizada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Estudiamos cada caso para ofrecerte el tratamiento dental más adecuado.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#2F4F7F]">
                  Equipo profesional
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Contamos con especialistas preparados para cuidar tu salud oral.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#2F4F7F]">
                  Tratamientos modernos
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Aplicamos soluciones actuales en odontología, estética dental e implantes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#2F4F7F]">
                  Trato cercano y de confianza
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Queremos que te sientas cómodo desde la primera visita.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA - SLIDER */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(47,79,127,0.18)]">
            <div className="relative h-[540px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#2F4F7F]/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-[#2F4F7F]">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-[#2F4F7F]"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-[#2F4F7F]' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs