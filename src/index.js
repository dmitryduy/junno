import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";

const theme = {
    media: {
        phone: '(max-width): 425px',
        tablet: '(max-width): 768px and (min-width) 426px',
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
            <App />
    </ThemeProvider>
 ,
  document.getElementById('root')
);

