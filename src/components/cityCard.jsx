import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box , styled} from '@mui/material';

const CardRoot = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows['1'],
  maxWidth: 300,
  margin: theme.spacing(1),
}));

const CardImage = styled(CardMedia)({
  height: 140,
  borderRadius: 'inherit',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

const CardInfo = styled(Box)({
  padding: 16,
});

const CityName = styled(Typography)({
  fontWeight: 500,
});

const Price = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const DateRange = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const FlightInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
}));

const CityCard = ({ city, price, dateRange, flightInfo, imageUrl }) => {
  return (
    <CardRoot>
      <CardImage image={imageUrl} title={city} />
      <CardInfo>
        <CityName variant="subtitle1" gutterBottom>
          {city}
        </CityName>
        <Price variant="h6">{price}</Price>
        <DateRange variant="body2" gutterBottom>
          {dateRange}
        </DateRange>
        <FlightInfo variant="caption">
          {flightInfo}
        </FlightInfo>
      </CardInfo>
    </CardRoot>
  );
}

export default CityCard;
