"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [aboutOffset, setAboutOffset] = useState(0)
  const [proposalsOffset, setProposalsOffset] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const proposalsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect()
        const offsetTop = rect.top + window.scrollY
        const scrollPosition = window.scrollY
        const elementOffset = scrollPosition - offsetTop
        setAboutOffset(elementOffset > 0 ? elementOffset : 0)
      }

      if (proposalsRef.current) {
        const rect = proposalsRef.current.getBoundingClientRect()
        const offsetTop = rect.top + window.scrollY
        const scrollPosition = window.scrollY
        const elementOffset = scrollPosition - offsetTop
        setProposalsOffset(elementOffset > 0 ? elementOffset : 0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para manejar el scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Ajuste para el header fijo
        behavior: "smooth",
      })
    }
  }

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  }

  const floatingAnimation = "animate-float"
  const floatingSlowAnimation = "animate-float-slow"
  const floatingFastAnimation = "animate-float-fast"

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">Octavio Asencio</span>
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
              A
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <a
              href="#propuestas"
              onClick={(e) => handleSmoothScroll(e, "propuestas")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              PROPUESTAS
            </a>
            <a
              href="#sobre-mi"
              onClick={(e) => handleSmoothScroll(e, "sobre-mi")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              SOBRE MÍ
            </a>
            <a
              href="#eventos"
              onClick={(e) => handleSmoothScroll(e, "eventos")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              EVENTOS
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, "contacto")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              CONTACTO
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Únete</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative overflow-hidden bg-blue-600 text-white">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-400/20 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white/50 blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-white/50 blur-sm"></div>

          <div className="container relative z-10">
            {/* Cambiamos el orden en móvil para que el texto aparezca primero */}
            <div className="flex flex-col md:flex-row items-center py-12 md:py-20">
              <div className="md:w-1/2 space-y-5 text-center md:text-left order-2 md:order-1 mt-8 md:mt-0">
                <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1 rounded-full text-sm">
                  <span>¿QUIÉN SOY?</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Conoce a tu candidato
                  <div className="text-blue-300">Octavio Asencio</div>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-md">
                  Comprometido con el futuro de México y con la visión de un país más justo y próspero.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pb-4">
                  <Button
                    className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-6 group"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById("propuestas")
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 80,
                          behavior: "smooth",
                        })
                      }
                    }}
                  >
                    Conoce mis propuestas
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <div className="flex gap-4">
                    <Link href="#" className="rounded-full bg-blue-700/50 p-2 hover:bg-blue-700 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="rounded-full bg-blue-700/50 p-2 hover:bg-blue-700 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="rounded-full bg-blue-700/50 p-2 hover:bg-blue-700 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-0 md:mb-0 mt-8 md:-mt-12">
                  <div className={`relative w-full h-full ${floatingAnimation}`}>
                    <div className="absolute inset-0 rounded-full bg-white"></div>
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                      alt="Octavio Asencio"
                      width={400}
                      height={400}
                      className="relative z-10 object-cover rounded-full"
                      priority
                    />
                    <div
                      className={`absolute -top-4 -right-4 bg-blue-500 rounded-lg p-3 shadow-lg z-20 ${floatingSlowAnimation}`}
                    >
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div
                      className={`absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-lg z-20 ${floatingFastAnimation}`}
                    >
                      <div className="text-blue-600 font-bold">2023-2029</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curved bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-white z-0"
            style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
          ></div>
        </section>

        {/* Journey Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                <span>MI TRAYECTORIA</span>
                <ArrowRight className="h-3 w-3" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Mi camino para convertirme en
                <span className="text-blue-600 italic"> Servidor Público</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className={`bg-white shadow-lg hover:shadow-xl transition-all ${floatingAnimation}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Entender las necesidades de nuestra comunidad</h3>
                  <p className="text-slate-600">
                    Mi compromiso comienza con escuchar y comprender las verdaderas necesidades de todos los ciudadanos
                    para crear soluciones efectivas.
                  </p>
                </CardContent>
              </Card>

              <Card
                className={`bg-blue-900 text-white shadow-lg hover:shadow-xl transition-all ${floatingSlowAnimation}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Experiencia en gestión pública</h3>
                  <p className="text-blue-100">
                    Con más de 15 años de experiencia en el servicio público, he desarrollado las habilidades necesarias
                    para implementar cambios reales.
                  </p>
                </CardContent>
              </Card>

              <Card className={`bg-white shadow-lg hover:shadow-xl transition-all ${floatingFastAnimation}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Visión de futuro para México</h3>
                  <p className="text-slate-600">
                    Mi objetivo es construir un México más justo, próspero y seguro, donde cada ciudadano tenga
                    oportunidades de crecimiento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section with Parallax */}
        <section id="sobre-mi" ref={aboutRef} className="relative py-24 overflow-hidden bg-blue-900 text-white">
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-full h-16 bg-white"
            style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
          ></div>
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-full bg-blue-700/50 blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-blue-700/30 blur-xl"></div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-blue-600/30 blur-md"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-blue-600/30 blur-md"></div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                    alt="Octavio Asencio hablando con ciudadanos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className={`absolute top-4 right-4 bg-white text-blue-900 rounded-lg p-4 shadow-lg ${floatingAnimation}`}
                >
                  <div className="font-bold">2018</div>
                  <div className="text-sm">Inicio en política</div>
                </div>
                <div
                  className={`absolute -bottom-6 left-12 bg-blue-600 text-white rounded-lg p-4 shadow-lg ${floatingSlowAnimation}`}
                >
                  <div className="font-bold">15+ años</div>
                  <div className="text-sm">Experiencia</div>
                </div>
              </div>
              <div className="space-y-6" style={{ transform: `translateY(${aboutOffset * -0.1}px)` }}>
                <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1 rounded-full text-sm">
                  <span>MI HISTORIA</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
                <h2 className="text-3xl font-bold">
                  Rompiendo barreras y <span className="text-blue-300 italic">apuntando más alto</span>
                </h2>
                <p className="text-blue-100">
                  Octavio Asencio es un político comprometido con el bienestar de los mexicanos y el desarrollo
                  sostenible de nuestro país. Con más de 15 años de experiencia en el servicio público, ha demostrado su
                  capacidad para generar cambios positivos en las comunidades donde ha trabajado.
                </p>
                <p className="text-blue-100">
                  Licenciado en Derecho y con una maestría en Políticas Públicas, Octavio ha dedicado su carrera a
                  entender las necesidades de los ciudadanos y a buscar soluciones efectivas a los problemas que
                  enfrentan día a día.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className={`bg-blue-800/50 p-4 rounded-lg ${floatingAnimation}`}>
                    <div className="text-2xl font-bold text-white">2015</div>
                    <div className="text-sm text-blue-200">Premio al Servicio Público Destacado</div>
                  </div>
                  <div className={`bg-blue-800/50 p-4 rounded-lg ${floatingSlowAnimation}`}>
                    <div className="text-2xl font-bold text-white">2019</div>
                    <div className="text-sm text-blue-200">Reconocimiento por Transparencia Gubernamental</div>
                  </div>
                </div>

                <Button className="bg-white text-blue-600 hover:bg-blue-50 mt-4">Conocer más</Button>
              </div>
            </div>
          </div>

          {/* Curved bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-white"
            style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
          ></div>
        </section>

        {/* Eventos Section */}
        <section id="eventos" className="py-20">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                  <span>AGENDA</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
                <h2 className="text-3xl font-bold">Próximos eventos</h2>
              </div>
              <Button variant="ghost" className="text-blue-600 group">
                Ver todos <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  day: "15",
                  month: "MAY",
                  location: "Plaza Principal, Monterrey",
                  time: "17:00-19:00",
                  title: "Diálogo Ciudadano",
                  image:
                    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  day: "22",
                  month: "MAY",
                  location: "Universidad Autónoma",
                  time: "10:00-12:00",
                  title: "Foro Educativo",
                  image:
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
                },
                {
                  day: "29",
                  month: "MAY",
                  location: "Centro Cultural",
                  time: "18:00-20:00",
                  title: "Propuestas Culturales",
                  image:
                    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  day: "05",
                  month: "JUN",
                  location: "Parque Industrial",
                  time: "09:00-11:00",
                  title: "Encuentro Empresarial",
                  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
                },
              ].map((event, index) => (
                <Card
                  key={index}
                  className={`bg-white hover:shadow-lg transition-all ${index % 2 === 0 ? floatingAnimation : floatingSlowAnimation}`}
                >
                  <div className="h-32 w-full relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-center bg-blue-600 text-white p-2 rounded-lg w-16">
                        <div className="text-2xl font-bold">{event.day}</div>
                        <div className="text-xs">{event.month}</div>
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center gap-1 text-slate-600">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600">
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium text-lg">{event.title}</h3>
                  </CardContent>
                  <CardFooter className="p-0">
                    <div className="w-full border-t flex justify-between items-center p-4">
                      <span className="text-sm font-medium">Octavio Asencio</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 p-0 h-auto">
                        Detalles <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Propuestas Section with Parallax */}
        <section id="propuestas" ref={proposalsRef} className="relative py-24 overflow-hidden bg-blue-600 text-white">
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-full h-16 bg-white"
            style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
          ></div>
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-blue-400/20 blur-xl"></div>
          <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-blue-400/20 blur-xl"></div>

          <div className="container relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1 rounded-full text-sm mb-4">
                <span>PROPUESTAS</span>
                <ArrowRight className="h-3 w-3" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Construyendo un mejor futuro para México</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8" style={{ transform: `translateY(${proposalsOffset * -0.1}px)` }}>
              {[
                {
                  title: "Seguridad",
                  description:
                    "Implementación de estrategias integrales para recuperar la paz en nuestras comunidades, con enfoque en prevención y fortalecimiento institucional.",
                  icon: "🛡️",
                  priority: "Prioridad 1",
                  image:
                    "https://images.unsplash.com/photo-1605806616949-59450e59f5a5?q=80&w=2148&auto=format&fit=crop",
                },
                {
                  title: "Educación",
                  description:
                    "Modernización del sistema educativo para formar ciudadanos preparados para los retos del futuro, con inversión en infraestructura y capacitación docente.",
                  icon: "📚",
                  priority: "Prioridad 2",
                  image:
                    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
                },
                {
                  title: "Desarrollo Económico",
                  description:
                    "Creación de oportunidades para todos mediante políticas que impulsen el crecimiento sostenible, la innovación y el emprendimiento local.",
                  icon: "📈",
                  priority: "Prioridad 3",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-white text-slate-900 hover:shadow-xl transition-all ${index === 0 ? floatingAnimation : index === 1 ? floatingSlowAnimation : floatingFastAnimation}`}
                >
                  <div className="h-40 w-full relative">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-3xl">{plan.icon}</div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{plan.title}</h3>
                    <p className="text-slate-600 flex-1">{plan.description}</p>
                    <div className="text-sm font-bold text-blue-600">{plan.priority}</div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Ver detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Ver todas las propuestas</Button>
            </div>
          </div>

          {/* Curved bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-white"
            style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
          ></div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                <span>TESTIMONIOS</span>
                <ArrowRight className="h-3 w-3" />
              </div>
              <h2 className="text-3xl font-bold">
                Lo que dicen los ciudadanos sobre <span className="text-blue-600 italic">nuestro trabajo</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-5xl">"</div>
                <p className="text-lg text-slate-700">
                  No puedo agradecer lo suficiente a Octavio Asencio por el impacto positivo que ha tenido en nuestra
                  comunidad. Sus propuestas concretas, su capacidad de escucha y su compromiso genuino con el bienestar
                  de todos han marcado una diferencia real en nuestras vidas.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                      alt="Foto de testimonio"
                      width={50}
                      height={50}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-bold">María González</div>
                    <div className="text-sm text-slate-500">Ciudadana de Monterrey</div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {[
                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
                  ].map((img, i) => (
                    <div key={i} className="h-16 w-16 rounded-lg bg-slate-200 overflow-hidden">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Imagen de apoyo ${i + 1}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-blue-100 blur-md"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-blue-100 blur-md"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                    alt="Octavio Asencio con ciudadanos"
                    width={500}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className={`absolute -left-10 top-1/3 ${floatingAnimation}`}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="relative py-20 overflow-hidden bg-blue-900 text-white">
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-full h-16 bg-white"
            style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
          ></div>
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-700/30 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-blue-700/30 blur-xl"></div>

          <div className="container relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-3 py-1 rounded-full text-sm mb-4">
                <span>CONTACTO</span>
                <ArrowRight className="h-3 w-3" />
              </div>
              <h2 className="text-3xl font-bold">Hablemos</h2>
              <div className="inline-flex items-center mt-2">
                <span className="text-blue-300">Tu opinión es importante</span>
                <div className="ml-2 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  A
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className={`bg-white text-slate-900 ${floatingSlowAnimation}`}>
                <CardContent className="p-8">
                  <form className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Tu nombre
                      </label>
                      <Input id="name" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Tu correo electrónico
                      </label>
                      <Input id="email" type="email" placeholder="juan@ejemplo.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="interest" className="text-sm font-medium">
                        ¿Qué te interesa?
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="propuestas">Propuestas</SelectItem>
                          <SelectItem value="eventos">Eventos</SelectItem>
                          <SelectItem value="voluntariado">Voluntariado</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Tu mensaje
                      </label>
                      <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[120px]" />
                    </div>
                    <div className="md:col-span-2 flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        He leído y acepto los{" "}
                        <Link href="#" className="text-blue-600 hover:underline">
                          Términos y Condiciones
                        </Link>
                      </label>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Enviar mensaje</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Curved bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-white"
            style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
          ></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-blue-300">Octavio Asencio</span>
                <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  A
                </div>
              </div>
              <p className="text-blue-200 text-sm">Candidato comprometido con el futuro de México</p>
              <div className="flex gap-4">
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sm uppercase">Sitio</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#propuestas" className="hover:text-white">
                    Propuestas
                  </Link>
                </li>
                <li>
                  <Link href="#sobre-mi" className="hover:text-white">
                    Sobre Mí
                  </Link>
                </li>
                <li>
                  <Link href="#eventos" className="hover:text-white">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sm uppercase">Legal</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Licencias
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium mb-4 text-sm uppercase">Mantente informado</h3>
              <p className="text-sm text-blue-200">Suscríbete a nuestro boletín</p>
              <div className="flex">
                <Input placeholder="tu@correo.com" className="rounded-r-none bg-blue-800 border-blue-700 text-white" />
                <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600">Suscribir</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-sm text-blue-200">
            <p>© {new Date().getFullYear()} Octavio Asencio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

