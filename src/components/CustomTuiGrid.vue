<template> 
  <tui-grid ref="GridTable" :header="{ height:30 }" /> 
</template>

<script>
import TuiGrid from 'tui-grid'
import 'tui-grid/dist/tui-grid.css' 
export default {
  name: 'CustomTuiGrid',
  props: { 
    border: Boolean
  },
  data() {
    return {  
    }
  }, 
  mounted() {
    this.$refs.GridTable.invoke("refreshLayout")
    TuiGrid.applyTheme('default', {
      cell: {
        header: {
          background: '#EEEEF3',
          text: '#000000',
          border: this.border ? '#fff' : '#EEEEF3'
        },
        rowHeader: {
          background: '#EEEEF3',
          textAlign: 'center',
          verticalAlign: 'middle',
          text: '#000000'
        },
        evenRow: {
          background: '#FFFFFF',
          textAlign: 'center',
          verticalAlign: 'middle',
        },
        oddRow: {
          background: '#FFFFFF',
          textAlign: 'center',
          verticalAlign: 'middle',
        },
      }
    })
  }
}
</script>

<style lang="scss" scoped> 
  :deep(.tui-grid-container){ 
    .tui-grid-content-area  { 
      width: 100%;
      border-top: 1px solid #C6C6C9;
      font-size: $font-medium-base;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: $font-regular !important; 
      .tui-grid-lside-area{
        .tui-grid-cell{
          input{  
            width: 18px;
            height: 18px;
            border-radius: 6px; 
            appearance: none;
            cursor: pointer;
          }
          input::after{
            position: absolute;
            content: '';
            width: 18px;
            height: 18px;
            border-radius: 4px;
            border: 1px solid #9AA1AB;
            background-color: #ffffff;
          } 
          input:checked::after{
            border: 1px solid #00a7cf ;
            background-color: #00a7cf ; 
            background-image: url('/images/correct.svg');
            background-position: center;
            background-repeat: no-repeat;
            object-fit: cover;
          } 
        }
      }
      .tui-grid-rside-area{
        .tui-grid-header-area{
          .tui-grid-table{
            line-height: 15px;
            tbody{
              tr{
                th[data-column-name="accessRightGroup"]{
                  height: 35px !important;
                }
              }
            }
          }
        }
        .tui-grid-body-area{
          height: fit-content !important;
        }
      }
    }
    .tui-grid-cell-content { 
      text-align: center; 
    }
    .tui-pagination{
      display: flex;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      .tui-first, .tui-prev, .tui-next, .tui-last{ 
        cursor: pointer; 
        width: 10px;
        height: 10px;
        background-position: center; 
        span{
          display: none;
        }
      }
      .tui-first{
        background-image: url('/images/first.svg');  
      }
      .tui-prev{
        background-image: url('/images/prev.svg'); 
      }
      .tui-next{
        background-image: url('/images/next.svg');  
      }
      .tui-last{
        background-image: url('/images/last.svg'); 
        
      }
      .tui-page-btn {
        padding: 6px;
        margin: 0px 4px;
        color: #606060;
      } 
      .tui-is-selected {
        width: 13px;
        height: 13px;
        background-color: #000000;
        color: #fff;
        border-radius: 6px; 
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: $font-regular-base;
      } 
      a{
        text-decoration: none;
      }
    }
  } 
</style>