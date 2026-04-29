const reviews = [
  {
    text: 'Excelente atención desde el primer momento. Me explicaron todo el tratamiento dental paso a paso y el resultado ha sido increíble. Sin duda mi clínica de confianza.',
    name: 'Alba',
    time: 'Hace 1 año',
  },
  {
    text: 'Fui por un problema en una muela y el trato fue impecable. Muy profesionales y cuidadosos en todo momento. Me sentí muy tranquilo durante todo el tratamiento.',
    name: 'K. Meneses',
    time: 'Hace 3 meses',
  },
  {
    text: 'Grandes profesionales. Te hacen sentir cómoda desde que entras y cuidan cada detalle. Estoy muy contenta con el resultado de mi tratamiento.',
    name: 'P. Fernández',
    time: 'Hace 1 año',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#eef0f1] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#E4B525]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Valoración 5.0 en Google Reviews
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:min-h-[360px] sm:p-7 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-5 text-lg tracking-[0.18em] text-[#E4B525] sm:text-xl">
                ★★★★★
              </div>

              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                {review.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-black sm:text-xl">
                  {review.name}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{review.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials