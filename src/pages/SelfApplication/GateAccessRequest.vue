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
            :xl="{ span: 3 }">{{ applicantInfo.agentName }}</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">{{ applicantInfo.agetnAffilication }}</col-el>
          <col-el 
            class="center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }"> 
            <CustomInput v-model="applicantInfo.agentContact"  type="phone"  />
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            입출자 <span class="required">&nbsp;*</span> 
            <IconUser @click="() => employeeDepartment = true" /> 
            <EmployeeDepartmentSearch :open="employeeDepartment" :onClose="() => employeeDepartment = false" />
          </col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class=" flex align-center justify-start gap-10">
              <CustomInput v-model="applicantInfo.depositWithdrawal" :width="500" />
              <div class="flex gap-10">
                <CustomButton class="primary">신청자와 동일</CustomButton>
                <CustomButton class="primary">신청자와 동일</CustomButton>
                <CustomButton class="default">삭제</CustomButton>
              </div> 
            </div> 
          </col-el>
        </el-row> 
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            결재자 <span class="required">&nbsp;*</span>
            <IconUser @click="referenceLookup = true" />
            <ReferenceLookup :open="referenceLookup" :onClose="() => referenceLookup = false" />
          </col-el> 
          <col-el 
            class="start"
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
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            참조자 <span class="required">&nbsp;*</span>
            <IconUser @click="referenceLookup = true" />
          </col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="flex align-center justify-start gap-10">
              <col-el :width="500">
              <!-- 
                <el-tag
                  v-for="tag in applicantInfo.referrers"
                  :key="tag"
                  closable
                  :disable-transitions="false"
                  @close="handleReferrerClose(tag)"
                >
                  {{ tag }}
                </el-tag>
               -->
              </col-el>
              <div class="flex gap-10">
                <CustomButton class="default">신청자와 동일</CustomButton>
              </div>
            </div> 
          </col-el>
        </el-row> 
      </div> 
    </div>  
    <div class="page-content-box">
      <p class="block-title"> 입출문신청</p>
      <div class="main-table"> 
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">출입구분<span class="required">&nbsp;*</span>  
          </col-el>
          <col-el 
            class="start br"
            :lg="{ span: 7 }" 
            :xl="{ span: 6 }"> 
            <el-radio-group v-model="entryExistApplication.entranceAndExit" class="ml-4"> 
              <CustomRadio 
                :label="'공용외출'"
                :size="'small'" 
                :name="'공용외출'" 
              /> 
              <CustomRadio 
                :label="'사용외출'"
                :size="'small'" 
                :name="'사용외출'"  
              />  
              <CustomRadio 
                :label="'조퇴'"
                :size="'small'" 
                :name="'조퇴'" 
              />  
            </el-radio-group>
          </col-el> 
          <col-el class="title center br" :span="3">근태기간<span class="required">&nbsp;*</span></col-el>
          <col-el :span="10" class="start">
            <CustomDatePicker v-model="entryExistApplication.attendencePeriod"/>
          </col-el> 
        </el-row> 
        <el-row class="each-row">
          <col-el 
            class="title center br h-full"
            :height="'100%'" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">사업장<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class=" br h-full"
            :height="'100%'"
            :lg="{ span: 7 }" 
            :xl="{ span: 6 }"> 
            <CustomTextArea 
              v-model="entryExistApplication.reasonAndDestination"
              :placeholder="'메뉴 요청사항 기재, ex) 할랄음식 등'" /> 
          </col-el>
          <col-el 
            class=" h-full p-none"
            :height="'100%'"
            :span="3"> 
            <div class="w-full">
              <el-row>
                <col-el 
                  class="title center br bb" 
                  :span="24">출문 예정시간<span class="required">&nbsp;*</span></col-el>  
              </el-row>
              <el-row>
                <col-el 
                  class="title center br" 
                  :span="24">입문 예정시간<span class="required">&nbsp;*</span></col-el> 
              </el-row>
            </div> 
          </col-el>
          <el-col
            class="h-full p-none"
            :height="'100%'" 
            :span="10">
            <div class="w-full">
              <el-row>
                <col-el class="align-center gap-10 bb"> 
                  <CustomHour :onChange="(value) => entryExistApplication.expectedDepartureHour = value" /> 시
                  <CustomMinute :onChange="(value)=> entryExistApplication.expectedDepartureMinute = value" /> 분
                  <label for="no-statement" class="flex align-center gap-10">
                    <CustomCheck 
                      :id="'no-statement'" 
                      :check="entryExistApplication.departureTimeNoExit" 
                      @onChange="check => entryExistApplication.departureTimeNoExit = check" 
                    /> 출문없음
                  </label> 
                </col-el>  
              </el-row>
              <el-row>
                <col-el 
                  class="align-center gap-10"
                  :lg="{ span: 18 }" 
                  :xl="{ span: 12 }"> 
                  <CustomHour :onChange="(value) => entryExistApplication.expectedStartHour = value" /> 시
                  <CustomMinute :onChange="(value)=> entryExistApplication.expectedStartMinute = value" /> 분
                  <label for="no-introduction" class="flex align-center gap-10">
                    <CustomCheck 
                      :id="'no-introduction'" 
                      :check="entryExistApplication.expectedStartTimeNoIntro" 
                      @onChange="check => entryExistApplication.expectedStartTimeNoIntro = check" 
                    /> 입문없음
                  </label> 
                </col-el>  
              </el-row> 
            </div>  
          </el-col> 
        </el-row> 
      </div> 
    </div> 
    <div class="flex align-center gap-10 justify-center"> 
      <div class="flex gap-10">
        <CustomButton 
          :type="'button'" 
          :height="30" 
          class="primary font-base"
          @click="console.log(entryExistApplication)">임시저장</CustomButton> 
        <CustomButton 
          :type="'button'" 
          :height="30" 
          class="default font-base">결제요청</CustomButton> 
      </div>
    </div>
  </div> 
</template>

<script>  
export default { 
  name: 'GateAccessRequest',
  components: { 
  },
  data() {
    return { 
      selectedPlan: [],
      vip: false,
      repeate: '없음',
      foodAcception:'식수제공없음',
      applicantInfo: {
        agentName: '관리자1',
        agetnAffilication: '청주2)변압기생산팀',
        agentContact: '',
        depositWithdrawal:''
      },
      expectedDepartureHour:'',
      expectedDepartureMinute:'',
      expectedStartHour:'',
      expectedStartMinute:'',
      entryExistApplication: {
        entranceAndExit: '공용외출',
        reasonAndDestination: '',
        attendencePeriod: '',
        expectedDepartureHour:'',
        expectedDepartureMinute:'',
        expectedStartHour:'',
        expectedStartMinute:'',
        departureTimeNoExit:false,
        expectedStartTimeNoIntro:false,
      },
      employeeDepartment: false, 
      referenceLookup: false, 
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