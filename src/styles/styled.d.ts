import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      auxBackground: string;
      primary: string;
      secundary: string;
      success: string;
      error: string;
    };
  }
}
