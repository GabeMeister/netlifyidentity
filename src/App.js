import React from 'react';
import './App.css';

// import { IdentityContextProvider } from 'react-netlify-identity';

function App() {
  return (
    <div className="App">
      <h1>Here we are</h1>
      <div data-netlify-identity-menu></div>
    </div>
  );
}

export default App;
