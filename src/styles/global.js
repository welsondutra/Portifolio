import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}

:root {
  --color-primary: #272727;
  --color-secondary: #343434;
  --color-background: #2d2d2d;
  --color-text: #fff;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--color-primary);
  color: var(--color-text);
}

a {
  transition: 0.3s;
  color: var(--color-text);
}

a:hover {
  opacity: 0.7;
}

.logo {
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

main {
  background-size: cover;
  height: 92vh;
}

h1 {
  font-size: xx-large;
}
h2 {
  font-size: x-large;
}
h3 {
  font-size: large;
}
h4 {
  font-size: larger;
}
`;
