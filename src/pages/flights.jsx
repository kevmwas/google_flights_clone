import React from 'react';
import { Box, Container } from '@mui/material';
import CityCard from '../components/cityCard';

const Flights = () => {
  const cityData = [
    {
      city: 'New York',
      price: 'KES 125,290',
      dateRange: '25 May - 3 Jun',
      flightInfo: '2 stops · 20 hrs 25 min',
      imageUrl: 'https://source.unsplash.com/random/300x140?newyork', // Replace with actual image URL
    },
    {
      city: 'Cape Town',
      price: 'KES 70,025',
      dateRange: '11 Sept - 18 Sept',
      flightInfo: '1 stop · 10 hrs 15 min',
      imageUrl: 'https://source.unsplash.com/random/300x140?capetown', // Replace with actual image URL
    },
    {
      city: 'London',
      price: 'KES 61,525',
      dateRange: '8 Jun - 14 Jun',
      flightInfo: '1 stop · 24 hrs 50 min',
      imageUrl: 'https://source.unsplash.com/random/300x140?london', // Replace with actual image URL
    },
    {
      city: 'Singapore',
      price: 'KES 88,750', // Example price
      dateRange: '22 May - 28 May',
      flightInfo: 'Non-stop · 15 hrs 30 min', // Example flight info
      imageUrl: 'https://source.unsplash.com/random/300x140?singapore', // Replace with actual image URL
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {cityData.map((data, index) => (
          <CityCard key={index} {...data} />
        ))}
      </Box>
    </Container>
  );
}

export default Flights;
