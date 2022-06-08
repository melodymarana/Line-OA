import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  spacing: 2,
  typography: {
    fontFamily: '"Kanit", sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.375rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#c8102e',
      dark: '#970c23',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ed1c24',
    },
    success: {
      main: '#00a371',
    },
    warning: {
      main: '#ffaf26',
    },
    info: {
      main: '#2c3537',
    },
    grey: {
      200: '#d6dfe4',
      300: '#e9eff1',
      400: '#eeeff0',
      500: '#a2acb3',
      600: '#626e72',
      900: '#2c3537',
    },
    text: {
      primary: '#2c3537',
    },
    action: {
      disabled: '#a2acb3',
      disabledBackground: '#e9eff1',
    },
    divider: '#eeeff0',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: 'sm',
      },
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          height: 50,
        },
        outlined: {
          borderColor: '#d6dfe4',
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        color: 'info',
      },
      styleOverrides: {
        root: {
          width: 'initial',
          height: 'initial',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.18)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        color: 'info',
      },
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            backgroundColor: '#f5f5f5',
            borderColor: '#f5f5f5',
            borderRadius: 10,
          },
        },
      },
    },
  },
});

export default theme;
