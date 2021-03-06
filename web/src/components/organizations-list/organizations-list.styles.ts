import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationsListStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    maxWidth: 400,
    margin: '0 auto'
  },
  item: {
    width: '100%'
  },
  spinnerContainer: {
    height: 75,
    display: 'flex',
    justifyContent: 'center'
  },
  loadingTrigger: {
    width: '100%',
    height: 1
  },
  createLink: {
    position: 'absolute',
    right: 0,
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));
