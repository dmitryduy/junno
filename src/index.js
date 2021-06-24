import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";

const theme = {
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)',
        laptop: '(max-width: 1400px) and (min-width: 768px)',
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
            <App />
    </ThemeProvider>
 ,
  document.getElementById('root')
);

