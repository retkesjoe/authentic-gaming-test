import { ThemeProvider, Box, createTheme, useMediaQuery, CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';

import Chat from './features/chat/Chat';
import MessageList from './features/organisms/MessageList/MessageList';

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
      () =>
      createTheme({
          palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          },
      }),
      [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
          component="main"
          sx={{ width: "100%", flexGrow: 1, p: 3, display: "flex", justifyContent: "center" }}
      >
        <MessageList />
        <Chat />
      </Box>
    </ThemeProvider>
  );
}

export default App;
