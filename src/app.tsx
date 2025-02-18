import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

import { theme } from '@components/theme';
import { ThemeProvider } from '@emotion/react';
import { ModalProvider } from 'context/ModalContext';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  );
}
