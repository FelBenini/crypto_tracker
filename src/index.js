import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CurrencyContext from './currencyContext.js';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C0CA9",
    },
    secondary: {
      main: "#700B9A",
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CurrencyContext>
        <App />
      </CurrencyContext>
    </ThemeProvider>
  </React.StrictMode>
);
