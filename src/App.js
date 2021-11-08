import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      default:
        return <About />;
    }
  };
  return (
    <div>

      
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <div>{renderPage(currentPage)}</div>
      
      <footer>
        <Footer></Footer>
</footer>
    </div>
  );
}

export default App;
