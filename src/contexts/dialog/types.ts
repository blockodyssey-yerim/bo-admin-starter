export interface IDialogOptions {
    messageType?: string;
    confirmType?: string;
    title?: string;
    message?: string;
    text?: string;
    cancelText?: string;
}

export interface IDialogContext {
    options: IDialogOptions;
    handleDialog: (options: IDialogOptions) => Promise<boolean>;
}
