import * as React from 'react';
import styled from 'styled-components';

interface SidebarProps {
    className?: string;
}

const SidebarComponent: React.FC<SidebarProps> = ({
    className
}) => {
    return <div className={className}/>
}

SidebarComponent.displayName = 'Sidebar';

export const Sidebar = styled(SidebarComponent)`
    background: ${props => props.theme.sidebar.background};
    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        width: auto;
    }
`;
