import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas} from "./components";

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Navbar/>
        <Hero/>
      </div>

      <About/>
      <Experience/>
      <Tech/>
      <Works/>

      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App