import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as colors from '../../../config/colors';

export const Div = styled.div`
  background-color: ${colors.whiteColor1};
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const NextTasksDiv = styled(Div)`
  position: relative;
  top: -32px;
`;

export const H2BoldSecondary = styled.h2`
  color: ${colors.primaryColor};
  font-weight: bold;
  padding: 8px 0;
`;

export const H3Secondary = styled.h3`
  color: ${colors.secondaryColor};
  padding: 8px 0;
`;

export const H4BoldPrimary = styled.h4`
  color: ${colors.primaryColor};
  font-weight: bold;
`;

export const H5BoldPrimary = styled.h5`
  color: ${colors.primaryColor};
  font-weight: bold;
`;

export const H6BoldSecondary = styled.h6`
  color: ${colors.secondaryColor};
  font-weight: bold;
`;

export const H6 = styled.h6`
  color: ${colors.blackColor1};
`;

export const ComboBoxPriority = styled.select`
  margin-left: auto;
  font-family: "Montserrat" sans-serif;
  background-color: ${colors.whiteColor0};
  padding: 0 20px;
  margin: 5px 0;
  border: 1px solid ${colors.grayColor2};
`;

export const Paragraph = styled.p``;

export const DivContainer = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const DivTasks = styled.div`
  background-color: ${colors.secondaryColorLighter};
  padding: 8px 32px;
  margin: 0 16px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const DivCentered = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ButtonCustom = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivSpaced = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  width: 100%;
`;

export const LinkNoTxtDecoration = styled(Link)`
  &:hover {
    text-decoration: none;

    & div {
      background-color: ${colors.secondaryColorLighter}
    }

    & div h4 {
      color: ${colors.primaryColorLighter};
    }
    
    & div h6 {
      color: ${colors.blackColor2};
    }

  }
`;
