import { AppBar, Toolbar, Typography, IconButton, Box, useTheme, useMediaQuery } from '@mui/material';
import { Menu, FlightTakeoff, PersonOutline, Explore, Luggage, KingBed, House, DarkMode, Apps }  from '@mui/icons-material';
import RoundedNavigationButton from '../roundedNavigationButton';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: 'rgba(0, 0, 0, 0.87)', boxShadow: '0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 64 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
          >
            <Menu />
          </IconButton>
          {!isMobile && (
            <Menu sx={{ fontSize: '2rem', mr: 1, color: '#4285f4' }} />
          )}
          <Typography variant="h6" component="div" sx={{ fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
            My Flights
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <RoundedNavigationButton startIcon={<Luggage />}>Travel</RoundedNavigationButton>
              <RoundedNavigationButton startIcon={<Explore />}>Explore</RoundedNavigationButton>
              <RoundedNavigationButton startIcon={<FlightTakeoff />}>Flights</RoundedNavigationButton>
              <RoundedNavigationButton startIcon={<KingBed />}>Hotels</RoundedNavigationButton>
              <RoundedNavigationButton startIcon={<House />}>Holiday Rentals</RoundedNavigationButton>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" sx={{ mr: isMobile ? 0 : 1 }}>
            <DarkMode />
          </IconButton>
          <IconButton color="inherit" sx={{ mr: isMobile ? 0 : 1 }}>
            <Apps />
          </IconButton>
          <IconButton color="inherit" sx={{ mr: isMobile ? 0 : 1 }}>
            <PersonOutline />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
