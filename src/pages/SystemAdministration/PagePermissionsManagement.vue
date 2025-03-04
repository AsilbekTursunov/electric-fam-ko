<template>
  <div class="main-block-box">
    <p class="block-title"> 페이지 권한관리</p>
    <section class="filter-section">
      
      <el-row class="mb-10">
        <el-col 
          :lg="{ span: 10 }" 
          :xl="{ span: 8}" 
          class="gap-10 search-content-box">
          <el-row class="gap-15 align-center">
            <div class="font-regular flex ">담당자 검색</div>
            <div class="flex align-center gap-15 flex-1 justify-center ">
              <custom-select :width="100" :data="consultant" />
              <label>
                <custom-input v-model="consultantSearch" :width="200" />
              </label>
            </div> 
            <label>
              <custom-button 
                class="primary"
                :height="30" 
                :size="'md'">조회</custom-button>
            </label>
          </el-row>
        </el-col> 
      </el-row>
      <el-row class="row-info-block">
        <el-col :lg="{ span: 10 }" :xl="{ span: 8 }">
          
          <custom-tui-grid 
            :data="data" 
            :columns="columns" 
            :scrollX="false"
            :scrollY="false"
          />
        </el-col> 
        <el-col 
          class="folders-content-block" 
          :lg="{ span: 13 }" 
          :xl="{ span: 15 }"> 
          <div class="main-table">
            <el-row class="each-row">
              <col-el 
                class="title center br" 
                :lg="{ span: 4 }" 
                :xl="{ span: 3 }">사 번</col-el>
              <col-el 
                class="center br" 
                :lg="{ span: 6 }" 
                :xl="{ span: 5 }">211344</col-el>
              <col-el 
                class="title center br" 
                :lg="{ span: 5 }" 
                :xl="{ span: 4 }">성 명</col-el>
              <col-el 
                class=" " 
                :lg="{ span: 9 }" 
                :xl="{ span: 10 }">211344 </col-el>
            </el-row> 
            <el-row class="each-row">
              <col-el 
                class="center title br" 
                :lg="{ span: 4 }" 
                :xl="{ span: 3 }">소 속</col-el>
              <col-el 
                class="center br" 
                :lg="{ span: 6 }" 
                :xl="{ span: 5 }">청주&rpar;지원혁신팀</col-el>
              <col-el 
                class="center title br" 
                :lg="{ span: 5 }" 
                :xl="{ span: 4 }">직 급</col-el>
              <col-el 
                class="" 
                :lg="{ span: 9 }" 
                :xl="{ span: 10 }">청주&rpar;지원혁신팀</col-el>
            </el-row> 
          </div>  
          <div class="row-info-file-block">
            <div class="tree-block">
              <custom-tree :data="treeData" />
            </div>
            <div class="file-access-block">
              <div 
                v-for="item in treeData" 
                :key="item.label" 
                class="each-folder">
                <label class="file-block-title">&nbsp;</label>
                <div 
                  v-for="child in item.children" 
                  :key="child.label" 
                  class="each-file"
                  @change="(value) => changeFileAccess(value, item.id, child.id)"
                >
                  <el-radio-group 
                    v-model="child.chose"
                    class="ml-4"> 
                    <CustomRadio 
                      :label="'권한없음'"
                      :size="'small'" 
                      :name="'권한없음'" 
                    /> 
                    <CustomRadio 
                      :label="'조회'"
                      :size="'small'" 
                      :name="'조회'"  
                    />  
                    <CustomRadio 
                      :label="'설정'"
                      :size="'small'" 
                      :name="'설정'" 
                    />  
                  </el-radio-group>
                </div>
              </div>
            </div>
          </div> 
        </el-col> 
      </el-row>
    </section>
  </div>
</template>
    
<script>
import ButtonRenderer from '../../components/renderers/BtnRenderer.js'
export default {
  name: 'PagePermissionsManagement',
  data() {
    return {
      consultant: ['성명', '선택', '선택'],
      consultantSearch: '',
      data: [
        {
          affiliation: '청주)지원혁신팀',
          rank: 'Manager',
          name: '엄경수',
          select: '선택'
        },
        {
          affiliation: '청주)지원혁신팀',
          rank: 'Manager',
          name: '엄경수',
          select: '선택'
        },
        {
          affiliation: '청주)지원혁신팀',
          rank: 'Manager',
          name: '엄경수',
          select: '선택'
        }

      ],
      columns: [
        {
          header: '소속',
          name: 'affiliation'
        },
        {
          header: '직급',
          name: 'rank'
        },
        {
          header: '성명',
          name: 'name'
        },
        {
          header: '선택',
          name: 'select',
          align: 'center', 
          renderer: {
            type: ButtonRenderer,
            options: {
              size: 'md',
              style: 'secondary'
            } 
          },
          onBeforeChange: () => {
            console.log('after change')
          }
        }
      ],
      treeData:  [
        {
          "id": "1",
          "label": "인원 및 차량 관리",
          "children": [
            { "id": "1-1", "label": "출타자 입출문 현황", "chose":'권한없음' },
            { "id": "1-2", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-3", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-4", "label": "예약 방문자 출입 현황", "chose":'권한없음' },
            { "id": "1-5", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-6", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-7", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-8", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-9", "label": "임직원/상주인원 출입현황", "chose":'권한없음' },
            { "id": "1-10", "label": "임직원/상주인원 출입현황", "chose":'권한없음' }
          ]
        },
        {
          "id": "2",
          "label": "협력업체출입",
          "children": [
            { "id": "2-1", "label": "협력업체관리", "chose":'권한없음' },
            { "id": "2-2", "label": "협력업체카드", "chose":'권한없음' },
            { "id": "2-3", "label": "협력업체출입현황", "chose":'권한없음' }
          ]
        },
        {
          "id": "3",
          "label": "순찰관리",
          "children": [
            { "id": "3-1", "label": "순찰현황", "chose":'권한없음' },
            { "id": "3-2", "label": "이상유무 코드 등록", "chose":'권한없음' },
            { "id": "3-3", "label": "순찰지점 등록", "chose":'권한없음' }
          ]
        },
        {
          "id": "4",
          "label": "순찰관리",
          "children": [
            { "id": "4-1", "label": "순찰현황", "chose":'권한없음' },
            { "id": "4-2", "label": "이상유무 코드 등록", "chose":'권한없음' },
            { "id": "4-3", "label": "순찰지점 등록", "chose":'권한없음' }
          ]
        }
      ] 
    }
  },
  methods: {
    changeFileAccess(value, parentId, id) { 
      this.treeData = this.treeData.map(data => {
        if (data.id === parentId) {
          data.children.map(item => {
            if (item.id === id) {
              return { ...item, chose: value } 
            }
            return { ...item }
          })
        }
        return { ...data }
      })  
    }     
  }
}
</script> 
    
<style lang="scss" scoped> 
.main-block-box { 
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px; 
  .filter-section {
    margin-top: 10px; 
    .row-info-block {
      display: flex; 
      justify-content: space-between;
      @media (max-width: 1200px) {
        flex-direction: column;
      }
      :deep(.el-col){ 
        flex: 1; 
        .row-info-file-block{
          margin-top: 10px;
          background-color: #F6F6FC;
          display: flex;
          gap: 10px;
          .tree-block{
            padding: 10px;
            flex: 1;
          }
          .file-access-block{
            padding: 10px;
            width: 35%;
            background-color: #EEEEF3;  
            .each-folder{
              .each-file{
                padding: .7px 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
