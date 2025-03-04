<template>  
  <input  
    type="checkbox" 
    :checked="check"
    class="custom-check-box"
    @change="$emit('onChange', $event.target.checked)" />   
</template>

<script>
export default { 
  name: 'CustomCheck',
  props: {
    check :Boolean
  },
}
</script>

<style lang="scss" scoped>
  label{  
    width: 16px !important;
    height: 16px !important;
    border-radius: 4px !important; 
    overflow: hidden !important;
    position: relative !important; 

    .custom-check-box {
      appearance: none !important; 
      width: 16px !important;
      height: 16px !important; 
      border-radius: 4px !important;  
      cursor: pointer !important;
    } 
    .custom-check-box::after{  
      cursor: pointer !important;
      content: "" !important;
      position: absolute !important;
      width: 16px !important;
      height: 16px !important;
      border: 1px solid #9AA1AB !important;
      border-radius: 4px !important;
      background-color: white !important;
    }
    .custom-check-box:checked::after{
      border: 1px solid #00a7cf  !important;
      background-color: #00a7cf  !important; 
      background-image: url('/images/correct.svg') !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      object-fit: cover !important;
    }
  }
</style>