<template>
  <custom-dialog :open="true" :title="'회사명 조회 · 신규 등록'"> 
    <el-form v-model="form" label-position="top">
      <div class="form-content">
        <el-form-item label="회사명">
          <CustomInput :model-value="form.companyName" :placeholder="'회사명 입력 *'" />
        </el-form-item>
        <el-divider />
        <el-form-item label="신규등록">
          <CustomSelect 
            :model-value="form.selectedCompany" 
            @onChange="(value) => form.selectedCompany = value"
          />
        </el-form-item>
      </div> 
      <div class="submit-section"> 
        <div class="submit">
          <CustomButton class="secondary" :size="'md'">취소</CustomButton>
        </div>
      </div>
    </el-form>
  </custom-dialog>
</template>

<script>
export default { 
  data() { 
    return {
      form: {
        companyName: '', 
        selectedCompany:'사무동'
      },
      companies: [
        {
          label: 'LS ELECTRIC 청주',
          value: 'LS ELECTRIC 청주'
        },
        {
          label: 'LS ELECTRIC 천안',
          value: 'LS ELECTRIC 천안'
        },
        {
          label: 'LS ELECTRIC 부산',
          value: 'LS ELECTRIC 부산'
        },
        {
          label: 'LS e-Mobility Solutions',
          value: 'LS e-Mobility Solutions,'
        },
        {
          label: 'LS메탈',
          value: 'LS메탈'
        }
      ] 
    }
  },  
}
</script>

<style lang="scss" scoped>
 :deep(.el-form){
  width: 320px;
  .form-content{  
    .el-form-item{
      width: 100%;
      .el-form-item__label{  
        color: #000000;
      }
    }
  } 
  .submit-section{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
 }
</style>