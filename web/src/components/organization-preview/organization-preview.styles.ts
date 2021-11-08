import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationPreviewStyles = makeStyles(theme => ({
  root: {
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  actions: {
    justifyContent: 'right'
  }
}));
