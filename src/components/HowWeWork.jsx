import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y diagnóstico personalizado',
    text: 'Analizamos tu salud bucodental con detalle para ofrecerte un tratamiento totalmente adaptado a tus necesidades.',
  },
  {
    icon: <FaMagic />,
    title: 'Tecnología avanzada',
    text: 'Trabajamos con equipos de última generación para garantizar tratamientos más precisos, cómodos y efectivos.',
  },
  {
    icon: <FaAward />,
    title: 'Especialistas cualificados',
    text: 'Nuestro equipo está formado por profesionales con amplia experiencia en odontología estética y salud dental.',
  },
  {
    icon: <FaUsers />,
    title: 'Atención cercana',
    text: 'Te acompañamos en todo el proceso para que te sientas seguro, informado y con total confianza en cada visita.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-neutral-600">
            Nuestro proceso está diseñado para cuidar tu sonrisa desde el primer momento
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-[#dfe9eb] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xl text-black">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork