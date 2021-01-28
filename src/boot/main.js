/**
 * main boot file
 */
// import _router from '../router/permission'
import '../components/ECharts/EChartsConfig'
import '../components/Markdown/Markdown'
import '../quasar.manage.config'
import '../axios/fetchData'
import { handleBaiduStatistics } from 'src/utils/clone-utils'
import { colors } from 'quasar'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ app, router, Vue, publicPath }) => {
  // 解构只保留需要的东西
  const { setBrand } = colors
  setBrand('mycolor', '#f33')
  handleBaiduStatistics()
}
