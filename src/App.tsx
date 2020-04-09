import * as React from "react";
import { Header } from './components/Header';
import { WidgetContainer } from './components/WidgetContainer';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { theme } from './theme';
import styled, { ThemeProvider } from 'styled-components';

const AppContainer = styled.div`
    display: grid;
    grid-row-gap: ${props => props.theme.spacings.defaultGridGap};
    grid-template-rows: auto 1fr auto;
    height: 100vh;
`;

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: [widgets] 10rem [main] 1fr [sidebar] 10rem;
    grid-column-gap: ${props => props.theme.spacings.defaultGridGap};
    @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
        ${WidgetContainer} {
            grid-area: widgets;
        }
        ${Main} {
            grid-area: main;
        }
        ${Sidebar} {
            grid-area: sidebar;
        }

        grid-template-columns: auto;
        grid-template-rows: 40rem auto 40rem;
        grid-row-gap: ${props => props.theme.spacings.defaultGridGap};
        grid-template-areas:
            "main"
            "widgets"
            "sidebar"
    }
`;

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <AppContainer>
            <Header/>
            <ContentContainer>
                <WidgetContainer/>
                <Main/>
                <Sidebar/>
            </ContentContainer>
            <Footer/>
        </AppContainer>
    </ThemeProvider>
  );
}
