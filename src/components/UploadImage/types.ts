import { ImageFilesType } from 'pages/Dashboard/types';

export interface IUploadImage {
    text: string;
    imageFiles?: ImageFilesType[];
    setImageFiles: React.Dispatch<React.SetStateAction<ImageFilesType[]>>;
    onConfirm: (type: string, obj: { imageIndex?: number; index: number }) => void;
    handleDeleteImageFile: (imageIndex: number) => void;
}
