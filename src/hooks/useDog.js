import { onMounted, ref } from 'vue';
import { getDog } from '@/api/get_dog';

export default () => {
  const imgSrc = ref('');
  const getImg = async () => {
    const data = await getDog();
    imgSrc.value = data.message;
  };
  onMounted(() => {
    getImg();
  });
  return {
    imgSrc,
    getImg
  };
};
