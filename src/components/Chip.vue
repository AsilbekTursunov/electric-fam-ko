<template>
  <div 
    class="status-item"
    :class="{
      focused
    }"
    @click="$emit('click')">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'CardChip',
  emits:['click'],
  props: {
    title:{
      type: [String, Number],
      default: '' | 0
    },
    focused: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.status-item {
  width: fit-content !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-medium-base;
  line-height: 16px;
  padding: 7px 14px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  background: #505050;
  color: #dbdbdb;
  cursor: pointer;
}

.focused {
  width: fit-content !important;
  background-color: #fff;
  color: #000;
}

.small {
  padding: 3px 6px;
  font-size: 10px;
}

.large {
  padding: 9px 10px;
  font-size: $font-medium-base;
}

.medium {
  padding: 5px 8px;
  font-size: $font-regular-base;
}
</style>