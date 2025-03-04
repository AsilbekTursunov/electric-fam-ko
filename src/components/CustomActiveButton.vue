<template>
  <div class="button_box">
    <button 
      type="button" 
      class="active-btn" 
      :class="style" 
      @click="$emit('onClick')">
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomActiveButton',
  props: {
    style: {
      type: String,
      default: 'default'
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.button_box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .active-btn {
    // min-width: 50px;
    text-align: center;
    cursor: pointer;
    width: fit-content; 
    border-radius: 5px;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 7px;
    outline: none;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &.default {
      border: 1px solid #cecece;
      background-color: #f7f7f8;
      color: #606060;
      min-width: 50px;
    }

    &.success {
      border: 1px solid #9fd7a0;
      background-color: #f3fff6;
      color: #089d38;
      min-width: 50px;
    }

    &.danger {
      border: 1px solid #ffbdbd;
      background-color: #fffafa;
      color: #db3c3c;
      min-width: 50px;
    }

    &.primary {
      border: 1px solid #88c3f3;
      background-color: #f3fcff;
      color: #0175be;
      min-width: 50px;
    }

    &.default1 {
      border: 1px solid #cecece;
      background-color: #f7f7f8;
      color: #606060;
      /* min-width: 50px; */
    }

    &.success1 {
      border: 1px solid #9fd7a0;
      background-color: #f3fff6;
      color: #089d38;
    }

    &.danger1 {
      border: 1px solid #ffbdbd;
      background-color: #fffafa;
      color: #db3c3c;
    }

    &.primary1 {
      border: 1px solid #88c3f3;
      background-color: #f3fcff;
      color: #0175be;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
}
</style>
