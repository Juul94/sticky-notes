import { useTheme } from '@mui/system';
import { CustomTheme } from '~/types/theme';

export const getMuiTheme = (): CustomTheme => {
    const theme = useTheme<CustomTheme>();
    return theme;
};
