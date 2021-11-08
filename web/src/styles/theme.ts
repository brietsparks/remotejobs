import { createTheme, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type { Theme };

const borderRadius = 4;

// @ts-ignore
export const appTheme = createTheme({
  palette: {
    primary: { main: '#007bff' },
    secondary: red,
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontSize: 14,
    subtitle1: {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: { borderRadius },
      multiline: { borderRadius },
    },
    MuiIconButton: {
      root: {
        borderRadius,
      },
    },
    MuiButton: {
      root: {
        borderRadius,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius,
      },
    },
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: borderRadius * 2
      }
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true // No ripple on the whole application
    },
    MuiDialog: {
      transitionDuration: 0,
    },
    MuiPopover: {
      PaperProps: { square: true },
    },
    MuiTooltip: {
      // enterDelay: 1200,
      arrow: true,
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiButton: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: 'outlined',
      // margin: 'dense',
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiFormControl: {
      variant: 'outlined',
      // margin: 'dense',
    },
    MuiCheckbox: {
      color: 'primary'
    }
  },
});
