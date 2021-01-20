import Vue from 'vue'

import ECharts from 'vue-echarts'

// Manually introduce ECharts modules to reduce the packaging volume
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/chart/pie'

Vue.component('v-chart', ECharts)
