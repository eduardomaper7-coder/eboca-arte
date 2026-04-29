const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo texto */}
        <a href="#inicio" className="flex shrink-0 items-center">
          <span className="text-xl font-extrabold text-[#2F4F7F] md:text-2xl">
            E-Boca<span className="text-[#2F4F7F]">&</span>Arte
          </span>
        </a>

        {/* Navegación */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#inicio" className="text-base font-semibold text-black transition hover:text-[#2F4F7F]">
            Inicio
          </a>

          <a href="#servicios" className="text-base font-semibold text-black transition hover:text-[#2F4F7F]">
            Servicios
          </a>

          <a href="#tarifas" className="text-base font-semibold text-black transition hover:text-[#2F4F7F]">
            Tarifas
          </a>

          <a href="#contacto" className="text-base font-semibold text-black transition hover:text-[#2F4F7F]">
            Contacto
          </a>
        </nav>

        {/* Botón llamar */}
        <a
          href="tel:914768665"
          className="inline-flex items-center rounded-lg bg-[#2F4F7F] px-5 py-2.5 text-sm font-bold !text-white transition hover:bg-[#243f68]"
        >
          Llama al 914 76 86 65
        </a>

      </div>
    </header>
  )
}

export default Navbar