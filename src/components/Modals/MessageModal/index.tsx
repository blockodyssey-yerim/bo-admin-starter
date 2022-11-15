import { shallowEqual } from 'react-redux';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { setClose } from 'slices/modalSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { DefaultButton as ModalButton } from 'components/Buttons';
import { StyledDialogActions, StyledTypography } from 'components/Modals/MessageModal/styles';

function MessageModal() {
    const dispatch = useAppDispatch();
    const { msgOpen, messageType, title, message } = useAppSelector(
        (state) => ({
            msgOpen: state.modal.msgOpen,
            messageType: state.modal.messageType,
            title: state.modal.title,
            message: state.modal.message
        }),
        shallowEqual
    );

    const onClose = () => dispatch(setClose());

    return (
        msgOpen &&
        messageType === 'message' && (
            <Dialog
                disableEscapeKeyDown
                open={msgOpen}
                onClose={(_event, reason) => {
                    if (reason !== 'backdropClick') {
                        onClose();
                    }
                }}
            >
                <DialogTitle>{title || '알림'}</DialogTitle>
                <DialogContent>
                    <StyledTypography variant="body2">{message}</StyledTypography>
                </DialogContent>
                <StyledDialogActions>
                    <ModalButton size="small" variant="contained" text="확인" onClick={onClose} />
                </StyledDialogActions>
            </Dialog>
        )
    );
}

export default MessageModal;
