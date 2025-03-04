<template lang="">
  <div class="user-search"> 
    <CustomIcon 
      :src="userSearch" 
      :alt="'page-icon'" 
      :size="'lg'" 
    />
  </div>
</template>
<script>
import userSearch from '@/assets/images/account-box-fill.png' 
import CustomIcon from '../CustomIcon.vue'
export default {
  name:'IconUser',
  props: {
    active:Boolean
  },
  data(){
    return {
      userSearch,
    }
  },
  components: {
    CustomIcon
  }
}
</script>
<style lang="scss" scoped>
  .user-search{  
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 5px;  
  } 
   
</style>