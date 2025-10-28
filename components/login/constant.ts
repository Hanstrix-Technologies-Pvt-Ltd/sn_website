// import { NavigationItem } from "./types";
/**
 * @fileoverview Shared styles for Account and OTP popups
 * Contains all common styling to ensure consistency across popup components
 */

import { Theme } from "@mui/material";

// Common colors - Clean white backgrounds with vibrant blue text
export const POPUP_COLORS = {
  background: "#FFFFFF", // Clean white background like contact form
  backgroundSolid: "#FFFFFF", // Clean white background
  textPrimary: "#2563eb", // Vibrant blue for text like Stock Navii logo
  textSecondary: "#2563eb", // Same vibrant blue for secondary text
  white: "#FFFFFF",
  disabled: "#D1D5DB", // Light gray for disabled
  disabledText: "#9CA3AF", // Light gray text
  // Brand colors
  primaryBlue: "#2563eb", // Vibrant blue for accents and buttons
  primaryBlueHover: "#1d4ed8", // Darker blue for hover
  lightBlue: "#F3F4F6", // Very light gray for subtle backgrounds
} as const;

// Common popup paper styles - Clean white in light, dark in dark theme
export const getPopupPaperStyles = (isOTP: boolean = false) => ({
  borderRadius: 3,
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)", // Subtle shadow like contact form
  background: "#FFFFFF", // Clean white background for light theme
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 0, 0, 0.1)", // Subtle border
  overflow: "auto", // Enable scrolling for mobile responsiveness
  position: "relative" as const,
  minHeight: "20px",
  maxHeight: isOTP ? { xs: "98vh", sm: "95vh" } : { xs: "98vh", sm: "95vh", md: "90vh" },
  maxWidth: { xs: "95vw", sm: "450px" },
  width: { xs: "95vw", sm: "450px", md: "600px" },
  display: "flex",
  flexDirection: "column",
  // Mobile-specific scrolling styles
  ...getMobileStyles(),
  // Dark theme support - Use proper black colors like homepage
  ".dark &": {
    background: "#0f172a", // slate-950 - matches homepage dark theme
    border: "1px solid #1e293b", // slate-800 - proper dark border
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)", // Darker shadow for dark theme
  },
  "&::before": {
    content: '""',
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "transparent", // No overlay for clean look
    pointerEvents: "none" as const,
    zIndex: 1,
    // Dark theme overlay
    ".dark &": {
      background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)",
    },
  },
});

// Common backdrop styles
export const getBackdropStyles = () => ({
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(2px)",
});

// Common dialog content styles
export const getDialogContentStyles = () => ({
  p: 0,
  position: "relative" as const,
  zIndex: 2,
  overflow: "auto", // Enable scrolling for mobile responsiveness
  maxHeight: "100%", // Ensure it respects parent height
  // Hide scrollbars
  ...getMobileStyles(),
});

// Common header styles
export const getHeaderStyles = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 3,
  pb: 2,
  backgroundColor: "transparent",
  position: "relative" as const,
  minHeight: "80px",
  zIndex: 5, // Ensure header is above content but below close button
});

// Common logo styles
export const getLogoStyles = () => ({
  '& img': {
    height: '50px !important',
    width: 'auto !important',
    maxHeight: '50px !important',
    // Dark mode: make logo white
    '.dark &': {
      filter: 'brightness(0) invert(1)', // Makes logo white in dark mode
    },
  }
});

// Common close button styles
export const getCloseButtonStyles = () => ({
  color: POPUP_COLORS.textSecondary,
  backgroundColor: "rgba(0, 0, 0, 0.04)",
  width: 36,
  height: 36,
  position: "absolute" as const,
  top: 16,
  right: 16,
  zIndex: 10, // Ensure it's above other elements
  transition: "all 0.2s ease-in-out",
  cursor: "pointer", // Explicit cursor
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
});

// Common content box styles
export const getContentBoxStyles = () => ({
  p: { xs: 2, sm: 3 }, // Responsive padding
  pt: { xs: 1, sm: 2 }, // Responsive top padding
  overflow: "auto", // Enable scrolling for mobile responsiveness
  maxHeight: "100%", // Respect parent container
  // Hide scrollbars
  ...getMobileStyles(),
});

// Common title styles
export const getTitleStyles = () => ({
  fontWeight: 700,
  color: POPUP_COLORS.textPrimary,
  textAlign: "center" as const,
  mb: 1,
  fontSize: "24px", // Exact 24px font size for all titles
  // Dark mode: make text white
  ".dark &": {
    color: "#ffffff !important", // White text in dark mode
  },
});

// Common subtitle styles
export const getSubtitleStyles = () => ({
  textAlign: "center" as const,
  color: POPUP_COLORS.textPrimary,
  mb: 3,
  fontSize: "0.9rem",
  lineHeight: 1.4,
  // Dark mode: make text white
  ".dark &": {
    color: "#ffffff !important", // White text in dark mode
  },
});

// Common email input styles - Clean white in light, dark in dark theme
export const getEmailInputStyles = (theme: Theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Clean white for light theme
    backdropFilter: "blur(10px)",
    transition: "all 0.2s ease-in-out",
    // Dark theme background - Use proper black colors like homepage
    ".dark &": {
      backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
    },
    "& fieldset": {
      borderColor: "#D1D5DB", // Light gray border like contact form
      borderWidth: "1px",
      ".dark &": {
        borderColor: "#1e293b", // slate-800 - proper dark border
      },
    },
    "&:hover fieldset": {
      borderColor: POPUP_COLORS.primaryBlue, // Blue on hover
    },
    "&:hover": {
      backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Stay white in light theme
      ".dark &": {
        backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
      },
    },
    "&.Mui-focused": {
      backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Stay white in light theme
      ".dark &": {
        backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
      },
      "& fieldset": {
        borderColor: POPUP_COLORS.primaryBlue, // Blue when focused
        borderWidth: "2px",
      },
    },
  },
  "& .MuiInputBase-input": {
    backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Clean white for light theme
    color: POPUP_COLORS.textPrimary, // Vibrant blue text
    ".dark &": {
      backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
      color: "#ffffff !important", // White text in dark mode
    },
  },
  "& .MuiInputLabel-root": {
    color: POPUP_COLORS.textPrimary, // Vibrant blue for labels
    fontWeight: 500,
    ".dark &": {
      color: "#ffffff !important", // White labels in dark mode
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: POPUP_COLORS.textPrimary, // Vibrant blue for placeholders
    opacity: 0.8,
    ".dark &": {
      color: "#ffffff !important", // White placeholders in dark mode
      opacity: 0.7,
    },
  },
  "& .MuiInputBase-input::-webkit-input-placeholder": {
    color: `${POPUP_COLORS.textPrimary} !important`, // WebKit browsers
    opacity: 0.8,
    ".dark &": {
      color: "#ffffff !important", // White placeholders in dark mode
      opacity: 0.7,
    },
  },
  "& .MuiInputBase-input::-moz-placeholder": {
    color: `${POPUP_COLORS.textPrimary} !important`, // Firefox
    opacity: 0.8,
    ".dark &": {
      color: "#ffffff !important", // White placeholders in dark mode
      opacity: 0.7,
    },
  },
  "& .MuiInputBase-input:-ms-input-placeholder": {
    color: `${POPUP_COLORS.textPrimary} !important`, // IE/Edge
    opacity: 0.8,
    ".dark &": {
      color: "#ffffff !important", // White placeholders in dark mode
      opacity: 0.7,
    },
  },
  "& .MuiFormHelperText-root": {
    color: POPUP_COLORS.textPrimary, // Blue helper text in light mode
    fontSize: "0.75rem",
    marginLeft: 0,
    marginTop: 0.5,
    ".dark &": {
      color: "#ffffff !important", // White helper text in dark mode
    },
  },
  // Disabled state styles - ensure placeholders and text stay white in dark mode
  "&.Mui-disabled": {
    "& .MuiInputBase-input": {
      ".dark &": {
        color: "#ffffff !important", // White text in dark mode even when disabled
        backgroundColor: "#0f172a !important", // Dark background
      },
    },
    "& .MuiInputBase-input::placeholder": {
      ".dark &": {
        color: "#ffffff !important", // White placeholders in dark mode even when disabled
        opacity: 0.7,
      },
    },
    "& .MuiInputBase-input::-webkit-input-placeholder": {
      ".dark &": {
        color: "#ffffff !important", // White placeholders in dark mode even when disabled
        opacity: 0.7,
      },
    },
    "& .MuiInputBase-input::-moz-placeholder": {
      ".dark &": {
        color: "#ffffff !important", // White placeholders in dark mode even when disabled
        opacity: 0.7,
      },
    },
    "& .MuiInputBase-input:-ms-input-placeholder": {
      ".dark &": {
        color: "#ffffff !important", // White placeholders in dark mode even when disabled
        opacity: 0.7,
      },
    },
  },
  // Additional specificity for disabled inputs
  "&.Mui-disabled .MuiInputBase-input": {
    ".dark &": {
      color: "#ffffff !important", // White text in dark mode even when disabled
      backgroundColor: "#0f172a !important", // Dark background
    },
  },
  "&.Mui-disabled input": {
    ".dark &": {
      color: "#ffffff !important", // White input text in dark mode even when disabled
    },
  },
});

// Common OTP input styles - Clean white in light, dark in dark theme
export const getOTPInputStyles = () => ({
  width: { xs: 60, sm: 70, md: 75 },
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Clean white for light theme
    ".dark &": {
      backgroundColor: "#1e293b !important", // slate-800 - darker background for better contrast
    },
    "& fieldset": {
      borderColor: "#D1D5DB", // Light gray border like contact form
      borderWidth: "1px",
      ".dark &": {
        borderColor: "#374151", // slate-700 - lighter border for better visibility
      },
    },
    "&:hover fieldset": {
      borderColor: POPUP_COLORS.primaryBlue, // Blue on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: POPUP_COLORS.primaryBlue, // Blue when focused
      borderWidth: "2px",
    },
  },
  "& .MuiInputBase-input": {
    color: `${POPUP_COLORS.textPrimary} !important`, // Vibrant blue text
    fontWeight: 600,
    fontSize: { xs: "0.9rem", sm: "1rem" },
    textAlign: "center",
    ".dark &": {
      color: "#ffffff !important", // White text in dark mode
      backgroundColor: "#1e293b !important", // Ensure dark background
    },
  },
});

// Common primary button styles - Updated to match Join The Stock Navii Community button
export const getPrimaryButtonStyles = (theme: Theme) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: "1rem",
  py: 1.5,
  px: 3,
  borderRadius: 2,
  textTransform: "none" as const,
  border: "none",
  background: `${POPUP_COLORS.primaryBlue} !important`, // Blue background like Join button
  color: `${POPUP_COLORS.white} !important`, // White text
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
  "&:hover": {
    background: `${POPUP_COLORS.primaryBlueHover} !important`, // Darker blue on hover
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(37, 99, 235, 0.4)",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.2)",
  },
  "&:active": {
    transform: "translateY(-1px)",
    transition: "all 0.15s ease-out",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
  },
  "&:disabled": {
    background: `${POPUP_COLORS.disabled} !important`,
    color: `${POPUP_COLORS.disabledText} !important`,
    transform: "none",
    boxShadow: "none",
  },
});

// Common secondary button styles - Updated to match Join The Stock Navii Community button
export const getSecondaryButtonStyles = () => ({
  fontFamily: "inherit",
  fontWeight: 500,
  fontSize: "1rem",
  py: 1.5,
  px: 3,
  borderRadius: 2,
  textTransform: "none" as const,
  border: "none",
  background: `${POPUP_COLORS.primaryBlue} !important`, // Blue background like Join button
  color: `${POPUP_COLORS.white} !important`, // White text
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
  "&:hover": {
    background: `${POPUP_COLORS.primaryBlueHover} !important`, // Darker blue on hover
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(37, 99, 235, 0.3)",
  },
  "&:disabled": {
    background: `${POPUP_COLORS.disabled} !important`,
    color: `${POPUP_COLORS.disabledText} !important`,
    transform: "none",
    boxShadow: "none",
  },
});

// Common resend button styles - Updated to match dashboard theme
export const getResendButtonStyles = () => ({
  color: POPUP_COLORS.textPrimary,
  textTransform: "none" as const,
  fontSize: "0.85rem",
  "&:hover": {
    backgroundColor: "rgba(37, 99, 235, 0.1)",
  },
});

// Common edit button styles - Updated to match dashboard theme
export const getEditButtonStyles = () => ({
  color: POPUP_COLORS.textPrimary,
  p: 0.5,
  "&:hover": {
    backgroundColor: "rgba(37, 99, 235, 0.1)",
  },
  // Dark mode: make edit icon white
  ".dark &": {
    color: "#ffffff !important", // White edit icon in dark mode
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Light hover background for dark mode
    },
  },
});

// Common text styles - Updated to match dashboard theme
export const getTextStyles = () => ({
  color: POPUP_COLORS.textPrimary,
  fontSize: "0.85rem",
  // Dark mode: make text white
  ".dark &": {
    color: "#ffffff !important", // White text in dark mode
  },
});

// Common country select styles - Clean white in light, dark in dark theme
export const getCountrySelectStyles = (theme: Theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Clean white for light theme
    backdropFilter: "blur(10px)",
    transition: "all 0.2s ease-in-out",
    ".dark &": {
      backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
    },
    "& fieldset": {
      borderColor: "#D1D5DB", // Light gray border like contact form
      ".dark &": {
        borderColor: "#1e293b", // slate-800 - proper dark border
      },
    },
    "&:hover fieldset": {
      borderColor: POPUP_COLORS.primaryBlue, // Blue on hover
    },
    "&:hover": {
      backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Stay white in light theme
      ".dark &": {
        backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
      },
    },
    "&.Mui-focused": {
      backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Stay white in light theme
      ".dark &": {
        backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
      },
      "& fieldset": {
        borderColor: POPUP_COLORS.primaryBlue, // Blue when focused
      },
    },
  },
  "& .MuiSelect-select": {
    backgroundColor: `${POPUP_COLORS.backgroundSolid} !important`, // Clean white for light theme
    color: POPUP_COLORS.textPrimary, // Vibrant blue text
    ".dark &": {
      backgroundColor: "#0f172a !important", // slate-950 - matches homepage dark theme
      color: "#ffffff !important", // White text in dark mode
    },
  },
  "& .MuiSvgIcon-root": {
    color: POPUP_COLORS.textPrimary, // Vibrant blue dropdown arrow
    ".dark &": {
      color: "#ffffff !important", // White dropdown arrow in dark mode
    },
  },
});

// Common icon styles - White in dark mode
export const getIconStyles = () => ({
  color: POPUP_COLORS.textPrimary, // Blue in light mode
  ".dark &": {
    color: "#ffffff !important", // White in dark mode
  },
});

// Common link styles - White in dark mode
export const getLinkStyles = () => ({
  color: POPUP_COLORS.textPrimary, // Blue in light mode
  textDecoration: "none",
  textTransform: "none" as const,
  "&:hover": {
    textDecoration: "underline",
  },
  ".dark &": {
    color: "#ffffff !important", // White in dark mode
  },
});

// Common error message styles - White in dark mode
export const getErrorStyles = () => ({
  color: "#f44336", // Red for errors
  fontSize: "0.875rem",
  ".dark &": {
    color: "#ffffff !important", // White in dark mode
  },
});

export const THEME_COLORS = {
    primary: "#2563eb", // Updated to match dashboard blue
    secondary: "#1e40af", // Darker blue for secondary elements
    white: "#ffffff",
  } as const;

// Mobile-specific styles for better responsiveness
export const getMobileStyles = () => ({
  // Hide scrollbars on all devices while maintaining scroll functionality
  "&::-webkit-scrollbar": {
    display: "none", // Hide scrollbar on WebKit browsers (Chrome, Safari, Edge)
    width: 0,
    height: 0,
  },
  "&::-webkit-scrollbar-track": {
    display: "none",
  },
  "&::-webkit-scrollbar-thumb": {
    display: "none",
  },
  "&::-webkit-scrollbar-corner": {
    display: "none",
  },
  "&": {
    scrollbarWidth: "none", // Hide scrollbar on Firefox
    msOverflowStyle: "none", // Hide scrollbar on IE/Edge
    "-webkit-overflow-scrolling": "touch", // Enable smooth scrolling on iOS
  },
});
  
  export const MOBILE_BREAKPOINT = "(max-width: 1024px)";
  