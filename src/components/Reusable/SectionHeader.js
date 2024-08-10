import { Typography } from '@mui/material';
import React from 'react';

const SectionHeader = ({ title, mb }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontSize: { xs: '14px', sm: '18px', md: '22px', lg: '24px' },
        color: 'rgba(255, 255, 255, 0.8)', // Slightly lighter color for better readability
        fontWeight: '600',
        lineHeight: 1.2, // Slightly increased line height for better readability
        textAlign: 'center',
        fontFamily: 'Roboto Condensed, sans-serif', // Added fallback font
        marginBottom: mb || '1rem', // Use default value if mb prop is not provided
        textTransform: 'uppercase', // For a more polished look
        letterSpacing: '0.5px', // Slight spacing for improved readability
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle shadow to enhance text visibility
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
