import { makeStyles } from '@material-ui/core/styles';

export const useJobDetailsStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4)
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '2rem'
  },
  editLink: {
    marginTop: theme.spacing(1),
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));
