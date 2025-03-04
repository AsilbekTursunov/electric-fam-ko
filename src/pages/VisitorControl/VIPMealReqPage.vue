<template>
  <div class="apply-page__main"> 
    <div class="page-content-box">
      <p class="block-title">신청자정보</p>
      <div class="main-table">
        <el-row class="each-row">
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
          </col-el>
          <col-el 
            class="br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">{{ applicationInfo.officerName }}</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">{{ applicationInfo.officerAffiliation }}</col-el>
          <col-el 
            class="center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            <CustomInput v-model="applicationInfo.officerContact" />
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            결재자 <span class="required">&nbsp;*</span> 
            <IconUser @click="() => employeeDepartment = true" />  
            <EmployeeDepartmentSearch :open="employeeDepartment" :onClose="() => employeeDepartment = false" />
          </col-el>
          <col-el 
            class="br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">{{ applicationInfo.payerName }}</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">{{ applicationInfo.payerAffiliation }}</col-el>
          <col-el 
            class=" "
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            {{ applicationInfo.payerContact }}
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            참조자  <span class="required">&nbsp;*</span>
            <IconUser @click="referenceLookup = true" />
            <ReferenceLookup :open="referenceLookup" :onClose="() => referenceLookup = false" />
          </col-el>
          <col-el 
            class="center flex-1"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="applicant-referrers">
              <!-- <el-tag
                v-for="tag in applicantInfo.referrers"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="handleReferrerClose(tag)"
              >
                {{ tag }}
              </el-tag> -->
            </div>
          </col-el> 
        </el-row>
      </div> 
    </div>
    <div class="page-content-box">
      <p class="block-title"> 식수</p>
      <div class="main-table"> 
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">사업장 식당<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start" 
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }"> 
            <CustomSelect 
              v-model="dringkingWater.businessCafeteria"
              :width="200"
              :data="businessCafeterias" />
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="center br title" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">식당도착시간<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full flex align-center gap-10">
              <CustomDatePicker v-model="dringkingWater.restaurantArrivalDate" /> 일  
              <div class="flex align-center gap-15">
                <col-el class="gap-10 h-full" :width="100"> 
                  <CustomTimePicker v-model="dringkingWater.restaurantArrivalTime" />
                </col-el> 
              </div> 
              시:분
            </div> 
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">식사종료일</col-el> 
          <col-el 
            class="table contents" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="flex align-center gap-10 w-full justify-start">
              <CustomDatePicker v-model="dringkingWater.endMealDate" /> 일
              <span class="disable-note">(방문시간이 2일 이상인 경우 입력)</span>
              <div>
                <CustomButton 
                  class="default"
                  :width="100" 
                  :type="'button'">식수선택</CustomButton>
              </div>
            </div> 
          </col-el>
        </el-row> 
        <el-row class="each-row">
          <col-el
            class="title center br h-full"
            :height="'100% !important'" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">신청정보</col-el> 
          <col-el 
            class="start h-full p-none"
            :height="'100% !important'"  
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <el-row class="each-row">
                <col-el :span="3" class="title br center">식수일</col-el>
                <col-el :span="6" class="title br center">식수선택</col-el>
                <col-el :span="4" class="title br center">식수인원</col-el>
                <col-el :span="5" class="title br center">식사구분</col-el>
                <col-el :span="3" class="title br center">잔여좌석</col-el>
                <col-el :span="3" class="title center">신청마감</col-el>
              </el-row>
              <el-row class="each-row">
                <col-el :span="3" class="center br">  
                  {{ dringkingWaterAppInfoFirst.foodDay }} 
                </col-el>
                <col-el :span="6" class="center br gap-15">
                  <label for="column-first-breakfast" class="flex justify-center gap-10">
                    <CustomCheck 
                      :id="'column-first-breakfast'" 
                      :check="dringkingWaterAppInfoFirst.breackFast" 
                      @onChange="check => dringkingWaterAppInfoFirst.breackFast = check" 
                    /> 조식
                  </label> 
                  <label for="column-first-chinese-food" class="flex justify-center gap-10">
                    <CustomCheck 
                      :id="'column-first-chinese-food'" 
                      :check="dringkingWaterAppInfoFirst.chineseFood" 
                      @onChange="check => dringkingWaterAppInfoFirst.chineseFood = check" 
                    /> <span>중식<span class="required">*</span></span>
                  </label> 
                  <label for="column-first-dinner" class="flex justify-center gap-10">
                    <CustomCheck 
                      :id="'column-first-dinner'" 
                      :check="dringkingWaterAppInfoFirst.dinner" 
                      @onChange="check => dringkingWaterAppInfoFirst.dinner = check" 
                    /> 석식
                  </label> 
                </col-el>
                <col-el :span="4" class="center br">
                  <CustomInput v-model="dringkingWaterAppInfoFirst.numOfPeopleEat" /> 
                </col-el>
                <col-el :span="5" class="center br">
                  <CustomSelect v-model="dringkingWaterAppInfoFirst.mealType" :data="busanFactory" />
                </col-el>
                <col-el :span="3" class="center br">
                  <label>
                    <span class="seats">{{ dringkingWaterAppInfoFirst.remainingTables }}</span>
                  </label>
                </col-el>
                <col-el :span="3" class="center">
                  <CustomActiveButton 
                    class="default" 
                    :name="dringkingWaterAppInfoFirst.appDeadline" /> 
                </col-el>
              </el-row>
              <el-row class="">
                <col-el :span="3" class="center br">  
                  {{ dringkingWaterAppInfoSecond.foodDay }}
                </col-el>
                <col-el :span="6" class="center br gap-15">
                  <label for="column-second-breakfast" class="flex justify-center gap-10">
                    <CustomCheck 
                      :id="'column-second-breakfast'" 
                      :check="dringkingWaterAppInfoSecond.breackFast" 
                      @onChange="check => dringkingWaterAppInfoSecond.breackFast = check" 
                    /> 조식
                  </label> 
                  <label for="column-second-chinese-food" class="flex justify-center gap-10">
                    <CustomCheck 
                      :id="'column-second-chinese-food'" 
                      :check="dringkingWaterAppInfoSecond.chineseFood" 
                      @onChange="check => dringkingWaterAppInfoSecond.chineseFood = check" 
                    /> <span>중식<span class="required">*</span></span>
                  </label> 
                  <label for="column-second-dinner" class="flex justify-center gap-10">
                    <CustomCheck 
                      :id="'column-second-dinner'" 
                      :check="dringkingWaterAppInfoSecond.dinner" 
                      @onChange="check => dringkingWaterAppInfoSecond.dinner = check" 
                    /> 석식
                  </label> 
                </col-el>
                <col-el :span="4" class="center br">
                  <CustomInput v-model="dringkingWaterAppInfoSecond.numOfPeopleEat" /> 
                </col-el>
                <col-el :span="5" class="center br">
                  <CustomSelect v-model="dringkingWaterAppInfoSecond.mealType" :data="busanFactory" />
                </col-el>
                <col-el :span="3" class="center br ">
                  <label>
                    <span class="seats">{{ dringkingWaterAppInfoSecond.remainingTables }}</span>
                  </label>
                </col-el>
                <col-el :span="3" class="center  ">
                  <CustomActiveButton 
                    :style="'danger'" 
                    :name="dringkingWaterAppInfoSecond.appDeadline" /> 
                </col-el>
              </el-row>
            </div> 
          </col-el> 
        </el-row> 
        <el-row class="each-row">
          <col-el 
            class="center br title" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">기타 요청사항</col-el> 
          <col-el 
            class="start"  
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <CustomInput v-model="otherRequest" :placeholder="'메뉴 요청사항 기재, ex) 할랄음식 등'" />
          </col-el>
        </el-row>
      </div> 
    </div> 
    <div class="page-content-box">
      <p class="block-title">방문자정보</p>
      <div class="main-table">
        <el-row class="each-row">
          <col-el class="title center br" :span="3">국적<span class="required">&nbsp;*</span></col-el>
          <col-el class="title center br" :span="3">성명<span class="required">&nbsp;*</span></col-el> 
          <col-el class="title center br" :span="4">업체명<span class="required">&nbsp;*</span></col-el> 
          <col-el class="title center br" :span="3">방문자연락처</col-el> 
          <col-el class="title center br" :span="4">방문목적<span class="required">&nbsp;*</span></col-el> 
          <col-el class="title center br" :span="3">차량번호</col-el>
          <col-el class="title center br" :span="4">특이사항</col-el>   
        </el-row>
        <el-row class="each-row">
          <col-el class="center br" :span="3">
            <CustomInput v-model="registrationVisitors.nationality" />
          </col-el>
          <col-el class="center br" :span="3">
            <CustomInput v-model="registrationVisitors.name" />
          </col-el> 
          <col-el class="center br" :span="4">
            <CustomInput v-model="registrationVisitors.companyName" />
          </col-el> 
          <col-el class="center br" :span="3">
            <CustomInput v-model="registrationVisitors.visitorContact" />
          </col-el> 
          <col-el class="center br" :span="4">
            <CustomInput v-model="registrationVisitors.purposeOfVisit" />
          </col-el> 
          <col-el class="center br" :span="3">
            <CustomInput v-model="registrationVisitors.vehicleNumber" />
          </col-el> 
          <col-el class="center" :span="4">
            <CustomInput v-model="registrationVisitors.significant" />
          </col-el> 
        </el-row>
      </div>
    </div>
    <p class="description">※ 식수 신청은 식사 제공을 위한 것이 아니라 식사 준비를 위한 것입니다.</p>
    <div class="flex align-center justify-center gap-15">  
      <el-col :span="1"> 
        <CustomButton 
          :height="30"
          :type="'button'" 
          class="primary font-base"
          @click="console.log(
            applicationInfo,
            dringkingWater,
            dringkingWaterAppInfoFirst,
            dringkingWaterAppInfoSecond
          )">등록</CustomButton>
      </el-col> 
      <el-col :span="1"> 
        <CustomButton 
          :height="30"
          :type="'button'" 
          class="default font-base">취소</CustomButton>
      </el-col>   
    </div>
  </div> 
</template>

<script>   
export default { 
  name:'VIPMealReqPage',
  data() {
    return { 
      businessCafeterias: [
        '청주1사업장 식당',
        '청주2사업장 식당',
        '천안사업장 식당',
        '부산사업장 식당', 
      ],
      busanFactory: [
        '한식(외부고객) : 13,000',
        '삼계탕 : 13,000',
        '양식(육류스테이크) : 25,000',
        '양식(연어스테이크) : 25,000',
        '중동식 : 25,000',
        '생일자 : 8,000'
      ],  
      applicationInfo: {
        agentName: '관리자1',
        agentAffiliation: '청주2)변압기생산팀	',
        agentContact: '',
        officerName: '신청자',
        officerAffiliation: '청주)지원혁신팀',
        officerContact: '',
        payerName: '엄경수',
        payerAffiliation: '',
        payerContact: '(계ㆍ반장, 팀장 이상 조회가능)',
        refrences:[]
      }, 
      dringkingWater: {
        businessCafeteria: '',
        restaurantArrivalDate:'',
        restaurantArrivalTime: '',
        endMealDate: '', 
      },
      dringkingWaterAppInfoFirst: {
        foodDay: '', 
        breackFast: false,
        chineseFood: false,
        dinner: false,
        numOfPeopleEat: '',
        mealType: '',
        remainingTables: '200',
        appDeadline:'신청'
      },
      dringkingWaterAppInfoSecond: {
        foodDay: '', 
        breackFast: false,
        chineseFood: false,
        dinner: false,
        numOfPeopleEat: '',
        mealType: '',
        remainingTables: '150',
        appDeadline:'신청'
      }, 
      otherRequest:'',
      open: false, 
      registrationVisitors: {
        id: '5t2t2354t23ctnj8653x',
        nationality: '',
        name: '',
        companyName: '',
        visitorContact: '',
        purposeOfVisit: '',
        vehicleNumber: '',
        significant: '',
      },
      referenceLookup: false,
      employeeDepartment:false
       
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