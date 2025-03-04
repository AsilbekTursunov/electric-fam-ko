<template>
  <div class="apply-page__main"> 
    <div class="page-content-box">
      <p class="block-title">신청자정보</p>
      <div class="main-table"> 
        <el-row class="each-row">
          <col-el
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">담당자<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start gap-10"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label>
              <CustomInput 
                v-model="application.name"
                :width="300"
              />  
            </label> 
            <label>
              <CustomButton class="secondary" :size="'md'">검색</CustomButton>
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">차량번호</col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label>
              <CustomInput
                v-model="application.carNumber" 
                :width="300"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">차량 적재중량(t)</col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label>
              <CustomInput
                v-model="application.carWeight" 
                :width="300"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">성명<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label>
              <CustomInput
                v-model="application.name" 
                :width="300"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">핸드폰<span class="required">&nbsp;*</span></col-el> 
          <col-el :lg="{ span: 20 }" :xl="{ span: 21 }">
            <label>
              <CustomInput
                v-model="application.phone"
                :width="300"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">업체명<span class="required">&nbsp;*</span></col-el> 
          <col-el :lg="{ span: 20 }" :xl="{ span: 21 }">
            <label>
              <CustomInput
                v-model="application.companyName"
                :width="300"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">방문목적<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="gap-10"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label>
              <CustomSelect
                v-model="application.purpose"  
                :width="140"
                :data="visitedPurpose"
              />
            </label>
            <label>
              <CustomInput
                v-model="application.purpose"
                :width="200"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">출입 GATE<span class="required">&nbsp;*</span></col-el> 
          <col-el :lg="{ span: 20 }" :xl="{ span: 21 }">
            <label>
              <CustomSelect 
                v-model="application.gate" 
                :width="140"
                :data="reasons"
              />
            </label>
          </col-el>
        </el-row>  
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">방문증번호<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start gap-10"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label class="flex gap-10 align-center">
              CJ <CustomInput v-model="application.passNumber" :width="200" />
            </label>
          </col-el>
        </el-row>  
      </div> 
    </div> 
    <div class="flex align-center gap-10 justify-center"> 
      <div class="flex gap-10">
        <CustomButton 
          :type="'button'" 
          :height="30" 
          class="primary font-base">등록</CustomButton> 
        <CustomButton 
          :type="'button'" 
          :height="30" 
          class="default font-base">취소</CustomButton> 
      </div>
    </div> 
  </div>
</template>
  
<script>
export default {
  name: 'OfficialVisitorRegistration',
  data() {
    return {
      visitedPurpose: [
        {
          value:'일반업무',
          label:'일반업무'
        },
        {
          value:'납품',
          label:'납품'
        },
        {
          value:'출하',
          label:'출하'
        },
        {
          value:'시급',
          label:'시급'
        },
        {
          value:'회의',
          label:'회의'
        },
        {
          value:'교육',
          label:'교육'
        },
        {
          value:'행낭',
          label:'행낭'
        },
        {
          value:'A/S',
          label:'A/S'
        },
        {
          value:'공사',
          label:'공사'
        },
        {
          value:'시험/테스트',
          label:'시험/테스트'
        },
        {
          value:'설비점검/설치',
          label:'설비점검/설치'
        },
        {
          value:'업체진단/측정',
          label:'업체진단/측정'
        },
        {
          value:'포장/도장작업',
          label:'포장/도장작업'
        },
        {
          value:'입회검수',
          label:'입회검수'
        },
        {
          value:'계약/상담',
          label:'계약/상담'
        },
        {
          value:'폐기물수거',
          label:'폐기물수거'
        },
        {
          value:'영업',
          label:'영업'
        },
        {
          value:'견학',
          label:'견학'
        },
        {
          value:'인증심사',
          label:'인증심사'
        }
      ],
      reasons: [
        {
          value:'청주1공장_정문',
          label:'청주1공장_정문'
        },
        {
          value:'청주1공장_후문',
          label:'청주1공장_후문'
        },
        {
          value:'청주2공장_정문',
          label:'청주2공장_정문'
        },
        {
          value:'부산공장정문',
          label:'부산공장정문'
        }
      ], 
      selectedPlan: [],
      vip: false,
      application: {
        name:'',
        carNumber:'',
        carWeight:'',
        carName:'',
        phone:'',
        companyName:'',
        purpose:'',
        gate:'',
        passNumber:''
      }
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
  padding-bottom: 20px; 
}
  </style>