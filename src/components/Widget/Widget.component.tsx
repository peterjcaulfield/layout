import * as React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

export enum WidgetType {
    PRIMARY,
    SECONDARY
}

interface WidgetProps extends BaseProps {
    type: WidgetType;
}

const WidgetComponent: React.FC<WidgetProps> = ({
    className
}) => {
    return <div className={className}/>
}

WidgetComponent.displayName = 'Widget';

export const Widget = styled(WidgetComponent)`
    background: ${props => props.type === WidgetType.PRIMARY ?
        props.theme.widget.primary.background :
        props.theme.widget.secondary.background};
    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: auto;
        height: 18rem;
    }
`;
