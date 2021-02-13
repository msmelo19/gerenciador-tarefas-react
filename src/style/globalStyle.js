import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: ${colors.whiteColor0};
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-style: normal;
    font-size: 3.815em;
  }

  h2 {
    font-style: normal;
    font-size: 3.052em;
  }

  h3 {
    font-style: normal;
    font-size: 2.441em;
  }

  h4 {
    font-style: normal;
    font-size: 1.953em;
  }

  h5 {
    font-style: normal;
    font-size: 1.563em;
  }

  h6 {
    font-style: normal;
    font-size: 1.25em;
  }

  .btn-primary-custom {
    background-color: ${colors.primaryColor};
    border-color: ${colors.primaryColor};
    color: ${colors.whiteColor1};
    font-family: "Montserrat" sans-serif;
    font-style: normal;
    font-weight: bold;
    padding: 8px 32px;
    white-space: nowrap;

    &:hover {
      background-color: ${colors.primaryColorLighter};
      border-color: ${colors.primaryColorLighter};
      color: ${colors.whiteColor2};
    }

    &:active{
      background-color: ${colors.primaryColorDarker};
      border-color: ${colors.primaryColorDarker};
      color: ${colors.whiteColor0};
    }
    &:focus{
      box-shadow: none;
    }
  }

  .btn-outline-primary-custom {
    border: 2px solid ${colors.primaryColor};
    color: ${colors.primaryColor};
    font-style: normal;
    font-weight: bold;
    padding: 8px 32px;
    white-space: nowrap;

    &:hover {
      background-color: ${colors.primaryColorLighter};
      border-color: ${colors.primaryColorLighter};
      color: ${colors.whiteColor2};
    }

    &:active{
      background-color: ${colors.primaryColorDarker};
      border-color: ${colors.primaryColorDarker};
      color: ${colors.whiteColor0};
    }
    &:focus{
      box-shadow: none;
    }
  }

  .btn-link-primary-custom {
    color: ${colors.primaryColor};
    font-style: normal;
    font-weight: bold;
    white-space: nowrap;

    &:hover {
      color: ${colors.primaryColorLighter};
    }

    &:active{
      color: ${colors.primaryColorDarker};
    }
    &:focus{
      box-shadow: none;
    }
  }
`;
