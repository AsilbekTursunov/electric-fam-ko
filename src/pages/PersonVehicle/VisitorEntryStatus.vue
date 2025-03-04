<template>
  <div>
    <div class="vipfood-status">
      <div class="search-content-box flex space-between align-center">
        <div class="flex align-center gap-10 justify-start">
          <p class="font-regular">방문일</p> 
          <label class="flex align-center gap-10">
            <CustomDatePicker v-model="visitDate.start"
            />
            ~
            <CustomDatePicker v-model="visitDate.end"
            />
          </label>
        </div>
        <div class="flex align-center gap-10 justify-start">
          <p class="font-regular">신청구분</p>
          <label>
            <CustomSelect
              v-model="application.category"
              :width="170"
              :data="register"
            /> 
          </label>
          <label>
            <CustomInput
              v-model="application.company"
              :width="270"
              :placeholder="'회사ㆍ성명ㆍID카드ㆍ차번'" 
            />
          </label>
        </div>
        <div class="flex align-center gap-10 justify-start">
          <p class="font-regular">상태</p>
          <label>
            <CustomSelect
              v-model="application.status" 
              :width="170"
              :data="register"
            />
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
      <div>
        <div class="flex align-center space-between mb-10 mt-10">
          <p class="block-title m-none">신청내역 <span class="primary">10</span>건</p>
          <div class="flex gap-15">
            <div class="flex align-center">
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
            :key="gridKey"
            :data="computedGridData"
            :columns="gridColumns"
            :scrollX="false"
            :scrollY="false"
            :pageOptions="{
              useClient: true,
              perPage:15
            }"
            height="600px"
            :autoResizeHeight="false"
            @focusChange="onFocusChange"
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
          <p>2025-01-01 ~ 2025-03-01</p>
        </div>
        <div class="dialog-content">
          <p>연장기간</p>
          <div class="dialog-content-date">
            <CustomDatePicker v-modal="extensionPeriod.start" />
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
              :onClick="extendDeadline">기간연장신청
            </CustomButton>
          </div>
        </div>
      </div>
    </CustomDialog>
  </div>
</template>
  
<script> 
export default {
  name: 'VisitorEntryStatus',
  data() {
    return {
      currentPage3: 5,
      pageSize3: 10,
      disabled: false,
      isDialogOpen: false,
      gridKey: 0,
      myApplication: [
        { value: '예정', label: '예정' },
        { value: '미방문', label: '미방문' },
        { value: '연기', label: '연기' },
        { value: '방문완료', label: '방문완료' },
      ],
      register: [
        {
          value:'사전 방문예약 신청',
          label:'사전 방문예약 신청'
        },
        {
          value:'장ㆍ단기상주자 신청',
          label:'장ㆍ단기상주자 신청'
        },
        {
          value:'VIP식수 신청',
          label:'VIP식수 신청'
        },
        {
          value:'VIP방문 신청',
          label:'VIP방문 신청'
        },
        {
          value:'차량 등록관리',
          label:'차량 등록관리'
        },
        {
          value:'ID 카드발급 신청',
          label:'ID 카드발급 신청'
        },
        {
          value:'출입권한 신청',
          label:'출입권한 신청'
        },
        {
          value:'입출문 신청',
          label:'입출문 신청'
        },
        {
          value:'식수 신청',
          label:'식수 신청'
        },
      ],
      gridData: [
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
        {
          id: '2025.01.10 17:14',
          category: '-',
          company: '단체방문 (총 5 명)',
          applicationdate: 'N',
          mandate: '시스콘',
          mealheadcount: '16모 1509',
          relevantdate: '제품,설비A/S',
          person: '171.조흥준',
          approvaldept: '010-3224-5538',
          mgmtdept: '11.20 09:00',
          visitstatus: '2024.11.20 11:55',
          end: '-',
          name: '청주1공장_후문',
          situation: '방문중',
        },
      ],
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '등록일', name: 'id', editor: 'text' },
        { header: '방문증', name: 'category', editor: 'text' },
        { header: '방문자', name: 'company', editor: 'text', align: 'center' },
        { header: 'VIP', name: 'applicationdate', editor: {
          type: 'text',
          options: {
            type: 'number'
          }
        } },
        { header: '업체명', name: 'mandate', editor: 'text' },
        { header: '차량번호', name: 'mealheadcount', editor: 'text' },
        { header: '방문목적', name: 'relevantdate', editor: 'text' },
        { header: '지입물품', name: 'person', editor: 'text' },
        { header: '방문자 연락처', name: 'approvaldept', align: 'center' },
        { header: '방문예정시각', name: 'mgmtdept', align: 'center' },
        { header: '입문시각', name: 'visitstatus', align: 'center' },
        { header: '출문시각', name: 'end', editor: 'text' },
        { header: '방문사업장', name: 'name', editor: 'text' },
        { header: '상태', name: 'situation', editor: 'text' },
      ],
      visitDate: {
        start: '',
        end: '',
      },
      application: {
        category: '',
        company: '',
        status: '',
      },
      extensionPeriod: {
        start: '',
        end: '',
      },
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
    updateGridData() {
      this.gridData = this.gridData.map((row, index) => ({
        ...row,
        rowNum: index + 1,
      }))

      this.gridKey++
    },
    openDialog() {
      this.isDialogOpen = true
    },
    closeDialog() {
      this.isDialogOpen = false
    },
    selectPlans(value) { 
      if (this.selectedPlan.includes(value)) {
        this.selectedPlan = this.selectedPlan.filter(item => item != value)
      } else (
        this.selectedPlan.push(value)
      ) 
    },

    handleSelectionChange(selection) {
      this.selectedRows = selection
      this.updateSelectAllState()
    },
    toggleSelectAll() {
      if (this.isAllSelected) {
        this.$refs.table.clearSelection()
        this.tableData.forEach(row => {
          this.$refs.table.toggleRowSelection(row, true)
        })
      } else {
        this.$refs.table.clearSelection()
      }
      this.updateSelectAllState()
    },
    updateSelectAllState() {
      const selectedCount = this.selectedRows.length
      const totalCount = this.tableData.length
      this.isAllSelected = selectedCount === totalCount
      this.isIndeterminate =
        selectedCount > 0 && selectedCount < totalCount
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    onFocusChange(focusedRow) {
      this.focusedRow = focusedRow
    },
    extendDeadline() {
      this.closeDialog()
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
  