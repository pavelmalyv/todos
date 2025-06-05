import { string } from 'yup';

export const todoNameFieldSchema = string().max(100, 'Максимальная длина задачи 100 символов');
