import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import { CustomTheme } from '~/types/theme';

const ModalContent = styled(Box)`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: ${(props) => (props.theme as CustomTheme).colors.paperPatch2};
    padding: 16px;
    border: none;
    outline: none;
`;

interface DefaultModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: JSX.Element;
}

const DefaultModal = ({ isOpen, handleClose, children }: DefaultModalProps) => {
    if (!isOpen || !children) return null;

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};

export default DefaultModal;
