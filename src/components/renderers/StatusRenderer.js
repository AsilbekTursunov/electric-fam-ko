// Usage:
import { createApp } from 'vue'
import CustomActiveButton from '../CustomActiveButton.vue'

export default class ButtonRenderer {
  constructor(props) {
    const { rowKey, value } = props
    const { size } = props.columnInfo.renderer.options
    let style = 'default'
    if (value === '승인중') {
      style = 'success'
    } else if (value === '반려') {
      style = 'primary'
    } else if (value === '승인완료') {
      style = 'danger'
    } else if (value === '승인') {
      style = 'success1'
    } else if (value === '취소') {
      style = 'danger1'
    } else if ((value === '미정' || value === '예정' || value === '신청') && size === 'short') {
      style = 'default1'
    }

    const app = createApp(CustomActiveButton, {
      name: value,
      style,
      onClick: () => {
        alert(`Row ${rowKey} clicked!`)
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


