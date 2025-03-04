<template>
  <div class="main-home">
    <div class="home-main-box1">
      <div class="home-main-left">
        <p class="block-title">나의 신청현황</p>
        <div class="applications-block">
          <div class="el-col-block box-1">
            <div class="main-left">
              <ImageWrapper
                src="file-line"
                medium
              />  
            </div>
            <div class="main-left-text">
              <span class="main-text">1</span>
              <p class="main-text-pays">결재 대기중</p>
            </div>
          </div>
          <div class="el-col-block box-2">
            <div class="main-left">
              <ImageWrapper
                src="file-line1"
                medium
              />  
            </div>
            <div class="main-left-text">
              <span class="main-text">4</span>
              <p class="main-text-pays">결재 진행중</p>
            </div>
          </div>
          <div class="el-col-block box-3">
            <div class="main-left">
              <ImageWrapper
                src="file-line2"
                medium
              />  
            </div>
            <div class="main-left-text">
              <span class="main-text">8</span>
              <p class="main-text-pays">결재 승인</p>
            </div>
          </div>
          <div class="el-col-block box-4">
            <div class="main-left">
              <ImageWrapper
                src="file-line3"
                medium
              />  
            </div>
            <div class="main-left-text">
              <span class="main-text">11</span>
              <p class="main-text-pays">최종 완료</p>
            </div>
          </div>
        </div>
      </div>
      <div class="home-main-right">
        <div class="home-main-right-box1">
          <img src="/images/main.svg" alt="brand-content">
        </div>
      </div>
    </div>
    <div class="home-main-box2"> 
      <AuthorityPage v-if="type === 'admin'" />
      <UserMainPage v-if="type === 'user'" />    
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  data() { 
    return {
      type: 'user'  
    }
  },
  created() {
    const authInfo = this.getAuthInfo()
    if (authInfo) {
      this.type = authInfo.type
    }
  },
  methods: {
    ...mapGetters(['getAuthInfo']),    
  }
}
</script>

<style lang="scss" scoped>
  .main-home{  
    padding-right: 10px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .home-main-box1 {
      background-color: #F6F6FC;
      width: 100%;
      height: 23vh;
      border-radius: 10px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      .home-main-left{
        padding-left: 10px;
        width: 80%;
        height: 15vh;
        p {
          margin-bottom: 5px;
        }
        .applications-block{
          display: flex;
          gap: 10px; 
          .el-col-block { 
            display: flex;
            flex: 1;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            padding: 10px;
            .main-left {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #fff;
            }
            .main-left-text {
              color: #fff;
              display: flex;
              flex-direction: column;
              span {
                font-size: 20px;
                font-weight: bold;
              }
              .main-text-pays {
                font-size: $font-regular-base;
              }
            } 
          }
          .box-1 {
            background-color: #63CFB9; 
          }
          .box-2 {
            background-color: #65D6E2; 
          }
          .box-3 {
            background-color: #85C9F5; 
          }
          .box-4 {
            background-color: #8CA3F6; 
          }
        }
        
        .el-row {
          display: flex;
          align-items: center;
          gap: 10px;
          .el-col {
            border-radius: 10px;
            // background-color: aqua;
            height: 65px;
          }
        }
      }
      .home-main-right{
        width: 20%;
        // background-color: green;
        height: auto;
        display: flex;
        justify-content: center;

        .home-main-right-box1 {
          width: 150px;
          height: auto;
          // background-color: #606060;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .home-main-box2 {
      display: flex;
      flex-direction: column;
       height: 100%;
      
    }
  }
</style>