// Usage:
import { createApp } from 'vue'
import CheckBox from './CheckBox.vue'

export default class CheckBoxRender {
  constructor(){ 
    const app = createApp(CheckBox, { 
      onClick: () => {
         
      },
    })

    const container = document.createElement('div')
    app.mount(container)

    this.el = container.firstElementChild
  }

  getElement() {
    return this.el
  }
}
