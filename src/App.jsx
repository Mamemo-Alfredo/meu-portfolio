import './index.css'

import Header from './components/layouts/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <Hero></Hero>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </main>

      <Footer></Footer>
      
    </>
  )
}

export default App
