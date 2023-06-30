import React from 'react';
import './App.css';
import { Container, Layout } from './components';
import { Home, About, Skills } from './screen';

function App() {
  return (
    <Layout>
      <Container>
        <Home />
        <About />
        <Skills />
      </Container>
    </Layout>
  );
}

export default App;
