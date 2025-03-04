<template>
  <div class="main-block-box">
    <div class="shadow-block-box">
      <header class="block-title py-10 pt-10  m-none">
        <p>사업장 식당 현황</p>
      </header>
      <section class="body-content"> 
        <CustomTuiGrid 
          :data="currentStatusLData"
          :columns="currentStatusLColumns"
          :scrollY="false"
          :scrollX="false"
        /> 
      </section>
    </div>
    <div class="shadow-block-box">
      <header class="block-title py-10 pt-10 flex align-center space-between m-none">
        <p>사업장 식당 메뉴</p>
        <div class="flex  align-center gap-10"> 
          <custom-button class="default" :height="25">수정</custom-button>
          <custom-button class="default" :height="25">추가</custom-button>
          <custom-button class="default" :height="25">삭제</custom-button>
          <custom-button class="default" :height="25">저장</custom-button>
        </div>
      </header>
      <section class="body-content">
        <div class="table-container">
          <!-- Table component goes here -->
          <CustomTuiGrid 
            :data="businessRestaurantMenuData"
            :columns="businessRestaurantMenuColumns"
            :scrollY="false"
            :scrollX="false"
            :rowHeaders="['checkbox']"
          />
        </div>
      </section>
    </div>
  </div>
</template>
                
<script>
import CheckBoxRender from '../../components/renderers/CheckBoxRender.js'
export default {
  name: 'VIPWaterApplicationCriteria',
  data() {
    return {
      currentStatusLData:Array.from({ length: 10 }, (_, index) => ({
        rowNum: index + 1,
        name: `청주사업장 1식당`,
        codeName: '-',
        tableName: '111',
        prisonerName: '33', 
      })),                 
      currentStatusLColumns: [
        {
          header: '번호',
          name: 'rowNum',
          align: 'center',
          width: 50 
        },
        {
          header: '식당명',
          name: 'name',
          align: 'center',
          width: 200
        },
        {
          header: '식탁수',
          name: 'codeName',
          align: 'center', 
        }, 
        {
          header: '코드명',
          name: 'tableName',
          align: 'center', 
        }, 
        {
          header: '죄석수',
          name: 'prisonerName',
          align: 'center', 
        } 
      ],
      businessRestaurantMenuData:Array.from({ length: 5 }, (_, index) => ({
        rowNum: index + 1,
        menu: `청주사업장 1식당`,
        englishName: 'hansik',
        priceWon: '단가(원)',
        notAvailable: '', 
      })),  
      businessRestaurantMenuColumns: [
        {
          header: '번호',
          name: 'rowNum',
          align: 'center', 
        },
        {
          header: '메뉴',
          name: 'menu',
          align: 'center',
          width: 200
        },
        {
          header: '영문메뉴명',
          name: 'englishName',
          align: 'center', 
        }, 
        {
          header: '단가(원)',
          name: 'priceWon',
          align: 'center', 
        }, 
        {
          header: '제공불가',
          name: 'notAvailable',
          align: 'center', 
          className:"customCheck",
          renderer:{ type: CheckBoxRender }
        } 
      ],              
    }
  },
  components: {
      
  },
  methods: {
                        
  }
}
</script>
                
<style lang="scss" scoped>
.main-block-box {
  display: flex;
  justify-content: center;
  align-items: start; 
  background-color: #F6F6FC;
  padding: 10px;
  gap: 10px;
  .shadow-block-box {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(230, 230, 233);
    border-radius: 10px; 
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    .header-title,
    .body-content {
      padding: 10px; 
     }
     .title {
        font-size: 15px;
        font-family: 'Pretendard-SemiBold';
        color: rgb(45, 45, 45);
      }
      .header-title{
        border-bottom: 1px solid #0000000D;
        display: flex;
        justify-content: space-between;
        .header-title-btn{
          display: flex;
          gap: 5px;  
        }
      }
  }
}
</style>