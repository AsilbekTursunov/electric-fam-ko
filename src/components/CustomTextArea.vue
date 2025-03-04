<template> 
  <div class="el-form-each-item">
    <el-input
      v-model="value"
      type="textarea"
      :placeholder="placeholder" 
      :show-password="type == 'password' && true"
      class="extra-style"
      clearable
      @input="$emit('onChange', $event)"
    />
  </div>
</template>
<script>
export default {
  name:'CustomTextArea',
  props: {
    modelValue: [String, Number],
    label: String,
    placeholder: String, 
    type: {
      type: String,
      default: 'text', 
    }
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
.el-form-each-item{
  width: 100%;
  height: 100%;
  .extra-style{ 
    height: 100%;
    :deep(.el-textarea__inner){ 
      height: 100%;
      box-shadow: none !important;  
      border: 1px solid #D6D9E3; 
      padding: 2px 8px;
      min-height: 50px;
      border-radius: 5px;
    } 
  }
}
</style>

// Add border-radius to wrapper and delete label

 