<template>
  <h1>{{ msg }}</h1>
  <van-button type="primary" @click="getImg">获取图片</van-button>
  <img v-if="imgSrc" class="dogImg" :src="imgSrc" alt="dog" />
  <img v-else class="dogImg" src="@/assets/imgLoading.png" alt="loading" />
</template>

<script>
import { Button } from 'vant';
import useDog from '@/hooks/useDog';

export default {
  components: {
    [Button.name]: Button
  },
  setup() {
    const { imgSrc, getImg } = useDog();
    return {
      imgSrc,
      getImg,
      msg: 'demo'
    };
  }
};
</script>

<style lang="scss">
h1 {
  font-size: 18px;
  color: $primary;
}
.dogImg {
  width: 50px;
  height: 50px;
  display: flex;
}
</style>
