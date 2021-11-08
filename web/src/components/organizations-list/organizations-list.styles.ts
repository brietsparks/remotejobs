import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationsListStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    alignItems: 'center',
  },
  item: {
    width: 320
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
