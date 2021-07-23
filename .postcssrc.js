module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
      selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px。
      propList: ['*'], //可以从px更改为rem的属性。
      minPixelValue: 2 // 设置要替换的最小像素值。
    }
  }
};
