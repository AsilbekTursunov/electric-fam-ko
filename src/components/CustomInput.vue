<template> 
  <div class="el-form-each-item">
    <el-input
      v-model="value"
      :type="type"
      :placeholder="placeholder" 
      :show-password="type == 'password' && true"
      class="extra-style"
      clearable
      :style="{ width: `${ width }px`, height: `${ height }px` }"
      @input="$emit('onChange', $event)"
    />
  </div>
</template>
<script>
export default {
  name:'CustomInput',
  props: {  
    modelValue: [String, Number],
    placeholder: String,
    type: {
      type: String,
      default: 'text', 
    },
    width: Number,
    height: {
      type: Number,
      default: 26,
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
}
</script>
<style lang="scss" scoped> 
.el-form-each-item{ 
  width: 100%; 
  :deep(.el-input__wrapper){ 
    box-shadow: none !important;  
    border: 1px solid #D6D9E3; 
    padding: 2px 5px; 
    border-radius: 5px; 
  } 
  &.height-30{ 
    :deep(.el-input__wrapper){ 
      box-shadow: none !important;  
      border: 1px solid #D6D9E3; 
      padding: 2px 8px; 
      border-radius: 5px;
      
    }
  }
  :deep(.el-input__inner){ 
    font-size: $font-base;
    font-weight: 500; 
    color: #202020;
    
  } 
}
.el-form-each-item.bg-black{  
  :deep(.el-input__wrapper){  
    background-color: #EEEEEE !important;
  }  
}
</style>

// Add border-radius to wrapper and delete label

 