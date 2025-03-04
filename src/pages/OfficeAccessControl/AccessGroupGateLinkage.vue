<template>
  <div class="water_consumption_status">
    <div class="page-content-box">
      <div class="main-table">
        <el-row class="each-row">
          <col-el class="title center br" :span="2">사업장</col-el>
          <col-el class="start br" :span="5">
            <label>
              <CustomSelect 
                v-model="entranceGroup" 
                :width="200" 
                :data="entranceGroups" />
            </label>
          </col-el>
          <col-el class="title center br" :span="2">GROUP CODE</col-el>
          <col-el class="start br" :span="5">
            1
          </col-el>  
          <col-el class="title center br" :span="2">GROUP 명</col-el>
          <col-el class="start gap-10" :span="8"> 
            <div class="w-full"> 
            </div>  
            <label class="flex gap-10"> 
              <CustomButton class="primary" :size="'md'">수정</CustomButton>  
            </label> 
          </col-el>
        </el-row> 
      </div>  
    </div>

    <div class="history-table1"> 
      <div class="gate-group">
        <div class="">
          <CustomTuiGrid 
            :data="gridGateGroupData"
            :columns="gridGateGroupColumns" 
            :scrollX="false"
            :scrollY="false"  
          />
        </div>
      </div>
      <div class="gate-id">
        <div class="">
          <CustomTuiGrid 
            :data="gridGateIdData"
            :columns="gridGateIdColumns" 
            :scrollX="false"
            :scrollY="false"
            :rowHeaders="[
              {
                type: 'checkbox',
                align: 'center'
              }
            ]" 
          />
        </div>
      </div> 
    </div> 
  </div>
</template>
        
<script> 
export default {
  name: 'AccessGroupGateLinkage', 
  data() {
    return { 
      entranceGroups: [
        '1사업장설계',
        '도면실',
        '연구소',
        '시험센터',
        '고압 시작실',
        '1사업장 스마트기기시험반',
        'PT&T발전기실',
        'PT&T복합환경시험실',
        'FEMS Station',
        '부산사업장',
        'PT&T 시료준비실',
        '1사업장 전기반',
        '전력남부사업부(부산)',
        '기본(연수원)',
        '메탈(부산)',
      ], 
      gridGateGroupData: Array.from({ length: 10 }, () => ({
        gateCode: '1', 
        groupName: '1사업장 스마트기기 시험반'
      })),
      gridGateGroupColumns: [
        {
          header: 'GATE 코드',
          name: 'gateCode', 
          align: 'center',
          width: 100 
        },
        {
          header: 'GROUP 명',
          name: 'groupName', 
          align: 'center', 
        },
      ], 
      gridGateIdData: Array.from({ length: 15 }, () => ({
        gateCode: '1',
        gateIp: '192.168.1.47',
        gateName: ' 1사업장 사무동 2층 남동쪽'
      })),
      gridGateIdColumns: [
        {
          header: 'GATE 코드',
          name: 'gateCode', 
          align: 'center',
          width: 100 
        },
        {
          header: 'GATE IP',
          name: 'gateIp', 
          align: 'center', 
        },
        {
          header: 'GATE 명',
          name: 'gateName', 
          align: 'center', 
        }
      ], 
      currentPage3: 5,
      pageSize3: 10,
      entranceGroup:''
    }
  }, 
  mounted(){ 
  },
  methods: { 
  }
}
</script>
        
<style lang="scss" scoped>
.water_consumption_status {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px; 
  padding-bottom: 20px;
  .history-table1 {
    .gate-group{
      width: 40%;
    }
    .gate-id{
      width: 60%;
    }
    display: flex;
    gap: 20px;
    .main-table { 
      :deep(.tui-grid-rside-area){ 
        .tui-grid-header-area { 
          .tui-grid-table{ 
            .tui-grid-cell-header{
              white-space: normal;
            }
          }
        }
        .tui-grid-body-area{
          .tui-grid-table{
            .tui-grid-cell-has-input.customCheck {
              .inputCheck::before{ 
                cursor: pointer; 
                position: absolute;
                content: '';
                width: 18px;
                height: 18px;
                border: 1px solid #9AA1AB;
                border-radius: 4px;
                background-color: white;
              }
              .inputCheck:checked::before{
                border: 1px solid #00a7cf ;
                background-color: #00a7cf ; 
                background-image: url('/images/correct.svg');
                background-position: center;
                background-repeat: no-repeat;
                object-fit: cover;
              }
            }
          }
        }
      }
    } 
  } 
}
</style>