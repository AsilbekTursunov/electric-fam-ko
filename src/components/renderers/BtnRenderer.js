// Usage:
import { createApp } from 'vue'
import ButtonRender from './ButtonRenderer.vue'

export default class ButtonRenderer {
  constructor(props) {
    const { value } = props
    const { style, size } = props.columnInfo.renderer.options 
    const app = createApp(ButtonRender, {
      name: value,
      size,
      style,
      onClick: () => {
        // alert(`Row ${rowKey} clicked!`)
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


