<template>
  <custom-dialog :title="'임직원 · 부서 조회'" :onClose="onClose">
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
              <label for="department">
                <custom-check-box 
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
              <custom-button class="primary font-base" :height="30">검색</custom-button>
            </el-col>
          </el-row>
          <div class="table-block">
            <p class="table-title">검색결과 <span class="primary">3</span> 건</p>
            <div class="table-content">
              <div class="table-content-files">
                <div class="main-table">
                  <el-row class="each-row">
                    <col-el class="title p-none" :span="1">
                      <label>
                        <custom-check 
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
                      <label>
                        <custom-check    
                          :check="isSelected(item.id, 'selectedData')" 
                          @onChange="(value) => handleSelected(value, item.id, 'selectedData')" />
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
        <div class="transfer-btns ">
          <button class="transfer-btn" @click="addTransferred">
            <el-icon><ArrowRightBold :color="'#ff0000'" /></el-icon>
          </button> 
          <button class="transfer-btn" @click="removeTransferred">
            <el-icon><ArrowLeftBold :color="'#0074bd'" /></el-icon>
          </button> 
        </div> 
        <dev class="transferred-section">
          <el-row class="data-section-filter">
            <el-col :span="5"></el-col>
          </el-row>
          <div class="table-block">
            <p class="table-title">선택목록</p>
            <div class="table-content"> 
              <div class="table-content-files">
                <div class="flex gap-5 table-content-types align-center">
                  <button :class="{active: transferType == '전체선택'}" type="button">전체선택</button>|
                  <button :class="{active: transferType == '선택해제'}" type="button">선택해제</button>|
                  <button :class="{active: transferType == '삭제'}" type="button">삭제</button>
                </div>
                <div 
                  v-for="file in transferredData" 
                  :key="file.phoneNumber" 
                  class="transferred-file">
                  <label :for="`transfered-user-${file.phoneNumber}`" class="flex center gap-5 align-center">
                    <CustomCheck 
                      :id="`transfered-user-${file.phoneNumber}`"
                      :check="isSelected(file.rowNum, 'transferredSelected')"
                      @onChange="(value) => handleSelected(value, file.rowNum, 'transferredSelected')"
                    /> {{ file.name }} 
                  </label>
                </div> 
              </div>
            </div>
          </div>
        </dev>
      </div>
      <div class="acceptation-btns">
        <div>
          <custom-button class="secondary font-base" :height="30">취소</custom-button>
          <custom-button 
            class="primary font-base" 
            :height="30"
            @click="returnSelected">확인</custom-button>
        </div>
      </div>
    </section>
  </custom-dialog>
</template>

<script> 
export default {
  name: 'ReferenceLookup',
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
          label: 'LS ELECTRIC',
          children: [
            {
              label: '회장실', 
              children:[]
            },
            {
              label: 'Overseas Corporate', 
              children:[]
            },
            {
              label: '협력업체',
              children: [
                {
                  label: '부산)설계팀'
                },
                {
                  label: 'CDO/CIO)IT혁신팀'
                },
                {
                  label: 'CDO/CIO)IT혁신팀'
                },
                {
                  label: 'CDO/CIO)IT혁신팀'
                },
                {
                  label: 'CDO/CIO)IT혁신팀'
                },
                {
                  label: 'CDO/CIO)IT혁신팀'
                },
                {
                  label: 'LS ELECTRIC'
                },
                {
                  label: 'LS ELECTRIC',
                  children: [
                    {
                      label: 'LS사우타'
                    },
                    {
                      label: 'LS메카피온'
                    }
                  ]
                },
                {
                  label: '삼성SDS'
                },
                {
                  label: 'WeLS Test'
                }
              ]
            } 
          ],
        }
      ],
      data: [
        {
          "id": "550e8400-e29b-41d4-a716-446655440000",
          "rowNum": 1,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5678"
        },
        {
          "id": "c4d5e6f7-a123-4b56-89cd-987654321000",
          "rowNum": 2,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5679"
        },
        {
          "id": "d1234567-89ab-4cde-1234-567890abcdef",
          "rowNum": 3,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5680"
        },
        {
          "id": "e7f8a9b1-c2d3-4e5f-6789-0123456789ab",
          "rowNum": 4,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5681"
        },
        {
          "id": "f1234567-89ab-4cde-1234-567890abcdef",
          "rowNum": 5,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5682"
        },
        {
          "id": "abcdef12-3456-7890-abcd-ef1234567890",
          "rowNum": 6,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5683"
        },
        {
          "id": "12345678-9abc-def0-1234-56789abcdef0",
          "rowNum": 7,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5684"
        },
        {
          "id": "abcdefab-cdef-0123-4567-89abcdef0123",
          "rowNum": 8,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5685"
        },
        {
          "id": "789abcdef0-1234-5678-9abc-def012345678",
          "rowNum": 9,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5686"
        },
        {
          "id": "f0123456-789a-bcde-f012-3456789abcde",
          "rowNum": 10,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5687"
        },
        {
          "id": "abcdef12-3456-789a-bcde-f0123456789a",
          "rowNum": 11,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5688"
        },
        {
          "id": "bcdef012-3456-789a-bcde-f0123456789a",
          "rowNum": 12,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5689"
        },
        {
          "id": "cdef0123-4567-89ab-cdef-0123456789ab",
          "rowNum": 13,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5690"
        },
        {
          "id": "def01234-5678-9abc-def0-123456789abc",
          "rowNum": 14,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5691"
        },
        {
          "id": "ef012345-6789-abcd-ef01-23456789abcd",
          "rowNum": 15,
          "image": "https://i.pinimg.com/736x/bd/d9/aa/bdd9aaee8c129b1d0a7180512c6f7ae5.jpg",
          "name": "청주사업",
          "departmentName": "청주사업장 · LS e-Mobility Solutions",
          "phoneNumber": "010-1234-5692"
        }
      ], 
      customCheck: false,  
      transferType: '전체선택',
      selectedData: [],   // mock data
      transferredData: [], // mock data
      transferredSelected:[] // selected data's of transferred data's
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
    handleSelected(check, id, objectName) {  
      if (check) { 
        const user = this.data.find((user) => user.id === id)
        this[objectName].push({ ...user })  
      } else { 
        this[objectName] = this[objectName].filter((u) => u.id !== id)
      }
      console.log(this.selectedData)
    },
    isSelected(id, objectName) {
      return this[objectName].some((u) => u.id === id)
    },
    addTransferred() { 
      if(this.selectedData.length != 0) {
        this.transferredData = [ ...this.selectedData ]
        this.selectedData = []
      } 
    }, 
    removeTransferred() {
      this.transferredData = this.transferredData.filter((u) => 
        !this.transferredSelected.some((s) => s.rowNum === u.rowNum))
      this.transferredSelected = []
    },
    returnSelected() {
      this.$emit('onSelect', this.transferredData)
      this.transferredData = []
      this.onClose()
    }
  }
}
</script>

<style lang="scss" scoped>
.block-content{
  width: 1120px; 
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  box-sizing: border-box;
  .content-info{
    display: flex;
    gap: 15px;
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
    .transferred-section{
      flex: 1; 
      .data-section-filter{
        height: 30px;
      }
      .table-block{
        height: 400px;
        overflow: hidden;
        .table-content{
          overflow-y: auto !important;
          .table-content-types{ 
            margin-bottom: 10px;
            button{
              padding: 0px;
              border: none;
              font-family: $font-semibold;
              background-color: #fff;
              border-radius: 5px;
              font-size: $font-base;
              color: #606060;
              cursor: pointer;
              &.active{ 
                color: #000;
              }
            }
          }
          .transferred-file{
            position: relative;
            padding: 5px;
            border: 1px solid #D6D9E3;
            border-radius: 5px;
            margin-bottom: 5px;
            background-color: #EEEEF3;
            label{
              font-size: $font-regular-base;
              font-family: $font-medium;
              cursor: pointer;
              color: #000;
            }
          }
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
        font-size: $font-base; 
        font-family: $font-semibold;
        background-color: $table-head-color;
        padding: 5px;
        border-bottom: 1px solid #D6D9E3;
        color: $common-color;
      } 
      .table-content{   
          padding: 8px 4px 8px 8px; 
          overflow-y: auto;
          .table-content-files{  
            padding-right: 4px;
            /* overflow-y: auto;  */
          }
        }
    }
    .transfer-btns{
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      button{
        width: 30px;
        height: 30px; 
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        border: 1px solid #D6D9E3;
        background-color: #fff; 
        border-radius: 5px;
        cursor: pointer; 
      }
    } 
  }
  .acceptation-btns{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    div{
      display: flex;
      gap: 10px;
    }
   }
}
</style>