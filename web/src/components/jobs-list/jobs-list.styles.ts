import { makeStyles } from '@material-ui/core/styles';

export const useJobsListStyles = makeStyles(theme => ({
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
  }
}));
