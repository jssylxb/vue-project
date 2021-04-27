<template>
  <div>这是foo2</div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.meta);
  }
};
</script>
