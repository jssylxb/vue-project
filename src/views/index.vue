<template>
  <div>
    <div id="main"></div>
    <el-collapse accordion :style="{margin: '10px'}" >
      <el-collapse-item title="vuex demo" name="1">
        <div class="dog-container">
          <p>{{dogImgUrlGetters}}</p>
          <img v-if="dogImg" class="dogImg" :src="dogImg" alt="dog">
          <img v-else class="dogImg" src="../assets/imgLoading.png" alt="loading">
          <br>
          <el-button type="primary" @click="changeImg">change</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item title="children demo" name="2">
        <children-temp msg="32323">
          <template v-slot:a>
            <p>1</p>
          </template>
          <template v-slot:b>
            <p>2</p>
          </template>
        </children-temp>
      </el-collapse-item>
      <el-collapse-item title="router demo" name="3">
        <router-link to="/foo">Go to Foo</router-link>
        <br>
        <router-link to="/bar">Go to Bar</router-link>
        <br>
        <a href="javascript:void(0);" @click.prevent="goToTest">Go to test</a>
      </el-collapse-item>
      <el-collapse-item title="mock demo" name="4">
        <pre>
          {{mockData}}
        </pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import ChildrenTemp from '../components/ChildrenTemp';
import useDog from '../hooks/useDog';
// echarts按需引入
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { ScatterChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { get } from '@/utils/request';
import { onMounted, ref } from '@vue/runtime-core';
import '@/style/index.scss';

echarts.use(
    [GridComponent, ScatterChart, CanvasRenderer]
);

export default {
  components: {
    ChildrenTemp
  },
  setup() {
    // 封装自定义hooks
    const { dogImg, changeImg, dogImgUrlGetters } = useDog();
    // 路由 demo,此处为展示路由能力,正式开发需注意setup尽可能设计成纯函数,逻辑代码抽象至hooks,如上行代码
    const route = useRoute();
    const router = useRouter();
    const goToTest = () => {
      router.push('/test');
    }
    // mock demo,此处为展示mock能力,正式开发需注意setup尽可能设计成纯函数,逻辑代码抽象至hooks,如上行代码
    const mockData = ref();
    onMounted(async () => {
      const { data } = await get('/mock/articles');
      mockData.value = data;
      setInterval(async () => {
        const { data } = await get('/mock/articles');
        mockData.value = data;
      }, 5000);
    });
    return {
      dogImg,
      changeImg,
      dogImgUrlGetters,
      goToTest,
      route,
      router,
      mockData
    }
  },
  mounted() {
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
  }
};
</script>

<style scoped lang="scss">
.dogImg {
  @include grayscale;
}
</style>
