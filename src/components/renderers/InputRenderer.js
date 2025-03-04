// Usage:
import { createApp } from 'vue'
import CustomInput from './InputRenderer.vue'

export default class InputRenderer {
  constructor(props) { 
    const { placeholder, type } = props.columnInfo.renderer.options  
    const app = createApp(CustomInput, { 
      placeholder,
      type
      // onClick: (value) => {
      //   alert(`Row ${rowKey} clicked!`)
      // },
    })

    const container = document.createElement('div')
    app.mount(container)

    this.el = container.firstElementChild
    this.render(props)
  }

  getElement() {
    return this.el
  }

  render(props) {
    this.el.value = String(props.value)
  }
}


