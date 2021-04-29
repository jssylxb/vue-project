<template>
  <div>这是foo2</div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  created() {
    console.log(this.$route.meta);
  }
});
</script>
