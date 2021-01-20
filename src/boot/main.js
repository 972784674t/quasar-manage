
// main boot file

import _router from '../router/permission'
import '../components/ECharts/EChartsConfig'
import '../components/Markdown/Markdown'
import '../quasar.manage.config'
import '../axios/fetchData'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default ({ app, router, Vue }) => {
  // Replace with router with Navigation Guards
  router = _router
}
