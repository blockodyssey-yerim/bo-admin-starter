import { shallowEqual } from 'react-redux';

import { Dialog, DialogTitle } from '@mui/material';

import { setClose } from 'slices/modalSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { DefaultButton as CloseButton } from 'components/Buttons';
import { StyledDialogActions, StyledDialogContent } from 'components/Modals/DetailModal/styles';
import QuantityTable from 'pages/Dashboard/Detail/components/QuantityTable';

function DetailModal() {
    const dispatch = useAppDispatch();
    const { detailOpen, data } = useAppSelector(
        (state) => ({ detailOpen: state.modal.detailOpen, data: state.modal.data }),
        shallowEqual
    );

    const onClose = () => dispatch(setClose());

    return (
        detailOpen && (
            <Dialog
                disableEscapeKeyDown
                open={detailOpen}
                onClose={(_event, reason) => {
                    if (reason !== 'backdropClick') {
                        onClose();
                    }
                }}
            >
                <DialogTitle>{data?.title}</DialogTitle>
                <StyledDialogContent>{data?.type === 'quantity' && <QuantityTable />} </StyledDialogContent>
                <StyledDialogActions>
                    <CloseButton size="small" variant="contained" text="닫기" onClick={onClose} />
                </StyledDialogActions>
            </Dialog>
        )
    );
}

export default DetailModal;
