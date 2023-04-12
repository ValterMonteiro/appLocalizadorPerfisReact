import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps = {
  children: React.ReactNode
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#0971f1',
      dark: '#053e85',
    },
    secondary: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>...{children}</ThemeProvider>;
}
