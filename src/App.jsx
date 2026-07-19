import './index.css'

import Header from './components/layouts/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Project from './components/sections/Project';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <Hero></Hero>
        <About></About>
        <Project></Project>
      </main>

      <Footer></Footer>
      
    </>
  )
}

export default App
