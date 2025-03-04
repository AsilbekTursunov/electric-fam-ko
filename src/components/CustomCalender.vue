<template>  
  <header class="calender-types">
    <el-button-group class="calender-btn-group">
      <el-button 
        v-for="day in buttons" 
        :key="day" 
        class="btn" 
        :data-view-name="day"
        :class="{active: day == selectedTime, day}"
        @click="changeCalendar(day)">{{ day }}</el-button> 
    </el-button-group>
    <div class="right-side-btn">
      <el-button-group class="calender-btn-group">
        <el-button class="after-before" @click="afterBefore('prev')">
          <el-icon><ArrowLeftBold :size="5" :color="'#606060'" /></el-icon> 
        </el-button> 
        <span class="divider">&nbsp;</span>
        <el-button class="after-before" @click="afterBefore('next')">
          <el-icon><ArrowRightBold :size="5" :color="'#606060'" /></el-icon>  
        </el-button> 
      </el-button-group> 
      <el-button class="today" @click="goToday">
        today 
      </el-button>
    </div> 
  </header>
  <div id="container"></div>
</template>

<script>
import Calendar from '@toast-ui/calendar'
import { events } from '../constants'
import '@toast-ui/calendar/dist/toastui-calendar.min.css' 
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
export default {
  name: 'CustomCalender',
  props: {
    border: Boolean
  },
  components: {
    ArrowLeftBold,
    ArrowRightBold
  },
  data() {
    return {
      calendarInstance: null,
      selectedTime: 'month',
      buttons: ['day', 'week', 'month'], 
      events,
    }
  },
  watch: {
    selectedTime() {
      this.getCalendar()
    }
  },
  mounted() { 
    this.getCalendar() 
  },
  methods: { 
    getCalendar() {
      this.calendarInstance = new Calendar('#container', {
        defaultView: this.selectedTime, 
        timezone: {
          zones: [
            {
              timezoneName: 'Asia/Seoul',
              displayLabel: 'Seoul',
              tooltip: 'Seoul',
            },
            {
              timezoneName: 'Asia/Tashkent',
              displayLabel: 'Tashkent',
              tooltip: 'Tashkent',
            },
          ],
        },
        week: {
          showTimezoneCollapseButton: true,
          workweek: true,
          narrowWeekend: true,
        }, 
        template: { 
        }
      })
      // Change the theme of an instance with the setTheme method
      this.calendarInstance.setTheme({
        week: {
          today: {
            color: 'red',
          },
          pastDay: {
            color: 'grey',
          },
          dayName: {
            borderTop: '1px solid #C6C6C9',
            backgroundColor: '#EEEEF3',
          },
          dayGridLeft: { 
            width: '8rem',
          },
          timeGridLeft: { 
            width: '8rem',
          },
        },
      })
      this.calendarInstance.on('clickTimezonesCollapseBtn', function (prevCollapsedState) {
        this.calendarInstance.setOptions({
          week: {
            timezonesCollapsed: !prevCollapsedState,
          },
        })
      }) 
      this.calendarInstance.createEvents(this.events) 
    },
    changeCalendar(day) {
      this.calendarInstance.changeView(day)
      this.selectedTime = day
    },
    afterBefore(type) {
      if (type == 'next') {
        this.calendarInstance.next() 
      } else {
        this.calendarInstance.prev()  
      }
    },
    goToday() {
      this.calendarInstance.today()
    }
  }
}
</script>

<style lang="scss" scoped> 
.calender-types{
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .calender-btn-group{
    border: 1px solid #606060;
    color: #606060;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 6px;
    .btn{
      border: none;
    }
    .btn:hover{
      background-color: #a5a2a2;
      color: white;
    }
    .active{
      background-color: #606060;
      color: white;
    }
    .after-before{
      width: 20px; 
    }
    .after-before{ 
      border: none;
    }
    .after-before:hover{
      background-color: #fff;
    }
    .divider{
      width: 2px;
      height: 100%;
      background-color: #606060;
    }
  }
  .right-side-btn{
    display: flex;
    align-items: center;
    gap: 10px;
    .today{
      border-radius: 6px;
      font-family: $font-medium;
      color: #000;
      border: 1px solid #606060;  
    }
    .today:hover{
      background-color: #fff; 
      color: #000;
    }
  }
} 
#container{
  height: 600px;
}
</style>