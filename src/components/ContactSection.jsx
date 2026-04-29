import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#f5f8fb] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#2F4F7F] sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contáctanos para reservar una cita o solicitar más información.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(47,79,127,0.08)]">
            <div className="pt-1 text-xl text-[#2F4F7F]">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2F4F7F]">Dirección</h3>
              <p className="mt-2 text-lg leading-8 text-neutral-600">
                C. de la Pilarica, 37, Usera, 28026 Madrid
              </p>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(47,79,127,0.08)]">
            <div className="pt-1 text-xl text-[#2F4F7F]">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2F4F7F]">Teléfono</h3>
              <a
                href="tel:914768665"
                className="mt-2 block text-lg leading-8 text-neutral-600 transition hover:text-[#2F4F7F]"
              >
                914 76 86 65
              </a>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(47,79,127,0.08)]">
            <div className="pt-1 text-xl text-[#2F4F7F]">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2F4F7F]">Email</h3>
              <a
                href="mailto:info@ebocaarte.es"
                className="mt-2 block text-lg leading-8 text-neutral-600 transition hover:text-[#2F4F7F]"
              >
                info@ebocaarte.es
              </a>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(47,79,127,0.08)]">
            <div className="pt-1 text-xl text-[#2F4F7F]">
              <FaClock />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold text-[#2F4F7F]">Horario</h3>

              <div className="mt-4 space-y-3 text-lg text-neutral-700">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Lunes</span>
                  <span>10:00–14:00 · 16:00–20:00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Martes</span>
                  <span>10:00–14:00 · 16:00–20:00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Miércoles</span>
                  <span>10:00–14:00 · 16:00–20:00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Jueves</span>
                  <span>10:00–14:00 · 16:00–20:00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Viernes</span>
                  <span>10:00–14:00 · 16:00–20:00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Sábado</span>
                  <span>10:00–14:00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold text-[#2F4F7F]">Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection