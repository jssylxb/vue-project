<template>
  <div>
    <el-input type="text" v-model="verify"></el-input>
    <VueImageVerify ref="verifyRef"/>
    <el-button @click="checkVerify">校验</el-button>
  </div>
</template>

<script>
import VueImageVerify from '../components/VueImageVerify'
import { ref } from '@vue/runtime-core';
export default {
  components: {
    VueImageVerify
  },
  setup() {
    const verifyRef = ref(null);
    const verify = ref('');
    const checkVerify = () => {
      console.log(verify.value.toLowerCase());
      console.log(verifyRef.value.imgCode.toLowerCase());
    }
    return {
      verify,
      verifyRef,
      checkVerify
    }
  }
};
</script>

<style>

</style>
