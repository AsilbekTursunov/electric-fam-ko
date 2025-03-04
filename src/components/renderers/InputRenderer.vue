<template> 
  <div class="el-form-each-item">
    <el-input
      :model-value="formValue"
      :type="type"
      :placeholder="placeholder" 
      :show-password="type == 'password' && true"
      class="el-input__wrapper"
      clearable
      @input="handleChange"
    />
  </div>
</template>
<script>
export default {
  name:'CustomInput',
  data(){
    return {
      formValue: ''
    }
  },
  props: {  
    placeholder: String,
    type: {
      type: String,
      default: 'text', 
    }
  },
  methods:{
    handleChange(event) {
      this.formValue = event
      this.$emit('onChange', event)
    }
  }
}
</script>
<style lang="scss" scoped> 
.el-form-each-item{
  width: 100%;
  display: flex;
  align-items: center;
  .el-input__wrapper{ 
    width: 90%;
    box-shadow: none !important;  
    border: 1px solid #D6D9E3; 
    padding: 2px 12px; 
    height: 26px;
    border-radius: 5px;
  }
  .el-input__inner{ 
    font-size: $font-regular-base;
    font-weight: 500;
    color: #202020;
  } 
}
</style>

// Add border-radius to wrapper and delete label

 