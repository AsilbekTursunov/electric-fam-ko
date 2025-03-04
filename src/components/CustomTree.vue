<template>
  <div class="custom-tree"> 
    <el-tree 
      :data="data"  
      default-expend-all
      @node-click="$emit('nodeClick', $event)"
      @check-change="$emit('checkChange', $event)"
      @current-change="$emit('currentChange', $event)"
    />
  </div>
</template>

<script> 
export default {
  name: 'CustomTree',
  data() {
    return { 
    }
  },
  props: {
    data: Array
  }
    
}
</script>

<style lang="scss" scoped>
.custom-tree{  
  :deep(.el-tree){
    background-color: transparent;
    .el-tree-node.is-focusable > div:first-child{  
        .el-icon{
          color: #303030;  
        } 
        .el-tree-node__label{
          padding-left: 20px;
          display: flex;
          align-items: center;
          position: relative;
          gap: 8px; 
        }
        .el-tree-node__label::before{
          content: '';
          position: absolute;
          width: 18px;
          left: 0px;
          height: 18px;
          border: none;
          background-image: url('/images/folder-close.svg');
          object-fit: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .el-icon.el-tree-node__expand-icon.is-leaf{
          width:1px
        }
        .el-icon.el-tree-node__expand-icon.is-leaf ~ .el-tree-node__label::before{ 
          background-image: url('/images/file.svg') !important; 
        } 
    }
    .el-tree-node.is-expanded.is-focusable > div:first-child{
      .el-tree-node__label::before{ 
        background-image: url('/images/folder-open.svg'); 
      }
    }
  } 
}
</style>