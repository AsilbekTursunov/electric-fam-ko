<template>
  <div class="water_consumption_status">
    <div class="main-table">
      <el-row class="each-row">
        <col-el class="title center br" :span="2">사업장</col-el>
        <col-el class="start br" :span="5">
          <label>
            <CustomSelect :width="160" />
          </label>
        </col-el>
        <col-el class="title center br" :span="2">출입문그룹</col-el>
        <col-el class="start br" :span="5">
          <CustomSelect
            v-model="entranceGroup" 
            :width="160"
            :data="entranceGroups" />
        </col-el>  
        <col-el class="title center br" :span="2">검색어</col-el>
        <col-el class="start gap-10" :span="8">
          <label>
            <CustomSelect v-model="searchTerm.selected" :width="140" />
          </label>
          <div class="w-full">
            <el-row> 
              <el-col :span="24">
                <CustomInput v-model="searchTerm.value" /> 
              </el-col>
            </el-row> 
          </div>  
          <label>
            <CustomButton class="primary" :size="'md'">조회</CustomButton>
          </label> 
        </col-el>
      </el-row> 
    </div> 
    <div class="history-table1">
      <div class="flex align-center space-between mb-10 mt-10">
        <p class="block-title m-none">검색결과 <span class="primary">46</span>건</p>
        <div class="flex align-center gap-15">
          <div class="">
            <CustomButton class="default" :height="30">엑셀 다운로드</CustomButton>
          </div>
          <div class="flex align-center gap-5">
            <CustomButton
              class="default font-base"
              :height="30"
              @click="openDialog"
            > 삭제
            </CustomButton> 
            <CustomButton class="default font-base" :height="30">저장</CustomButton> 
            <CustomButton class="default font-base" :height="30">사용중지</CustomButton> 
          </div>
        </div>
      </div>
      <div>
        <CustomTuiGrid 
          :data="gridData"
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
    </div> 
  </div>
</template>
        
<script> 
export default {
  name: 'AccessGroupPermissionManagement',
  data() {
    return { 
      entranceGroups: [
        '1사업장설계',
        '도면실',
        '연구소',
        '시험센터',
        '고압 시작실',
        '1사업장 스마트기기시험반',
        'PT&T발전기실',
        'PT&T복합환경시험실',
        'FEMS Station',
        '부산사업장',
        'PT&T 시료준비실',
        '1사업장 전기반',
        '전력남부사업부(부산)',
        '기본(연수원)',
        '메탈(부산)',
      ], 
      gridData: Array.from({ length: 15 }, (_, index) => ({
        rowNum: index + 1,
        place: `청주사업장`,
        department: '상명이엔에스',
        cleanup: 'BIZ016',
        name: '홍정희',
        rank: '사원D',
        position: '-',
        entryGroup: '1사업장설계',
        expiration: '24.11.08 ~ 24.12.08',
        date: '없음',
      })),
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '사업장', name: 'place', editor: 'text' },
        { header: '부서', name: 'department', editor: 'text', width: 300 },
        { header: '사번', name: 'cleanup', editor: 'text' },
        { header: '성명', name: 'name', editor: 'text' },
        { header: '직급', name: 'rank', editor: 'text' },
        { header: '직책', name: 'position', editor: 'text' },
        { header: '출입그룹', name: 'entryGroup', editor: 'text' },
        { header: '유효기간', name: 'expiration', editor: 'text' },
        { header: '최종출입일시', name: 'date', editor: 'text' },
      ], 
      currentPage3: 5,
      pageSize3: 10,
      entranceGroup: '',
      searchTerm: {
        selected: '',
        value:''
      }
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
.water_consumption_status {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px;
  .history-table{
    margin-top: 12px;
    margin-bottom: 20px;
    .history-btn{ 
      border-top: 2px solid rgb(198, 198, 201);
      border-bottom: 1px solid rgb(214, 214, 217);
    }
    .table-main{ 
      color: #000000;
      font-size: $font-regular-base;
      font-weight: 900;
      border-bottom: 1px solid rgb(214, 214, 217);
      .table { 
        position: relative;
        padding: 4px 10px;
        text-align: center;
        box-sizing: border-box;
        display: flex;
        min-height: 30px;
        align-items: center;
        justify-content: center;
        border-right: 1px solid rgb(214, 214, 217); 

      }
      .table1 {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
      }
      .table:last-child{ 
        border-right: none; 
      }
      .child-names, .names { 
        background-color: rgb(238, 238, 243);
      } 
      .child-names{
        border-bottom: 1px solid rgb(214, 214, 217);
        height: 30px;
      }
      .justify-start{
        justify-content: start;
      }
    }
    .table-main:last-child{
      border-bottom: none;
    }
  }
  .history-table1 {
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
      }
    } 
  }
  .pagination-box {
    width: 100%;
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
}
</style>