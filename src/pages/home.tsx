import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { getMuiTheme } from '~/util/getMuiTheme';

import MainMenu from '~/components/mainMenu';
import Notes from '~/components/notes';
import { getCategories, getNotesByCategory } from '~/data/firebaseService';
import { Category, Note } from '~/types/types';

const Home = () => {
    const theme = getMuiTheme();

    const [notesByCategory, setNotesByCategory] = useState<Note[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [selectedCategory, setSelectedCategory] = useState<Category>();

    useEffect(() => {
        getCategories().then((fetchedCategories) => {
            setCategories(fetchedCategories);
            setSelectedCategory(fetchedCategories[0]);
        });
    }, []);

    const handleCategoryClick = (category: Category) => {
        setSelectedCategory(category);
    };

    const fetchNotesByCategory = async (selectedCategory: Category) => {
        try {
            if (selectedCategory) {
                const fetchedNotes = await getNotesByCategory(selectedCategory.id || '');
                setNotesByCategory(fetchedNotes);
            }
        } catch (error) {
            console.error('Error fetching notes by category:', error);
        }
    };

    useEffect(() => {
        if (!selectedCategory || !selectedCategory.id) return;

        fetchNotesByCategory(selectedCategory);
    }, [selectedCategory]);

    // const handleCreateNote = async () => {
    //     const note = { content: newNote, timestamp: new Date() };
    //     try {
    //         const noteId = await createNote(note);
    //         setNotes([...notes, { id: noteId, ...note }]);
    //         setNewNote('');
    //     } catch (error) {
    //         console.error('Error creating note:', error);
    //     }
    // };

    return (
        <Container maxWidth='md'>
            <Box
                sx={{
                    backgroundColor: theme.colors.paperPatch,
                    borderRadius: 2.5,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}
                mt={2}>
                <MainMenu
                    categories={categories}
                    handleCategoryClick={handleCategoryClick}
                    selectedCategory={selectedCategory}
                />

                <Notes selectedCategory={selectedCategory} notes={notesByCategory} />
            </Box>
        </Container>
    );
};

export default Home;
