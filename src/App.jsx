import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black overflow-hidden">
        <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover bg-blue-200 bg-blend-multiply">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
        </div> 
      </div>
    </BrowserRouter>
  )
}

export default App
