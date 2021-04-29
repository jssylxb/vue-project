<template>
  <div class="childrenTemp">
    <p>{{ msg }}</p>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'ChildrenTemp',
  props: {
    msg: String
  }
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
