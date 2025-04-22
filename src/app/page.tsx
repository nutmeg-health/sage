import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Download from './components/Download'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="download" className="min-h-screen py-16 bg-gray-50">
        <Download />
      </section>
      
      <section id="about" className="min-h-screen py-16">
        <About />
      </section>
      
      <section id="team" className="min-h-screen py-16 bg-gray-50">
        <Team />
      </section>
      
      <section id="contact" className="min-h-screen py-16">
        <Contact />
      </section>
    </main>
  )
}
