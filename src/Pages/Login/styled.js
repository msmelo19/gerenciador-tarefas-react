import styled from 'styled-components';
import { Container, Form, Col } from 'react-bootstrap';
import * as colors from '../../config/colors';

export const HeaderLogin = styled.h2`
  font-weight: bold;
  color: ${colors.primaryColor};
`;

export const BackgroundContainer = styled(Container)`
  min-height: 100vh;
  background: linear-gradient(90deg, ${colors.whiteColor2} 50%, ${colors.secondaryColorLighter} 50%);
  
  @media(max-width: 992px) {
    background: ${colors.secondaryColorLighter};
  }
`;

export const FormCustom = styled(Form)`
  margin-top: 4em;
  padding: 0em 2em;
`;

export const ColImage = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 992px) {
    display: none;
  }
`;
