<template>
  <div
    class="input-box"
    :class="{
      hasIcon
    }"
    :style="{
      width,
      height
    }">
    <span v-if="title" class="input-title">{{ title }}</span>
    <el-input 
      v-if="type !== 'select'" 
      v-model="value" 
      :placeholder="placeholder" 
      :type="type" 
      :rows="rows"
      :readonly="readonly"
      @keyup.enter="$emit('enter')"
      @keyup.esc="$emit('esc')"
    />
    <el-select 
      v-else 
      v-model="value" 
      :placeholder="placeholder">
      <el-option 
        v-for="item in options" 
        :key="item._id" 
        :label="item.title" 
        :value="item._id">
      </el-option>
    </el-select>
    <ImageWrapper 
      v-if="customIcon" 
      :src="customIcon" 
      medium
      pointer
      @onImage="$emit('iconClick')" />
    <el-icon v-else-if="hasIcon" color="#fff"><Search /></el-icon>
  </div>
</template>


<script>
export default {
  name: 'MediaInput',
  emits: ['update:modelValue', 'enter', 'esc', 'iconClick'],
  props: {
    title: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    },
    type: {
      type: String,
      default: 'input'
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows:{
      type: Number,
      default: 10
    },
    readonly: {
      type: Boolean,
      default: false
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    customIcon: {
      type: String,
      default: ''
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  box-sizing: border-box;

  .input-title {
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    color: #1C274C;
  }

  :deep(.el-input) {
    width: 100%;
    border: 1px solid rgb(202, 202, 202);
    border-radius: 6px;
    color: #fff;
    .el-input__wrapper {
      height: 100% !important;
      background-color: transparent !important;
      outline: none !important;
    }
    .el-input__wrapper {
      box-shadow: none !important; 
     .el-input__inner {
       font-size: $font-medium-base;
       color: #fff;
     }
    }
  }

   .el-textarea {
    width: 100%;
    box-sizing: border-box;
    
    .el-textarea__inner {
      box-sizing: border-box;
    }
  }

  :deep(.el-select) {
    width: 100%;
    height: 40px;

    .el-select__wrapper {
      height: 100% !important;
    }
  }
}
.hasIcon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: 1px solid #fff;
  padding: 0 5px;
  padding-right: 10px;
  border-radius: 6px;
  .el-input {
    border: none;
  }
}
</style>