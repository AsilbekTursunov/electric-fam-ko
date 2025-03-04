<template lang="">
  <div class="visitors-group" :class="{'is-active': active}"> 
    <CustomIcon 
      :src="active ? whiteLogo : blackLogo" 
      :alt="'page-icon'" 
      :size="'lg'" 
    />
  </div>
</template>
<script>
import blackLogo from '@/assets/images/visitors-group.png'
import whiteLogo from '@/assets/images/visitors-group-white.png'
import CustomIcon from '../CustomIcon.vue'
export default {
  props: {
    active:Boolean
  },
  data(){
    return {
      blackLogo,
      whiteLogo
    }
  },
  components: {
    CustomIcon
  }
}
</script>
<style lang="scss" scoped>
  .visitors-group{
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 1px;
    border-radius: 5px;
  } 
  .visitors-group.is-active{ 
    background: linear-gradient(180.00deg, rgb(191, 66, 157),rgb(120, 82, 188) 100%);
  }
</style>