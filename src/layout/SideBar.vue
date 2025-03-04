<template> 
  <div class="el-col">
    <el-menu
      active-text-color="#fffff"
      background-color="transparent"
      default-active="2"
      :collapse="isCollapsed"  
      :class="{opened: isCollapsed}" 
      :collapse-transition="true" 
      popper-effect="light"> 
      <el-menu-item class="logo-item">
        <router-link to="/" class="logo">
          <img :src="isCollapsed ? '/icons/logoclose.svg' : '/icons/logo1.svg'" alt="logo" /> 
        </router-link>
      </el-menu-item>
      <div class="side-head-item">
        <div 
          v-if="!isCollapsed"
          class="right-main-box">
          <p>임하영 매니저님, 환영합니다!</p> 
          <div class="right-main-box1">
            <div class="home-setting">
              <router-link 
                :to="'/login'" 
                class="my-settings" 
                @click="logout">
                <ImageWrapper src="logout-box-r-line" rounded />
                <p>로그아웃</p>
              </router-link>
            </div>
            <span class="divider"></span>
            <div class="home-setting"> 
              <router-link 
                to="/personal-management" 
                class="my-settings"
                @click="navigatePage(
                  '/personal-management', { title: '', label: '나의정보', icon: 'account-box-fill' })">
                <ImageWrapper src="account-box-fill" rounded />
                나의정보
              </router-link>
            </div>
          </div>
        </div>
        <div 
          v-else
          class="right-main-box-mobile"> 
          <router-link :to="'/login'" @click="logout">
            <ImageWrapper
              src="logout-box-r-line"
              rounded
            />
          </router-link>
          <span class="divider"></span>
          <router-link 
            to="/personal-management"
            @click="navigatePage(
              '/personal-management', { title: '', label: '나의정보', icon: 'account-box-fill' })"> 
            <ImageWrapper
              src="account-box-fill"
              rounded
            />
          </router-link> 
        </div> 
      </div> 
      <el-menu-item-group> 
        <template v-for="menu in SIDEBAR_MENU" :key="menu.index">
          <!-- Menu that has submenu -->
          <el-sub-menu
            v-if="menu.isHasSubMenu"
            :index="menu.index"
            :popper-append-to-body="false"  
            :class="{collapsed: !!isCollapsed, active: activeTab.title === menu.title}"
          >  
            <template #title> 
              <el-icon>
                <ImageWrapper
                  :src="activeTab.title === menu.title ? `/${menu.icon}_white` : menu.icon"
                  medium
                  class="closed"
                />
              </el-icon>
              <span>{{ menu.title }}</span>
            </template> 
            <el-menu-item-group
              v-for="submenu in menu.submenus"
              :key="submenu.title"
              class="sub-item"
              :class="{collapsed: !!isCollapsed}"
            >
              <el-menu-item :index="submenu.index" :class="{activeTab: activeTab.label === submenu.title}">
                <ImageWrapper
                  v-if="activeTab.path == submenu.to"
                  :src="'arrow-drop_purple'"
                  rounded
                  medium />
                <ImageWrapper
                  v-else
                  :src="'arrow-drop'"
                  rounded />
                <span 
                  @click="navigatePage(submenu.to, {
                    title: menu.title,
                    label: submenu.title, icon: menu.icon, index: submenu.index
                  })">
                  {{ submenu.title }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <!-- Menu that has no submenu -->
          <el-menu-item
            v-else
            :index="menu.index"
            :class="{ collapsed: !!isCollapsed, active: activeTab.title === menu.title }"
            @click="navigatePage(menu.to, { title: menu.title, label:menu.title, icon:menu.icon, index: menu.index })"
          >
            <el-icon>
              <ImageWrapper
                :src="activeTab.title === menu.title ? `/${menu.icon}_white` : menu.icon"
                medium
                class="closed"
              />
            </el-icon>
            <template #title>
              <span>{{ menu.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu-item-group>
      <div class="footer-logo">
        <button type="button" class="logo-btn">
          <ImageWrapper
            src="question-mark"
            medium
          /> <span :class="{isHidden: isCollapsed}">사용자 매뉴얼 다운로드 </span>  
        </button>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SIDEBAR_MENU } from '../constants' 
export default {
  name: 'SideBarLeft',
  components: { 
  },
  data() {
    return {
      activeIndex: '0', 
      delayCollapsed: true, 
      SIDEBAR_MENU, 
    }
  },
  computed: {
    ...mapState({
      isCollapsed: state => state.isCollapsed,
      tabs: state => state.tabs,
      activeTab: state => state.activeTab
    })
  },
  watch: {
    // when the clearButton is pressed all tabs are deleted 
    // from tabs and go to home page and this function makes home active
    '$route'(to) {
      const existTab = this.tabs.find(tab => tab.path == to.path)
      this.setActiveTab(existTab)  
    }  
  },
  mounted() { 
    if (this.activeTab.path) {
      this.$router.push(this.activeTab.path)
    } else {
      this.$router.push('/')
    }
  },
  methods: { 
    ...mapMutations(['setActiveTab', 'setTabs', 'logOut']),
    navigatePage(to, { title, label, icon, index }) {  
      if (to) { 
        this.setTabs({ index, path: to, title, label, icon }) 
        this.setActiveTab({ index, path: to, title, label, icon }) 
        this.$router.push(to) 
      }
    },
    logout() {
      this.logOut() 
      this.$router.push('/login')
    } 
  }, 
}

</script>

<style lang="scss" scoped>
 .el-col {
  height: 100vh;
  background-color: #FFF;
  color: #222222 !important;
  display: flex;  
  flex-direction: column;
  align-items: center; 
  overflow-y: hidden;  
  .el-menu{ 
    color: black !important;
    display: flex; 
    width: 100%;
    height: 100%;
    border: none; 
    flex-direction: column;
    overflow-y: hidden;
    justify-content: start;
    .logo-item{
      justify-content: center;
      padding: 20px 20px;
      .logo{
        display: flex;
        justify-content: center;
        align-items: center; 
      }
    }
    
    .side-head-item{
      display: flex;
      width: 100%;
      padding: 10px;
      font-size: $font-regular-base;
      justify-self: center; 
      align-self: start; 
      box-sizing: border-box;
      .right-main-box{
        width: 100%;
        border: 1px solid #00000026;
        border-radius: 5px;
        padding: 5px;
        &>p { 
          font-weight: 900; 
          padding: 10px 0px; 
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          line-clamp: 1; 
          text-align: center;
          border-bottom: 1px solid #00000026;
        };
        .right-main-box1{
          display: flex;
          gap: 5px;
          padding: 10px 0px;
          height: 20px;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          overflow: hidden;
          .home-setting{
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: nowrap;
          }
          .divider{
            width: 1px !important;
            height: 10px;
            background-color: #00000026;
          }
          a{
            text-decoration: none;
            color: #303030;
          }
        }
      }
      .right-main-box-mobile{
         display: flex;
         flex-direction: column;
         gap: 10px;
         align-items: center;
         
         .divider{
            width: 30px !important;
            height: 1px;
            background-color: #00000036;
          } 
        a{
          display: block; 
          text-decoration: none;
          color: #303030;
        }
      }
      .my-settings{
        display: flex;
        gap: 5px;
      }
    }
    .el-menu-item-group {
      overflow-y: auto; 
      :deep(.el-menu-item-group__title) {
        padding: 0px;
      } 
      :deep(.el-sub-menu) {  
        .el-sub-menu__title{
          .el-sub-menu__icon-arrow{
            transform: none;
            svg{
              display: none; 
            }
          }
          .el-sub-menu__icon-arrow::before{
            content:"+";
            width: 20px;
            height: 20px;
            font-size: 25px;
            color: #606060
          }
        }
        .el-menu {
          .el-menu-item-group{ 
            .el-menu-item{
              padding: 0px 10px;
              color: #606060;
            }
            .el-menu-item.activeTab{ 
              color: #000000;
              font-family: 'Pretendard-SemiBold';
              span{ 
                transition: .5s all;
              }
            }
          }
        }
      }
      :deep(.el-sub-menu.is-opened) {  
        .el-sub-menu__title { 
          color: #606060; 
          .el-sub-menu__icon-arrow{
            transform: rotateZ(0deg) !important; 
          }
          .el-sub-menu__icon-arrow::before{
            content:"-";
            width: 20px;
            height: 20px;
            font-size: 25px;
            color: #606060
          }
        }
      }
      .el-sub-menu.active {  
        .el-sub-menu__title{  
          border-radius: 5px;    
          background-color: #F6F6F9;
          .profile-image-wrapper{
            padding: 3px;
            border-radius: 5px;  
            background: linear-gradient(180.00deg, rgb(191, 66, 157),rgb(120, 82, 188) 100%);
          } 
        } 
      }
      :deep(.el-menu-item.active) {  
          border-radius: 5px;    
          background-color: #F6F6F9;
          .profile-image-wrapper{
            padding: 3px;
            border-radius: 5px;  
            background: linear-gradient(180.00deg, rgb(191, 66, 157),rgb(120, 82, 188) 100%);
          }  
      }
    }
  }
  .footer-logo{ 
      display: flex; 
      align-items: end;
      flex: 1; 
      .logo-btn{
        font-size: $font-regular-base;
        cursor: pointer;
        flex: 1;
        height: fit-content; 
        width: 100%; 
        display: flex;
        gap: 10px;
        padding: 10px;
        align-items: center;
        justify-content: center;
        border: none;
        border-top: 2px solid #E5E5E5; 
        background-color: transparent;
        .isHidden{
          display: none;
          justify-content: center;
        }
      }
    }
  }
  .el-menu.el-menu--collapse{
    .logo-item{
      padding: 10px 0px; 
    }
    .side-head-item{
      justify-content: center;
    } 
  } 
</style>