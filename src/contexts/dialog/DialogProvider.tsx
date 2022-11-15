import React, { useCallback, useMemo, useRef, useState } from 'react';

import { Dialog, DialogTitle } from '@mui/material';

import { DefaultButton } from 'components/Buttons';
import DialogContext from 'contexts/dialog/DialogContext';
import { StyledDialogActions, StyledDialogContent, StyledTypography } from 'contexts/dialog/styles';
import { IDialogContext, IDialogOptions } from 'contexts/dialog/types';

export default function DialogProvider({ children }: { children: React.ReactElement }) {
    const promiseInfo = useRef<(value: boolean | PromiseLike<boolean>) => void>(() => {});

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<IDialogOptions>({});

    const handleDialog = useCallback((options) => {
        return new Promise<boolean>((resolve) => {
            promiseInfo.current = resolve;
            setOpen(true);
            setOptions(options);
        });
    }, []);

    const onConfirm = () => {
        setOpen(false);
        promiseInfo.current(true);
        promiseInfo.current = () => {};
    };

    const onClose = () => {
        setOpen(false);
        promiseInfo.current(false);
        promiseInfo.current = () => {};
    };

    const value: IDialogContext = useMemo(() => ({ options, handleDialog }), [options, handleDialog]);

    return (
        <DialogContext.Provider value={value}>
            {children}
            {open && (
                <Dialog
                    disableEscapeKeyDown
                    open={open}
                    onClose={(_event, reason) => {
                        if (reason !== 'backdropClick') {
                            onClose();
                        }
                    }}
                >
                    <DialogTitle>{options?.title || '확인'}</DialogTitle>
                    <StyledDialogContent>
                        {options?.message && <StyledTypography variant="body2">{options.message}</StyledTypography>}
                    </StyledDialogContent>
                    <StyledDialogActions>
                        {options?.messageType === 'confirm' && (
                            <DefaultButton size="small" text={options.cancelText || '취소'} onClick={onClose} />
                        )}
                        <DefaultButton
                            size="small"
                            color="primary"
                            variant="contained"
                            text={options?.text || '확인'}
                            onClick={onConfirm}
                        />
                    </StyledDialogActions>
                </Dialog>
            )}
        </DialogContext.Provider>
    );
}
