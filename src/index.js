import React from 'react';
import ReactDOM from 'react-dom';
import StylesProvider from '@material-ui/styles/StylesProvider';
import CssBaseline from '@material-ui/styles/StylesProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n' +
      '    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n' +
      '    sans-serif',
  },
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline/>
        <App/>
      </StylesProvider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
