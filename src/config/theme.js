import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material';
import { grey, green } from '@mui/material/colors';

export const poppins = Poppins({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const theme = (prefersDarkMode = false) =>
    createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: prefersDarkMode ? grey[400] : grey[900]
            },
            secondary: {
                main: prefersDarkMode ? green["A700"] : green[900]
            }
        }
    });