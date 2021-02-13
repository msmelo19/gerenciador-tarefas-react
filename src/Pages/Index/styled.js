import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

import * as colors from '../../config/colors';

export const CustomContainer = styled(Container)`
  padding: 112px 0px;
`;

export const CustomColHeader = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeader = styled.h2`
  color: ${colors.primaryColor};
  font-weight: bold;
  padding-right: 32px;
`;

export const SubHeader = styled.h5`
  color: ${colors.secondaryColor};
  margin: 16px 0px;
`;
