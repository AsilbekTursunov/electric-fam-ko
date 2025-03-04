<template>
  <el-tag class="custom-tag"><slot /></el-tag>
</template>

<script>
export default {
  name: 'TagEl'
}
</script>

<style lang="scss" scoped>
.custom-tag{ 
  color: #202020 !important;  
  border: 1px solid #D6D9E3;
  background-color: #F9F9FC;
  font-size: $font-medium-base;
  font-family: $font-regular;
  border-radius: 5px;
  :deep(.el-icon){
    color: rgba(0, 0, 0, 0.747); 
    font-size: $font-medium-base; 
  }
  :deep(.el-icon):hover{
    background-color: transparent;
  }
}
</style>