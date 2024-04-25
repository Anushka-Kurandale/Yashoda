// App.js
import React from 'react';
import './style.css';
// Import your CSS file

import Navbar from '../../my-react/src/components/Navbar';
import Home from '../../my-react/src/components/Home';
import Facilities from '../../my-react/src/components/Facilities';
import Contact from '../../my-react/src/components/Contact';
import About from '../../my-react/src/components/about';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Facilities />
      <Contact />
      {/* Add other components here */}
    </div>
  );
}

export default App;

