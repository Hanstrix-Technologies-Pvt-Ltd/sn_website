/**
 * @fileoverview User Context for managing user state
 * Provides user information across the application
 */

"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useUser as useClerkUser } from "@clerk/nextjs";

// Types
interface User {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  country?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  getUserByEmail: (email: string) => User | null;
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider component
interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const { isSignedIn, user: clerkUser, isLoaded } = useClerkUser();

  const login = (userData: User) => {
    setUser(userData);
    // Save to localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Also save to a users database in localStorage for email-based retrieval
    const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
    existingUsers[userData.email] = userData;
    localStorage.setItem('users', JSON.stringify(existingUsers));
  };

  const logout = () => {
    console.log("🔓 UserContext logout called");
    console.log("🔓 Current user before logout:", user);
    setUser(null);
    // Remove current user from localStorage but keep users database
    localStorage.removeItem('user');
    console.log("🔓 UserContext logout completed - user should be null");
  };

  const getUserByEmail = (email: string): User | null => {
    console.log("🔍 getUserByEmail called with:", email);
    const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
    console.log("📚 Users database:", existingUsers);
    const foundUser = existingUsers[email] || null;
    console.log("👤 Found user:", foundUser);
    return foundUser;
  };

  // Load user from localStorage on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Automatically fetch user data from Clerk metadata when user signs in
  React.useEffect(() => {
    if (isLoaded && isSignedIn && clerkUser && !user) {
      console.log("🔍 Clerk user signed in, checking for metadata");
      
      const metadata = clerkUser.unsafeMetadata as any;
      const email = clerkUser.emailAddresses[0]?.emailAddress;
      
      console.log("📋 Clerk metadata:", metadata);
      console.log("📧 User email:", email);
      
      if (metadata && metadata.firstName && email) {
        console.log("✅ Found user data in Clerk metadata, auto-login");
        
        const userData: User = {
          firstName: metadata.firstName || "",
          lastName: metadata.lastName || "",
          email: email,
          contactNumber: metadata.phoneNumber || "",
          country: metadata.country || "",
        };
        
        console.log("👤 Auto-login with Clerk metadata:", userData);
        
        // Set user data from Clerk metadata
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Also save to users database for email-based retrieval
        const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
        existingUsers[email] = userData;
        localStorage.setItem('users', JSON.stringify(existingUsers));
      } else {
        console.log("⚠️ No user data found in Clerk metadata");
      }
    }
  }, [isLoaded, isSignedIn, clerkUser, user]);

  // Automatically clear UserContext when Clerk signs out
  React.useEffect(() => {
    if (!isSignedIn && user) {
      console.log("🔓 Clerk signed out detected, clearing UserContext");
      setUser(null);
      localStorage.removeItem('user');
    }
  }, [isSignedIn, user]);

  const value: UserContextType = {
    user,
    setUser,
    isLoggedIn: !!user,
    login,
    logout,
    getUserByEmail,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the user context
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
