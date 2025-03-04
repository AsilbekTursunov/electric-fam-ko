<template>
  <CustomSelect 
    :name="'00'" 
    :data="hours" 
    :width="60"
    @onChange="onChange" 
  />
</template>

<script>
import { hours } from '@/constants'
export default {
  name: 'CustomHour',
  data() {
    return {
      hours
    }
  },
  props: { 
    onChange: Function
  }
}
</script>
<style lang="scss" scoped></style>
 