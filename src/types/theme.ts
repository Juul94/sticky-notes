import { Theme } from '@mui/system';

export interface CustomTheme extends Theme {
    colors: {
        background: string;
        paperPatch: string;
        paperPatch2: string;
        border: string;
        divider: string;
        noteColors: {
            yellow: string;
            teal: string;
            pink: string;
            orange: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        hover: {
            grey: string;
            grey2: string;
            green: string;
        };
    };
}
