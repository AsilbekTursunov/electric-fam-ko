<template>
  <div class="my-application"> 
    <div class="search-content-box flex space-between align-center">
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">조회기간</p> 
        <label class="flex align-center gap-10">
          <CustomDatePicker @onSelect="value => inquiryPeriod.starDate = value" />
          ~
          <CustomDatePicker @onSelect="value => inquiryPeriod.endDate = value" />
        </label>
      </div>
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">신청구분</p>
        <label>
          <CustomSelect 
            :width="170" 
            :data="myApplication"
            @onChange="value => applicationCategory = value" 
          />
        </label>
      </div>
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">회사검색</p>
        <label>
          <CustomInput
            v-model="companySearch"
            :width="200"  
            :placeholder="'회사명 입력'" />
        </label>
      </div>
      <div class=" align-center center flex"> 
        <div class="self-end">
          <CustomButton 
            class="primary" 
            :type="'button'" 
            :height="30"
            :onClick="() => console.log('Send')">조회
          </CustomButton> 
        </div> 
      </div>
    </div> 
    <div class="mt-5">
      <div class="flex align-center space-between mb-5 mt-5">
        <p class="block-title">신청내역 <span class="primary">10</span>건</p>
        <div class="flex align-center gap-15">
          <div class="flex align-center">
            <CustomButton class="default font-base" :height="30">엑셀 다운로드</CustomButton>
          </div>
          <div class="flex align-center gap-5">
            <CustomButton
              class="default font-base"
              :height="30"
              @click="openDialog"
            >
              기간연장
            </CustomButton>
            
            <CustomButton class="default font-base" :height="30">신청수정</CustomButton>
            <CustomButton class="default font-base" :height="30">신청취소</CustomButton>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <!-- You can add any events to here like @eventName="function" it accept all of them -->
        <CustomTuiGrid 
          :data="computedGridData"
          :columns="gridColumns" 
          :rowHeaders="['checkbox']"
          height="auto"
          :scrollX="false"
          :scrollY="false"
          :pageOptions="{
            useClient: true,
            perPage:15
          }"
          @check="onCheck"
          @uncheck="onUncheck"
          @focusChange="onFocusChange" 
        /> 
      </div>
    </div>
    <CustomDialog
      :open="isDialogOpen"
      :title="'기간연장'"
      :onClose="closeDialog"
    >
      <div class="dialog-container">
        <div class="dialog-content">
          <p>상주기간</p>
          <p v-if="inquiryPeriod.starDate">{{ inquiryPeriod.starDate }} ~ {{ inquiryPeriod.endDate }}</p>
        </div>
        <div class="dialog-content">
          <p>연장기간</p>
          <div class="dialog-content-date">
            <CustomDatePicker @onSelect="value => extensionPeriod = value" />
          </div>
          <div class="dialog-content">
            <p>연장기간</p>
            <div class="dialog-content-date">
              <CustomDatePicker />
            </div>
          </div>
          <div class="dialog-btn">
            <div>
              <CustomButton 
                :type="'button'"
                :height="30" 
                class="secondary" 
                :onClick="() => console.log('Send')">취소
              </CustomButton>
            </div>
            <div>
              <CustomButton 
                :type="'button'" 
                :height="30"
                class="primary" 
                :onClick="() => console.log('Send')">기간연장신청
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </CustomDialog>

  </div>
</template>
<script> 
import ButtonRenderer from '../../components/renderers/StatusRenderer.js'

export default {
  name:'MyApplicationStatus',
  data(){
    return {
      gridData: [
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '승인중',
          extension: 'Available',
        },
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '신청',
          extension: 'Available',
        },
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '반려',
          extension: 'Available',
        },
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '처리완료',
          extension: 'Available',
        },
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '승인완료',
          extension: 'Available',
        },
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '반려',
          extension: 'Available',
        },
        {
          id: '청주사업장',
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          applicationdate: '2011.09.27 18:23',
          agent: '관리자1',
          person: '류현철',
          relevantdate: '2010-02-05',
          status: '승인완료',
          extension: 'Available',
        },
      ],
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '사업장', name: 'id', editor: 'text' },
        { header: '분류', name: 'category', editor: 'text' },
        { header: '회사명', name: 'company', editor: 'text' },
        { header: '신청일', name: 'applicationdate', editor: {
          type: 'text',
          options: {
            type: 'number'
          }
        } },
        { header: '신청자(대리)', name: 'agent', editor: 'text' },
        { header: '담당자', name: 'person', editor: 'text' },
        { header: '해당일시', name: 'relevantdate', editor: {
          type: 'text',
          options: {
            type: 'number'
          }
        } },
        {
          header: '상태',
          name: 'status',
          renderer: { type: ButtonRenderer, options: { size: 'long' } },
          align: 'center', width: 100
        },
      ],
      currentPage3: 5,
      pageSize3: 10,
      isDialogOpen: false,
      myApplication: [
        '사전 방문예약 신청',
        '장ㆍ단기상주자 신청',
        'VIP식수 신청',
        'VIP방문 신청',
        '차량 등록관리',
        'ID 카드발급 신청',
        '출입권한 신청',
        '입출문 신청',
        '식수 신청'
      ],
      extensionPeriod: '',
      inquiryPeriod: {
        starDate: '',
        endDate: ''
      },
      applicationCategory: '',
      companySearch:''
    }


  },
  computed: {
    computedGridData() {
      return this.gridData.map((row, index) => ({
        rowNum: index + 1,
        ...row,
      }))
    }
  },
  mounted(){ 
  },
  methods: { 
    refreshGrid() {
      this.gridKey += 1
    },
    openDialog() {
      this.isDialogOpen = true
    },
    closeDialog() {
      this.isDialogOpen = false
    }, 
  }
}
</script> 
<style lang="scss" scoped>
.my-application {
  padding-bottom: 20px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px;
  display: flex;
  flex-direction: column; 
}
.dialog-container{
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  .dialog-content-date {
    width: 48%;
  }
.dialog-btn {
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  column-gap: 0.8rem;
}
  .dialog-content {
    display: flex;
    width: 100%;
    column-gap: 3rem;
    align-items: center;
    p {
      font-weight: 700;
      color: #000000;
    }
  }
}
</style>