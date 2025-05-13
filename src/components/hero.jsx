import React from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton, InputAdornment } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function FlightsHeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        pt: 4,
        pb: 6,
        px: 2,
        bgcolor: '#e0f2f7', maxWidth: 800
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Find Your Perfect Flight
      </Typography>
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          p: 3,
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton aria-label="swap origin and destination">
              <SwapVertIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Dates"
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
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="Passengers"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
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
