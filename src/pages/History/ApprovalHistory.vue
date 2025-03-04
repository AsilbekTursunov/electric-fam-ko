<template>
  <div class="water_consumption_status">
    <div>
      <div class="main-table">
        <el-row class="each-row">
          <col-el class="title center br" :span="2">소 속</col-el>
          <col-el class="center br" :span="5">청주2)변압기생산팀</col-el>
          <col-el class="title center br" :span="2">사 번</col-el>
          <col-el class="start br" :span="3">admin1</col-el>
          <col-el class="title center br" :span="2">성 명</col-el>
          <col-el class="start br" :span="4">관리자1</col-el>
          <col-el class="title center br" :span="2">직 위</col-el>
          <col-el class="start" :span="4">사원D</col-el>
        </el-row> 
        <el-row class="each-row">
          <col-el class="center title br" :span="2">기 간</col-el>
          <col-el class="start br" :span="5">
            <label class="flex align-center gap-10"> 
              <CustomDatePicker @onSelect="value => periodStart = value" /> 
              ~ 
              <CustomDatePicker @onSelect="value => periodEnd = value" />
            </label>
          </col-el>
          <col-el class="center title br" :span="2">결재상태</col-el>
          <col-el class="start space-between" :span="15">
            <div class="w-full flex space-between">
              <label>
                <CustomSelect 
                  :width="160"
                  :data="payments" 
                  @onChange="value => paymentStatus = value" 
                />
              </label>
              <label class="flex align-center">
                <CustomButton 
                  :type="'button'" 
                  class="primary" 
                  :onClick="() => console.log('Send')">조회
                </CustomButton>
              </label>
            </div>
          </col-el> 
        </el-row>
      </div>
    </div>

    <div class="">
      <div class="flex align-center space-between mb-10 mt-10">
        <p class="block-title m-none">검색결과 <span class="primary">46</span>건</p>
        <div class="flex align-center gap-15">
          <div class="">
            <CustomButton class="default" :height="30">엑셀 다운로드</CustomButton>
          </div>
          <div class="flex align-center gap-5">
            <CustomButton class="default" :height="30"> 삭제 </CustomButton>
            <CustomButton 
              class="default" 
              :height="30"
              @click="() => open = true">반려</CustomButton>
            <CustomButton class="default" :height="30">승인</CustomButton>
          </div>
        </div>
      </div>
      <div class="main-table">
        <CustomTuiGrid 
          :data="computedGridData"
          :columns="gridColumns"
          :rowHeaders="['checkbox']"
          :scrollX="false"
          :scrollY="false"
          :frozenCount="0"
          :pageOptions="{
            useClient: true,
            perPage:15
          }"
          height="700px"
          @check="onCheck"
          @uncheck="onUncheck"
          @focusChange="onFocusChange"
        />
      </div>
      <CustomDialog 
        :open="open" 
        :title="'자동조회'"
        :onClose="() => open = false">
        <div class="companion">
          <el-form v-model="form" label-position="top">
            <div class="form-content-wrapper">
              <div class="form-content">
                <el-form-item label="요청자">
                  <CustomInput 
                    v-model="requester" 
                    :height="30"
                    :placeholder="'한글성함을 입력해주세요'" />
                </el-form-item>
                <el-form-item label="요청일">
                  <CustomDateTimePicker @onSelect="value => requestDate = value" />
                </el-form-item>
              </div> 
              <el-form-item label="검토의견" class="form-message">
                <CustomTextArea 
                  v-model="reviewComment" 
                  :placeholder="'반려합니다.'" 
                  @onChange="value => reviewComment = value" />
              </el-form-item> 
            </div>
            <div class="flex align-center self-end gap-10">
              <div><CustomButton :height="30" class="secondary">취소</CustomButton></div>
              <div><CustomButton :height="30" class="primary">반려</CustomButton></div>
            </div>
          </el-form>
        </div>
      </CustomDialog>
    </div> 
  </div>
</template>
        
<script> 
export default {
  name: 'ApprovalHistory',
  data() {
    return { 
      gridData: Array.from({ length: 15 }, (_, index) => ({
        id: `단기상주자 신청 [보안결재] ${index + 1}`,
        applicationdate: '2011.09.27 18:23',
        company: '홍윤주',
        agent: '김근의',
        person: '2010-09-08',
        relevantdate: '처리완료',
        status: '신청',
      })),
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '분류', name: 'id', editor: 'text' },
        { header: '신청일', name: 'applicationdate', editor: 'text', width: 200 },
        { header: '신청자(대리)', name: 'company', editor: 'text', width: 200 },
        { header: '담당자', name: 'agent', editor: 'text', width: 200 },
        { header: '해당일시', name: 'person', editor: 'text', width: 200 },
        { header: '신청상태', name: 'relevantdate', editor: 'text', width: 200 },
        { header: '결재상태', name: 'status', editor: 'text', width: 150 },
      ],
      open:false,
      payments:['신청', '승인', '미정'],
      currentPage3: 5,
      pageSize3: 10,
      belongTo: '청주2)변압기생산팀',
      numberFour: 'admin1',
      name: '관리자1',
      position: '사원D',
      periodStart: '',
      periodEnd: '', 
      paymentStatus: '',
      // dialog values
      requester: '',
      requestDate: '',
      reviewComment:''
      
    }
  },
  computed: {
    computedGridData() {
      return this.gridData.map((row, index) => ({
        ...row,
        rowNum: index + 1,
      }))
    }
  },
  mounted(){ 
  },
  methods: { 
    openDialog() {
      this.open = true
    }, 
  }
}
</script>
        
<style lang="scss" scoped>
.water_consumption_status {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px; 
  .companion{ 
    :deep(.el-form){
    width: 400px;
    display: flex;
    height: 270px;
    flex-direction: column;
    justify-content: space-between;
    .form-content-wrapper{
      flex:1
    }
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
      .el-form-item__content{
        margin-bottom: 20px;
        height: 100px;
      }
  }
  } 
 }
}
</style>