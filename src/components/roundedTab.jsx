import { Tab, styled } from '@mui/material';

const RoundedTab = styled(Tab)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  minHeight: 'auto',
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export default RoundedTab;
