import * as React from 'react';
import styled from 'styled-components';
import  { Widget, WidgetType } from '../Widget';
import { BaseProps } from '../../types';

const WidgetContainerComponent: React.FC<BaseProps> = ({
    className
}) => {
    return (
        <div className={className}>
            <Widget type={WidgetType.PRIMARY}/>
            <Widget type={WidgetType.SECONDARY}/>
        </div>
    );
}

WidgetContainerComponent.displayName = 'WidgetContainer';

export const WidgetContainer = styled(WidgetContainerComponent)`
    display: grid;
    grid-row-gap: ${props => props.theme.spacings.defaultGridGap};

    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        grid-auto-flow: column;
        grid-column-gap: ${props => props.theme.spacings.defaultGridGap};
    }
`;
