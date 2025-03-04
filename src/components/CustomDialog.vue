<template> 
  <div class="dialog_box">
    <el-dialog 
      :model-value="open" 
      :title="title" 
      model-class="headerbtn" 
      center
      align-center 
      :before-close="onClose"
    >
      <div class="dialog_content">
        <slot></slot>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name:'CustomDialog',
  props: {
    title: {
      type: String,
      default: 'Alert'
    },
    open: Boolean,  
    onClose:Function
  },
  data() {
    return { 
    }
  }
}
</script>
<style lang="scss" scoped> 
 .dialog_box{
  width: 100%;
  position: absolute;
  :deep(.el-dialog){
    min-width: 300px;
    width: fit-content;
    padding: 0;
    border-radius: 20px;
  }
  :deep(.el-dialog__header){
    padding: 0;
    border-bottom: 1.4px solid rgba(0, 0, 0, 0.1);
    height: 50px;
    display: flex; 
    position: relative;
    align-items: center; 
    justify-content: center;
  }
  :deep(.el-dialog__title){ 
    color: #000;
    font-size: $font-extra-large-base;
    font-family: $font-bold; 
  }
  :deep(.el-dialog__headerbtn){
    width: 25px;
    height: 25px;
    right: 20px;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    background-color: rgb(241, 242, 245);
    padding: 1px;
    border-radius: 50%;
  }
  .dialog_content{
    padding: 20px;
    /* min-width: 350px; */
    min-height: 200px;
    height: fit-content;
    box-sizing: border-box;
  }
 }
</style>