// make theme typed
import { Theme } from './src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
