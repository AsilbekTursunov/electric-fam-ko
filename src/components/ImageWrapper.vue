<template>
  <div 
    class="profile-image-wrapper"
    :style="{
      width: width,
      height: height
    }"
    :class="{
      large,
      small,
      pointer,
      medium,
      rounded,
      xl
    }"
    @click="$emit('onImage')"
  >
    <img
      :src="imagePath"
      :alt="alt"
      :object-fit="cover">
  </div>
</template>

<script>
export default {
  name: 'ImageWrapper',
  emits: ['onImage'],
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'image'
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    pointer: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '18px'
    },
    height: {
      type: String,
      default: '18px'
    },
    cover: {
      type: String,
      default: 'cover'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    imagePath() {
      return `/images/${this.src}.svg`
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-image-wrapper {
  width: 18px;
  height: 18px;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0; 
  padding: 0; 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.large {
  width: 30px !important;
  height: 30px !important;  
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.small{
  width: 14px;
  height: 14px;  
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
}

.rounded{
  border-radius: 50%;
  overflow: hidden;
}

.xl{
  width: 36px !important;
  height: 36px !important;  
}

.medium{
  width: 24px !important;
  height: 24px !important;  
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.pointer{
  cursor: pointer;
}
</style>