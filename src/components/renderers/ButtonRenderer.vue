<template> 
  <div class="custom_btn" :class="style"> 
    <button 
      class="el-button"
      :class="size" 
      type=" button" 
      @click="$emit('onClick', $event)"
    >
      {{ name }}
    </button>
  </div>
</template>
<script>
export default { 
  name:'ButtonRenderer',
  props: { 
    size: {
      type: String,
      default: 'md',
    },
    style: {
      type: String,
      default: 'default',
    },
    name: {
      type: String,
      default:''
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom_btn {  
    width: 100%;
    .el-button{ 
      box-sizing: border-box;
      border-radius: 5px; 
      font-weight: 700;
      font-size: 13px;
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
  } 
</style>

