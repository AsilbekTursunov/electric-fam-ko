<template>
  <div class="header-main visit-req-page">  
    <div 
      ref="container" 
      class="all-tabs">
      <div class="tabs-container">
        <button 
          v-for="tab in tabs" 
          :key="tab.title"
          class="btn"
          :class="{ 'link--active': activeTab.path == tab.path }"> 
          <router-link 
            :to="tab.path" 
            class="go-tab" 
            @click="() => goActiveTab(tab)"> 
            <ImageWrapper :src="`${tab.icon}_white`" /> 
            <span>{{tab.label}}</span>
          </router-link>
          <span 
            v-if="tab.path != '/'" 
            class="close" 
            @click="() => deleteTab(tab)"><el-icon><Close :size="10" /></el-icon></span>
        </button>
      </div>
    </div> 
    <div class="delete-tab"> 
      <button 
        type="button" 
        class="delete-btn" 
        @click="clearTabs">
        <ImageWrapper :src="'delete-tabs'" small />
        <p class="delete-tab_name">모든 창 닫기</p>
      </button>
    </div> 
  </div>
</template>

<script> 
import { mapMutations, mapState } from 'vuex'
import { SIDEBAR_MENU } from '../constants/index.js'

export default {
  name: 'MainHeader',
  data() {
    return { 
      container: null, 
      scrollBtn: false,
      btnsLength: 0,
      SIDEBAR_MENU
    }
  }, 
  computed: {
    ...mapState({
      isCollapsed: state => state.isCollapsed,
      tabs: state => state.tabs,
      activeTab: state => state.activeTab
    }),
  },
  watch: { 
  },
  methods: { 
    ...mapMutations(['setClearTabs', 'removeTab', 'setActiveTab']),
    deleteTab(tab) { 
      const lastTab = this.tabs[(this.tabs.findIndex(item => item.index == tab.index)) - 1] 
      if (this.activeTab.path == tab.path) { 
        this.removeTab(tab) 
        this.$router.push(lastTab.path)
        this.setActiveTab(lastTab)
      } else {
        this.removeTab(tab)
      } 
    },
    goActiveTab(tab){
      this.setActiveTab(tab)  
    },
    clearTabs() {
      this.$router.push('/')
      this.setClearTabs()
    }, 
  },
  mounted() {   
  }
}
</script>

<style lang="scss" scoped>
.header-main { 
  position: relative; 
  width: 100%;
  display: flex;
  gap: 4px;
  .btn{
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px; 
    border-radius: 5px 5px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    cursor: pointer;
    font-size: $font-regular-base; 
    transition: .5s all;
    text-decoration: none;
    display: flex;   
    .go-tab{
      display: flex;
      gap: 10px; 
    }
    .close{ 
      transition: .5s all;
      display: flex;
      align-items: center;
      height: 100%;
      transition: .5s all;
      margin-left: 5px;   
      padding: 0px 3px;
      border-radius: 5px;
      :deep(.el-icon){
        font-size: $font-medium-base;
      }
    } 
    a{
      color: #ffff;  
      text-decoration: none;
    }
  }
  .btn.link--active{
    background-color: #ffffff;
    color: #000000f8; 
    .router-link-active{
      color: #000000f8; 
      text-decoration: none;
    }
    .profile-image-wrapper{
      padding: 2px;
      border-radius: 5px;
      background-image: linear-gradient(180.00deg, rgb(191, 66, 157),rgb(120, 82, 188) 100%) !important;
    }
  } 
  .all-tabs{
    scroll-behavior: smooth;
    display: flex;
    align-items: center;  
    position: relative;
    box-sizing: border-box; 
    white-space: nowrap;
    width: 100%;
    overflow-x: auto;
    .tabs-container{
      position: relative; 
      gap: 5px;
      display: flex;
      /* border: 1px solid red; */
    }
    
  }
  .scroll-btn-group{
     display: flex;
     gap: 5px;
     padding: 2px 0px;
    .scroll-btn {  
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      width: 20px;
      display: flex;
      align-items: center; 
      justify-content: center; 
      cursor: pointer;
      display: flex;  
      .el-icon {
        color: rgb(236, 234, 234);
        font-size: 15px;
      }
    }
  }
  .delete-tab{
    display: flex;
    justify-content: end;
    padding-right: 5px;
    width: 140px; 
    .delete-btn{
      display: flex;
      align-items: start; 
      background-color: transparent;
      border: none; 
      cursor: pointer;
      align-items: center;
      gap: 10px;
      .delete-tab_name{
        color: #fff;
        font-size: $font-regular-base;
        transition: .4s all;
      } 
    }
  }
  ::-webkit-scrollbar{
      width: 0px; 
      height:4px
    }
    ::-webkit-scrollbar-track{ 
      width:5px;
      background-color: rgba(255, 255, 255, 0.2);
    }
    ::-webkit-scrollbar-thumb{ 
      background-color: rgba(255, 255, 255, 0.3);
    }
}
</style>