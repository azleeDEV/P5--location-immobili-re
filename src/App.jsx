import React from 'react';
import AppRouter from './router/index';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
      <div className="main">
          <header>
            <Navbar />
          </header>
          <main>
            <AppRouter />
          </main>
          <Footer />
      </div>
  );
}
export default App; 