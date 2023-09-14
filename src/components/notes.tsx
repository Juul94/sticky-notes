import { Box, Typography } from '@mui/material';
import { getMuiTheme } from '~/util/getMuiTheme';
import { Category, Note } from '~/types/types';
import AddIcon from '@mui/icons-material/Add';

interface NotesProps {
    selectedCategory: Category | undefined;
    notes: Note[];
}

const Notes: React.FC<NotesProps> = ({ selectedCategory, notes }) => {
    if (!selectedCategory || !notes) return null;

    const theme = getMuiTheme();
    const hasNotes = notes && notes.length > 0;

    return (
        <Box sx={{ flex: 3 / 4 }}>
            <Typography variant='h1' color={theme.colors.text.primary}>
                {selectedCategory?.name}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    mt: 2,
                    gap: 2,
                }}>
                {hasNotes ? (
                    notes.map((note: Note, index: number) => (
                        <Box
                            key={`${note.id}-${index}`}
                            sx={{
                                flex: 1 / 3,
                                p: 2,
                                borderRadius: 1.5,
                                backgroundColor: note.color || '#ccc',
                                position: 'relative',
                                paddingBottom: '26.134%',
                                boxShadow: '0px 4px 6px 0px rgba(100, 116, 139, 0.12)',
                            }}>
                            <Typography variant='body2' color={theme.colors.text.primary}>
                                {note.title}
                            </Typography>
                            <Typography variant='subtitle1' color={theme.colors.text.primary}>
                                {note.title}
                            </Typography>
                        </Box>
                    ))
                ) : (
                    <Typography variant='h4' marginTop={2} color={theme.colors.text.primary}>
                        No notes found!
                    </Typography>
                )}

                <Box
                    sx={{
                        flex: 1 / 3,
                        borderRadius: 1.5,
                        p: 2,
                        backgroundColor: theme.colors.hover.grey,
                        boxShadow: '0px 4px 6px 0px rgba(100, 116, 139, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            backgroundColor: theme.colors.hover.grey2,
                            cursor: 'pointer',
                        },
                    }}>
                    <AddIcon sx={{ fontSize: 50, color: theme.colors.text.primary }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Notes;
