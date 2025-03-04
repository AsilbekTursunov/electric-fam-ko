<template>
  <custom-dialog :title="'임직원 · 부서 조회'">
    <section class='block-content'>
      <div class="content-info">
        <div class="file-section">
          <custom-select :data="customSelectOptions" :height="'height-30'" />
          <div class="table-block">
            <p class="table-title">조직도</p>
            <div class="table-content">
              <div class="table-content-files">
                <custom-tree :data="fileData" />
              </div>
            </div>
          </div>
        </div> 
        <div class="data-section">
          <el-row class="data-section-filter">
            <el-col :span="3">
              <label for="department" class="flex align-center ">
                <custom-check 
                  :id="'department'" 
                  :check="customCheck" 
                  @onChange="() => customCheck = customCheck ? false : true" /> 부서
              </label>
            </el-col>
            <el-col :span="5">
              <custom-select :data="filterSelect" :height="'height-30'" />
            </el-col>
            <el-col :span="12">
              <custom-input :placeholder="'부서 검색'" :height="30" />
            </el-col>
            <el-col :span="2">
              <custom-button class="primary" :height="30">검색</custom-button>
            </el-col>
          </el-row>
          <div class="table-block">
            <p class="table-title">검색결과 3건</p>
            <div class="table-content">
              <div class="table-content-files">
                <div class="main-table">
                  <el-row class="each-row">
                    <col-el class="title p-none" :span="1">
                      <label for="select-all-employee-users">
                        <custom-check
                          :id="'select-all-employee-users'" 
                          :check="selectedData.length === data.length" 
                          @onChange="handleCheckAll" />
                      </label>
                    </col-el>
                    <col-el class="title center" :span="2">번호</col-el>
                    <col-el class="title center" :span="2">사진</col-el>
                    <col-el class="title center" :span="4">이름</col-el>
                    <col-el class="title center" :span="9">직위/부서명</col-el>
                    <col-el class="title center" :span="6">핸드폰번호</col-el>
                  </el-row>
                  <el-row 
                    v-for="item in data" 
                    :key="item.name" 
                    class="each-row">
                    <col-el 
                      class="h-40 p-none" 
                      :height="'100%'" 
                      :span="1">
                      <label :for="`deparment-search-${item.phoneNumber}`">
                        <custom-check
                          :id="`deparment-search-${item.phoneNumber}`"   
                          :check="isSelected(item.rowNum)" 
                          @onChange="(value) => handleSelected(value, item.rowNum)" />
                      </label>
                    </col-el>
                    <col-el 
                      class="center font-regular h-40" 
                      :height="'100%'" 
                      :span="2">{{ item.rowNum }}</col-el>
                    <col-el 
                      class="center font-regular h-40" 
                      :height="'100%'"
                      :span="2"> 
                      <el-image
                        :style="{width: '25px', height: '25px'}"
                        :src="item.image"
                        :zoom-rate="1.2" 
                        :initial-index="4"
                        fit="cover"
                      />
                    </col-el>
                    <col-el 
                      class="center font-regular h-40" 
                      :height="'100%'" 
                      :span="4">{{ item.name }}</col-el>
                    <col-el 
                      class="center font-regular h-40" 
                      :height="'100%'"
                      :span="9">{{ item.departmentName}}</col-el>
                    <col-el 
                      class="center font-regular h-40" 
                      :height="'100%'"
                      :span="6">{{ item.phoneNumber }}</col-el>
                  </el-row>
                </div>  
              </div> 
            </div>
          </div>
        </div> 
      </div>
      <div class="acceptation-btns">
        <div>
          <custom-button 
            class="secondary font-regular" 
            :height="30">취소</custom-button>
          <custom-button 
            class="primary font-regular" 
            :height="30"
            @click="returnSelected">확인</custom-button>
        </div>
      </div>
    </section>
  </custom-dialog>
</template>

<script>
export default {
  name: 'EmployeeDepartmentSearch',
  data() {
    return {
      customSelectOptions: [
        {
          label: '청주사업장',
          value: '청주사업장'
        },
        {
          label: '천안사업장',
          value: '천안사업장'
        },
        {
          label: 'LS e-Mobility Solutions',
          value: 'LS e-Mobility Solutions'
        },
        {
          label: 'LS메탈',
          value: 'LS메탈'
        },
        {
          label: 'LS ELECTRIC 본사',
          value: 'LS ELECTRIC 본사'
        },
        {
          label: 'LS ELECTRIC 용산',
          value: 'LS ELECTRIC 용산'
        } 
      ],
      filterSelect: [
        {
          label: '이름',
          value: '이름'
        },
        {
          label: '부서명',
          value: '부서명'
        },
        {
          label: '직위',
          value: '직위'
        },
        {
          label: '직급명',
          value: '직급명'
        },
        {
          label: '담당업무',
          value: '담당업무'
        },
        {
          label: '핸드폰번호',
          value: '핸드폰번호'
        }
      ],
      fileData: [
        {
          label: '인원 및 차량 관리',
          children: [
            {
              label: '출타자 입출문 현황', 
            },
            {
              label: '임직원/상주인원 출입현황', 
            },
            {
              label: '임직원/상주인원 출입현황',
            },
            {
              label: '예약 방문자 출입 현황',
            },
            {
              label: '임직원/상주인원 출입현황',
            },
            {
              label: '임직원/상주인원 출입현황',
            },
            {
              label: '임직원/상주인원 출입현황',
            },
            {
              label: '임직원/상주인원 출입현황', 
            },
            {
              label: '임직원/상주인원 출입현황',
            },
            {
              label: '임직원/상주인원 출입현황',
            },
          ],
        },
        {
          label: '협력업체출입',
          children: [
            {
              label: '협력업체관리',
            },
            {
              label: '협력업체카드',
            },
            {
              label: '협력업체출입현황',
            },
          ],
        },
        {
          label: '순찰관리',
          children: [
            {
              label: '순찰현황',
            },
            {
              label: '이상유무 코드 등록',
            },
            {
              label: '순찰지점 등록',
            },
          ],
        },
        {
          label: '순찰관리',
          children: [
            {
              label: '순찰현황',
            },
            {
              label: '이상유무 코드 등록',
            },
            {
              label: '순찰지점 등록',
            },
          ],
        },
      ],
      data: Array.from({ length: 15 }, (_, index) => ({
        rowNum: index + 1,
        image: 'https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg',
        name: 'John Doe',
        departmentName: '청주사업장 · LS e-Mobility Solutions',
        phoneNumber: '010-1234-5678'  // mock data
      })),
      gridColumns: [
        {
          header: '번호',
          name: 'rowNum',
          width: 5
        },
        {
          header: '사진',
          name: 'image',
          width: 5,
        },
        {
          header: '이름',
          name: 'name',
          width: 80
        },
        {
          header: '직위/부서명',
          name: 'departmentName',
          width: 200
        },
        {
          header: '핸드폰번호',
          name: 'phoneNumber', 
        }
      ],
      customCheck: false, 
      selectedData: [],   // mock data 
    }
  },
  props: { 
    newData: Array,  
    // onClose: Function
  },
  methods: {
    handleCheckAll(check) { 
      if (check) {
        this.selectedData = this.data
      } else {
        this.selectedData = []
      } 
    },
    handleSelected(check, id) {  
      if (check) { 
        const user = this.data.find((user) => user.rowNum === id)
        this.selectedData.push({ ...user })  
      } else { 
        this.selectedData = this.selectedData.filter((u) => u.rowNum !== id)
      }
    },
    isSelected(id) {
      return this.selectedData.some((u) => u.rowNum === id)
    },
    returnSelected() {
      this.$emit('onSelect', this.selectedData)
      this.selectedData = []
      this.onClose()
    }
  }
}
</script>

<style lang="scss" scoped>
.block-content{
  width: 800px;  
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  box-sizing: border-box;
  .content-info{
    display: flex;
    gap: 20px;
    .file-section{
      width: 230px !important; 
      height: 100%; 
      box-sizing: border-box;
      .table-block{
        box-sizing: border-box; 
        
      }
    }
    .data-section{
      width: 570px !important; 
      .data-section-filter{
        display: flex;
        align-items: center; 
        justify-content: space-between;
        label{
          display: flex;
          gap: 10px;
          font-size: $font-regular-base; 
          font-family: $font-semibold;
        } 
      }
      .table-block{
        .table-content{
          color: #000;
        }
      }
    }
    .table-block{
      border: 1px solid #D6D9E3;
      border-radius: 5px; 
      margin-top: 10px; 
      height: 400px; 
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .table-title{
        font-size: $font-regular-base; 
        font-family: $font-semibold;
        background-color: $table-head-color;
        padding: 5px;
        border-bottom: 1px solid #D6D9E3;
        color: $common-color;
      } 
      .table-content{   
          padding: 5px;
          overflow-y: auto;
          .table-content-files{  
            padding-right: 5px;
            overflow-y: auto; 
          }
        }
    }
  }
  .acceptation-btns{
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
    div{
      display: flex;
      gap: 10px;
    }
   }
}
</style>