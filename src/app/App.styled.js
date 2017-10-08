// @flow

import styled from "styled-components";
import {font} from "../theme/font";
import {size} from "../theme/size";
import {palette} from "../theme/palette";

export const AppRootContainer = styled.div`
  font-family: ${font.fontFamily};
  font: ${font.fontFamily};
  
  color: ${palette.fg.primary};
  
  padding: 0 ${size.xlarge.spacing};
`;

export const AppHeader = styled.h2`
`;
