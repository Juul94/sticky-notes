import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import theme from '~/theme/theme';
import Home from './pages/home';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
