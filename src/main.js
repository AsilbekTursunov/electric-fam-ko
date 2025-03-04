import { app } from '@/plugins/app-wrapper'
import router from '@/routers'
import store from '@/stores'
import TuiGrid from 'vue3-tui-grid'

import './style.css'
import "@/styles/index.scss"
import '@/plugins'
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css'


app.use(TuiGrid)
app.use(store)
app.use(router)
app.mount('#app')
