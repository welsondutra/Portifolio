import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { Container, Layout } from './components';
import { Home, About, Skills, Contact } from './screen';
import GlobalStyle from './styles/global';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-6JG6LHHNG0');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);

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
