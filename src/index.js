import React from 'react';
import ReactDOM from 'react-dom';
import './reboot.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Material UI Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0EB550',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#212121',
      contrastText: '#FFFFFF'
    },
  },
  typography: {
    useNextVariants: true
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();