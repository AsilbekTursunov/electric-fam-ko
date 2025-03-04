<template lang="">
  <div class="user-search"> 
    <CustomIcon 
      :src="userSearch" 
      :alt="'page-icon'" 
      :size="'md'" 
    />
  </div>
</template>
<script>
import userSearch from '@/assets/images/user-search-fill.png' 
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
    cursor: pointer;
    position: absolute;
    right: 10px; 
    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 5px;   
    /* background: linear-gradient(180.00deg, rgb(187, 187, 187),rgb(153, 153, 153) 100%); */
  } 
   
</style>