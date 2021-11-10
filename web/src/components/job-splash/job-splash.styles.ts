import { makeStyles } from '@material-ui/core/styles';

export const useJobSplashStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4)
  },
  title: {
    fontSize: '2rem'
  }
}));
