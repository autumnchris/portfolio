import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
