import './index.css'

import Header from './components/layouts/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Project from './components/sections/Project';

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <Hero></Hero>
        <About></About>
        <Project></Project>
      </main>
      
    </>
  )
}

export default App
