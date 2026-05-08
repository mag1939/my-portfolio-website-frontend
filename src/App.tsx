import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import AboutMe from "./components/sections/AboutMe"
import ContactMe from "./components/sections/ContactMe"
import Experience from "./components/sections/Experience"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"

function App() {

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Section */}
      <main>
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <ContactMe />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
