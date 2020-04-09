import * as React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

const HeaderComponent: React.FC<BaseProps> = ({
    className
}) => {
    return <div className={className}/>
}

HeaderComponent.displayName = 'Header';

export const Header = styled(HeaderComponent)`
    background: ${props => props.theme.header.background};
    height: 3rem;
`;
