import { shallowEqual } from 'react-redux';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { setClose, setConfirm } from 'slices/modalSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { DefaultButton as ModalButton } from 'components/Buttons';
import { StyledDialogActions, StyledTypography } from 'components/Modals/ConfirmModal/styles';

function ConfirmModal() {
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

    const onConfirm = () => dispatch(setConfirm());

    const onClose = () => dispatch(setClose());

    return (
        msgOpen &&
        messageType === 'confirm' && (
            <Dialog
                disableEscapeKeyDown
                open={msgOpen}
                onClose={(_event, reason) => {
                    if (reason !== 'backdropClick') {
                        onClose();
                    }
                }}
            >
                <DialogTitle>{title || '확인'}</DialogTitle>
                <DialogContent>
                    <StyledTypography variant="body2">{message}</StyledTypography>
                </DialogContent>
                <StyledDialogActions>
                    <ModalButton size="small" text="확인" onClick={onConfirm} />
                    <ModalButton size="small" color="error" text="취소" onClick={onClose} />
                </StyledDialogActions>
            </Dialog>
        )
    );
}

export default ConfirmModal;
