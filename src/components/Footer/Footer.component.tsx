import * as React from 'react';
import { Button } from '../Button';
import styled from 'styled-components';
import { BaseProps } from '../../types';

const FooterComponent: React.FC<BaseProps> = ({
    className
}) => {
    return (
        <div className={className}>
            <Button>Click here!</Button>
        </div>
    );
}

FooterComponent.displayName = 'Footer';

export const Footer = styled(FooterComponent)`
    background: ${props => props.theme.footer.background};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
`;
