import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: '#ffffff',
                fontFamily: '"Roboto", sans-serif',
                backgroundColor: '#cccccc',
                margin: '0',
                padding: '0'
            }            
        }
    },
    colors: {
        green: '#00ff68',
        blue: '#179eff',
        gray: {
            100: '#1b1c1c',
            200: '#1a1b1b',
            300: '#191a1a'
        }
    }
})

export default theme;