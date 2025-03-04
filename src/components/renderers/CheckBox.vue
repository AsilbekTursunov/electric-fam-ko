<template>  
  <label for="checkRender"> 
    <input 
      id="checkRender" 
      type="checkbox" 
      class="customCheck"
      @change="$emit('onChange')" />  
  </label>
</template>

<script>
export default { 
  name: 'CheckBox'
}
</script>

<style lang="scss" scoped>
  label{  
    width: 18px !important;
    height: 18px !important;
    border-radius: 4px;
    overflow: hidden;
    position: relative; 

    .customCheck {
      appearance: none; 
      width: 18px;
      height: 18px; 
      border-radius: 4px;  
      cursor: pointer;
    } 
    .customCheck::after{  
      cursor: pointer;
      content: "";
      position: absolute;
      width: 18px;
      height: 18px;
      border: 1px solid #9AA1AB;
      border-radius: 4px;
      background-color: white;
    }
    .customCheck:checked::after{
      border: 1px solid #00a7cf ;
      background-color: #00a7cf ; 
      background-image: url('/images/correct.svg');
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
    }
  }
</style>