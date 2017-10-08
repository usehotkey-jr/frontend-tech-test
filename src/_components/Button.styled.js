// @flow

import styled, {css} from "styled-components";
import {palette} from "../theme/palette";
import {size} from "../theme/size";

const {small, large} = size;
const {fg, bg, stroke, boxShadow} = palette;

export const Button = styled.button`
    padding: ${small.spacing} ${large.spacing};
    
    color: ${fg.accent};
    background-color: ${bg.success};
    
    border: 1px solid ${stroke.success};    
    border-radius: ${small.radius};
    outline: none;
    cursor: pointer;
  
    &:hover {
        background-color: ${bg.successHover};
    }
    
    &:active {
        box-shadow: ${boxShadow.success};
    }
    
    ${props => props.danger && css`
	    background-color: ${bg.danger};
	    border: 1px solid ${stroke.danger}; 
	    
	    &:hover {
            background-color: ${bg.dangerHover};
        }
	`}    
    
    ${props => props.disabled && css`
	    background-color: ${bg.disabled};
	    
	    &:hover {
            background-color: ${bg.disabled};
        }
	`}
`;
