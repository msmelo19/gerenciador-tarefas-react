import { Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

import * as colors from '../../config/colors';

export const BgContainer = styled(Container)`
  margin-top: 4em;
  background-color: ${colors.primaryColor};
  min-height: 100vh;
`;

export const Div = styled.div`
  position: relative;
  top: -32px;
  background-color: ${colors.whiteColor1};
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const H4BoldPrimary = styled.h4`
  color: ${colors.primaryColor};
  font-weight: bold;
`;

export const DivTasks = styled.div`
  background-color: ${colors.secondaryColorLighter};
  padding: 16px 32px;
  margin: 32px 10% 32px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const FormCustom = styled(Form)`
  width: 100%;
`;

export const FromErrorMsg = styled(Form.Text)`
  color: ${colors.alertColor};
  font-weight: bold;
`;
