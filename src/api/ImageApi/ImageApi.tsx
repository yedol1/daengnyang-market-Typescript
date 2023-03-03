import { AxiosPromise } from 'axios';
import { imgApiInstance } from '../CustomAxios';

/* 단일 이미지 업로드 */
export const postSingleImg = (imgFormData: FormData): AxiosPromise => {
  return imgApiInstance.post('/uploadfile', imgFormData);
};

/* 다중 이미지 업로드 */
export const postMultiImg = (imgFormData: FormData): AxiosPromise => {
  return imgApiInstance.post('/uploadfile', imgFormData);
};
