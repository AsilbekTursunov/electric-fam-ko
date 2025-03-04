<template>
  <div class="authority-page">
    <div class=" mt-10 mb-10">
      <p class="block-title">전체현황 <span class="primary">7 </span>건</p> 
    </div>
    <div class="authority-page__content">
      <div class="each-rows-block">
        <el-card class="box-card">
          <p class="card-header"> <ImageWrapper 
            :src="'icon1_visitor_gray'"
            medium 
            :alt="'visitor'" />방문자 현황</p> 
          <div class="card-content"> 
            <div class="card-content__col">
              <p class="content-col-headline">입문</p> 
              <p class="content-col-detail">
                <span class="amount">100</span>명
              </p>
            </div>
            <div class="card-content__col">
              <p class="content-col-headline">출문</p> 
              <p class="content-col-detail">
                <span class="amount">100</span>명
              </p>
            </div>
            <div class="card-content__col">
              <p class="content-col-headline">미방문</p> 
              <p class="content-col-detail">
                <span class="amount">10</span>명
              </p>
            </div> 
          </div>
        </el-card>
        <el-card class="box-card">
          <p class="card-header"> <ImageWrapper 
            :src="'icon9_card_gray'"
            medium 
            :alt="'visitor'" />ID카드 미발급 현황</p> 
          <div class="card-content"> 
            <div class="card-content__col">
              <p class="content-col-headline">임직원</p> 
              <p class="content-col-detail">
                <span class="amount">100</span>명
              </p>
            </div>
            <div class="card-content__col">
              <p class="content-col-headline">단기상주자</p> 
              <p class="content-col-detail">
                <span class="amount">100</span>명
              </p>
            </div>
            <div class="card-content__col">
              <p class="content-col-headline">장기상주자</p> 
              <p class="content-col-detail">
                <span class="amount">10</span>명
              </p>
            </div> 
          </div>
        </el-card>
        <el-card class="box-card">
          <p class="card-header"> <ImageWrapper 
            :src="'icon10_food_gray'"
            medium 
            :alt="'visitor'" />VIP 식수 신청현황</p> 
          <div class="card-content"> 
            <div class="card-content__col">
              <p class="content-col-headline">신청건수</p> 
              <p class="content-col-detail">
                <span class="amount">100</span>명
              </p>
            </div>
            <div class="card-content__col">
              <p class="content-col-headline">식수인원</p> 
              <p class="content-col-detail">
                <span class="amount">100</span>명
              </p>
            </div> 
          </div>
        </el-card>
      </div>
      <div class="each-rows-block">
        <div class="double-row-block">
          <el-card class="box-card"> 
            <p class="card-header"> <ImageWrapper 
              :src="'icon6_company_gray'"
              medium 
              :alt="'visitor'" />협력회사 현황</p> 
            <div class="card-content"> 
              <div class="card-content__col">
                <p class="content-col-headline">출입회사</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>개
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">출입인원</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>명
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">출입차량</p> 
                <p class="content-col-detail">
                  <span class="amount">10</span>대
                </p>
              </div> 
            </div>
          </el-card> 
          <el-card class="box-card"> 
            <p class="card-header"> <ImageWrapper 
              :src="'global-line_gray'"
              medium 
              :alt="'visitor'" />공무(ESH) 현황</p> 
            <div class="card-content"> 
              <div class="card-content__col">
                <p class="content-col-headline">사전신청</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>개
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">출입업체</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>개
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">출입차량</p> 
                <p class="content-col-detail">
                  <span class="amount">10</span>대
                </p>
              </div> 
            </div>
          </el-card>
        </div>
        <el-card class="box-card">
          <p class="card-header"> <ImageWrapper 
            :src="'icon8_enter_gray'"
            medium 
            :alt="'visitor'" />입출문 단말기 현황</p> 
          <div class="card-content">
            <div class="card-content__col-chart">
              <PieChart />
              <div class="chart-data">
                <ImageWrapper 
                  :src="'file-lock-line'"
                  xl 
                  :alt="'file-lock'"
                />
                <div class="chart-result">
                  <span class="wrong">5 에러 </span>/ 총 105
                  
                </div>
                <div class="description">청주사업장</div>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="box-card">
          <p class="card-header"> <ImageWrapper 
            :src="'icon10_food_gray'"
            medium 
            :alt="'visitor'" />사원식당 식수 현황</p> 
          <div class="content-devide">
            <p class="card-devide-header">[전일]</p> 
            <div class="card-content"> 
              <div class="card-content__col">
                <p class="content-col-headline">조식</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>건
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">중식</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>건
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">석식</p> 
                <p class="content-col-detail">
                  <span class="amount">10</span>건
                </p>
              </div> 
            </div>
          </div>
          <div class="content-devide">
            <p class="card-devide-header">[금일]</p> 
            <div class="card-content"> 
              <div class="card-content__col">
                <p class="content-col-headline">석식</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>건
                </p>
              </div>
              <div class="card-content__col">
                <p class="content-col-headline">야식</p> 
                <p class="content-col-detail">
                  <span class="amount">100</span>건
                </p>
              </div> 
            </div>
          </div>
        </el-card>
      </div> 
       
    </div>
  </div>
</template>

<script>
import PieChart from '../../components/PieChart.vue'

export default { 
  name: 'AuthorityPage',
  components: { 
    PieChart
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .authority-page{
    width: 100%; 
    .authority-page__content { 
      background-color: #F6F6FC; 
      padding: 10px;  
      border-radius: 10px;
      display: grid;
      grid-template-rows: repeat(2 1fr);
      gap: 20px;
      .each-rows-block{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        .box-card { 
          :deep(.el-card__body){
            padding: 0px !important;
            display: flex;
            flex-direction: column;
          } 
          border: 1px solid rgb(230, 230, 233);
          border-radius: 10px;  
          box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
          background: rgb(255, 255, 255); 
          .card-header{
            font-size: $font-large-base; 
            display: flex;
            gap: 10px;
            color: #000;
            align-items: center;
            font-family: $font-bold; 
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            padding: 8px 10px;
            box-sizing: border-box;
          }
          .content-devide{ 
            border-bottom: 1px solid rgba(0, 0, 0, 0.05); 
            .card-devide-header{ 
              padding: 0px 12px;
              padding-top: 15px;
              font-size: $font-regular-base;
              font-family: $font-bold; 
            }
          }
          .content-devide:last-child{
            border-bottom: none;
          }
          .card-content{
            padding: 8px;
            display: flex; 
            gap: 10px; 
            .card-content__col{ 
              width: 33%;
              height: 70px;
              box-sizing: border-box;
              padding: 5px 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between; 
              border-radius: 5px; 
              box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
              background: rgb(246, 246, 252);
              p{
                font-size: $font-regular-base; 
              }
              .content-col-headline{ 
                font-family: 'Pretendard-Bold'; 
              }
              .content-col-detail{
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: $font-regular-base;
                justify-content: end;
                .amount{
                  font-size: 20px;
                  font-family: 'Pretendard-SemiBold';
                  color: #00A1C0;
                }
              }
            }
            .card-content__col-chart{
              position: relative;
              background: rgb(246, 246, 252);
              border-radius: 5px;
              display: flex;
              justify-content: center; 
              align-items: center;
              height: 100%;
              flex: 1;
              padding: 10px;
              box-sizing: border-box;
              box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1); 
              .chart-data{
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .chart-result{
                  font-size: 15px;
                  color: #606060;
                  font-family: 'Pretendard-Bold';
                  .wrong{ 
                    color: #00A1C0;
                  }
                }
                .description{
                  font-size: $font-regular-base;
                  color: #202020;
                }
              }
            }
          } 
        } 
        .double-row-block{
          display: grid;
          grid-template-rows: repeat(2, 1fr);
          gap: 20px; 
        }
      } 
    }
  }
</style>