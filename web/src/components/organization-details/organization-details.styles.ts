import { makeStyles } from '@material-ui/core/styles';

export const useOrganizationDetailsStyles = makeStyles(theme => ({
  root: {
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4)
  },
  editLink: {
    marginTop: theme.spacing(1),
    '&:hover': {
      textDecoration: 'none'
    }
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
