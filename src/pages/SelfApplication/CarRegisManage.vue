<template>
  <div class="apply-page__main">
    <div class="page-content-box">
      <p class="block-title">신청자정보</p>
      <div class="main-table">
        <el-row class=" each-row">
          <col-el 
            class="title br center " 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">구분</col-el>
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">성명</col-el>
          <col-el 
            class="title br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">소속</col-el>
          <col-el 
            class="title center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">연락처</col-el>
          <col-el 
            class="title flex-1"
            :lg="{ span: 7 }" 
            :xl="{ span: 11 }"></col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">신청자(대리)</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">{{ applicationInfo.agentName }}</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">{{ applicationInfo.agentAffiliation }}</col-el>
          <col-el 
            class="center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }"> 
            <CustomInput v-model="applicationInfo.agentContact" />
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            방문대상자 <span class="required">&nbsp;*</span> 
            <IconUser @click="() => employeeDepartment = true" />  
            <EmployeeDepartmentSearch :open="employeeDepartment" :onClose="() => employeeDepartment = false" />
          </col-el>
          <col-el 
            class="br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">{{ applicationInfo.officerName }}</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">{{ applicationInfo.officerAffiliation}}	</col-el>
          <col-el 
            class="center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            <CustomInput v-model="applicationInfo.officerContact" />
          </col-el>
        </el-row> 
      </div> 
    </div>
    <div class="page-content-box">
      <p class="block-title">차량 정보</p>
      <div class="main-table"> 
        <el-row class="each-row">
          <col-el
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">차량번호<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomInput v-model="vehicleInformation.cardNumber" :width="300" /> 
            </div>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">색상<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="table contents"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomInput v-model="vehicleInformation.color" :width="300" /> 
            </div>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">차종<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomInput v-model="vehicleInformation.car" :width="300" />  
            </div>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">차량분류<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomSelect 
                v-model="vehicleInformation.vehicleClassification"
                :width="140"
                :data="visitedPlaces"  
              />
            </div>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">신청목적<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomInput v-model="vehicleInformation.applicantionTree" :width="700" /> 
            </div>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">신청사유<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomSelect
                v-model="vehicleInformation.applicantion"  
                :width="140"
                :data="reasons" 
              />
            </div>
          </col-el>
        </el-row>  
      </div> 
    </div> 
    <div class="flex align-center gap-10 justify-center"> 
      <el-col :span="1"> 
        <CustomButton 
          :type="'button'"
          :height="30" 
          class="primary font-base"
          @click="console.log(vehicleInformation)">등록</CustomButton>
      </el-col> 
      <el-col :span="1"> 
        <CustomButton 
          :type="'button'"
          :height="30" 
          class="default font-base">취소</CustomButton>
      </el-col>  
    </div>
  </div>
</template>
  
<script>
import { visitedPlaces } from '../../constants'
export default {
  name: 'CarRegisManage',
  data() {
    return {
      visitedPlaces,
      reasons: ['신규', '분실', '훼손'], 
      applicationInfo: {
        agentName: '관리자1',
        agentAffiliation: '청주2)변압기생산팀',
        agentContact: '',
        officerName: '관리자1',
        officerAffiliation: '청주2)변압기생산팀	',
        officerContact: '',  
      },
      vehicleInformation: {
        cardNumber: '',
        color: '',
        car: '',
        vehicleClassification: '',
        applicantionTree:'',
        applicantion:'',
      }, 
      employeeDepartment: false,  
    }  
  },
  methods: {
    selectPlans(value) { 
      if (this.selectedPlan.includes(value)) {
        this.selectedPlan = this.selectedPlan.filter(item => item != value)
      } else (
        this.selectedPlan.push(value)
      ) 
    },
    chooseVip() {
      this.vip = !this.vip
    },
    contant(event, name) {
      console.log(this.form.applicant[name] = event)
    },
    toogleRegistrationVisitor(id) {
      if (id && this.registrationVisitors.includes(item => item.id == id)) {
        this.registrationVisitors = this.registrationVisitors.filter(item => item.id != id)
      } else { 
        this.registrationVisitors.push(
          { id: Math.ceil(Math.random()),
            natinality: '',
            companyName: '',
            name: '',
            position: '',
            contact: '',
            vehicle: '',
            cardNumber: ''
          }
        )
      }
    }
  }
}
</script>
  
  <style lang="scss" scoped>
  .apply-page__main{ 
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px; 
}
  </style>