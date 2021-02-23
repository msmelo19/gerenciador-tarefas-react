import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const H3Secondary = styled.h3`
  color: ${colors.secondaryColor};
  padding: 8px 0;
`;

export const H2BoldSecondary = styled.h2`
  color: ${colors.primaryColor};
  font-weight: bold;
  padding: 8px 0;
`;

export const Div = styled.div`
  background-color: ${colors.whiteColor1};
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const NextTasksDiv = styled(Div)`
  position: relative;
  top: -25%;
`;
