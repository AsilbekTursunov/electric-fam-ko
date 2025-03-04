<template>
  <img 
    class="custom_image" 
    :src="src" 
    :alt="alt" 
    :class="size"
  >
</template>
<script lang="ts"> 
export default {
  name:'CustomImage',
  props: {
    src: String,
    alt: String,
    size: {
      type: String,
      default: 'md',
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom_image.sm{
    width: 18px !important;
    height: 18px !important; 
  }
  .custom_image.md{
    width: 22px !important;
    height: 22px !important; 
  }
  .custom_image.lg{
    width: 26px !important;
    height: 26px !important; 
  }
</style>