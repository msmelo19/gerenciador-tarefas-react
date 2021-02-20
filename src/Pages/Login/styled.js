import styled from 'styled-components';
import { Container, Form } from 'react-bootstrap';
import * as colors from '../../config/colors';

export const HeaderRegister = styled.h2`
  font-weight: bold;
  color: ${colors.primaryColor};
`;

export const BackgroundContainer = styled(Container)`
  position: absolute;
  height: 100%;
  background: linear-gradient(90deg, ${colors.whiteColor2} 50%, ${colors.secondaryColorLighter} 50%)
`;

export const FormCustom = styled(Form)`
  margin-top: 4em;
  padding: 0em 2em;
`;
