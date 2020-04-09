import * as React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.theme.button.background};
    font-family: ${props => props.theme.button.typography.fontFamily};
    font-weight: ${props => props.theme.button.typography.fontWeight};
    padding: 0.825rem 2.5rem;
    border: none;
    border-radius: 100px 100px;
    cursor: pointer;
`
