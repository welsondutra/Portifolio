import React from 'react';
import './App.css';
import { Footer, Header, Main } from './components';

function App() {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <Main />
        <Footer />
      </main>
    </body>
  );
}

export default App;
