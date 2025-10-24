"use client";

import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { store } from "@/components/store";
import { UserProvider } from "@/components/login/userContext";
import { IntlProvider } from "react-intl";
import CustomSnackbar from "@/components/ui/snackbar";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <Provider store={store}>
        <UserProvider>
          <IntlProvider locale="en" messages={{}}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <CustomSnackbar />
            </ThemeProvider>
          </IntlProvider>
        </UserProvider>
      </Provider>
    </ClerkProvider>
  );
}


