import { ImageFilesType } from 'pages/Dashboard/types';

export interface IUploadImage {
    imageIndex: number;
    setImageIndex: React.Dispatch<React.SetStateAction<number>>;
    imageFiles?: ImageFilesType[];
}
