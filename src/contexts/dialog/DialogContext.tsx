import { createContext } from 'react';

import { IDialogContext } from 'contexts/dialog/types';

const DialogContext = createContext<IDialogContext | undefined>(undefined);

export default DialogContext;
