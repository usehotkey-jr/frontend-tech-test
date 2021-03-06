// @flow

import styled from "styled-components";
import {palette} from "../theme/palette";
import {size} from "../theme/size";

const {small, large} = size;
const {fg, stroke, boxShadow} = palette;

export const Input = styled.input`
    width: 100%;
    padding: ${small.spacing} ${large.spacing};
    
    color: ${fg.primary};
    
    border-radius: ${small.radius};  
    border: 1px solid ${stroke.primary};  
    box-shadow: ${boxShadow.primaryInner};
    
    &:focus {
        border: 1px solid ${stroke.control}; 
        box-shadow: ${boxShadow.primaryFocused};  
    }
`;
