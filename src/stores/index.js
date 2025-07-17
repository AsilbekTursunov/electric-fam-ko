import { createLogger, createStore } from 'vuex'
import { decodeJWT } from '@/utils/decodeJWT'
const debug = import.meta.env.VITE_APP_API_URL !== 'production'
// main page which always to be active 
const home = {
  index: '0',
  path: '/',
  title: '메인',
  label: '나의 현황',
  icon: 'home_8',
}

const plugins = createLogger({
  collapsed: true,
  logActions: true, // Log Actions
  logMutations: true, // Log mutations
  logger: console,
})


const store = createStore({
  strict: debug,
  plugins: debug ? [plugins] : [],
  state: {
    token: JSON.parse(localStorage.getItem('user_token')) || 'user',
    isCollapsed: true,
    tabs: JSON.parse(localStorage.getItem('tabs')) || [home],
    activeTab: JSON.parse(localStorage.getItem('activeTab')) || home
  },
  getters: {
    getAuthInfo(state) {
      if (!state.token) return null

      const getUserInfo = decodeJWT(state.token)

      return getUserInfo
    }
  },
  mutations: {
    removeToken(state) {
      state.token = null
      localStorage.removeItem('user_token')
    },
    setMemberInfo(state, member) {
      state.token = member.token
      if (member.isRemember) {
        localStorage.setItem('user_token', JSON.stringify(member.token))
      }
    },
    setCollapseSidebar(state, collapse) {
      state.isCollapsed = collapse
    },
    setTabs(state, tab) {
      const existTab = state.tabs.filter(nowTab => nowTab.label == tab.label)
      if (existTab.length == 0 && tab.path != '/') {
        state.tabs.push(tab)
        localStorage.setItem('tabs', JSON.stringify(state.tabs))
      }
    },
    removeTab(state, tab) {
      state.tabs = state.tabs.filter(nowTab => nowTab.label != tab.label)
      localStorage.setItem('tabs', JSON.stringify(state.tabs))
    },
    setActiveTab(state, tab) {
      state.activeTab = tab
      localStorage.setItem('activeTab', JSON.stringify(tab))
    },
    setToken(state, token) {
      localStorage.setItem('user_token', JSON.stringify(token))
      state.token = token
    },
    setClearTabs(state) {
      state.tabs = [home]
      localStorage.removeItem('tabs')
    },
    logOut(state) {
      state.token = null
      state.tabs = [home]
      state.activeTab = home
      localStorage.clear()
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    removeToken({ commit }) {
      commit('removeToken')
    },
    openSidebar({ commit }, isCollapsed) {
      commit('setCollapseSidebar', isCollapsed)
    },
  },
})

export default store