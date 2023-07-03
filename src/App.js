import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Container, Layout } from './components';
import { Home, About, Skills } from './screen';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <GlobalStyle />
        <Container>
          <Home />
          <About />
          <Skills />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
