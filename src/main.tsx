import ReactDOM from 'react-dom';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)