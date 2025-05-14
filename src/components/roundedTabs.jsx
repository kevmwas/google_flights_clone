import { Tabs, styled } from '@mui/material';

const RoundedTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  marginBottom: theme.spacing(2),
  minHeight: 'auto',
}));

export default RoundedTabs
