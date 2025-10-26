"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Alert, AlertTitle } from '@mui/material';
import { closeSnackbar } from '../../styles/snackbar';
import { RootState } from '../../components/store';

export default function CustomSnackbar() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: RootState) => state.snackbar);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={snackbar.autoHideDuration}
      onClose={handleClose}
      anchorOrigin={snackbar.anchorOrigin}
      sx={{ zIndex: 9999 }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar.severity}
        variant={snackbar.alert.variant}
        color={snackbar.alert.color}
        sx={{ 
          width: '100%',
          // Custom styling for success alerts to match button colors
          ...(snackbar.alert.color === 'success' && {
            backgroundColor: '#2563eb !important', // Match "Join The Stock Navii Community" button color
            color: '#ffffff !important', // White text
            '& .MuiAlert-icon': {
              color: '#ffffff !important', // White icon
            },
            '& .MuiAlert-action': {
              color: '#ffffff !important', // White close icon
            },
            // Dark mode specific styling
            '.dark &': {
              backgroundColor: '#2563eb !important', // Same blue in dark mode
              color: '#ffffff !important', // White text in dark mode
              '& .MuiAlert-icon': {
                color: '#ffffff !important', // White icon in dark mode
              },
              '& .MuiAlert-action': {
                color: '#ffffff !important', // White close icon in dark mode
              },
            },
          }),
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
