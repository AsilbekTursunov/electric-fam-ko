import { app } from './app-wrapper'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import koKR from 'element-plus/es/locale/lang/ko'

app.use(ElementPlus, {
  locale: koKR,
})


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
