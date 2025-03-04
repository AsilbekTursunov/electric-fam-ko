<template> 
  <el-switch
    id="input_box"
    :model-value="value" 
    inline-prompt 
    style="--el-switch-on-color: #00A1C0; --el-switch-off-color: #A0A0A0"
    @change="$emit('onChange', $event)"
  /> 
</template>
<script> 
export default {
  name: 'CustomSwitch', 
  props: {
    value: {
      type: Boolean,
      default:false
    },
    onChange:Function
  }, 
}
</script>
<style lang="scss" scoped> 
  :deep(.el-switch__core){ 
    box-sizing: content-box;
    min-width: 34px; 
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
  }
</style>