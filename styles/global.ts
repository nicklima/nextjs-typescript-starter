import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --font-default: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --font-code: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }

  body, input, button{
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #fff;
    font-family: var(--font-default);
    font-size: 16px;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
  }

  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
   color: inherit;
  }
`;
