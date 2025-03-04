<template>
  <div class="apply-page_content">
    <div class="">
      <p class="block-title" @click="() => open = true">미결재 현황</p> 
      <CustomTuiGrid 
        :data="computedGridData"
        :columns="gridColumns"
        :scrollX="false"
        :scrollY="false" 
        height="auto"
      />
    </div>
    <div class="content-block"> 
      <p class="block-title">업무담당자</p>
      <div class="user-bottom">
        <div 
          v-for="item in contents" 
          :key="item.title" 
          class="user-box">
          <div class="user-card">
            <div class="img-box">
              <ImageWrapper :src="item.icon" medium />
            </div>
            <div class="user-info">
              <p>{{ item.title }}</p>
              <span>{{ item.desc }}</span>
            </div>
          </div>

          <div class="user-info-bottom">
            <p>{{item.name}}</p>  
            <div class="user-info-end">
              <span>|</span>
              <p>{{ item.phone }}</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
                  
<script> 
import ButtonRenderer from '../../components/renderers/StatusRenderer.js' 
export default {
  name: 'OfficialVisitorRegistration',
  data(){
    return {
      gridData: [
        {
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          agent: '2025.05.31',
          relevantdate: '2010-02-05',
          btn: '승인완료',
          btn1: '승인중',
        },
        {
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          agent: '2025.05.31',
          relevantdate: '2010-02-05',
          btn: '승인완료',
          btn1: '반려',
        },
        {
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          agent: '2025.05.31',
          relevantdate: '2010-02-05',
          btn: '승인완료',
          btn1: '승인중',
        },
        {
          category: '장ㆍ단기상주자 신청',
          company: 'K-전력솔루션)원청영업팀',
          agent: '2025.05.31',
          relevantdate: '2010-02-05',
          btn: '승인완료',
          btn1: '반려',
        },
      ],
      gridColumns: [
        { header: '번호', name: 'rowNum', width: 60, align: 'center' },
        { header: '분류', name: 'category', editor: 'text' },
        { header: '회사명', name: 'company', editor: 'text' },
        { header: '신청일', name: 'relevantdate', editor: 'text' },
        { header: '해당일시', name: 'agent', editor: 'text' },
        { 
          header: '부서결재', 
          name: 'btn', 
          renderer: { type: ButtonRenderer, options: { size: 'long' } }, 
        },
        { 
          header: '관리자 결재', 
          name: 'btn1', 
          renderer: { type: ButtonRenderer, options: { size: 'long' } }, 
        },
      ],
      contents: [
        {
          icon: 'icon10_food',
          title: '식수 (청주사업장)',
          desc: '지원혁신팀',
          name: '김현옥',
          phone:'010-1234-5678'
        },
        {
          icon: 'icon10_food',
          title: '식수 (부산사업장)',
          desc: '지원혁신Part',
          name: '이정홍',
          phone:'010-1234-5678'
        },
        {
          icon: 'icon_security',
          title: '보안 (청주사업장)',
          desc: '지원혁신팀',
          name: '한희진',
          phone:'010-1234-5678'
        },
        {
          icon: 'icon_idcard',
          title: 'ID카드 (청주사업장)',
          desc: '지원혁신팀',
          name: '한희진',
          phone:'010-1234-5678'
        },
        {
          icon: 'icon5_people+car',
          title: '인원및차량 (청주사업장)',
          desc: '지원혁신팀',
          name: '엄경수',
          phone:'010-1234-5678'
        },
        {
          icon: 'icon_car1',
          title: '차량 (청주사업장)',
          desc: '지원혁신팀',
          name: '엄경수',
          phone:'010-1234-5678'
        },
        {
          icon: 'icon_system2',
          title: '시스템 총괄 (청주사업장)',
          desc: '지원혁신팀',
          name: '엄경수',
          phone:'010-1234-5678'
        },
      ],
      open: false,
    }


  },
  components: {  
     
  },
  computed: {
    computedGridData() {
      return this.gridData.map((row, index) => ({
        rowNum: index + 1,
        ...row,
      }))
    }
  },
  mounted(){ 
  },
  methods: {

  }
}
</script>
                  
  <style lang="scss" scoped>
  .apply-page_content{
    width: 100%;
    height: 100%;
    margin-top: 12px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
    .content-block{ 
      box-sizing: border-box;
      .user-bottom {  
        border-radius: 10px;
        padding: 10px;  
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        background-color: #F6F6FC;
        gap: 10px;

        @media (min-width: 980px) {
          grid-template-columns: repeat(3, 1fr); // 1200px dan kichik ekranlar uchun
        }
        @media (min-width: 1280px) {
          grid-template-columns: repeat(4, 1fr); // 1200px dan kichik ekranlar uchun
        }
        @media (min-width: 1560px) {
          grid-template-columns: repeat(5, 1fr); // 1200px dan kichik ekranlar uchun
        }
        @media (min-width: 1920px) {
          grid-template-columns: repeat(6, 1fr); // 1200px dan kichik ekranlar uchun
        }
        @media (min-width: 2440px) {
          grid-template-columns: repeat(7, 1fr); // 1200px dan kichik ekranlar uchun
        }

        .user-box { 
          height: 100px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0px 2px 2px 1px rgba(0.1, 0.1, 0.1, 0.1);
          .user-card {
            display: flex;
            align-items: center;
            padding: 10px;
            column-gap: 20px;
            .user-info {
              display: flex;
              flex-direction: column;
              justify-content: center;
              p {
                font-size: $font-medium-base;
                font-weight: bold;
              }
              span {
                font-size: $font-regular-base;
                color: #5c5c5c;
              }
            }
            .img-box {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-color: #F6F6FC;
            }
          }
          .user-info-bottom {
            padding-left: 20px;
            display: flex;
            align-items: center;
            column-gap: 20px;
            p {
              font-size: 13px;
              font-weight: bold;
            }
            .user-info-end {
              display: flex;
              column-gap: 10px;
              p {
                font-size: 13px;
                color: #606060;
              }
              span {
                font-size: $font-regular-base;
                color: #9e9e9e;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
  </style>