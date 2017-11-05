import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;

    font-family: Open Sans;
    font-weight: lighter;
    letter-spacing: 0.2px;
  }

  input, button {
    font-family: Open Sans;
    font-weight: lighter;
    letter-spacing: 0.2px;
  }

  h3, h4, h5, h6 {
    font-weight: lighter;
    line-height: 1.2;
  }

  h1, h2 {
    font-family: Futura;
    line-height: 1.2;
  }
`;
