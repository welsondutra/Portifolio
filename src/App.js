import React from 'react';
import './App.css';
import { Container, Layout } from './components';
import Home from './screen/Home';

function App() {
  return (
    <Layout>
      <Container>
        <Home />
      </Container>
    </Layout>
  );
}

export default App;
