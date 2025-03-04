<template>
  <div class="vipfood-status">
    <div class="search-content-box flex space-between align-center">
      <div class="flex align-center gap-10 justify-start ">
        <p class="font-regular">조회기간</p> 
        <label class="flex align-center gap-10">
          <CustomDatePicker v-model="viewPeriod.startDate"
          />~<CustomDatePicker v-model="viewPeriod.endDate"
          />
        </label>
      </div> 
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">방문상태</p>
        <label>
          <CustomSelect
            v-model="visitStatus"
            :width="100"
            :data="myApplication" />
        </label>
        <p class="font-regular">식수선택</p>
        <label>
          <CustomSelect
            v-model="drinkingWater"
            :width="100"
            :data="vipfood" />
        </label>
        <p class="font-regular">공장구분</p>
        <label>
          <CustomSelect
            v-model="classification"
            :width="100"
            :data="company" />
        </label>
      </div>
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">차량번호</p>
        <label> 
          <CustomSelect
            v-model="carNumber"
            :width="200"
            :data="vipfood" />
        </label>
        <p class="font-regular">결재상태</p>
        <label> 
          <CustomSelect
            v-model="registerStatus"
            :width="100"
            :data="register" />
        </label>
      </div>
      <div class=" align-center center flex"> 
        <div class="self-end">
          <CustomButton 
            class="primary" 
            :type="'button'" 
            :height="30"
            :onClick="retrieveData">조회
          </CustomButton> 
        </div> 
      </div>
    </div> 

    <div>
      <div class="flex align-center space-between mt-10 mb-10">
        <p class="block-title m-none">신청내역 <span class="primary">10</span>건</p>
        <div class="flex align-center gap-15">
          <div class="flex align-center">
            <CustomButton class="default" :height="30">엑셀 다운로드</CustomButton>
          </div>
          <div class="flex align-center gap-5"> 
            <CustomButton class="default" :height="30">표</CustomButton>
            <CustomButton class="default" :height="30">추가</CustomButton> 
          </div>
        </div>
      </div>
      <div>
        <!-- You can add any events to here like @eventName="function" it accept all of them -->
        <CustomTuiGrid 
          :data="computedGridData"
          :columns="gridColumns" 
          :rowHeaders="['checkbox']"
          :gridKey="gridKey"
          :scrollX="false"
          :scrollY="false"
          :pageOptions="{
            useClient: true,
            perPage:15
          }"
          height="700px"
          :frozenCount="0"
          @check="onCheck"
          @uncheck="onUncheck"
          @focusChange="onFocusChange" 
        />  
      </div>
    </div> 
  </div>
  
</template>
  
<script>
import TuiGrid from 'tui-grid'
import ButtonRenderer from '../../components/renderers/StatusRenderer.js'
import { food } from '../../constants/index.js';
export default {
  name: 'VIPFoodAppStatus',
  data() {
    return {
      currentPage3: 5,
      pageSize3: 10,
      visitStatus: '',
      drinkingWater: '',
      classification:'',
      carNumber: '',
      registerStatus: '',
      gridKey: 0,
      myApplication: [
        '예정',
        '미방문',
        '연기',
        '방문완료'
      ],
      vipfood: ['조식', '중식', '석식'],
      company: ['2공장', '부산공장'],
      food,
      register: ['신청', '승인', '미정'],
      gridData: [
        {
          id: '2025.01.10 17:14',
          category: '김지웅',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '13',
          relevantdate: '중식',
          person: '양식(육류스테이크) : 25,000',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '이재연',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '7',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '신청',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '2공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '정혜림',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '5',
          relevantdate: '중식',
          person: '양식(육류스테이크) : 25,000',
          approvaldept: '취소',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '부산공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '김지웅',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '13',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '신청',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '이재연',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '7',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '정혜림',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '5',
          relevantdate: '중식',
          person: '양식(육류스테이크) : 25,000',
          approvaldept: '취소',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '부산공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '김지웅',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '13',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '이재연',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '7',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '취소',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '정혜림',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '5',
          relevantdate: '중식',
          person: '양식(육류스테이크) : 25,000',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '부산공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '김지웅',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '13',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '이재연',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '7',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '신청',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '2공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '정혜림',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '5',
          relevantdate: '중식',
          person: '양식(육류스테이크) : 25,000',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '김지웅',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '13',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '취소',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '2공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '이재연',
          company: '글로벌시스템)아시아/중동영업팀',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-20',
          mealheadcount: '7',
          relevantdate: '중식',
          person: '한식(외부고객)',
          approvaldept: '신청',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '1공장',
        },
        {
          id: '2025.01.10 17:14',
          category: '정혜림',
          company: '생산본부)소재/생산(설비개발Part)',
          applicationdate: '2011.09.27 18:23',
          mandate: '2025-01-15',
          mealheadcount: '5',
          relevantdate: '중식',
          person: '양식(육류스테이크) : 25,000',
          approvaldept: '승인',
          mgmtdept: '미정',
          visitstatus: '예정',
          name: '부산공장',
        },
      ],
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '신청일', name: 'id', editor: 'text', width: 120 },
        { header: '신청자', name: 'category', editor: 'text', width: 100 },
        { header: '소속명', name: 'company', editor: 'text', align: 'center' },
        { header: '방문일', name: 'applicationdate', editor: {
          type: 'text',
          options: {
            type: 'number'
          }
        } },
        { header: '식수일', name: 'mandate', editor: 'text', width: 80 },
        { header: '식수인원', name: 'mealheadcount', editor: 'text', width: 80 },
        { header: '식수선택', name: 'relevantdate', editor: 'text', width: 80 },
        { header: '식사구분', name: 'person', editor: 'text' },
        { 
          header: '신청부서결재', 
          name: 'approvaldept', 
          renderer: { type: ButtonRenderer, options: { size: 'short' } }, 
          align: 'center', 
          width: 100 },
        { 
          header: '관리부서결재', 
          name: 'mgmtdept', 
          renderer: { type: ButtonRenderer, options: { size: 'short' } }, 
          align: 'center', 
          width: 80 },
        { 
          header: '방문상태', 
          name: 'visitstatus', 
          renderer: { type: ButtonRenderer, options: { size: 'short' } }, 
          align: 'center', 
          width: 80 },
        { header: '공장', name: 'name', editor: 'text', width: 80 },
      ],
      viewPeriod: {
        startDate: '',
        endDate: ''
      }
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
    this.$nextTick(() => {
      this.$refs.GridTable.invoke('refreshLayout')
    })
    TuiGrid.applyTheme('default', {
      cell: {
        header: {
          background: '#EEEEF3',
          text: '#000000'
        },
        rowHeader: {
          background: '#EEEEF3',
          textAlign: 'center',
          verticalAlign: 'middle',
          text: '#000000'
        },
        evenRow: {
          background: '#FFFFFF',
          textAlign: 'center',
          verticalAlign: 'middle',
        },
        oddRow: {
          background: '#FFFFFF',
          textAlign: 'center',
          verticalAlign: 'middle',
        },
      }
    })
  },
  methods: {
    updateGridData() {
      this.gridData = this.gridData.map((row, index) => ({
        ...row,
        rowNum: index + 1,
      }))

      this.gridKey++
    },
    retrieveData() {
      console.log('retrieveData')
    },

    onFocusChange({ rowKey }) {
      console.log('onFocusChange', rowKey)
    },
    onCheck({ rowKey }) {
      console.log('onCheck', rowKey)
    },
    onUncheck({ rowKey }) {
      console.log('onUncheck', rowKey)
    },

    refreshGrid() {
      this.gridKey += 1
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
    .pagination-box {
    display: flex;
    justify-content: center;
    :deep(.el-select){
      width: 110px;
    }
    :deep(.el-pager){
      .is-active {
        background-color: #F5F5F5;
        color: #121212;
        font-family: 'Pretendard-Bold';
        border-radius: 8px;
      }
    }
  }
    .my-application-main {
      border-radius: 10px;
      padding: 0 10px;
      background-color: #F5F5F8;
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
        .btn-box {
          width: 60px;
          margin-right: 10px;
        }
  
      .my-box-1 {
        display: flex;
        align-items: center;
        font-size: $font-regular-base;
        column-gap: 10px;
        .my-box-2 {
          width: 250px;
          display: flex;
          align-items: center;
          font-size: $font-regular-base;
        }
        .my-box {
          width: 120px;
          display: flex;
          align-items: center;
          font-size: $font-regular-base;
        }
        .my-box-3 {
          width: 200px;
          display: flex;
          align-items: center;
          font-size: $font-regular-base;
        }
      }
      img {
        margin: 0 5px;
      }
    }
    .apply-page_content{
      margin-top: 12px;
      margin-bottom: 20px;
    .apply-page_content-title {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      justify-content: space-between;
      column-gap: 5px;
    }
    .apply-page_content-title-button {
      display: flex;
      column-gap: 15px;
    }
    p {
      margin-top: 10px;
      font-size: $font-medium-base;
      font-weight: bold;
      span {
        color: #00A1C0;
        padding-left: 5px;
      }
    }
    } 
    
  }
  </style>
  