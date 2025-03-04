<template>
  <div class="water_consumption_status"> 
    <div class="main-table">
      <el-row class="each-row">
        <col-el class="title center br" :span="2">사업장</col-el>
        <col-el class="start br" :span="6">
          <label>
            <CustomSelect 
              v-model="businessPlaces"
              :width="200" 
              :data="visitedPlaces" />
          </label>
        </col-el>
        <col-el class="title center br" :span="2">기 간</col-el>
        <col-el class="start br" :span="6">
          <label class="flex align-center gap-10"> 
            <CustomDatePicker v-model="period.start" /> ~ <CustomDatePicker v-model="period.end" />
          </label>
        </col-el>  
        <col-el class="title center br" :span="2">검색어</col-el>
        <col-el class="start gap-10" :span="6">
          <label class="flex align-center gap-10"> 
            <CustomSelect
              v-model="searchTerm.selected" 
              :width="100" 
              :data="entranceGroups" /> 
          </label> 
          <label> 
            <CustomInput v-model="searchTerm.value" /> 
          </label>  
        </col-el>
      </el-row> 
      <el-row class="each-row">
        <col-el class="center title br" :span="2">출입문</col-el>
        <col-el class="start br" :span="6">
          <label class="flex align-center gap-10"> 
            <CustomSelect :width="200" /> 
          </label>
        </col-el>
        <col-el class="center title br" :span="2">결재상태</col-el>
        <col-el class="start space-between" :span="14">
          <div class="w-full flex space-between">
            <label>
              <CustomSelect 
                v-model="paymentStatus"
                :width="250"
                :data="paymentStatuses"  
              />
            </label>
            <label class="flex align-center">
              <CustomButton 
                :type="'button'" 
                class="primary" 
                :onClick="() => console.log(
                  businessPlaces,  
                  period,
                  paymentStatus,
                  searchTerm
                )">조회
              </CustomButton>
            </label>
          </div>
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
            <CustomButton class="default font-base" :height="30"> 삭제 </CustomButton> 
            <CustomButton class="default font-base" :height="30">저장</CustomButton> 
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
import { entranceGroups, visitedPlaces } from '../../constants'
export default {
  name: 'OfficeAccessStatus',
  data() {
    return {
      visitedPlaces,
      entranceGroups,
      paymentStatuses: [
        '1사업장 사무동 2층 남동쪽',
        '1사업장 사무동 2층 북서쪽',
        '1사업장 사무동 2층 동쪽',
        '1사업장 사무동 2층 북동쪽',
        '1사업장 사무동 2층 서쪽',
        '1사업장 사무동 3층 북서쪽',
        '1사업장 사무동 3층 서쪽',
        '1사업장 사무동 3층 도면실',
        '1사업장 사무동 3층 남서쪽',
        '2사업장 사무동 북서쪽(E/L)',
        '2사업장 사무동 북동쪽',
        '2사업장 사무동 남쪽',
        '2사업장 사무동 동남쪽',
        '2사업장 전력연구소 연수원 1층 재료시험실',
        '2사업장 전력연구소 연수원 2층 북쪽계단',
        '2사업장 전력연구소 연수원 2층 남쪽',
        '2사업장 전력시험기술원 1층 고전압시험실 남쪽'
      ],
      gridData: Array.from({ length: 15 }, (_, index) => ({
        rowNum: index + 1,
        place: `청주사업장`,
        date: '2024-11-21',
        department: '청주2)SE솔루션서비스팀',
        entrant: '한창호',
        cleanup: '216170',
        cardNumber: 'CJ216170',
        gate: '2사업장 사무동 북서쪽',
        division: '출문',
        hour: '11:25:05',
      })),
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '사업장', name: 'place', editor: 'text' },
        { header: '일자', name: 'date', editor: 'text' },
        { header: '부서', name: 'department', editor: 'text', width: 200 },
        { header: '출입자', name: 'entrant', editor: 'text' },
        { header: '사번', name: 'cleanup', editor: 'text' },
        { header: '카드번호', name: 'cardNumber', editor: 'text' },
        { header: 'GATE', name: 'gate', editor: 'text' },
        { header: '구분', name: 'division', editor: 'text' },
        { header: '시간', name: 'hour', editor: 'text' },
      ],
      currentPage3: 5,
      pageSize3: 10,
      // variables
      businessPlaces: '',  
      period: {
        start: '',
        end: ''
      },
      paymentStatus: '',
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