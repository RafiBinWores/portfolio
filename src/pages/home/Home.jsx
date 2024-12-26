import About from "../../components/about/About"
import Articles from "../../components/articles/Articles"
import Expertise from "../../components/expertise/Expertise"
import Hero from "../../components/hero/Hero"

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Expertise/>
      <Articles/>
    </>
  )
}

export default Home