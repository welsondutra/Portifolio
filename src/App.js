import React from 'react';
import './App.css';
import { Container, Layout } from './components';
import { Skills, Home } from './screen';

function App() {
  return (
    <Layout>
      <Container>
        <Home />
        <Skills />
      </Container>
    </Layout>
  );
}

export default App;
