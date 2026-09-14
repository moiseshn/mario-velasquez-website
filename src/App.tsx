import { useEffect, useRef, useState } from 'react'

// ─── Scroll reveal hook ────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ─── Icons (inline SVG) ────────────────────────────────────────────────────
const Icons = {
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  BookOpen: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  Mic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
  Quote: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-30">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  ),
}

// ─── Data ──────────────────────────────────────────────────────────────────
const features = [
  {
    icon: <Icons.Star />,
    title: 'Fomento de Liderazgo',
    desc: 'Fundamental para el desarrollo personal y profesional, ya que impulsa la capacidad de tomar decisiones, motivar a otros y enfrentar desafíos. Promover habilidades de liderazgo desde temprana edad fortalece la confianza, la responsabilidad y el trabajo en equipo, creando líderes capaces de inspirar cambios positivos en sus comunidades y entornos laborales.',
  },
  {
    icon: <Icons.Mic />,
    title: 'Comunicación y Mediación',
    desc: 'Son herramientas clave para resolver conflictos y fortalecer relaciones. A través de un diálogo abierto y respetuoso, se facilita la comprensión mutua y se promueven soluciones equitativas, creando un ambiente de confianza y colaboración.',
  },
  {
    icon: <Icons.Heart />,
    title: 'Resolución de Conflictos',
    desc: 'Es un proceso que busca encontrar soluciones pacíficas y efectivas frente a desacuerdos o disputas entre personas o grupos. A través del diálogo, la empatía y la negociación, se promueve la comprensión mutua y se fortalecen las relaciones, permitiendo alcanzar acuerdos que beneficien a todas las partes involucradas.',
  },
  {
    icon: <Icons.BookOpen />,
    title: 'Intervención y Apoyo',
    desc: 'A través de acciones planificadas y acompañamiento personalizado, se busca mejorar las condiciones de vida, fomentar el desarrollo personal y promover la autonomía. Estos procesos implican la identificación de necesidades, la implementación de estrategias adecuadas y el seguimiento constante para garantizar resultados positivos.',
  },
  {
    icon: <Icons.Users />,
    title: 'Gestión de Grupos',
    desc: 'Es el proceso de organizar y coordinar a un conjunto de personas para alcanzar objetivos comunes. Implica facilitar la comunicación, resolver conflictos y motivar a los integrantes para mejorar el rendimiento y la colaboración dentro del equipo.',
  },
]

const books = [
  {
    title: 'Vuelve al Hogar: La Súplica de un Niño',
    about:
      'Vuelve al hogar extiende una invitación a todas las personas a convertirse en héroes reales para sus familias. A través de ejemplos personales explica la forma en que todos podemos ser una influencia positiva en la vida de otros, logrando así que estos desarrollen su potencial en la vida.',
    img: '/book-vuelve-al-hogar.webp',
    url: 'https://a.co/d/0esmuRpj',
  },
  {
    title: 'Agotado: En Busca de la Autosuficiencia',
    about:
      'Agotado muestra con palabras simples el recorrido hacia la libertad financiera, a la ruptura de ciclos culturales que mantiene a muchos sumergidos en la prisión llamada dependencia, en el ocio y la desdicha. Muestra el potencial y la necesidad que tienen los individuos de encontrar su vocación en la vida.',
    img: '/book-agotado.webp',
    url: 'https://a.co/d/04ibXOuD',
  },
  {
    title: 'No lo Escondas...: Ya es Evidente',
    about:
      'Todos escondemos algo: nuestra esencia, nuestras heridas, nuestra necesidad de afecto, nuestros dones, nuestros temores, nuestra opinión, la verdad. Lo hacemos por miedo — miedo a ser juzgados, rechazados o incomprendidos. Pero lo que escondemos rara vez permanece oculto tanto como creemos: los demás ya lo intuyen. Ya es evidente.',
    img: '/book-no-lo-escondas-ya-es-evidente.webp',
    url: 'https://a.co/d/0fWD2Zft',
  },
]

const testimonials = [
  {
    quote:
      '"La manera tan profesional en la que abordó la temática fue de suma importancia para nuestros padres. Los datos estadísticos, y la manera científica en la que se expuso, obtuvo por completo la atención del auditorio, tanto así que hasta los niños se concentraron."',
    name: 'Eldon Moncada',
  },
  {
    quote:
      '"La conferencia sobre el uso de la tecnología fue una experiencia muy enriquecedora que aclaró muchas dudas y nos ayudó a comprender mejor cómo funciona nuestro cerebro, por qué buscamos los "likes" y cómo la tecnología influye en nuestra atención. Sin duda, fue una conferencia muy recomendable y de gran aprendizaje."',
    name: 'Regino Benedit',
  },
  {
    quote:
      '"Participar en esta conferencia, en lo personal me pareció de gran utilidad para motivarnos a mejorar la comunicación y evitar conflictos, promover el respeto mutuo y el compromiso para construir un matrimonio mas sano, además que son aprendizajes que se pueden aplicar también en todo tipo de relaciones interpersonales. Muchas gracias al instructor por compartir estas herramientas."',
    name: 'Helen Hilton',
  },
  {
    quote:
      '"La conferencia me sirvió para recordar que debo tener cuidado con la rutina diaria en casa, que el amor se debe cultivar a diario junto con mi esposa. Aprendí que los matrimonios deben pedir ayuda cuando ya no son capaces de comunicarse, ya sea a través de los líderes eclesiásticos, así como ayuda profesional psicológica. En general, los matrimonios se fortalecen cuando se abordan estos temas de matrimonios por profesionales que tienen como base el evangelio de Jesucristo."',
    name: 'Marlon López',
  },
]

const navLinks = [
  { label: 'Acerca de', href: '#about' },
  { label: 'Conferencias', href: '#coaching' },
  { label: 'Libros', href: '#books' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark border-b border-gold-400/10 py-3' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" id="nav-logo" className="font-display text-xl font-semibold text-cream-50 tracking-wider">
          Mario<span className="text-gold-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase text-cream-200/70 hover:text-gold-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:mariovelasquez@gmail.com"
          id="nav-cta"
          className="hidden md:inline-flex btn-gold text-xs"
        >
          Reserva una conferencia <Icons.ArrowRight />
        </a>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-cream-50 hover:text-gold-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Alternar menú"
        >
          {menuOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-gold-400/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs tracking-widest uppercase text-cream-200/70 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="mailto:mariovelasquez@gmail.com" id="mobile-cta" className="btn-gold text-xs mt-2 justify-center" onClick={() => setMenuOpen(false)}>
            Reserva una conferencia ahora <Icons.ArrowRight />
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-charcoal-900 flex items-center overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a843' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gold glow blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A843 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="animate-fade-up">
          <p className="section-label">Autor · Conferencista</p>
          <div className="divider-gold" />
          <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold text-cream-50 leading-tight mb-6">
            Transfórmate.<br />
            <span className="text-gradient-gold italic">Toma las riendas.</span>
          </h1>
          <p className="font-sans text-lg text-cream-200/70 leading-relaxed max-w-xl mb-10">
            Mario Velásquez es Master en Educación Superior, certificado en Relaciones Familiares, Decano en la Escuela Internacional Sampedrana (EIS), y autor de grandes libros, dedicado a inspirar a jóvenes y adultos a construir vidas con propósito, conexión y alegría duradera.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:mariovelasquez@gmail.com" id="hero-cta" className="btn-gold">
              Reserva una Conferencia ahora <Icons.ArrowRight />
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="relative animate-fade-in flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm lg:max-w-none lg:w-[440px]">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gold-400/20 rounded-sm pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold-400/30 rounded-sm pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold-400/20 rounded-sm pointer-events-none" />

            <img
              src="/author-portrait.webp"
              alt="Mario Velásquez — Conferencista y Autor"
              id="hero-portrait"
              className="relative z-10 w-full object-cover rounded-sm shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
              style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
              width={900}
              height={1200}
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────
function Features() {
  const sectionRef = useReveal()
  return (
    <section
      id="coaching"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal py-28 bg-cream-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Lo Que Ganas</p>
          <div className="divider-gold mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal-900 leading-tight">
            Una charla construida en torno a<br />
            <span className="italic text-gold-500">tu transformación</span>
          </h2>
          <p className="mt-4 font-sans text-mist-500 max-w-xl mx-auto leading-relaxed">
            Cada sesión, cada libro, cada conferencia está diseñada con un solo propósito: darte claridad, valentía y las herramientas concretas para crear la vida que sabes que es posible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
          <FeatureCard {...features[0]} delay={0} />
          <FeatureCard {...features[1]} delay={100} />
          <FeatureCard {...features[2]} delay={200} />

          {/* talk-1 and talk-2 share a row sized so both render at the same height,
              in the exact ratio of their real aspect ratios (16:9 and 1:1 → 16fr:9fr) */}
          <div className="sm:col-span-2 lg:col-span-3 grid gap-6" style={{ gridTemplateColumns: '16fr 9fr' }}>
            <TalkImage
              src="/talk-1.webp"
              alt="Mario Velásquez dando una conferencia frente a una audiencia"
              className="aspect-video"
              delay={300}
            />
            <TalkImage
              src="/talk-2.webp"
              alt="Mario Velásquez en una sesión de conferencia"
              className="aspect-square"
              delay={350}
            />
          </div>

          <FeatureCard {...features[3]} delay={400} />
          <FeatureCard {...features[4]} delay={500} />
          <TalkImage
            src="/talk-3.webp"
            alt="Mario Velásquez impartiendo una charla"
            className="aspect-square"
            delay={600}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  const ref = useReveal()
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal group bg-white border border-cream-200 p-8 rounded-sm
                 hover:border-gold-400/60 hover:shadow-[0_12px_40px_rgba(212,168,67,0.12)]
                 transition-all duration-300 cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-gold-500 mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
        {icon}
      </div>
      <h3 className="font-display text-xl text-charcoal-900 mb-3">{title}</h3>
      <p className="font-sans text-sm text-mist-500 leading-relaxed">{desc}</p>
    </article>
  )
}

function TalkImage({ src, alt, className = '', delay }: { src: string; alt: string; className?: string; delay: number }) {
  const ref = useReveal()
  return (
    <figure
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal group relative overflow-hidden rounded-sm border border-cream-200 cursor-default ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/0 group-hover:ring-gold-400/50 transition-all duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent" />
    </figure>
  )
}

// ─── Books Banner ─────────────────────────────────────────────────────────
function BooksBanner() {
  const ref = useReveal()
  return (
    <section
      id="books"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal py-24 bg-charcoal-800 overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, #D4A843 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">Obras Publicadas</p>
          <div className="divider-gold mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl text-cream-50 leading-snug mb-6">
            Tres libros.<br />
            <span className="italic text-gold-400">Una misión.</span>
          </h2>
          <p className="font-sans text-cream-200/60 leading-relaxed">
            Los libros de Mario destilan años de experiencia en acciones prácticas y honestas, disponibles en Amazon. Cada uno te encuentra exactamente donde estás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <BookCard key={book.title} {...book} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BookCard({ title, about, img, url, delay }: {
  title: string; about: string; img: string; url: string; delay: number
}) {
  const ref = useReveal()
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal flex flex-col items-center text-center bg-charcoal-900/40 border border-cream-50/10 p-8 rounded-sm
                 hover:border-gold-400/40 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={img}
        alt={`Portada del libro ${title} de Mario Velásquez`}
        loading="lazy"
        decoding="async"
        className="w-40 aspect-[2/3] object-cover rounded-sm shadow-[0_16px_40px_rgba(0,0,0,0.5)] mb-6"
      />
      <h3 className="font-display text-xl text-cream-50 leading-snug mb-3">{title}</h3>
      <p className="font-sans text-sm text-cream-200/60 leading-relaxed mb-8">{about}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="mt-auto inline-flex btn-gold-outline text-xs">
        Ver en Amazon <Icons.ArrowRight />
      </a>
    </article>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────
function Testimonials() {
  const ref = useReveal()
  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal py-28 bg-cream-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A843 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Testimonios</p>
          <div className="divider-gold mx-auto" />
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal-900 leading-tight">
            Vidas transformadas.<br />
            <span className="italic text-gold-500">Familias renovadas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, delay }: {
  quote: string; name: string; delay: number
}) {
  const ref = useReveal()
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <blockquote
      ref={ref as React.RefObject<HTMLQuoteElement>}
      className="reveal bg-white border border-cream-200 p-8 rounded-sm
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icons.Quote />
      <p
        className="text-lg text-charcoal-700 leading-relaxed mt-4 mb-8"
        style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}
      >
        {quote}
      </p>
      <footer className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="w-12 h-12 rounded-full flex items-center justify-center
                     bg-gold-400/15 border-2 border-gold-400/40
                     font-sans text-sm font-medium text-gold-500"
        >
          {initials}
        </div>
        <p className="font-sans text-sm font-medium text-charcoal-900">{name}</p>
      </footer>
    </blockquote>
  )
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────
function BottomCTA() {
  const ref = useReveal()
  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal py-28 bg-charcoal-900 relative overflow-hidden"
    >
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(212,168,67,0.03) 25%, rgba(212,168,67,0.03) 26%, transparent 27%, transparent 74%, rgba(212,168,67,0.03) 75%, rgba(212,168,67,0.03) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(212,168,67,0.03) 25%, rgba(212,168,67,0.03) 26%, transparent 27%, transparent 74%, rgba(212,168,67,0.03) 75%, rgba(212,168,67,0.03) 76%, transparent 77%)',
        backgroundSize: '55px 55px',
      }} />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A843 0%, transparent 70%)' }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="section-label">Comienza Hoy</p>
        <div className="divider-gold mx-auto" />
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream-50 leading-tight mb-6">
          Nuestra historia en la vida<br />
          <span className="italic text-gradient-gold">aún no ha terminado.</span>
        </h2>
        <p className="font-sans text-cream-200/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Da el primer paso — una consulta gratuita de 30 minutos en la que definimos tus metas, identificamos y diseñamos un plan claro hacia adelante. Sin compromiso, sin presión. Solo claridad.
        </p>
        <a href="mailto:mariovelasquez@gmail.com" id="bottom-cta" className="btn-gold text-sm py-5 px-10">
          Reserva una conferencia ahora <Icons.ArrowRight />
        </a>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-charcoal-900 border-t border-cream-50/5 py-16">
      <div className="max-w-md mx-auto px-6 text-center">
        <p className="font-display text-2xl text-cream-50 mb-3">
          Mario<span className="text-gold-400">.</span>
        </p>
        <p className="font-sans text-sm text-mist-500 leading-relaxed mb-6">
          Life Coach · Autor · Conferencista<br />
        </p>
        <div className="flex items-center justify-center gap-4 pb-12 border-b border-cream-50/5">
          {[
            { icon: <Icons.LinkedIn />, href: 'https://www.linkedin.com/in/mario-velasquez-34248618b/', label: 'LinkedIn' },
            { icon: <Icons.Instagram />, href: 'https://www.instagram.com/mariorva1980/', label: 'Instagram' },
            { icon: <Icons.Facebook />, href: 'https://www.facebook.com/mario.velasquez.9028', label: 'Facebook' },
            { icon: <Icons.WhatsApp />, href: 'https://wa.me/50498152453', label: 'WhatsApp' },
            { icon: <Icons.Mail />, href: 'mailto:mariovelasquez@gmail.com', label: 'Email' },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="text-mist-500 hover:text-gold-400 transition-colors duration-200">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BooksBanner />
        <Testimonials />
        <BottomCTA />
      </main>
      <Footer />
    </>
  )
}
