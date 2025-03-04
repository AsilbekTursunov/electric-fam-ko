<template>
  <custom-dialog :title="'자동조회'">
    <el-form v-model="form" label-position="top">
      <div class="form-content">
        <el-form-item label="성명">
          <CustomInput :model-value="form.name" :placeholder="'한글성함을 입력해주세요'" />
        </el-form-item>
        <el-form-item label="회사선택">
          <CustomSelect :model-value="form.companyName" />
        </el-form-item>
      </div> 
      <el-form-item label="설명" class="form-message">
        <CustomTextArea 
          :model-value="form.description" 
          :placeholer="`해당 연도에 기등록되어있는 권한 데이터와 활용기관 권한은 제외하고
            전년도 복사를 진행합니다. 전년도 복사를 진행하시겠습니다.`" 
        />
      </el-form-item>
      <el-row class="switch-content">
        <el-col :span="3">
          <CustomSwitch :value="true" />
        </el-col>
        <el-col :span="15" class="switch-content-desc">회사명이 없을시 관리자에게 등록요청하기</el-col>
        <el-col :span="3">
          <CustomSwitch :value="true" />
        </el-col>
      </el-row> 
      <div class="company-select">
        <p class="selection-title">출입구역 선택</p>
        <p class="selection-desc">아래 내용은 디자인 시안 위한 임의 옵션 값입니다.</p>
        <el-radio-group 
          v-model="form.selectedCompany" 
          class="ml-4" 
          @change="(event)=>console.log(event)"
        > 
          <CustomRadio 
            :label="'사무동'"
            :size="'small'" 
            :name="'사무동'" 
          /> 
          <CustomRadio 
            :label="'회의실'"
            :size="'small'" 
            :name="'회의실'"  
          />  
          <CustomRadio 
            :label="'엘리베이터'"
            :size="'small'" 
            :name="'엘리베이터'" 
          />  
          <CustomRadio 
            :label="'HVDC공장'"
            :size="'small'" 
            :name="'HVDC공장'" 
          />  
        </el-radio-group> 
      </div>
      <div class="submit-section">
        <div class="cancel">
          <CustomButton class="secondary" :size="'md'">취소</CustomButton>
        </div>
        <div class="submit">
          <CustomButton class="primary" :size="'md'">저장하기</CustomButton>
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
    .el-form-item{
      width: 100%;
      .el-form-item__label{ 
        color: #000000;
      }
    }
  }
  .form-message{
    height: 100px; 
    .el-form-item__content{
      padding-bottom: 20px;
      height: 100%;
    }
  }
  .switch-content{
    margin-top: 50px;
    display: flex;
    align-items: center;
    .switch-content-desc{
      font-size: $font-regular-base;
      color: #000000;
    }
  }
  .company-select{
    .selection-title{
      margin-top: 20px;
      font-size: 13px;
      color: #000000;
      font-family: 'Pretendard-SemiBold';
    }
    .selection-desc{
      font-size: $font-regular-base;
      color: #606060;
      font-family: $font-medium;
      margin-bottom: 20px;
    }
    .el-radio__label{
      font-size: $font-regular-base;
      color: #000000;
      font-family: $font-medium;
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