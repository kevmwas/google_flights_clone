import { Box, Typography, TextField, Button, Grid, IconButton, InputAdornment, useTheme, useMediaQuery } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import heroImageUrl from "../assets/flights.svg"
import RoundedTabs from './roundedTabs';
import RoundedTab from './roundedTab';
import HeroImage from './heroImage';

const FlightsHeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        mt: 10,
        pb: 6,
        px: 2,
      }}
    >
      <HeroImage imageUrl={heroImageUrl} />
      <Typography variant="h4" align="center" gutterBottom>
        Search Flights
      </Typography>
      <Box
        sx={{
          mx: 'auto',
          p: 2,
          bgcolor: 'white',
          borderRadius: theme.shape.borderRadius,
          boxShadow: 1,
        }}
      >
        <RoundedTabs value={0} aria-label="flight type">
          <RoundedTab label="One way" />
          <RoundedTab label="Round trip" />
          <RoundedTab label="Multi-city" />
        </RoundedTabs>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label="Origin"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton aria-label="swap origin and destination">
              <SwapVertIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label="Destination"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Departure date"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Return date"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" size="large" startIcon={<SearchIcon />}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      {isMobile && (
        <Typography variant="body2" align="center" mt={2} color="textSecondary">
          Explore destinations and find the best flight deals.
        </Typography>
      )}
      {!isMobile && (
        <Typography variant="h6" align="center" mt={3} color="textSecondary">
          Discover amazing flight deals to your favorite destinations.
        </Typography>
      )}
    </Box>
  );
}

export default FlightsHeroSection
