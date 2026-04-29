const posts = [
  {
    date: '1 abril, 2026',
    title: 'Implantes dentales: cuándo son necesarios y qué ventajas tienen',
    excerpt:
      'Los implantes dentales ayudan a recuperar piezas perdidas y mejorar la funcionalidad de la boca. Te explicamos cuándo se recomiendan y qué beneficios ofrecen.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '1 abril, 2026',
    title: 'Limpieza dental profesional: por qué es importante hacerla',
    excerpt:
      'Una limpieza dental ayuda a prevenir problemas de encías, caries y acumulación de sarro. Descubre cada cuánto conviene realizarla y por qué es clave para tu salud bucodental.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '25 marzo, 2026',
    title: 'Blanqueamiento dental: cómo funciona y qué debes saber',
    excerpt:
      'El blanqueamiento dental puede mejorar la estética de tu sonrisa de forma segura si se realiza bajo supervisión profesional. Te contamos lo más importante antes de empezar.',
    image:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-[#f5f5f3] py-20">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Blog
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Artículos y consejos para cuidar tu salud bucodental
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >
              
              {/* Imagen */}
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-sm text-neutral-500">📅 {post.date}</p>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-black">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-700">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  <a
                    href={post.href}
                    className="inline-flex items-center gap-2 text-lg font-medium text-[#E4B525] transition hover:text-black"
                  >
                    Leer más <span className="text-2xl">›</span>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BlogSection