import * as React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ErrorBox(props) {
  return (
    <Box
      display={props.display || 'flex'}
      justifyContent={props.justifyContent || 'center'}
      alignItems={props.alignItems || 'center'}
      margin={props.margin || '1rem auto'}
      gap={props.gap || '12px'}
      flex={props.flex || 'auto'}
      width={props.width || '100%'}
      sx={{
        padding: '1.5rem',
        flexDirection: { xs: 'column', sm: 'row' },
        color: props.type === 'info' ? '#f5a922' : '#DC2941',
        border:
          props.type === 'info' ? '1px solid #f5a922' : '1px solid #DC2941',
        borderRadius: '12px',
        background:
          props.type === 'info'
            ? 'rgba(245, 169, 34, 0.1)'
            : 'rgba(220, 41, 65, 0.1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: '28px' }} />
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontFamily: 'Poppins, Arial, sans-serif',
          textAlign: 'center',
          fontWeight: '500',
        }}
      >
        {props.errorMessage || 'An unexpected error occurred. Please try again later.'}
      </Typography>
    </Box>
  );
}
