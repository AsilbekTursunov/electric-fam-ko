<template>
  <div>
    <div class="vipfood-status">
      <div class="search-content-box flex space-between align-center">
        <div class="flex align-center gap-10 justify-start">
          <p class="font-regular">근태기간</p> 
          <label class="flex align-center gap-10">
            <CustomDatePicker 
              v-model="attendance.start"
              :placeholder="'날짜'"
              @onSelect="selectAttendanceStart" />    
            ~<CustomDatePicker 
              v-model="attendance.end"
              placeholder="날짜"
              @onSelect="endAttendanceStart"
            />
          </label>
        </div> 
        <div class="flex align-center gap-10 justify-start">
          <p class="font-regular">통합검색</p>
          <label>
            <CustomInput
              v-model="integratedSearch"
              :width="400"
              :placeholder="'성명ㆍ미승인ㆍ귀사불'" 
            />
          </label>
        </div>
        <div class=" align-center center flex"> 
          <div class="self-end">
            <CustomButton 
              class="primary" 
              :type="'button'" 
              :height="30"
              :onClick="searchData">조회
            </CustomButton> 
          </div> 
        </div>
      </div>
      <div class="apply-page_content">
        <div class="flex align-center space-between mb-10 mt-10">
          <p class="block-title m-none">신청내역 <span class="primary">10</span> 건</p>
          <div class="flex align-center gap-15">
            <div class="">
              <CustomButton class="default" :height="30">엑셀 다운로드</CustomButton>
            </div>
            <div class="flex align-center gap-5">
              <CustomButton
                class="default"
                :height="30"
                @click="openDialog"
              >
                기간연장
              </CustomButton>
          
              <CustomButton class="default" :height="30">신청수정</CustomButton>
              <CustomButton class="default" :height="30">신청취소</CustomButton>
            </div>
          </div>
        </div>
        <div class="main-table">
          <CustomTuiGrid 
            :data="gridData"
            :columns="gridColumns"
            :scrollX="false"
            :scrollY="true"
            :pageOptions="{
              useClient: true,
              perPage:15
            }"
          />
        </div>
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
          <p>{{ deadline.start }} ~ {{ deadline.end }}</p>
        </div>
        <div class="dialog-content">
          <p>연장기간</p>
          <div class="dialog-content-date">
            <CustomDatePicker
              v-model="extendedDate"
              :placeholder="'날짜 입력 하세요'"
            />
          </div>
        </div>
        <div class="dialog-btn">
          <div>
            <CustomButton 
              :type="'button'" 
              class="secondary" 
              :onClick="closeDialog">취소
            </CustomButton>
          </div>
          <div>
            <CustomButton 
              :type="'button'" 
              class="primary" 
              :onClick="submitToExtendDeadline">기간연장신청
            </CustomButton>
          </div>
        </div>
      </div>
    </CustomDialog>
  </div>
</template>
  
<script> 
export default {
  name: 'OutVisitorGateStatus',
  data() {
    return {
      currentPage3: 5,
      pageSize3: 10,
      disabled: false,
      isDialogOpen: false,
      gridData: [
        {
          index: '1',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '2',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '3',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '4',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '5',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '6',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '7',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '8',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '9',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '10',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '11',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '12',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '13',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '14',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '15',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '12',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '13',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '14',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '15',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '12',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '13',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '14',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
        {
          index: '15',
          date: '2024-11-20',
          category: '청주)고압/VI반',
          company: '208576',
          applicationdate: '윤혁준',
          mandate: '208576',
          mealheadcount: '윤혁준',
          relevantdate: '승인',
          person: '국내출장',
          approvaldept: '-',
          mgmtdept: '-',
          visitstatus: '10:34',
          end: '-',
          name: '청주1공장_후문',
          situation: '-',
          reason: 'MES : 신규포팅 설..',
          note: 'GHR',
        },
      ],
      gridColumns: [
        { header: '번호', name: 'index', editor: 'text', options: {
          type: 'number'
        }, width: 20 },
        { header: '근태일자', name: 'date', editor: 'text' },
        { header: '출입자 소속', name: 'category', editor: 'text' },
        { header: '출입자 사번', name: 'company', editor: 'text', align: 'center' },
        { header: '출입자 성명', name: 'applicationdate', editor: {
          type: 'text',
          options: {
            type: 'number'
          }
        } },
        { header: '결재자 사번', name: 'mandate', editor: 'text' },
        { header: '결재자 성명', name: 'mealheadcount', editor: 'text' },
        { header: '결재상태', name: 'relevantdate', editor: 'text' },
        { header: '구분', name: 'person', editor: 'text' },
        { header: '외출예정 시각', name: 'approvaldept', align: 'center' },
        { header: '귀사예정 시각', name: 'mgmtdept', align: 'center' },
        { header: '외출시각', name: 'visitstatus', align: 'center' },
        { header: '귀사시각', name: 'end', editor: 'text' },
        { header: '외출 GATE', name: 'name', editor: 'text' },
        { header: '귀사 GATE', name: 'situation', editor: 'text' },
        { header: '사유', name: 'reason', editor: 'text' },
        { header: '비고', name: 'note', editor: 'text' },
      ],
      attendance: {
        start: '',
        end: '',
      },
      extendedDate: '',
      integratedSearch:'',
      deadline: {
        start: '2025-01-01',
        end: '2025-03-01',
      }
    }
  },
  mounted(){},
  methods: {
    selectAttendanceStart(value) {
      console.log(value)
    },
    endAttendanceStart(value) {
      console.log(value)
    },
    openDialog() {
      this.isDialogOpen = true
    },
    submitToExtendDeadline() {
      this.isDialogOpen = false
    },
    closeDialog() {
      this.isDialogOpen = false
    },
    searchData() {
      console.log(this.integratedSearch)
    }
  }
}
</script>
  
  <style lang="scss" scoped>
  .vipfood-status {
    padding-bottom: 20px;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    padding-right: 10px; 
    padding-bottom: 20px; 
 
    
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
  