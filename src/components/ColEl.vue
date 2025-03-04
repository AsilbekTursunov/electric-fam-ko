<template>
  <el-col class="custom-el-col" :style="{ width: `${width}px`, maxHeight: height}"><slot /></el-col> 
</template>

<script>
export default {
  name: 'ColEl',
  props: { 
    width: Number,
    height: {
      type: String,
      default: '30px !important',
    } 
  }
}
</script>

<style lang="scss" scoped>
/* .custom-el-col.h-full{
  max-height: 100% !important; 
} */
.custom-el-col { 
  position: relative; 
  display: flex;  
  font-size: $font-medium-base;
  align-items: center;
  min-height: 30px;
  overflow: hidden;
  box-sizing: border-box; 
  padding: 2px 8px;
  background-color: #ffff;
  &.title {
    background-color: #EEEEF3;
  }
  &.br {
    border-right: 1px solid #D6D6D9;
  }
  &.br-w{
    border-right: 1px solid #fff; 
  }
  &.bb-w{
    border-bottom: 1px solid #fff;
  }
  &.bb {
    border-bottom: 1px solid #D6D6D9;
  }
  &.font-medium {
    font-family: $font-medium;
  }
  &.font-semibold {
    font-family: $font-semibold; 
  }
  &.font-base {
    font-size: $font-base !important; 
  }
  &.font-regular {
    font-size: $font-regular-base !important; 
  }
  &.start {
    justify-content: start !important; 
  }  
  &.center {
    justify-content: center !important; 
  }  
  &.col-18{
    min-width: 180px;
  }
  &.col-24{
    width: 240px;
  }
  &.col-full{
    width: 100%;
  }
  &.p-none{
    padding: 0;
  }
  &.p-2-2{
    padding: 2px;
  }
  &.p-2-4{
    padding: 2px 4px;
  }
  &.d-block{ 
    display: block !important; 
  }
  &.self-start{
    align-items: self-start !important;
  }
  &.self-end{
    align-items: self-end !important;
  }
  &.h-40{
    height: 40px !important;
  }
}

</style>