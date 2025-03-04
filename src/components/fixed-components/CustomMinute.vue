<template>
  <CustomSelect 
    :name="'00'" 
    :data="minutes" 
    :width="60"
    @onChange="onChange" 
  />
</template>

<script>
import { minutes } from '@/constants'
export default {
  name: 'CustomMinute',
  data() {
    return {
      minutes
    }
  },
  props: { 
    onChange: Function
  }
}
</script>
<style lang="scss" scoped></style>
 