<template>
  <div>
    <div id="main"></div>
    <children-temp msg="32323">
      <slot name="a"></slot>
      <slot name="b"></slot>
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
import { mapMutations, mapGetters, mapActions } from 'vuex';
import ChildrenTemp from '../components/ChildrenTemp';
// echarts按需引入
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { ScatterChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use(
    [GridComponent, ScatterChart, CanvasRenderer]
);

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

    var myChart = echarts.init(document.getElementById('main'));
    const option = {
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 20,
        type: 'scatter',
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.20],
          [11.5, 7.20],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ]
      }]
    };
    myChart.setOption(option);
  },
  computed: {
    ...mapGetters(['count'])
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
#main {
  width: 100%;
  height: 400px;
}
.btn-container {
  display: flex;
  justify-content: center;
  width: 400px;
  height: 600px;
  .btn {
    display: flex;
    color: $green;
    font-size: 16px;
  }
}
</style>
