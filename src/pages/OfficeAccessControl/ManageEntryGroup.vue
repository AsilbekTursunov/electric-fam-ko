<template>
  <div class="water_consumption_status">
    <div class=""> 
      <div class="main-table"> 
        <el-row class="each-row">
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :lg="{ span: 3 }" 
            :xl="{ span: 3 }">사업장
          </col-el> 
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :lg="{ span: 2 }" 
            :xl="{ span: 2 }">그룹코드
          </col-el> 
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :lg="{ span: 6 }" 
            :xl="{ span: 6 }">그룹명
          </col-el> 
          <col-el
            class="title center br-w h-full p-none"
            :height="'100%'" 
            :lg="{ span: 11 }" 
            :xl="{ span: 12 }">
            <div class="w-full">
              <el-row>
                <col-el class="title center bb-w">담당자</col-el>
              </el-row>
              <el-row>
                <col-el class="title center br-w" :span="6">이름</col-el>
                <col-el class="title center br-w" :span="14">소속</col-el>
                <col-el class="title center" :span="4">검색</col-el>
              </el-row>
            </div>
          </col-el> 
          <col-el
            class="title center h-full"
            :height="'100%'"
            :lg="{ span: 2 }" 
            :xl="{ span: 1 }">담당자
          </col-el> 
        </el-row>  
        <el-row class="each-row">
          <col-el
            class="center p-2-4" 
            :lg="{ span: 3 }" 
            :xl="{ span: 3 }">
            <custom-select 
              v-model="newDataForm.businessPlace"
              :data="visitedPlaces" />
          </col-el> 
          <col-el
            class="center p-2-4" 
            :lg="{ span: 2 }" 
            :xl="{ span: 2 }">그룹코드
          </col-el> 
          <col-el
            class="center p-2-4" 
            :lg="{ span: 6 }" 
            :xl="{ span: 6 }">
            <custom-input v-model="newDataForm.groupName" />
          </col-el> 
          <col-el
            class="p-none" 
            :lg="{ span: 11 }" 
            :xl="{ span: 12 }"> 
            <div class="w-full">
              <el-row>
                <col-el class="p-2-4" :span="6">
                  <custom-input v-model="newDataForm.managerName" />
                </col-el>
                <col-el class="p-2-4" :span="14">
                  <custom-input v-model="newDataForm.managerAffiliation" />
                </col-el>
                <col-el class="p-2-4" :span="4">
                  <custom-button class="secondary">담당자 검색</custom-button>
                </col-el>
              </el-row>
            </div>
          </col-el> 
          <col-el
            class="center p-2-4" 
            :lg="{ span: 2 }" 
            :xl="{ span: 1 }">
            <label>
              <custom-button 
                class="primary" 
                :size="'md'" 
                :type="'button'"
                :onClick="addPlace"
              >저장</custom-button>
            </label>
          </col-el> 
        </el-row>  
      </div> 
    </div> 

    <div v-if="gridData.length" class="">
      <div class="flex align-center space-between mb-10 mt-10">
        <p class="block-title m-none"></p>
        <div class="flex align-center gap-15">  
          <CustomButton 
            class="default font-base" 
            :height="30"
            @click="deletePlace">삭제</CustomButton>  
        </div>
      </div>
      <div class="main-table">
        <el-row class="each-row">
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :span="1">
            <label class="flex align-center justify-center p-none">
              <CustomCheck :onChange="() => selectedData = gridData.map(item => item.id)" />
            </label>
          </col-el>
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :span="1"
            @click="console.log(gridData)">번호
          </col-el>
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :span="3">사업장
          </col-el>  
          <col-el
            class="title center br-w h-full"
            :height="'100%'" 
            :lg="{ span: 6 }" 
            :xl="{ span: 6 }">그룹명
          </col-el> 
          <col-el
            class="title center br-w h-full p-none"
            :height="'100%'" 
            :lg="{ span: 11 }" 
            :xl="{ span: 12 }">
            <div class="w-full">
              <el-row>
                <col-el class="title center bb-w">담당자</col-el>
              </el-row>
              <el-row>
                <col-el class="title center br-w" :span="6">이름</col-el>
                <col-el class="title center br-w" :span="14">소속</col-el>
                <col-el class="title center" :span="4">검색</col-el>
              </el-row>
            </div>
          </col-el> 
          <col-el
            class="title center h-full"
            :height="'100%'"
            :lg="{ span: 2 }" 
            :xl="{ span: 1 }">담당자
          </col-el> 
        </el-row>  
        <div class="data-block">
          <el-row 
            v-for="(item, index) in gridData"
            :key="item.id"
            class="each-row">
            <col-el
              class="center p-2-4" 
              :span="1">
              <label class="flex align-center justify-center p-none">
                <CustomCheck 
                  :check="isSelected(item.id)" 
                  :onChange="() => addSelected(item.id)" />
              </label>
            </col-el>
            <col-el
              class=" center p-2-4" 
              :span="1">
              {{ index + 1 }}
            </col-el>
            <col-el
              class="center p-2-4" 
              :span="3">
              {{ item.place }}
            </col-el>  
            <col-el
              class=" center p-2-4" 
              :lg="{ span: 6 }" 
              :xl="{ span: 6 }">
              <CustomInput v-model="item.groupName" />
            </col-el> 
            <col-el
              class=" center br-w h-full p-none" 
              :lg="{ span: 11 }" 
              :xl="{ span: 12 }">
              <div class="w-full"> 
                <el-row>
                  <col-el class="center p-2-4" :span="6">{{ item.name }}</col-el>
                  <col-el class="center p-2-4" :span="14">{{ item.affiliation}}</col-el>
                  <col-el class="center p-2-4" :span="4">
                    <custom-button class="secondary" :size="'md'">담당자 검색</custom-button>   
                  </col-el>
                </el-row>
              </div>
            </col-el> 
            <col-el
              class="center p-2-4" 
              :lg="{ span: 2 }" 
              :xl="{ span: 1 }">
              <label>
                <custom-button class="default">수정</custom-button>
              </label>
            </col-el> 
          </el-row>  
        </div> 
      </div> 
    </div> 
  </div>
</template>
        
<script>
import { uuid } from 'vue-uuid' 
import { visitedPlaces } from '../../constants/index.js'

export default {
  name: 'AccessControl', 
  data() {
    return { 
      visitedPlaces,  
      gridData: [], 
      selectedData:[],
      currentPage3: 5,
      pageSize3: 10,
      newDataForm: {
        businessPlace: '',
        groupName: '',
        managerName: '',
        managerAffiliation:'', 
      }
    }
  },  
  mounted(){ 
  },
  computed: {
    isActive(){
      return this.newDataForm.businessPlace != '' && this.newDataForm.businessPlace != 
      '' && this.newDataForm.managerName != '' && this.newDataForm.managerAffiliation != ''
    }, 
  },
  methods: {
    addPlace() { 
      if (this.isActive) { 
        this.gridData.push({
          id: uuid.v4(),
          place: this.newDataForm.businessPlace,
          groupName: this.newDataForm.businessPlace,
          name: this.newDataForm.managerName,
          affiliation: this.newDataForm.managerAffiliation,
          search: '담당자 검색',
          save: '수정'
        })
        this.newDataForm.businessPlace = ''
        this.newDataForm.groupName = ''
        this.newDataForm.managerName = ''
        this.newDataForm.managerAffiliation = '' 
      } 
    },
    deletePlace() {
      if (this.selectedData.length > 0) {
        this.gridData = this.gridData.filter(item => !this.selectedData.includes(item.id))
        this.selectedData = []
      }
    },
    addSelected(id) {
      if (!this.selectedData.includes(id)) {
        this.selectedData.push(id)
      } else {
        this.selectedData = this.selectedData.filter(item => item !== id)
      }
    },
    isSelected(id) {
      return this.selectedData.includes(id)
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
  .apply-page_content{
    margin-top: 12px;
    margin-bottom: 20px;
    .main-table{ 
      border-top: 2px solid rgb(198, 198, 201);
      border-bottom: 1px solid rgb(214, 214, 217);
    }
    .table-title{
      font-size: 15px;
      font-family: 'Pretendard-SemiBold';
      margin-bottom: 5px;
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
        border-right: 1px solid rgb(255, 255, 255); 
        
      }
      .b-r {
        border-right: 1px solid rgb(255, 255, 255) !important;  
      }
      .b-b{ 
        border-bottom: 1px solid rgb(255, 255, 255) !important;  
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
      .contents{
        .el-row{
          width: 100%;
        }
      }
      .contents:last-child, .names:last-child{ 
        justify-content: start; 
      }
      .seats{
        width: fit-content; 
        padding: 6px 8px;
        border-radius: 5px;
        font-size: $font-regular-base;
        font-weight: 500;
        color: black;
        border: 1px solid #D6D9E3;
        background-color: rgb(238, 238, 238);
      } 
      .justify-center{
        justify-content: center !important;
      }
      .btnImg{
        width: 50px;
        height: 50px;
      }
    }
    .table-main:last-child{
      border-bottom: none;
    }
  }
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
    .main-table { 
      :deep(.tui-grid-container){ 
        .tui-grid-rside-area{  
          .tui-grid-body-area{
            height: fit-content !important; 
          }
        }
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