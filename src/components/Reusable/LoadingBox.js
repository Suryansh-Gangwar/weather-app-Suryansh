import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingBox(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Subtle dark background
        borderRadius: '8px', // Rounded corners
        padding: '2rem', // Padding around content
        width: '100%',
        maxWidth: '400px', // Limit maximum width
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Light shadow for depth
      }}
    >
      <CircularProgress sx={{ color: 'rgba(0, 0, 0, 0.7)', size: 60 }} /> {/* Slightly darker spinner */}
      {props.children && (
        <Box
          sx={{
            color: 'rgba(0, 0, 0, 0.6)', // Light text color
            fontSize: '1rem', // Font size
            textAlign: 'center', // Center align text
            fontFamily: 'Roboto, sans-serif', // Font family
          }}
        >
          {props.children}
        </Box>
      )}
    </Box>
  );
}

