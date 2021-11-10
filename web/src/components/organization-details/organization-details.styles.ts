import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationDetailsStyles = makeStyles(theme => ({
  root: {
  },
  header: {
    marginBottom: theme.spacing(4)
  },
  shortDescription: {
  },
  name: {
    fontSize: '2rem'
  },
  linkIcon: {
    fontSize: '1rem',
    verticalAlign: 'text-top',
    marginLeft: 2
  },
  jobsHeading: {
    marginTop: theme.spacing(4),
    fontSize: '1.25rem'
  }
}));
