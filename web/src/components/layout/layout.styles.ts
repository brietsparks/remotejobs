import { makeStyles } from '@material-ui/core/styles';

export const useLayoutStyles = makeStyles(theme => ({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    '& a': {
      color: theme.palette.common.white
    },
    gap: theme.spacing(4)
  },
  main: {
    marginTop: theme.spacing(12),
    position: 'relative',
  },
}));
