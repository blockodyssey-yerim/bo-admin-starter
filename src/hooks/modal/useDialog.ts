import { useContext } from 'react';

import DialogContext from 'contexts/dialog/DialogContext';

const useDialog = () => {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error('`useDialog` should be used within a `DialogProvider`');
    }

    return context.handleDialog;
};

export default useDialog;
