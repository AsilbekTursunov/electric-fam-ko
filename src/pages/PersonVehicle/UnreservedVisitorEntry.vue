<template>
  <div class="apply-page__main"> 
    <!-- page-content-box this class is in the style.css file which is global classname -->
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
            :xl="{ span: 3 }">관리자1</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">청주2&rpar;변압기생산팀</col-el>
          <col-el 
            class="center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }"> 
            <CustomInput
              v-model="applicantInfo.phone"
              type="phone"
            />
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            방문대상자 <span class="required">&nbsp;*</span> 
            <IconUser @click="() => open = !open" /> 
          </col-el>
          <col-el 
            class="br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">{{ applicantInfo.visitingRepresentative }}</col-el>
          <col-el 
            class="br center"
            :lg="{ span: 5 }" 
            :xl="{ span: 4 }">{{ applicantInfo.visitingDeptName }}</col-el>
          <col-el 
            class="center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            <CustomInput v-model="applicantInfo.visitingPhone" 
            />
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">
            참조자  <span class="required">&nbsp;*</span>
            <IconUser @click="dialogVisible = true" />
          </col-el>
          <col-el 
            class="center flex-1"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="applicant-referrers">
              <el-tag
                v-for="tag in applicantInfo.referrers"
                :key="tag"
                closable
                :disable-transitions="false"
                @close="handleReferrerClose(tag)"
              >
                {{ tag }}
              </el-tag>
            </div>
          </col-el> 
        </el-row>
      </div> 
    </div>
    <div class="page-content-box">
      <p class="block-title">방문 정보</p>
      <div class="main-table">
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }"
            :xl="{ span: 3 }">방문사업장<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class=" start gap-10"
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <CustomSelect
              v-model="visitingInfo.visitedPlace"
              :name="'청주사업장'" 
              :width="160" 
              :data="visitedPlaces"
            /> 
            <label for="unreserved-factory-1" class="flex gap-5 align-center">
              <CustomCheck 
                :id="'unreserved-factory-1'" 
                :check="visitingInfo.visitedPlace1" 
                @onChange="(value)=>visitingInfo.visitedPlace1 = value" 
              /> 청주1공장
            </label>
            <label for="unreserved-factory-2" class="flex gap-5 align-center">
              <CustomCheck 
                :id="'unreserved-factory-2'" 
                :check="visitingInfo.visitedPlace2" 
                @onChange="(value)=>visitingInfo.visitedPlace2 = value" 
              /> 청주2공장
            </label>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4, }"
            :xl="{ span: 3 }">VIP 대우여부</col-el> 
          <col-el 
            class="start"
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <label for="unreserved-vip" class="flex gap-5 align-center"> 
              <CustomCheck
                :id="'unreserved-vip'" 
                :check="visitingInfo.isVipTreatment" 
                @onChange="(value)=>visitingInfo.isVipTreatment = value" 
              /> &nbsp; (VIP는 대기업체 임원, 정부 기관 부서장, 품질감독관 등으로서, 출입의 편의를 특별히 살펴주어야 할 고객에 한하여 지정함)
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4, }"
            :xl="{ span: 3 }">방문목적 <span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start gap-10"
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <CustomSelect
              v-model="visitingInfo.visitingPurpose"
              :data="visitedPurpose"
              :name="'청주사업장'" 
              :width="140" 
            /> 
            <label>
              <CustomInput
                v-model="visitingInfo.visitingPurposeText"
                type="text" 
                :width="400"
              />
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }"
            :xl="{ span: 3 }">출입구역</col-el>
          <col-el 
            class="start gap-10"
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <CustomSelect 
              v-model="visitingInfo.entrance"
              :name="'청주사업장'" 
              :width="140"
              :data="visitedRegion"
            />  
            <label for="unreserved-laptop" class="flex center gap-5 align-center">
              <CustomCheck 
                :id="'unreserved-laptop'" 
                :check="visitingInfo.isNotebook" 
                @onChange="(value)=>visitingInfo.isNotebook = value" 
              /> 노트북 
            </label> 
            <label>
              <CustomInput
                v-model="visitingInfo.notebookSerialNum"
                type="text" 
                :width="140" 
                :placeholder="'시리얼넘버'"
              />
            </label>
            <label for="unreserved-tablet" class="flex center gap-5 align-center">
              <CustomCheck 
                :id="'unreserved-tablet'" 
                :check="visitingInfo.isTablet" 
                @onChange="(value)=>visitingInfo.isTablet = value" 
              /> 태블릿 
            </label> 
            <label>
              <CustomInput
                v-model="visitingInfo.tabletSerialNum"
                type="text" 
                :width="140" 
                :placeholder="'SN1234-5678'"
                @onChange="(value)=>visitingInfo.tabletSerialNum = value" />
            </label>
            <label for="unreserved-external-har" class="flex center gap-5 align-center">
              <CustomCheck 
                :id="'unreserved-external-har'" 
                :check="visitingInfo.isUsb" 
                @onChange="(value)=>visitingInfo.isUsb = value" 
              /> 외장하드, USB 
            </label> 
            <label>
              <CustomInput
                v-model="visitingInfo.extraDisk"
                type="text"
                :width="140" 
                :placeholder="'234-5678'" 
                @onChange="(value)=>visitingInfo.extraDisk = value" />
            </label>
          </col-el>  
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }"
            :xl="{ span: 3 }">방문일시 <span class="required">&nbsp;*</span></col-el>
          <col-el 
            class="start gap-10 "
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <col-el class="start gap-5 p-none">
              <CustomDatePicker v-model="visitingInfo.visitingDate"
              />
              <CustomHour :onChange="(value)=>visitingInfo.visitingTime.startHH = value" />:
              <CustomMinute :onChange="(value)=>visitingInfo.visitingTime.startMM = value" />~
              <CustomHour :onChange="(value)=>visitingInfo.visitingTime.endHH = value" />:
              <CustomMinute :onChange="(value)=>visitingInfo.visitingTime.endMM = value" />
            </col-el>  
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center col-18"
            :lg="{ span: 4 }"
            :xl="{ span: 3 }">반복</col-el>
          <col-el 
            class="start gap-10"
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <el-radio-group 
              v-model="visitingInfo.repeatState" 
              class="ml-4" 
              @change="(value)=>visitingInfo.repeatState = value"
            > 
              <CustomRadio 
                :label="'없음'"
                :size="'small'" 
                :name="'없음'" 
              /> 
              <CustomRadio 
                :label="'매일'"
                :size="'small'" 
                :name="'매일'"  
              />  
              <CustomRadio 
                :label="'주간'"
                :size="'small'" 
                :name="'주간'" 
              />  
            </el-radio-group> 
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center"
            :lg="{ span: 4 }"
            :xl="{ span: 3 }">비고</col-el>
          <col-el 
            class="start gap-10"
            :lg="{ span: 20 }"
            :xl="{ span: 21 }">
            <CustomInput 
              v-model="visitingInfo.others"
              type="text"
              :placeholder="'기타 출입 사유, 물품 반입사유 기재'"
            />
          </col-el> 
        </el-row>
      </div> 
    </div>
    <div class="page-content-box">
      <p class="block-title">방문자등록</p>
      <div class="main-table">
        <el-row class="each-row">
          <col-el :span="2" class="title p-2-4 justify-center">국적 <span class="required">*</span></col-el>
          <col-el :span="5" class="title p-2-4 justify-center">업체명<span class="required">*</span></col-el>
          <col-el :span="1" class="title p-2-4 justify-center"></col-el>
          <col-el :span="2" class="title p-2-4 justify-center">이름<span class="required">*</span></col-el>
          <col-el :span="3" class="title p-2-4 justify-center">직급</col-el>
          <col-el :span="2" class="title p-2-4 justify-center">방문자연락처</col-el>
          <col-el :span="4" class="title p-2-4 justify-center">차량번호</col-el>
          <col-el :span="4" class="title p-2-4 justify-center">출입카드번호</col-el>
          <col-el :span="1" class="title p-2-4 justify-center">
            <CustomButton 
              class="primary" 
              :size="'h-24'" 
              :onClick="addRegistrationVisitor">추가</CustomButton>
          </col-el>
        </el-row>
        <el-row 
          v-for="user in registrationVisitors" 
          :key="user.id" 
          class="each-row ">
          <col-el :span="2" class="center p-2-4">
            <CustomInput v-model="user.natinality" 
            />
          </col-el>
          <col-el :span="5" class="center p-2-4">
            <CustomInput v-model="user.companyName" 
            />
          </col-el>
          <col-el :span="1" class="center p-2-4">
            <CustomButton class="secondary" :size="'h-24'">조회</CustomButton>
          </col-el>
          <col-el :span="2" class="center p-2-4">
            <CustomInput v-model="user.name" 
            />
          </col-el>
          <col-el :span="3" class="center p-2-4">
            <CustomInput v-model="user.position" 
            />
          </col-el>
          <col-el :span="2" class="center p-2-4">
            <CustomInput v-model="user.contact" 
            />
          </col-el>
          <col-el :span="4" class="center p-2-4">
            <CustomInput v-model="user.vehicle" 
            />
          </col-el>
          <col-el :span="4" class="center p-2-4">
            <CustomInput v-model="user.cardNumber" 
            />
          </col-el>
          <col-el :span="1" class="center p-2-4">
            <CustomButton 
              class="default" 
              :onClick="() => moveRegistrationVisitor(user.id)">삭제</CustomButton>
          </col-el>
        </el-row>
      </div> 
    </div>
    <div class="flex justify-center gap-10"> 
      <el-col :span="1"> 
        <CustomButton 
          class="primary font-base"
          :type="'button'" 
          :height="30" 
          :onClick="() => console.log('Send')">등록
        </CustomButton>
      </el-col> 
      <el-col :span="1"> 
        <CustomButton 
          :type="'button'"
          :height="30" 
          class="default font-base" 
          :onClick="() => console.log('reset')">취소
        </CustomButton>
      </el-col>  
    </div>
  </div> 
</template>

<script>   
// import ReferenceLookup from '../../components/dialogs/ReferenceLookup.vue'
export default { 
  name:'ApplicantVisitor',
  data() {
    return {
      visitedPlaces: [
        {
          value:'청주사업장',
          label:'청주사업장'
        },
        {
          value:'천안사업장',
          label:'천안사업장'
        },
        {
          value:'부산사업장',
          label:'부산사업장'
        },
        {
          value:'e-mobility solution',
          label:'LS e-Mobility Solutions'
        },
        {
          value:'LS메탈',
          label:'LS메탈'
        }
      ],
      visitedPurpose: [
        {
          value:'업무회의',
          label:'업무회의'
        },
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
          value:'공사',
          label:'공사'
        },
        {
          value:'제품,설비A/S',
          label:'제품,설비A/S'
        },
        {
          value:'불량선별',
          label:'불량선별'
        },
        {
          value:'자재수령',
          label:'자재수령'
        },
        {
          value:'공BOX수거',
          label:'공BOX수거'
        },
        {
          value:'폐기물수거',
          label:'폐기물수거'
        }
      ],
      visitedRegion:[
        {
          label:'사무동',
          value:'사무동'
        },
        {
          label: '제1생산동',
          value: '제1생산동'
        },
        {
          label: '제2생산동',
          value: '제2생산동'
        }, 
        {
          label:'HVDC공장',
          value:'HVDC공장'
        }
      ],
      applicantInfo: {
        name: '',
        deptName: '',
        phone: '',
        visitingRepresentative: '',
        visitingDeptName: '',
        visitingPhone: '',
        referrers: [],
      },
      visitingInfo: {
        // 방문사업장*
        visitedPlace: '',
        visitedPlace1: false,
        visitedPlace2: false,
        // VIP 대우여부
        isVipTreatment: false,
        // 방문목적
        visitingPurpose: '',
        visitingPurposeText: '',
        // 출입구역
        entrance: '',
        isNotebook: false,
        notebookSerialNum: '',
        isTablet: false,
        // 외장하드, USB
        isUsb: false,
        extraDisk: '',
        tabletSerialNum: '',
        // 방문일시
        visitingDate: '',
        visitingTime: {
          startHH: '',
          startMM: '',
          endHH: '',
          endMM: '',
        },
        // 반복
        repeatState: '없음',
        // 비고
        others: '',
      },
      selectedPlan: [],
      vip: false,
      open:false,
      repeat: '없음', 
      registrationVisitors: [
        { id: 6346322,
          natinality: '',
          companyName: '',
          name: '',
          position: '',
          contact: '',
          vehicle: '',
          cardNumber: '',
        }
      ]
    }  
  },
  components: {
     
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
    addRegistrationVisitor() {
      this.registrationVisitors.push(
        { id: Math.ceil(Math.random() * 10),
          natinality: '',
          companyName: '',
          name: '',
          position: '',
          contact: '',
          vehicle: '',
          cardNumber: ''
        }
      )
      console.log(this.registrationVisitors)
    },
    moveRegistrationVisitor(id) {
      this.registrationVisitors = this.registrationVisitors.filter(item => item.id != id)
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-page__main{ 
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-right: 10px; 
}
</style>