import 'styled-components';
import type { defaultTheme } from '../styles/theme/default';

type ThemeDefault = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}