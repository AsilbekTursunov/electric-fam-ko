<template>
  <CustomIcon 
    :src="logo" 
    :alt="'logo'" 
    :size="'sm'" 
  />
</template>
<script>
import logo from '/src/assets/images/calendar.png'
import CustomIcon from './CustomIcon.vue'
export default {
  components: {
    CustomIcon
  },
  data() {
    return {
      logo
    }
  }
}
</script>
<style lang="">
  
</style>