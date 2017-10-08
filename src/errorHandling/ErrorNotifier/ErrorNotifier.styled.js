// @flow

import styled from "styled-components";
import {size} from "../../theme/size";
import {palette} from "../../theme/palette";

const {medium, small, large} = size;

export const ContainerEN = styled.div`
  position: fixed;
  
  right: ${medium.spacing};
  top: ${medium.spacing};
`;

export const NotificationItem = styled.div`
  max-width: ${large.block};
  padding: ${small.spacing};
  margin-bottom: ${medium.spacing};
  
  border-radius: ${medium.radius};
  color: ${palette.fg.accent};
  background-color: ${palette.badge.danger};
  
  word-break: break-word;
`;
