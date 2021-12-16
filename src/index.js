
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { TrackIt } from './components/TrackIt';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';





const theme = createTheme({
  palette: {
    type: "dark",
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider theme ={theme}>
    <CssBaseline />
    <TrackIt />
    </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
