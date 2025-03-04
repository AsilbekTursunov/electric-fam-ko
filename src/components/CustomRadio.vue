<template>
  <el-radio 
    :model-value="value ? true : false" 
    :label="label" 
    :size="size ?? 'small'"
    @change="$emit('onChange')"
  > {{ name }}
  </el-radio>
</template>
<script>
export default {
  name:'CustomRadio',
  props: {
    label: [String, Number, Boolean],
    size: String,
    name: String,
    value: [String, Number, Boolean]
  }

}
</script>
<style lang="scss" scoped>
  :deep(.el-radio__inner)::after{
     display: none;
  }
  
  :deep(.el-radio__input){
    border: 1px solid #9AA1AB;
    border-radius: 50%;
    padding: 2px; 
    display: flex;
    align-items: center; 
    justify-content: center;
    .el-radio__inner{
       opacity: 0;
    }
  }
  :deep(.el-radio__label){ 
    color: #202020 !important; 
    font-size: $font-medium-base !important;
  }
  :deep(.el-radio__input.is-checked){
    border: 1px solid #00A1C0; 
    .el-radio__inner{
      border: 1px solid #00A1C0;
      opacity: 1;
      background-color: #00A1C0;
    } 
  }
  
</style>