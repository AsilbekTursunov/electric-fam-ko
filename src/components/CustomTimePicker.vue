<template>
  <div class="custom-timepicker">  
    <el-time-picker 
      v-model="value"
      :placeholder="placeholder" 
      @change="$emit('onSelect', $event.toISOString().slice(11, 16))"
    />
  </div>
</template>
<script>
export default {
  name:'CustomTimePicker',
  data() {
    return { 
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '시간'
    },
    label: String,
    modelValue: {
      type: [String, Number, Date],
      default: ''
    },
  },
  computed: {
    value:{
      get(){
        return this.modelValue
      },
      set(value){
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom-timepicker{   
    :deep(.el-date-editor){ 
      max-height: 26px;
      .el-input__wrapper{  
        padding: 3px 9px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #D6D9E3; 
        box-shadow: 0 0 0 0px #D6D9E3 inset;
        .el-input__prefix{
          display: none;  
        } 
      }
      .el-input__wrapper:hover{  
        box-shadow: 0 0 0 0px #D6D9E3 inset;
      } 
      .el-input__wrapper.is-focused{  
        box-shadow: 0 0 0 0px #D6D9E3 inset;
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