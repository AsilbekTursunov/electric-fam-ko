<template>
  <CustomDialog :open="true" :title="'자동조회'">
    <el-form v-model="form" label-position="top">
      <div class="form-content">
        <el-form-item label="요청자">
          <CustomInput :model-value="form.name" :placeholder="'한글성함을 입력해주세요'" />
        </el-form-item>
        <el-form-item label="요청일">
          <CustomDateTimePicker />
        </el-form-item>
      </div> 
      <el-form-item label="검토의견" class="form-message">
        <CustomTextArea :model-value="form.description" :placeholder="'반려합니다.'" />
      </el-form-item> 
    </el-form>
  </CustomDialog>
</template>

<script>
export default { 
  data() { 
    return {
      form: {
        name: '',
        companyName: '',
        description: '',
        selectedCompany:'사무동'
      },
      companies: [
        '',
        ''
      ]
    }
  },  
}
</script>

<style lang="scss" scoped>
 :deep(.el-form){
  width: 400px;
  .form-content{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .el-form-item{
    width: 100%;
    .el-form-item__label{ 
      color: #000000;
    }
  }
  .form-message{
    height: 90px; 
    .el-form-item__content{
      padding-bottom: 20px;
      height: 100%;
    }
  } 
 }
</style>