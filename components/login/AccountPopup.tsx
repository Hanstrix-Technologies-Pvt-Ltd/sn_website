/**
 * @fileoverview Revamped professional account popup modal component
 * Features:
 * - Email/Password Sign In
 * - Comprehensive Sign Up with all user details
 * - Forgot Password functionality
 * - Email verification with OTP after sign up
 * - Clean, modern design with Clerk authentication
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSignUp, useSignIn, useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
// import usePopupPreventClose from "./hooks/usePopupPreventClose";
// import { useDispatch } from "react-redux";
// import { openSnackbar } from "store/slices/snackbar";
import { useUser as useUserContext } from "./userContext";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  useTheme,
  Divider,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IconUser, IconLogout } from "@tabler/icons-react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import SignInForm from "./signIn";
import SignUpForm, { SignUpData } from "./signUp";
import OTPPopup from "./OTPPopup";
import { openSnackbar } from "../../styles/snackbar"; 
import {
  getPopupPaperStyles,
  getBackdropStyles,
  getDialogContentStyles,
  getHeaderStyles,
  getLogoStyles,
  getCloseButtonStyles,
  getContentBoxStyles,
  getTitleStyles,
  getSubtitleStyles,
} from "./constant";
import { useDispatch } from "react-redux";
import ForgotPasswordForm from "./forgotPasswordForm";

// Types
interface AccountPopupProps {
  open: boolean;
  onClose: () => void;
  customZIndex?: number;
}

type ViewMode = "signIn" | "signUp" | "forgotPassword" | "userAccount";

/**
 * Revamped account popup modal with comprehensive authentication
 * Features:
 * - Email/Password Sign In
 * - Full Sign Up form with all user details
 * - Forgot Password flow
 * - Email verification with OTP
 * - User account view for logged-in users
 */
export default function AccountPopup({
  open,
  onClose,
  customZIndex,
}: AccountPopupProps) {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  // Clerk hooks
  const { user: clerkUser, isSignedIn } = useUser();
  const { signUp, setActive: setActiveSignUp } = useSignUp();
  const { signIn, setActive: setActiveSignIn } = useSignIn();
  const { signOut } = useClerk();

  // UserContext hooks
  const {
    user: contextUser,
    login: contextLogin,
    getUserByEmail,
  } = useUserContext();

  // View state
  const [viewMode, setViewMode] = useState<ViewMode>("signIn");
  const [isLoading, setIsLoading] = useState(false);

  // ------------------------------------------------------------------
  // 1. SEPARATE ERROR STATES
  // Dedicated error states for each form view
  const [signInError, setSignInError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpErrorIsInfo, setSignUpErrorIsInfo] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpErrorType, setOtpErrorType] = useState<'error' | 'success' | null>(null);
  // ------------------------------------------------------------------

  // OTP state
  const [showOTP, setShowOTP] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentUserData, setCurrentUserData] =
    useState<SignUpData | null>(null);
  const [isSignInFlow, setIsSignInFlow] = useState(false);

  // Forgot password state
  const [resetCodeSent, setResetCodeSent] = useState(false);

  // Welcome toast state
  const [showWelcomeToast, setShowWelcomeToast] = useState(false);

  // Auto-hide welcome toast after 5 seconds
  useEffect(() => {
    if (showWelcomeToast) {
      const timer = setTimeout(() => {
        setShowWelcomeToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWelcomeToast]);

  // Combined function to reset all temporary states
 // Combined function to reset all temporary states
   const resetTemporaryStates = useCallback(() => {
      setIsLoading(false);
      setSignInError("");
      setSignUpError("");
      setSignUpErrorIsInfo(false);
      setForgotPasswordError("");
  setOtpError("");
  setOtpErrorType(null);
      setShowOTP(false);
      setCurrentEmail("");
      setCurrentUserData(null);
      setIsSignInFlow(false);
      setResetCodeSent(false); // <--- ADD THIS LINE
      setShowWelcomeToast(false);
    }, []);

  // Check user authentication status on popup open
  useEffect(() => {
    if (open) {
      if (isSignedIn && clerkUser) {
        setViewMode("userAccount");

        // Check for existing user data
        if (!contextUser) {
          const userEmail = clerkUser.emailAddresses?.[0]?.emailAddress;
          if (userEmail) {
            const existingUserData = getUserByEmail(userEmail);
            if (existingUserData) {
              contextLogin(existingUserData);
            }
          }
        }
      } else {
        setViewMode("signIn");
      }
      // Reset temporary states on open to ensure a clean start
      resetTemporaryStates(); 
    }
  }, [open, isSignedIn, clerkUser, contextUser, getUserByEmail, contextLogin, resetTemporaryStates]);

  const handleClose = () => {
    onClose();
    setViewMode("signIn");
    resetTemporaryStates();
  };

  // Utility to switch views and clear previous form's error state
  const switchViewMode = (mode: ViewMode) => {
    resetTemporaryStates(); // Clear all errors and loading
    setViewMode(mode);
  }

  // Use the hook to prevent closing on outside touch
//   const { handleDialogClose } = usePopupPreventClose({
//     preventOutsideClose: true,
//     preventEscapeClose: false,
//     onClose: handleClose,
//   });

  // Sign In Handler
  const handleSignIn = async (email: string, password: string) => {
    if (!signIn) {
      setSignInError(
        "Authentication service not available. Please refresh the page."
      );
      return;
    }

    setIsLoading(true);
    setSignInError(""); // Clear previous sign-in error

    try {
      // Attempt to sign in with password
      const signInAttempt = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActiveSignIn({
          session: signInAttempt.createdSessionId,
        });

        // Check for existing user data
        const existingUserData = getUserByEmail(email);
        if (existingUserData) {
          contextLogin(existingUserData);
        }

        setShowWelcomeToast(true);
        setIsLoading(false);
        handleClose();
      } else {
        setSignInError("Sign in failed. Please check your credentials.");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("Sign in error:", error);

      if (error.errors?.[0]?.code === "form_password_incorrect") {
        setSignInError("Incorrect password. Please try again.");
      } else if (error.errors?.[0]?.code === "form_identifier_not_found") {
        setSignInError("No account found with this email.");
      } else {
        setSignInError(
          error.errors?.[0]?.message || "Sign in failed. Please try again."
        );
      }

      setIsLoading(false);
    }
  };

  // Sign Up Handler
  const handleSignUp = async (data: SignUpData) => {
    if (!signUp) {
      setSignUpError(
        "Authentication service not available. Please refresh the page."
      );
      return;
    }

    setIsLoading(true);
    setSignUpError(""); // Clear previous sign-up error
    setSignUpErrorIsInfo(false);

    try {
      // Create sign-up with email and password only
      // Store additional info in unsafeMetadata
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        unsafeMetadata: {
          firstName: data.firstName,
          lastName: data.lastName,
          country: data.country || "",
          contactNumber: data.contactNumber || "",
        },
      });
      // Prepare email verification
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      // Store user data for later use
      setCurrentEmail(data.email);
      setCurrentUserData(data);
      setIsSignInFlow(false);

      // Show OTP popup
      setShowOTP(true);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Sign up error:", error);

      if (error.errors?.[0]?.code === "form_identifier_exists") {
        setSignUpError(
          "An account with this email already exists. Please sign in."
        );
        setSignUpErrorIsInfo(true);
      } else if (error.errors?.[0]?.code === "form_password_pwned") {
        setSignUpError(
          "This password has been found in a data breach. Please use a different password."
        );
      } else if (error.errors?.[0]?.code === "form_param_format_invalid") {
        setSignUpError("Please check your input and try again.");
      } else {
        setSignUpError(
          error.errors?.[0]?.message || "Sign up failed. Please try again."
        );
        setSignUpErrorIsInfo(false);
      }

      setIsLoading(false);
    }
  };

  // OTP Verification Handler
  const handleOTPVerify = async (otpCode: string) => {
    setIsLoading(true);
    setOtpError(""); // Clear previous OTP error
    setOtpErrorType(null);
    try {
      if (isSignInFlow) {
        // Handle sign in verification (if using OTP for sign in)
        if (!signIn) throw new Error("Sign in not initialized");

        const attempt = await signIn.attemptFirstFactor({
          strategy: "email_code",
          code: otpCode,
        });

        if (attempt.status === "complete") {
          await setActiveSignIn({
            session: attempt.createdSessionId,
          });

          // Check for existing user data
          const existingUserData = getUserByEmail(currentEmail);
          if (existingUserData) {
            contextLogin(existingUserData);
          }

          setShowWelcomeToast(true);
          setShowOTP(false);
          setIsLoading(false);
          handleClose();
        }
      } else {
        // Handle sign up verification
        if (!signUp) throw new Error("Sign up not initialized");

        const attempt = await signUp.attemptEmailAddressVerification({
          code: otpCode,
        });

        if (attempt.status === "complete") {
          await setActiveSignUp({
            session: attempt.createdSessionId,
          });

          // Save user data to context
          if (currentUserData) {
            contextLogin({
              firstName: currentUserData.firstName,
              lastName: currentUserData.lastName,
              email: currentUserData.email,
              contactNumber: currentUserData.contactNumber || "",
              country: currentUserData.country || "",
            });
          }

          setShowOTP(false);
          setIsLoading(false);
          handleClose();

          // Show success message
          dispatch(
            openSnackbar({
              open: true,
              message: "Account created successfully! Welcome!",
              variant: "alert",
              alert: {
                // ✅ CHANGE THIS LINE
                color: "info", // This will use the MUI 'info' color (typically blue)
                // OR use 'primary' if you want your main theme color
                // color: "primary", 
              },
              close: true,
              autoHideDuration: 15000, // 15 seconds
            })
          );
        }
      }
    } catch (error: any) {
      console.error("OTP verification error:", error);
      setIsLoading(false);
      
      // Handle specific OTP errors
      if (error.errors?.[0]?.code === "form_code_incorrect") {
        setOtpError("Invalid verification code. Please try again.");
      } else if (error.errors?.[0]?.code === "verification_expired") {
        setOtpError("Verification code has expired. Please request a new one.");
      } else {
        setOtpError(
          error.errors?.[0]?.message || "Verification failed. Please try again."
        );
      }
      setOtpErrorType("error");
      
      // Don't throw the error, let the component handle it
    }
  };

  // Forgot Password - Send Reset Code
  const handleSendResetCode = async (email: string) => {
    if (!signIn) {
      setForgotPasswordError(
        "Authentication service not available. Please refresh the page."
      );
      return;
    }

    setIsLoading(true);
    setForgotPasswordError(""); // Clear previous forgot password error

    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });

      setCurrentEmail(email);
      setResetCodeSent(true);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Send reset code error:", error);
      setForgotPasswordError(
        error.errors?.[0]?.message ||
          "Failed to send reset code. Please try again."
      );
      setIsLoading(false);
    }
  };

  // Forgot Password - Reset Password
  const handleResetPassword = async (code: string, newPassword: string) => {
    if (!signIn) {
      setForgotPasswordError(
        "Authentication service not available. Please refresh the page."
      );
      return;
    }

    setIsLoading(true);
    setForgotPasswordError(""); // Clear previous forgot password error

    try {
      const attempt = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: code,
        password: newPassword,
      });

      if (attempt.status === "complete") {
        await setActiveSignIn({
          session: attempt.createdSessionId,
        });

        // Check for existing user data
        const existingUserData = getUserByEmail(currentEmail);
        if (existingUserData) {
          contextLogin(existingUserData);
        }

        setIsLoading(false);
        handleClose();

        dispatch(
          openSnackbar({
            open: true,
            message: "Password reset successfully!",
            variant: "alert",
            alert: {
              color: "info",
            },
            close: true,
          })
        );
      }
    } catch (error: any) {
      console.error("Reset password error:", error);
      setForgotPasswordError(
        error.errors?.[0]?.message ||
          "Failed to reset password. Please try again."
      );
      setIsLoading(false);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await signOut();
      handleClose();
      router.push("/");

      dispatch(
        openSnackbar({
          open: true,
          message: "Logged out successfully",
          variant: "alert",
          alert: {
            color: "info",
          },
          close: true,
        })
      );
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Resend OTP Handler
  const handleResendOTP = async () => {
    if (!currentEmail) {
      console.error("No email available for resend");
      return;
    }

    try {
      if (isSignInFlow) {
        if (!signIn) throw new Error("Sign in not initialized");

        const signInAttempt = await signIn.create({ identifier: currentEmail });
        const emailAddress = signInAttempt.supportedFirstFactors?.find(
          (factor) => factor.strategy === "email_code"
        );

        if (emailAddress) {
          await signIn.prepareFirstFactor({
            strategy: "email_code",
            emailAddressId: emailAddress.emailAddressId,
          });
        }
      } else {
        if (!signUp) throw new Error("Sign up not initialized");

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      throw error;
    }
  };

  return (
    <>
      <Dialog
        open={open && !showOTP}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: getPopupPaperStyles(false),
        }}
        BackdropProps={{
          sx: {
            ...getBackdropStyles(),
            zIndex: customZIndex ? customZIndex - 1 : 1299,
          },
        }}
        TransitionProps={{
          timeout: 300,
        }}
        sx={{
          zIndex: customZIndex || 1300,
          "& .MuiDialog-container": {
            zIndex: customZIndex || 1300,
          },
          "& .MuiDialog-paper": {
            zIndex: customZIndex || 1300,
          },
        }}
      >
        <DialogContent sx={getDialogContentStyles()}>
          {/* Header */}
          <Box sx={getHeaderStyles()}>
            {/* Centered Logo */}
            <Box sx={getLogoStyles()}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Close Button */}
            <IconButton onClick={handleClose} sx={getCloseButtonStyles()}>
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={getContentBoxStyles()}>
            {viewMode === "userAccount" && isSignedIn && clerkUser ? (
              // User Account View - Show user info and logout
              <>
                <Typography variant="h4" sx={getTitleStyles()}>
                  <FormattedMessage
                    id="account.popup.welcome"
                    defaultMessage="Welcome back!"
                  />
                </Typography>

                <Typography variant="body1" sx={getSubtitleStyles()}>
                  <FormattedMessage
                    id="account.popup.user.info"
                    defaultMessage="You are currently logged in"
                  />
                </Typography>

                {/* User Info Card */}
                <Box
                  sx={{
                    backgroundColor: "rgba(17, 82, 147, 0.05)",
                    border: "1px solid rgba(17, 82, 147, 0.2)",
                    borderRadius: 2,
                    p: 3,
                    mb: 3,
                  }}
                >
                  <Stack spacing={2}>
                    {/* User Name Display */}
                    {(clerkUser.unsafeMetadata?.firstName || clerkUser.firstName || clerkUser.lastName) && (
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <IconUser
                          size={20}
                          color={theme.palette.primary.main}
                        />
                        <Typography
                          variant="body1"
                          color="text.primary"
                          fontWeight={600}
                        >
                          {clerkUser.unsafeMetadata?.firstName as string || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim()}
                        </Typography>
                      </Box>
                    )}
                    {/* Email Display */}
                    {clerkUser.emailAddresses[0]?.emailAddress && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 5 }}
                      >
                        {clerkUser.emailAddresses[0].emailAddress}
                      </Typography>
                    )}
                    {clerkUser.phoneNumbers[0]?.phoneNumber && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 5 }}
                      >
                        Contact: {clerkUser.phoneNumbers[0].phoneNumber}
                      </Typography>
                    )}
                  </Stack>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Logout Button */}
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<IconLogout size={20} />}
                  onClick={handleLogout}
                  sx={{
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main,
                    "&:hover": {
                      borderColor: theme.palette.error.dark,
                      backgroundColor: "rgba(211, 47, 47, 0.04)",
                    },
                  }}
                >
                  <FormattedMessage
                    id="account.popup.logout"
                    defaultMessage="Logout"
                  />
                </Button>
              </>
            ) : viewMode === "signIn" ? (
              <SignInForm
                onSignIn={handleSignIn}
                onForgotPassword={() => switchViewMode("forgotPassword")}
                onSwitchToSignUp={() => switchViewMode("signUp")}
                isLoading={isLoading}
                errorMessage={signInError} // Use dedicated state
              />
            ) : viewMode === "signUp" ? (
              <SignUpForm
                onSignUp={handleSignUp}
                onSwitchToSignIn={() => switchViewMode("signIn")}
                isLoading={isLoading}
                errorMessage={signUpError} // Use dedicated state
                errorIsInfo={signUpErrorIsInfo} // Use dedicated state
              />
            ) : viewMode === "forgotPassword" ? (
                <ForgotPasswordForm
                onSendResetCode={handleSendResetCode}
                onResetPassword={handleResetPassword}
                onBack={() => {
                  switchViewMode("signIn");
                  setResetCodeSent(false); // Reset code sent state separately
                }}
                isLoading={isLoading}
                errorMessage={forgotPasswordError} // Use dedicated state
                codeSent={resetCodeSent}
              />
            ) : null}
          </Box>
        </DialogContent>
      </Dialog>

      {/* OTP Popup */}
      <OTPPopup
        open={showOTP}
        onClose={handleClose}
        email={currentEmail}
        onEmailEdit={() => {
          setShowOTP(false);
          switchViewMode("signUp"); // Use switchViewMode to clear errors
        }}
        onVerify={handleOTPVerify}
        onResendOTP={handleResendOTP}
        isSignIn={isSignInFlow}
        otpMessage={otpError}
        otpMessageType={otpErrorType}
        isLoading={isLoading}
        customZIndex={customZIndex}
      />

      {/* Welcome Back Toast */}
      <Fade in={showWelcomeToast} timeout={200}>
        <Box
          sx={{
            position: "fixed",
            top: "80vh",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            background:
              "linear-gradient(105.34deg, #115293 0%, #1976D2 50%, #115293 100%)",
            color: "white",
            px: 2,
            py: 1.25,
            borderRadius: 1,
            minWidth: 350,
            maxWidth: 450,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            animation: "slideUp 0.3s ease-out",
            "@keyframes slideUp": {
              "0%": {
                opacity: 0,
                transform: "translateX(-50%) translateY(20px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateX(-50%) translateY(0)",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 28,
              height: 28,
              borderRadius: "50%",
              background:
                "linear-gradient(105.34deg, #115293 0%, #1976D2 50%, #115293 100%)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <circle cx="10" cy="10" r="10" fill="#115293" />
              <path
                d="M6 10.5L9 13.5L14 8.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            Welcome back! You are successfully logged in
          </Typography>
        </Box>
      </Fade>
    </>
  );
}