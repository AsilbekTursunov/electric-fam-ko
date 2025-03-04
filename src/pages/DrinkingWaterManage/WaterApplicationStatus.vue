<template>
  <div class="water_application_status">
    <div class="">
      <div class="page-content-box">
        <div class="main-table">
          <el-row class="each-row">
            <col-el class="title center br" :span="2">식당</col-el>
            <col-el class="start br" :span="10">
              <label>
                <CustomSelect :width="200" />
              </label>
            </col-el>  
            <col-el class="title center br" :span="2">식수기간</col-el>
            <col-el class="start gap-10" :span="10"> 
              <div class="w-full flex align-center gap-10"> 
                <custom-date-picker />~<custom-date-picker />
              </div>  
              <label class="flex gap-10"> 
                <CustomButton class="primary" :size="'md'">조회</CustomButton>  
              </label> 
            </col-el>
          </el-row> 
        </div>  
      </div> 
      <div class="excel-download flex self-end mb-10"> 
        <div>
          <custom-button 
            class="default" 
            :size="'md'"
            :height="30" 
            :onClick="downloadExcel">엑셀 다운로드</custom-button> 
        </div>
      </div> 
    </div>
    <div class="restaurant-table"> 
      <el-row class="each-row">
        <col-el class="title center" :span="6">식당명</col-el> 
        <col-el class="title center" :span="3">코너</col-el> 
        <col-el class="title center" :span="3">조식</col-el> 
        <col-el class="title center" :span="3">중식</col-el> 
        <col-el class="title center" :span="3">석식</col-el> 
        <col-el class="title center" :span="3">야식</col-el> 
        <col-el class="title center" :span="3">계</col-el> 
      </el-row>
      <el-row 
        v-for="item in data" 
        :key="item.title" 
        class="table-content">
        <col-el 
          class="center align-center h-full"
          :height="'100%'" 
          :span="6">
          {{ item.title }}
        </col-el>
        <el-col :span="18">
          <div class="w-full custom--col">
            <el-row 
              v-for="hood in item.data" 
              :key="hood.label" 
              class="table-content-child">
              <el-col class=" flex p-2 justify-center" :span="4">{{ hood.label }}</el-col>
              <el-col class=" flex p-2 justify-center" :span="4">{{ hood.breakfast }}</el-col>
              <el-col class=" flex p-2 justify-center" :span="4">{{ hood.lunch }}</el-col>
              <el-col class=" flex p-2 justify-center" :span="4">{{ hood.dinner }}</el-col>
              <el-col class=" flex p-2 justify-center" :span="4">{{ hood.snack }}</el-col>
              <el-col class=" flex p-2 justify-center" :span="4">{{ hood.total }}</el-col>
            </el-row>  
          </div>
        </el-col>
      </el-row>
      <el-row class="table-footer" :gutter="10">
        <el-col class="table" :span="9">합 계</el-col> 
        <el-col class="table" :span="3">108</el-col> 
        <el-col class="table" :span="3">0</el-col> 
        <el-col class="table" :span="3">0</el-col> 
        <el-col class="table" :span="3">0</el-col> 
        <el-col class="table" :span="3">1</el-col> 
      </el-row>
    </div>
  </div>
</template>
        
<script> 
import { exportToExcel } from '../../utils/index'
export default {
  name: 'WaterApplicationStatus', 
  data() {
    return { 
      data:[
        {
          "title": "청주사업장1식당",
          "data": [
            { "label": "분식", "breakfast": 12, "lunch": 6, "dinner": 11, "snack": 4, "total": 33 },
            { "label": "양식", "breakfast": 17, "lunch": 4, "dinner": 8, "snack": 3, "total": 32 },
            { "label": "이동", "breakfast": 14, "lunch": 9, "dinner": 10, "snack": 5, "total": 38 },
            { "label": "소계", "breakfast": 43, "lunch": 19, "dinner": 29, "snack": 12, "total": 103 }
          ]
        },
        {
          "title": "청주사업장2식당",
          "data": [
            { "label": "분식", "breakfast": 10, "lunch": 5, "dinner": 9, "snack": 2, "total": 26 },
            { "label": "양식", "breakfast": 15, "lunch": 7, "dinner": 12, "snack": 3, "total": 37 },
            { "label": "이동", "breakfast": 19, "lunch": 6, "dinner": 11, "snack": 4, "total": 40 },
            { "label": "소계", "breakfast": 44, "lunch": 18, "dinner": 32, "snack": 9, "total": 103 }
          ]
        },
        {
          "title": "청주사업장3식당",
          "data": [
            { "label": "분식", "breakfast": 14, "lunch": 8, "dinner": 10, "snack": 3, "total": 35 },
            { "label": "양식", "breakfast": 20, "lunch": 5, "dinner": 9, "snack": 2, "total": 36 },
            { "label": "이동", "breakfast": 18, "lunch": 7, "dinner": 12, "snack": 5, "total": 42 },
            { "label": "소계", "breakfast": 52, "lunch": 20, "dinner": 31, "snack": 10, "total": 113 }
          ]
        },
        {
          "title": "청주사업장3식당",
          "data": [
            { "label": "분식", "breakfast": 14, "lunch": 8, "dinner": 10, "snack": 3, "total": 35 },
            { "label": "양식", "breakfast": 20, "lunch": 5, "dinner": 9, "snack": 2, "total": 36 },
            { "label": "이동", "breakfast": 18, "lunch": 7, "dinner": 12, "snack": 5, "total": 42 },
            { "label": "소계", "breakfast": 52, "lunch": 20, "dinner": 31, "snack": 10, "total": 113 }
          ]
        },
        {
          "title": "청주사업장3식당",
          "data": [
            { "label": "분식", "breakfast": 14, "lunch": 8, "dinner": 10, "snack": 3, "total": 35 },
            { "label": "양식", "breakfast": 20, "lunch": 5, "dinner": 9, "snack": 2, "total": 36 },
            { "label": "이동", "breakfast": 18, "lunch": 7, "dinner": 12, "snack": 5, "total": 42 },
            { "label": "소계", "breakfast": 52, "lunch": 20, "dinner": 31, "snack": 10, "total": 113 }
          ]
        }
      ],
      exportToExcel,
      currentPage3: 5,
      pageSize3: 10,
    }
  }, 
  computed() {  
  },
  mounted(){ 
  },
  methods: { 
    downloadExcel() {
      this.exportToExcel(this.data)
    }
  }
}
</script>
        
<style lang="scss" scoped>
.water_application_status {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px;  
  padding-bottom: 20px;  
  .restaurant-table{
    overflow-x: hidden;
    border-top: 2px solid #C6C6C9; 
    .table-content{ 
      border-bottom: 1px solid #C6C6C9;
      .custom--col { 
        .table-content-child{ 
          border-bottom: 1px solid #C6C6C9; 
        }
        .table-content-child:last-child{
          background-color: #F0F0F0 !important;
          border-bottom: 0px;
        }
      }
    }
    .table-footer{
      .table{
        text-align: center;
        font-size: $font-regular-base;
        padding: 5px 0px;
      }
      background-color: #E1E1E1;
    }
  }
}
</style>

