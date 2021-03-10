import styled from 'styled-components';

import { Container } from 'react-bootstrap';
import * as colors from '../../config/colors';

const BgPrimaryColor = styled(Container)`
  margin-top: 4em;
  background-color: ${colors.primaryColor};
  min-height: 100vh;
`;

export default BgPrimaryColor;
