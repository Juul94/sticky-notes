import { Box, SxProps } from '@mui/material';

interface ContentBoxProps {
    children?: React.ReactNode;
    sx?: SxProps;
}

const ContentBox = ({ children, sx }: ContentBoxProps) => {
    if (children) {
        return (
            <Box
                sx={{
                    ...sx,
                    borderRadius: 0.5,
                }}>
                {children}
            </Box>
        );
    }
    return (
        <Box
            sx={{
                ...sx,
                borderRadius: 0.5,
            }}
        />
    );
};

export default ContentBox;
