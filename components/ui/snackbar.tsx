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
        sx={{ width: '100%' }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
