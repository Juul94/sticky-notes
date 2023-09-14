import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { getMuiTheme } from '~/util/getMuiTheme';
import AddIcon from '@mui/icons-material/Add';
import ContentBox from './contentBox';
import DefaultModal from './DefaultModal';
import { Category } from '~/types/types';

interface MainMenuProps {
    categories: Category[];
    handleCategoryClick: (category: Category) => void;
    selectedCategory: Category | undefined;
}

const MainMenu: React.FC<MainMenuProps> = ({
    categories,
    handleCategoryClick,
    selectedCategory,
}) => {
    if (!selectedCategory) return null;

    const theme = getMuiTheme();

    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const handleOpenCategoryModal = () => setOpenCategoryModal(true);
    const handleCloseCategoryModal = () => setOpenCategoryModal(false);

    return (
        <>
            <Box
                sx={{
                    flex: 1 / 4,
                    backgroundColor: theme.colors.paperPatch2,
                    borderRadius: 2.5,
                    pb: 3,
                    pt: 1,
                }}>
                <Typography variant='h2' color={theme.colors.text.secondary} paddingX={2}>
                    Menu
                </Typography>

                <Divider />

                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    paddingX={2}
                    justifyContent='space-between'>
                    <Typography
                        variant='body2'
                        color={theme.colors.text.secondary}
                        sx={{ textTransform: 'uppercase' }}>
                        Lists
                    </Typography>

                    <ContentBox>
                        <AddIcon
                            onClick={handleOpenCategoryModal}
                            sx={{
                                color: theme.colors.text.secondary,
                                borderRadius: 0.5,
                                fontSize: 17.5,
                                '&:hover': {
                                    cursor: 'pointer',
                                    backgroundColor: theme.colors.hover.green,
                                },
                            }}
                        />
                    </ContentBox>
                </Box>

                {categories.map((category: Category, index: number) => (
                    <Box
                        key={`${category.name}-${index}`}
                        onClick={() => handleCategoryClick(category)}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 1,
                            '&:hover': {
                                backgroundColor: theme.colors.hover.green,
                                cursor: 'pointer',
                            },
                            px: 2,
                            ...(category.id === selectedCategory.id && {
                                backgroundColor: theme.colors.hover.grey,
                            }),
                        }}>
                        <Box display='flex' justifyContent='row' alignItems='center' gap={1}>
                            <ContentBox
                                sx={{ backgroundColor: category.color, width: 10, height: 10 }}
                            />

                            <Typography
                                key={`${category}-${index}`}
                                variant='subtitle1'
                                color={theme.colors.text.secondary}>
                                {category.name}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: 25,
                                backgroundColor: theme.colors.hover.grey,
                                borderRadius: 0.5,
                                textAlign: 'center',
                            }}>
                            <Typography variant='subtitle2' fontSize={10}>
                                {index}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <DefaultModal isOpen={openCategoryModal} handleClose={handleCloseCategoryModal}>
                <Typography variant='h2' color={theme.colors.text.secondary} paddingX={2}>
                    Add Category
                </Typography>
            </DefaultModal>
        </>
    );
};

export default MainMenu;
