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
  longDescription: {
    marginBottom: theme.spacing(4),
  },
  jobsHeader: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  jobsHeading: {
    fontSize: '1.25rem',
  },
  createJobLink: {
    marginLeft: theme.spacing(2),
    whiteSpace: 'nowrap',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));
