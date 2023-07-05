import React from 'react';

import { Container, Layout } from './components';
import { Home, About, Skills, Contact } from './screen';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <Home />
        <About />
        <Skills />
        <Contact />
      </Container>
    </Layout>
  );
}

export default App;
