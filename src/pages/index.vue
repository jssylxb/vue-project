<template>
  <div>
    <children-temp msg="32323">
      <p slot="a">----</p>
      <p slot="b">++++</p>
    </children-temp>
    <el-input placeholder="请输入内容"></el-input>
    <router-link to="/foo">Go to Foo</router-link>
    <br>
    <router-link to="/bar">Go to Bar</router-link>
    <br>
    <span>{{count}}</span>
    <div class="btn-container">
      <button @click="addNum" class="btn">提交表单</button>
    </div>
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
// import { get } from '@/utils/http';
import { mapMutations, mapGetters, mapActions } from 'vuex';
import ChildrenTemp from '../components/ChildrenTemp';

export default {
  components: {
    ChildrenTemp
  },
  data() {
      return {
          msg: 123
      }
  },
  async created() {
    const data = await this.getListInfo();
    console.log(data);
  },
  computed: {
    ...mapGetters(['count'])
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['getListInfo']),
    addNum() {
        this.add();
    }
  }
};
</script>

<style scoped lang="scss">
.btn-container{
  display: flex;
  justify-content: center;
  width: 400px;
  height: 600px;
  .btn {
    color: $green;
    font-size: 16px;
  }
}
</style>
