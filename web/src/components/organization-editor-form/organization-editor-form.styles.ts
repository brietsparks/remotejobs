import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationEditorFormStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4)
  }
}));
