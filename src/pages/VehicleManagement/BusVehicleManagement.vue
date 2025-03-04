<template>
  <div class="vipfood-status">
    <div class="search-content-box flex space-between align-center">
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">사업장</p> 
        <label class="flex align-center gap-10">
          <CustomSelect 
            v-model="businessPlace" 
            :width="200" 
            :data="visitedPlaces" />
        </label>
      </div> 
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">구분</p>
        <label>
          <CustomSelect 
            v-model="division" 
            :width="200" 
            :data="divisions" />
        </label>
      </div>
      <div class="flex align-center gap-10 justify-start">
        <p class="font-regular">차량번호</p>
        <label>
          <CustomInput v-model="vehicleNumber" />
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
    <div class="page-content-box">
      <div class="flex align-center space-between mt-10 mb-10">
        <p class="block-title m-none">신청내역 <span class="primary">10</span>건</p>
        <div class="flex align-center gap-15">
          <div class="flex align-center">
            <CustomButton class="default" :height="30">엑셀 다운로드</CustomButton>
          </div>
          <div class="flex align-center gap-5"> 
            <CustomButton class="default" :height="30">추가</CustomButton>
            <CustomButton class="default" :height="30">삭제</CustomButton>
            <CustomButton class="default" :height="30">수정</CustomButton>
            <CustomButton class="default" :height="30">등록</CustomButton>
          </div>
        </div>
      </div>
      <div>
        <CustomTuiGrid 
          :data="gridData"
          :columns="gridColumns" 
          :scrollX="false"
          :scrollY="false"
          :rowHeaders="['checkbox']"
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
        <p>2025-01-01 ~ 2025-03-01</p>
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
            class="secondary" 
            :onClick="() => console.log('Send')">취소
          </CustomButton>
        </div>
        <div>
          <CustomButton 
            :type="'button'" 
            class="primary" 
            :onClick="() => console.log('Send')">기간연장신청
          </CustomButton>
        </div>
      </div>
    </div>
  </CustomDialog>
  
</template>
  
<script>
import { visitedPlaces } from '../../constants'

 
export default {
  name: 'BusVehicleManagement',
  data() {
    return {
      currentPage3: 5,
      pageSize3: 10,
      disabled: false,
      isDialogOpen: false,
      gridData: [
        {
          index: '1',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '2',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '3',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '4',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '5',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '6',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '7',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '8',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '9',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '10',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '11',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        },
        {
          index: '12',
          place: '청주사업장',
          department: '청주2)SE솔루션서비스팀',
          carNumber: '178호 1681',
          carType: '-',
          division: '업무용',
          input: '178호 1681, 청주2)SE솔루션서비스팀', 
        }, 
        {
          index: '13',
          place: '부산사업장',
          department: '지원혁신팀통근버스',
          carNumber: '충북70바6005',
          carType: '-',
          division: '통근버스',
          input: '충북70바6005,지원혁신팀통근버스', 
        },
        {
          index: '14',
          place: '부산사업장',
          department: '지원혁신팀통근버스',
          carNumber: '충북70바6005',
          carType: '-',
          division: '통근버스',
          input: '충북70바6005,지원혁신팀통근버스', 
        },
        {
          index: '15',
          place: '부산사업장',
          department: '지원혁신팀통근버스',
          carNumber: '충북70바6005',
          carType: '-',
          division: '통근버스',
          input: '충북70바6005,지원혁신팀통근버스', 
        },
        {
          index: '16',
          place: '부산사업장',
          department: '지원혁신팀통근버스',
          carNumber: '충북70바6005',
          carType: '-',
          division: '통근버스',
          input: '충북70바6005,지원혁신팀통근버스', 
        },
        {
          index: '17',
          place: '부산사업장',
          department: '지원혁신팀통근버스',
          carNumber: '충북70바6005',
          carType: '-',
          division: '통근버스',
          input: '충북70바6005,지원혁신팀통근버스', 
        },
      ],
      gridColumns: [
        { header: '번호', name: 'index', editor: 'text', options: {
          type: 'number'
        }, width: 20, align: 'center' },
        { header: '사업장', name: 'place', editor: 'text', align: 'center' },
        { header: '부서', name: 'department', editor: 'text', width: 200, align: 'center' },
        { header: '차번', name: 'carNumber', editor: 'text', align: 'center' },
        { header: '차종', name: 'carType', editor: 'text', align: 'center' },
        { header: '구분', name: 'division', editor: 'text', align: 'center' },
        { header: '입력', name: 'input', editor: 'text', width: 520, align: 'center' } 
      ], 
      divisions: ['업무용', '통근버스'],
      visitedPlaces,
      // variables
      businessPlace: '',
      division: '',
      vehicleNumber:''
    }
  },
  mounted(){ 
  },
  methods: {
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
  