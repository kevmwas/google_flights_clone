import { Box, styled } from '@mui/material';

const HeroImage = styled(Box)(({ theme, imageUrl }) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 200, // Adjust as needed
  marginBottom: theme.spacing(2), // Add some space below the image
  borderRadius: theme.shape.borderRadius, // Optional: round the image corners
}));

export default HeroImage
