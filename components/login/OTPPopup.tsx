/**
 * @fileoverview OTP verification popup modal component
 * Features OTP input fields, resend functionality, and consistent styling
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
// import usePopupPreventClose from "../../hooks/usePopupPreventClose";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
// import Logo from "ui-component/Logo";
// import UserDetailsPopup from "./UserDetailsPopup";
import {
  getPopupPaperStyles,
  getBackdropStyles,
  getDialogContentStyles,
  getHeaderStyles,
  getLogoStyles,
  getCloseButtonStyles,
  getContentBoxStyles,
  getTitleStyles,
  getOTPInputStyles,
  getPrimaryButtonStyles,
  getResendButtonStyles,
  getEditButtonStyles,
} from "./constant";

// Types
interface OTPPopupProps {
  open: boolean;
  onClose: () => void;
  email: string;
  onEmailEdit: () => void;
  onVerify?: (otpCode: string) => Promise<void>;
  onResendOTP?: () => Promise<void>;
  isSignIn?: boolean;
  otpMessage?: string | null;
  otpMessageType?: 'success' | 'error' | null;
  isLoading?: boolean;
  customZIndex?: number;
}

/**
 * OTP verification popup modal
 * Features:
 * - 6-digit OTP input fields
 * - Auto-paste functionality
 * - Improved input handling
 * - Consistent styling with email input
 * - Continue button disabled until OTP is complete
 */
export default function OTPPopup({
  open,
  onClose,
  email,
  onEmailEdit,
  onVerify,
  onResendOTP,
  isSignIn = false,
  otpMessage,
  otpMessageType,
  isLoading = false,
  customZIndex,
}: OTPPopupProps) {
  const theme = useTheme();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 digits
  const [timeLeft, setTimeLeft] = useState(30);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      setOtp(["", "", "", "", "", ""]); // Reset all fields to empty strings
      setTimeLeft(30); // Reset the resend timer
      setIsSubmitting(false); // Reset submitting state
      // Optionally: Force focus on the first input to help user entry
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [open]); // Run this effect every time the `open` prop changes

  // Clear OTP when there's an error to allow retry
  useEffect(() => {
    if (otpMessage && otpMessageType === 'error') {
      setOtp(["", "", "", "", "", ""]);
      setIsSubmitting(false);
      // Focus first input after clearing
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [otpMessage, otpMessageType]);
    
  // Initialize input refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && open) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, open]);

  // Auto-paste functionality
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData?.getData("text");
      if (pastedData && /^\d{6}$/.test(pastedData)) {
        const otpArray = pastedData.split("");
        setOtp(otpArray);

        // Focus the last input after paste
        setTimeout(() => {
          if (inputRefs.current[5]) {
            inputRefs.current[5]?.focus();
          }
        }, 100);
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, []);

  const handleClose = () => {
    onClose();
    setOtp(["", "", "", "", "", ""]); // <-- ADD THIS LINE
    setShowUserDetails(false);
    setIsSubmitting(false);
  };

  // // Use the hook to prevent closing on outside touch
  // const { handleDialogClose } = usePopupPreventClose({
  //   preventOutsideClose: true,
  //   preventEscapeClose: false, // Allow escape key to close
  //   onClose: handleClose,
  // });

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input if value is entered
      if (value && index < 5) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleInputFocus = (index: number) => {
    // Select all text when focusing on an input
    const input = inputRefs.current[index];
    if (input) {
      input.select();
    }
  };

  const handleResendOTP = async () => {
    if (onResendOTP) {
      try {
        await onResendOTP();
        setTimeLeft(30);
        // Clear any existing error messages when resending
        // The parent component should handle success/error messages
      } catch (error) {
        console.error("Resend OTP error:", error);
        // Let the parent component handle the error
      }
    } else {
      // Fallback behavior if no onResendOTP prop
      setTimeLeft(30);
      console.log("Resend OTP - no handler provided");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const otpString = otp.join("");
    if (otpString.length === 6 && !isSubmitting && !isLoading) {
      console.log("OTP submitted:", otpString);
      setIsSubmitting(true);

      if (onVerify) {
        try {
          await onVerify(otpString);
          // Success is handled by the parent component
        } catch (error) {
          console.error("OTP verification failed:", error);
          // Error is handled by the parent component
        } finally {
          setIsSubmitting(false);
        }
      } else {
        // Fallback to original behavior
        setShowUserDetails(true);
        setIsSubmitting(false);
      }
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");
  const isButtonDisabled = !isOtpComplete || isSubmitting || isLoading;

  return (
    <>
      <Dialog
        open={open && !showUserDetails}

        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: getPopupPaperStyles(true),
        }}
        BackdropProps={{
          sx: {
            ...getBackdropStyles(),
            zIndex: customZIndex ? customZIndex - 1 : 9999998,
          },
        }}
        TransitionProps={{
          timeout: 300,
        }}
        sx={{
          zIndex: customZIndex || 9999999,
          '& .MuiDialog-container': {
            zIndex: customZIndex || 9999999,
          },
          '& .MuiDialog-paper': {
            zIndex: customZIndex || 9999999,
          },
        }}
      >
        <DialogContent sx={getDialogContentStyles()}>
          {/* Header */}
          <Box sx={getHeaderStyles()}>
            {/* Logo */}
            <Box sx={getLogoStyles()}>
              <Image
                src="/logo.png"
                alt="Stock Navii Logo"
                width={50}
                height={50}
                priority
              />
            </Box>

            {/* Close Button - Positioned absolutely */}
            <IconButton onClick={handleClose} sx={getCloseButtonStyles()}>
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={getContentBoxStyles()}>
            {/* Title */}
            <Typography variant="h4" sx={getTitleStyles()}>
              <FormattedMessage
                id="otp.popup.verify.title"
                defaultMessage="Verifying it's you"
              />
            </Typography>

            {/* Subtitle with Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "#115293", // Original blue
                  fontSize: "0.9rem",
                  lineHeight: 1.4,
                  mr: 1,
                  ".dark &": {
                    color: "#ffffff !important", // White text in dark mode
                  },
                }}
              >
                <FormattedMessage
                  id="otp.popup.subtitle"
                  defaultMessage="OTP was sent to"
                />{" "}
                <span style={{ fontWeight: "bold" }}>{email}</span>
              </Typography>
              <IconButton
                onClick={onEmailEdit}
                size="small"
                sx={getEditButtonStyles()}
              >
                <EditIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                {/* OTP Input Fields */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  {otp.map((digit, index) => (
                    <TextField
                      key={index}
                      inputRef={(el) => (inputRefs.current[index] = el)}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onFocus={() => handleInputFocus(index)}
                      variant="outlined"
                      inputProps={{
                        maxLength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#115293",
                          backgroundColor: "#FFFFFF",
                        },
                      }}
                      sx={{
                        ...getOTPInputStyles(),
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#FFFFFF !important",
                          "& .MuiInputBase-input": {
                            color: "#115293 !important",
                            fontWeight: 600,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                          },
                        },
                        // Mobile-specific overrides
                        "@media (max-width: 600px)": {
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "#FFFFFF !important",
                            "& .MuiInputBase-input": {
                              color: "#115293 !important",
                              fontSize: "0.9rem !important",
                              fontWeight: "600 !important",
                            },
                          },
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Success/Error Message */}
                {otpMessage && (
                  <Box sx={{ 
                    textAlign: "center", 
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: otpMessageType === 'success' ? '#e3f2fd' : '#ffebee',
                    border: `1px solid ${otpMessageType === 'success' ? '#115293' : '#f44336'}`,
                    '@keyframes fadeIn': {
                      '0%': { opacity: 0, transform: 'translateY(-10px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' }
                    },
                    animation: 'fadeIn 0.3s ease-in-out'
                  }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: otpMessageType === 'success' ? '#115293' : '#d32f2f',
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                      }}
                    >
                      {otpMessageType === 'success' && (
                        <span style={{ fontSize: '1.2rem' }}>✓</span>
                      )}
                      {otpMessageType === 'error' && (
                        <span style={{ fontSize: '1.2rem' }}>✗</span>
                      )}
                      {otpMessage}
                    </Typography>
                  </Box>
                )}

                {/* Resend OTP */}
                <Box sx={{ textAlign: "left", pl: 1 }}>
                  {timeLeft > 0 ? (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#115293", // Original blue
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        ".dark &": {
                          color: "#ffffff !important", // White text in dark mode
                        },
                      }}
                    >
                      Resend OTP in {timeLeft}s
                    </Typography>
                  ) : (
                    <Button
                      onClick={handleResendOTP}
                      sx={getResendButtonStyles()}
                    >
                      Resend OTP
                    </Button>
                  )}
                </Box>

                {/* Continue Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isButtonDisabled}
                  sx={getPrimaryButtonStyles(theme)}
                >
                  {isSubmitting || isLoading ? (
                    "Verifying..."
                  ) : (
                    <FormattedMessage
                      id="otp.popup.submit"
                      defaultMessage="Continue"
                    />
                  )}
                </Button>
              </Stack>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* User Details Popup */}
      {/* <UserDetailsPopup open={showUserDetails} onClose={handleClose} /> */}
    </>
  );
}
