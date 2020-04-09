import * as React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

const MainComponent: React.FC<BaseProps> = ({
    className
}) => {
    return <div className={className}/>
}

MainComponent.displayName = 'Main';

export const Main = styled(MainComponent)`
    background: ${props => props.theme.main.background};
`;
