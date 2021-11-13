import { makeStyles } from '@material-ui/core/styles';

export const useLogoStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));
