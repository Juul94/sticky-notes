import { createTheme } from '@mui/material/styles';
import { CustomTheme } from '~/types/theme';

const defaultTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    spacing: 8,
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        body1: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 2,
            textTransform: 'none',
        },
        body2: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: 800,
            lineHeight: 2,
            textTransform: 'none',
        },
        subtitle1: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: 2,
            textTransform: 'none',
        },
        subtitle2: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '12px',
            fontWeight: 800,
            lineHeight: 2,
            textTransform: 'none',
        },
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: 2,
            textTransform: 'none',
        },
        h2: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '18px',
            lineHeight: 2,
            textTransform: 'none',
        },
        h3: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: 2,
            textTransform: 'none',
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 2,
            textTransform: 'none',
        },
    },
});

const theme: CustomTheme = {
    ...defaultTheme,
    colors: {
        background: '#cad6c6',
        paperPatch: '#fafafa',
        paperPatch2: '#f5f5f5',
        border: '#efefef',
        divider: '#dedede',
        noteColors: {
            yellow: '#fdf3b4',
            teal: '#d1eaed',
            pink: '#ffdadb',
            orange: '#ffd4aa',
        },
        text: {
            primary: '#212528',
            secondary: '#444444',
            tertiary: '#858585',
        },
        hover: {
            grey: '#ebebeb',
            grey2: '#d1d1d1',
            green: '#cad6c6',
        },
    },
};

export default theme;
