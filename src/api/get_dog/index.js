import { get } from '@/utils/axios';

export const getDog = () => {
  return get('/api/breeds/image/random');
};
