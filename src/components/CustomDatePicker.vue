<template> 
  <div class="custom-datepicker">  
    <el-date-picker
      v-model="value"
      type="date" 
      :clearable="false"
      placeholder="날짜"   
      :prefix-icon="customPrefix"
      @change="handleSelect" 
    /> 
  </div>
</template>
<script>
import moment from'moment'
import { h, shallowRef } from 'vue'  
import IconCalendar from './IconCalendar.vue'
 
const customPrefix = shallowRef({
  render() {
    return h('p', [h(IconCalendar)])
  },
})
export default {
  name: 'CustomDatePicker', 
  props: {
    placeholder: String,
    height: {
      type: Number,
      default: 24,
    },
    modelValue: {
      type: [String, Number, Date],
      default: ''
    },
  }, 
  data() {
    return {
      customPrefix
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    handleSelect(value) { 
      this.$emit('onSelect', moment(value).format('YYYY-MM-DD'))
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom-datepicker{  
    :deep(.el-date-editor){ 
      max-width: 140px;
      max-height: 26px;
      .el-input__wrapper{ 
        padding: 5px 6px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #D6D9E3;
        box-shadow: 0 0 0 0 #D6D9E3 inset; 
        flex-direction: row-reverse !important; 
        .el-input__prefix{
          .el-input__icon { 
            margin: 0px;
            p{ 
              display: flex;
              align-items: center;
              justify-content: center;
            } 
          }
        } 
      } 
      .el-input__wrapper:hover{  
        box-shadow: 0 0 0 0 #D6D9E3 inset;
      } 
      .el-input__wrapper.is-focused{  
        box-shadow: 0 0 0 0 #D6D9E3 inset;
      } 
      .el-input__inner{ 
        font-size: $font-base;
        font-family: $font-medium;
        color: #202020;
      }
    } 
    :deep(.el-date-editor.el-input, .el-date-editor.el-input__wrapper){
      width: 100%;
    }
  } 
</style>