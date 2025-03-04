<template> 
  <div class="custom-datetimepicker">  
    <el-date-picker
      v-model="selectedValue"
      type="datetime" 
      :clearable="true" 
      @change="handleSelect" 
    />  
  </div>
</template>
<script>
import { h, shallowRef } from 'vue' 
import moment from 'moment' 
import IconCalendar from './IconCalendar.vue'
 
const customPrefix = shallowRef({
  render() {
    return h('p', [h(IconCalendar)])
  },
})
export default {
  name: 'CustomDateTimePicker', 
  props: {
    placeholder: {
      type: String,
      default: 'Select Date'
    }
  }, 
  data() {
    return {
      selectedValue: '', 
      customPrefix,
    }
  } 
  ,
  methods: {
    handleSelect(value) { 
      this.$emit('onSelect', moment(value).format('YYYY-MM-DD hh:mm'))
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom-datetimepicker{ 
    width: 100%; 
    :deep(.el-date-editor){ 
      max-height: 30px;
      .el-input__wrapper{ 
        width: 100%;
        padding: 3px 9px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #D6D9E3;
        box-shadow: 0 0 0 0 #D6D9E3 inset; 
        .el-input__prefix{
          .el-input__icon { 
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
        font-size: $font-regular-base;
        font-weight: 500;
        color: #202020;
      }
    } 
    :deep(.el-date-editor.el-input, .el-date-editor.el-input__wrapper){
      width: 100%;
    }
  } 
</style>