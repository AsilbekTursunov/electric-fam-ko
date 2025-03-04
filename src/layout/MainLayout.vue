<template>
  <div class="main-container">
    <!-- Left container -->
    <SideBar />
    <div class="open-close">
      <div 
        class="btn-close"  
        @click="toggleSidebar">  
        <img  
          :src="isCollapsed ? '/images/arrow-open.svg' : '/images/arrow-close.svg'" 
          alt="arroow" 
        /> 
      </div>
    </div>
    <!-- Right container -->

    <div class="main-right">
      <!-- <SubHeader /> -->
      <MainHeader />
      <div class="contents-main-box">
        <div class="el-breadcrumb mb-15">
          <div class="block-name el-breadcrumb__item"> 
            <ImageWrapper 
              :src="`${activeTab.icon}_gray`" 
              :alt="'home page'" /> {{activeTab.title}}
            <ImageWrapper 
              :src="`arrow-right`" 
              :alt="'arrow'" />  
          </div> 
          <div class="block-page-name el-breadcrumb__item" :to="{ path: '/' }"> {{ activeTab.label }}  </div>
        </div>
        <div class="route-contents">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SideBar from './SideBar.vue'
import MainHeader from './Header.vue' 

export default {
  name: 'MainLayout',
  components: {
    SideBar, 
    MainHeader
  },
  data() {
    return { 
      isShow: true,
      pathName: '/'
    }
  },
  methods: {
    ...mapActions(['openSidebar']),
    toggleSidebar() {
      this.isShow = !this.isShow
      this.openSidebar(this.isShow)
    }
  }, 
  computed: {
    ...mapState({
      isCollapsed: state => state.isCollapsed,
      tabs: state => state.tabs,
      activeTab: state => state.activeTab
    }),
  },
} 
</script>

<style lang="scss" scoped>
.main-container {
  display: flex; 
  width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  .open-close {
    height: 100vh;
    display: flex;
    min-width: 20px !important;
    align-items: center;
    cursor: pointer;
    .btn-close{
      font-size: 20px;
      padding: 3px;
      color: #FFFFFF;
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 0px 5px 5px 0px; 
    } 
  }
  .main-left {
    display: flex;
    background-color: #1f3a93;
    color: #222222;
    height: 100%;
    overflow: hidden;
  }
  .main-right {  
    flex: 1;
    max-height: 100vh;
    min-width: 1000px; 
    max-width: 100%; 
    margin: 20px 20px 20px 0px; 
    overflow: hidden;  
    border-radius: 0px 20px 20px 20px; 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .contents-main-box{  
      flex: 1;
      background-color: #FFFFFF; 
      border-radius: 0px 20px 20px 20px; 
      padding: 20px 10px 20px 20px; 
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .el-breadcrumb{ 
        display: flex;
        align-items: center;
        margin-bottom: 10px; 
        font-family: $font-bold;
          .el-breadcrumb__item{ 
          display: flex;
          gap: 5px;
          font-size: $font-medium-base; 
          justify-content: start;
          width: fit-content;
          align-items: center;
          color: #606060; 
          .el-breadcrumb__inner{
              display: flex; 
              
              font-family: $font-bold;
              align-items: center;
              justify-content: center; 
              gap: 10px; 
            }
            .profile-image-wrapper img{
              color: white !important;
            }  
          }
          .block-page-name{
            color: #000000; 
          }
        }
      .route-contents{ 
        background-color: #FFFFFF; 
        box-sizing: border-box; 
        overflow: hidden; 
        flex: 1;
      }
    }
  }
}
</style>