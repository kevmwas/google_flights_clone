import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from './header';

const Layout = ({ children, maxWidth = 'lg', ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        px: isMobile ? 2 : 4,
        maxWidth: theme.breakpoints.values[maxWidth],
        mx: 'auto',
      }}
      {...rest}
    >
      <Header />
      {children}
    </Box>
  );
}

export default Layout;
