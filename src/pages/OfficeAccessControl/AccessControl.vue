<template>
  <div class="water_consumption_status">
    <div class="main-table">
      <el-row class="each-row">
        <col-el class="title center br" :span="2">사업장</col-el>
        <col-el class="start br" :span="5">
          <label>
            <CustomSelect :width="200" />
          </label>
        </col-el>
        <col-el class="title center br" :span="2">검색어</col-el>
        <col-el class="start br gap-5" :span="5">
          <label>
            <CustomSelect v-model="searchTerm.selected" :width="100" />
          </label>
          <label>
            <CustomInput v-model="searchTerm.value" />
          </label>
        </col-el>  
        <col-el class="title center br" :span="2">출입문그룹</col-el>
        <col-el class="start gap-10" :span="8">
          <label>
            <CustomSelect
              v-model="entranceGroup"
              :width="180"
              :data="entranceGroups" />
          </label>
          <div class="w-full"> 
          </div>  
          <label class="flex gap-10">
            <CustomButton class="primary" :size="'md'">조회</CustomButton>
            <CustomButton class="primary" :size="'md'">저장</CustomButton>  
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
            > 삭제
            </CustomButton> 
            <CustomButton class="default font-base" :height="30">저장</CustomButton> 
            <CustomButton class="default font-base" :height="30">사용중지</CustomButton> 
          </div>
        </div>
      </div>
      <div class="box-table">
        <CustomTuiGrid 
          :data="gridData"
          :columns="gridColumns" 
          :scrollX="false"
          :scrollY="false"
          :rowHeaders="[
            {
              type: 'checkbox',
              align: 'center',
              height:100
              
            }
          ]"
          :frozenCount="0"
          :border="true"
          :pageOptions="{
            useClient: true,
            perPage:15
          }"
          :header="{ 
            height: 120,
            complexColumns: [ 
              {
                header: '출입권한(GROUP)',
                height:100,
                name: 'accessRightGroup',
                resizable: true, 
                childNames: [
                  'basic',
                  'design',
                  'drawRoom',
                  'research',
                  'testCenter',
                  'pressure',
                  'smartDevice',
                  'generatorRoom',
                  'complex',
                  'station',
                  'busanSite',
                  'samplePreparation',
                  'businessFoundation',
                  'powerDivision',
                  'trainCenter',
                  'metalBusan'
                ]
              }, 
            ] 
          }" 
        />
      </div>
    </div> 
  </div>
</template>
        
<script>
import CustomCheckboxRenderer from '../../components/renderers/CheckBoxRender.js' 
export default {
  name: 'AccessControl', 
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
        number: index + 1,
        place: `청주사업장`,
        cleanup: '상명이엔에스',
        name: 'BIZ016',
        rank: '홍정희',
        position: '사원D', 
        basic: 'value',
        design: 'value',
        drawRoom: 'value',
        research: 'value',
        testCenter: 'value',
        pressure: 'value',
        smartDevice: 'value',
        generatorRoom: 'value',
        complex: 'value',
        station: 'value',
        busanSite: 'value',
        samplePreparation: 'value',
        businessFoundation: 'value',
        powerDivision: 'value',
        trainCenter: 'value',
        metalBusan: 'value'
      })),
      gridColumns: [
        {
          header: '번호',
          name: 'number',
        },
        {
          header: '사업장',
          name: 'place',
          width: 120,
        },
        {
          header: '사번',
          name: 'cleanup',
          width: 200,
        },
        {
          header: '성명',
          name: 'name',
        },
        {
          header: '직급',
          name: 'rank',
        },
        {
          header: '직책',
          name: 'position',
        },
        {
          header: '기본',
          name: 'basic',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '1사업장설계',
          name: 'design',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '도면실',
          name: 'drawRoom',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '연구소',
          name: 'research',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '시험센터',
          name: 'testCenter',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '고압시작실',
          name: 'pressure',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '1사업장 스마트기기 시험반',
          name: 'smartDevice',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: 'PT&T 발전기실',
          name: 'generatorRoom',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: 'PT&T 복합환경시험실',
          name: 'complex',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: 'FEMS Station',
          name: 'station',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '부산사업장',
          name: 'busanSite',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: 'PT&T 시료준비실',
          name: 'samplePreparation',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '1사업장전기반',
          name: 'businessFoundation',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '전력남부사업부(부산)',
          name: 'powerDivision',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '기본 (연수원)',
          name: 'trainCenter',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
        {
          header: '메탈(부산)',
          name: 'metalBusan',
          align: 'center',
          className:"customCheck",
          renderer: {
            type: CustomCheckboxRenderer, 
          },
        },
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
    updateCheckbox(rowKey, newValue) {
      this.gridData[rowKey].customCheckbox = newValue
    }
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
  .history-table1 { 
    .box-table { 
      :deep(.tui-grid-rside-area){ 
        .tui-grid-header-area { 
          .tui-grid-table{ 
            .tui-grid-cell-header{
              white-space: normal;
            }
          }
        }
        
      }
    } 
  } 
}
</style>