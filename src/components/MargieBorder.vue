<template>
  <span
    :class="['margie', direction]"
    :style="computedStyle"
  />
</template>

<script>
export default {
  name: "MargieBorder",
  props: {
    width: {
      type: [String, Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: 0
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    bg: {
      type: String,
      default: "transparent"
    }
  },
  computed: {
    computedStyle() {
      if (this.direction === "horizontal") {
        return {
          width: "100%",
          height: `${this.height}px`,
          background: this.bg
        }
      } else if (this.direction === "vertical") {
        return {
          width: `${this.width}px`,
          height: "100%",
          background: this.bg
        }
      }
      return {}
    }
  },
  mounted() {
    console.log("Direction:", this.direction)
  }
}
</script>

<style lang="scss" scoped>
.margie {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  line-height: 0;
  margin-top: 5px;
}
</style>
