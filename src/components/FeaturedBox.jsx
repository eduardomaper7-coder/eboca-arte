const FeaturedBox = () => {
  return (
    <section className="bg-[#f5f8fb] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[#eaf0f6] min-h-[auto] lg:min-h-[520px]">
          
          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="/clinica-dental.jpg"
              alt="Clínica dental en Usera"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(47,79,127,0.14)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-[#2F4F7F] sm:text-4xl">
                Cuida tu sonrisa con una atención{' '}
                <span className="text-[#2F4F7F]">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En E-Boca&Arte estudiamos tu caso de forma individual para
                ofrecerte tratamientos dentales adaptados a tus necesidades,
                cuidando tu salud bucodental y la estética de tu sonrisa.
              </p>

              <div className="mt-6">
                <a
                  href="tel:914768665"
                  className="inline-flex rounded-xl bg-[#2F4F7F] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#243f68] sm:px-7 sm:py-4 sm:text-base"
                >
                  Pide cita llamando al 914 76 86 65
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox