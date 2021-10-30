import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationsListStyles = makeStyles(theme => ({
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
