<template> 
  <div class="custom_btn"> 
    <button 
      class="el-button"
      :class="size" 
      :type="type == 'submit' ? 'submit' : 'button'"
      :style="{ height: `${height}px`}"
      @click="onClick"
    > 
      <slot></slot> 
    </button>
  </div>
</template>
<script>
export default { 
  name:'CustomButton',
  props: {
    type: String, 
    onClick:Function,
    size: {
      type: String,
      default: 'md',
    }, 
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 24,
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom_btn { 
    width: 100%;
    .el-button{
      width: 100%;
      box-sizing: border-box;
      border-radius: 5px;
      display: flex;
      align-items: center;
      overflow: hidden;
      letter-spacing: 1px;
      font-family: $font-medium;
      justify-content: center;
      line-height: 100px;
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
    }
    .el-button.sm{ 
      padding: 5px;
      font-size: 10px;
    }
    .el-button.md{ 
      padding: 7px 14px;
      font-size: 11px;
    }
    .el-button.lg{ 
      padding: 9px 18px;
      font-size: 13px;
    }
    .el-button.h-24{ 
      height: 24px;
      font-size: $font-small-base;
    }
    .el-button.h-30{ 
      height: 30px;
      font-size: $font-base;
    }
    &.primary{
      .el-button{ 
        border: none;
        color: white; 
        background: linear-gradient(180.00deg, rgb(1, 179, 213),rgb(1, 155, 185) 100%);
      }
    }
    &.secondary{
      .el-button{ 
        border: none;
        color: white; 
        background: rgb(190, 190, 190);
      }
    }
    &.default{
      .el-button{ 
        border: 1px solid rgb(223, 223, 223);  
        background: rgb(255, 255, 255);
        color: #000;
      }
    } 
    &.font-small{
      .el-button{ 
        font-size: $font-small-base !important;
      } 
    } 
    &.font-base{
      .el-button{ 
        font-size: $font-base !important;
      } 
    } 
    &.font-regular{
      .el-button{ 
        font-size: $font-regular-base !important;;
      } 
    } 
    &.font-medium{
      .el-button{ 
        font-size: $font-medium-base !important;;
      } 
    } 
  } 
</style>

