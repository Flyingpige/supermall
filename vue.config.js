// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack:{
//     alias:{
//       "assets":"@/assets",
//       "common":"@/common",
//       "components":"@/components",
//     }
//   }
// })
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    // 其他配置
  },
  chainWebpack: config => {
    config.resolve.alias
        .set('assets', '@/assets')
        .set('common', '@/common')
        .set('components', '@/components')
        .set('network','@/network')
        .set('views','@/views')
    // 其他配置
  }
})

