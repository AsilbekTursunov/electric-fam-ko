<template> 
  <div 
    class="select-box" 
    :class="height"
    :style="{ width: `${width}px !important` }">
    <!-- <label class="select_name">{{ label }}</label> -->
    <el-select 
      v-model="value" 
      class="m-2" 
      :placeholder="label ?? '선택'"  
      suffix-icon="arrow-down-bold"
      clearable
      @change="handleChange"
    >
      <el-option
        v-for="(item, index) in data"
        :key="index"
        :label="item"
        :value="item" 
      />
    </el-select> 
  </div>
</template>

<script>
import { ArrowDownBold, ArrowLeft } from '@element-plus/icons-vue' 
export default {
  name: 'CustomSelect', 
  props: {
    data: {
      type: Array,  
      default: () => (['option1', 'option2'])
    },
    label: String,
    name: {
      type: String, 
    }, 
    onChange: Function,
    height: {
      type: String,
      default: 'height-26'
    },
    width: Number,
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  data() {
    return { 
      ArrowDownBold,
      ArrowLeft,
      selected: '',
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
    handleChange(value) {
      this.selected = value
      this.$emit('onChange', value)
    }
  }
  
}
</script>
<style lang="scss" scoped>
  .select-box { 
    width: 100%;  
    :deep(.el-select__caret){
      color: black;
      font-size: 12px !important;
    }
    :deep(.el-select__wrapper){
      border: 1px solid  #D6D9E3;  
      border-radius: 5px; 
      padding: 5px 6px;
      min-height: 20px !important;
      box-sizing: border-box;
      font-size: $font-base !important;
      box-shadow: 0 0 0 0 #D6D9E3 inset;
    } 
    :deep(.el-select__wrapper.is-focused){
      box-shadow: 0 0 0 0 #D6D9E3 inset;
    }
    :deep(.el-select__wrapper.is-hovering){
      box-shadow: 0 0 0 0 #D6D9E3 inset;
    }
    :deep(.el-input__inner){ 
      font-weight: 500; 
      color: #202020;
    }
    
  }
  .select-box.height-30{
    :deep(.el-select__wrapper){
      height: 30px !important;
    }
  }
  .select-box.height-26{
    :deep(.el-select__wrapper){
      height: 26px !important;
    }
  }
</style>

// Add border-radius to wrapper and delete label
