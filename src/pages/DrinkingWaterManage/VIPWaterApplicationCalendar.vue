<template>
  <main class="main-box">
    <header class="main-box-head">
      <div>
        <custom-button 
          class="primary" 
          :size="'md'"> 출력 </custom-button> 
      </div>
    </header>
    <section class="main-box-body">
      <CustomCalender />
    </section>
  </main>
</template>
            
<script>
import CustomCalender from '../../components/CustomCalender.vue'
export default {
  name: 'VIPWaterApplicationCalendar',
  data() {
    return {
                      
    }
  },
  components: {
    CustomCalender
  },
  methods: {
                    
  }
}
</script>
            
<style lang="scss" scoped>
.main-box{ 
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px;
  padding-bottom: 20px;
  .main-box-head{
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .main-box-body{
    margin-top: 10px;
    background-color: #F6F6FC;
    padding: 10px;
  }
}
</style>