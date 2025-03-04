<template lang=""> 
  <button  
    :id="id"  
    class="check_btn" 
    :class="{'is-checked': check}" 
  > <el-icon class="checked" style="vertical-align: middle; width:12px; height:12px;"> <CheckBox
    color="white" 
    @click="$emit('onChange', $event)" /> 
  </el-icon>  
  </button>  
</template>
<script>
import { Select as CheckBox } from '@element-plus/icons-vue'
export default {
  name:'CustomCheckBox',
  props: {
    check: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    size: {
      type: String,
      default:'large'
    }
  },
  components: { CheckBox }
}
</script>
<style lang="scss" scoped>
  .check_btn{
    position: relative;
    display: flex; 
    align-items: center;
    cursor: pointer;
    justify-content: center; 
    border: 1px solid #9AA1AB;  
    width: 18px;
    height: 18px;
    border-radius: 4px;  
    background: #fff;
  }
  .check_btn.is-checked{ 
    border: 2px solid #00a1c0;
    background: #00a1c0;
  }  
</style>