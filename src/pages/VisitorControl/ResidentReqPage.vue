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
      <p class="block-title"> &nbsp;</p>
      <div class="main-table">
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">상주유형<span class="required">&nbsp;*</span></col-el>
          <col-el
            class="start gap-10"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }"> 
            <label for="short-term-resident" class="flex align-center gap-10">
              <CustomCheck 
                :id="'short-term-resident'" 
                :check="visitingOverview.shortTermResident" 
                @onChange="(check)=>visitingOverview.shortTermResident = check" 
              /> 단기상주
            </label>
            <label for="long-term-resident" class="flex align-center gap-10">
              <CustomCheck 
                :id="'long-term-resident'" 
                :check="visitingOverview.longTermResident" 
                @onChange="(check)=>visitingOverview.longTermResident = check" 
              /> 장기상주
            </label>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">사업장<span class="required">&nbsp;*</span></col-el> 
          <col-el
            class="start gap-10"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <CustomSelect
              v-model="visitingOverview.businessPlace"  
              :width="160" 
              :data="visitedPlaces"  
            /> 
            <label for="resident-factory-1" class="flex gap-5 align-center">
              <CustomCheck 
                :id="'resident-factory-1'"
                :check="visitingOverview.cheongjuPlant1"
                @onChange="(check)=>visitingOverview.cheongjuPlant1 = check" /> 
              청주1공장
            </label>
            <label for="resident-factory-2" class="flex gap-5 align-center">
              <CustomCheck 
                :id="'resident-factory-2'"
                :check="visitingOverview.cheongjuPlant2"
                @onChange="(check)=>visitingOverview.cheongjuPlant2 = check" /> 
              청주2공장
            </label>
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title br center h-full"
            :height="'100% !important'"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">업체명 <span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="p-none" 
            :height="'100% !important'"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <el-row class="each-row"> 
                <col-el :span="5" class="title br center">회사명<span class="required">&nbsp;*</span></col-el>
                <col-el :span="3" class="title br center">성명<span class="required">&nbsp;*</span></col-el>
                <col-el :span="4" class="title br center">직급<span class="required">&nbsp;*</span></col-el>
                <col-el :span="4" class="title br center">담당업무 및 직책<span class="required">&nbsp;*</span></col-el>
                <col-el :span="4" class="title br center">신청사유<span class="required">&nbsp;*</span></col-el>
                <col-el :span="4" class="title  center">상주자연락처<span class="required">&nbsp;*</span></col-el> 
              </el-row> 
              <el-row class="">
                <col-el :span="5" class="br center p-2-2 gap-5"> 
                  <col-el 
                    class="p-none"
                    :lg="{ span: 18 }" 
                    :xl="{ span: 15 }"> 
                    <CustomInput v-model="visitingOverview.companyName" />
                  </col-el>
                  <col-el 
                    class="p-none"
                    :lg="{ span: 5 }" 
                    :xl="{ span: 4 }">
                    <CustomButton class="secondary" :size="'sm'">조회</CustomButton>
                  </col-el> 
                </col-el>
                <col-el :span="3" class="br center">
                  <CustomInput v-model="visitingOverview.name" />
                </col-el>
                <col-el :span="4" class="br center">
                  <CustomInput v-model="visitingOverview.level" />
                </col-el>
                <col-el :span="4" class="br center">
                  <CustomInput v-model="visitingOverview.dutiesAndPositions" />
                </col-el>
                <col-el :span="4" class="br center">
                  <CustomInput v-model="visitingOverview.reasonForApplication" />
                </col-el>
                <col-el :span="4" class="br center">
                  <CustomInput v-model="visitingOverview.residentContactInformation" />
                </col-el>
              </el-row>
            </div>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">상주기간<span class="required">&nbsp;*</span></col-el>
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class=" flex gap-5">
              <CustomDatePicker v-model="visitingOverview.periodOfResidenceStart" />
              ~
              <CustomDatePicker v-model="visitingOverview.periodOfResidenceEnd" />  
            </div>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">
            식사 유무 및 결재 담당 여부<span class="required">&nbsp;*</span>
          </col-el>
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <el-radio-group 
              v-model="visitingOverview.responsibleForPayment" 
              class="ml-4"
            > 
              <CustomRadio 
                :label="'식수제공없음'"
                :size="'small'" 
                :name="'식수제공없음'" 
              /> 
              <CustomRadio 
                :label="'상주자업체부담'"
                :size="'small'" 
                :name="'상주자업체부담'"  
              />  
              <CustomRadio 
                :label="'LS일렉트릭 신청부서부담'"
                :size="'small'" 
                :name="'LS일렉트릭 신청부서부담'" 
              />  
            </el-radio-group>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br h-full"
            :height="'100%'"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">출입차량 신청</col-el>
          <col-el 
            class="start h-full p-none"
            :height="'100%'"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <el-row class="each-row">
                <col-el :span="3" class="title center br">ID카드 신청</col-el>
                <col-el :span="4" class="title center br">영문성명</col-el>
                <col-el :span="5" class="title center br">기타</col-el>
                <col-el :span="6" class="title center br">사진</col-el>
                <col-el :span="6" class="title center ">ID카드 번호</col-el> 
              </el-row> 
              <el-row class="">
                <col-el :span="3" class="br center"> 
                  <label>
                    <CustomCheck 
                      :check="accessCard.applyForIdCard" 
                      @onChange="(check)=>accessCard.applyForIdCard = check" 
                    />
                  </label>
                </col-el>
                <col-el :span="4" class="br">
                  <CustomInput v-model="accessCard.englishStatement" />
                </col-el>
                <col-el :span="5" class="br">
                  <CustomInput v-model="accessCard.etc" />
                </col-el>
                <col-el :span="6" class="br">
                  <div>
                    <col-el class="start" :width="120"> 
                      <CustomButton 
                        class="default" 
                        :size="'md'"
                        @click="triggerFileInput"
                      >
                        파일선택
                      </CustomButton>  
                      <input
                        ref="fileInput"
                        type="file"
                        accept="image/*"
                        style="display: none"
                        class="btnImg"
                        @change="handleFileUpload"
                      />
                    </col-el>
                  </div> 
                  <div class="disable-note">  
                    <p v-if="accessCard.picture" class="description">{{ accessCard.picture }}</p>
                  </div>
                </col-el>
                <col-el :span="6" class="start gap-10">   
                  CJP  
                  <label>
                    <span class="seats">{{ accessCard.idCardNumber }}</span>
                  </label>
                  <div>
                    <col-el :width="80">
                      <CustomButton 
                        :typ="'button'" 
                        class="default">
                        <span class="disable-note">파일선택</span>
                      </CustomButton>
                    </col-el>
                  </div>
                </col-el> 
              </el-row>
            </div>
          </col-el> 
        </el-row> 
        <el-row class="each-row">
          <col-el 
            class="title center br h-full"
            :height="'100%'" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">출입차량 신청</col-el>
          <col-el 
            class="start h-full p-none"
            :height="'100%'" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <el-row class="each-row">
                <col-el :span="3" class="title center br">출입차량 등록</col-el>
                <col-el :span="4" class="title center br">차량번호<span class="required">&nbsp;*</span></col-el>
                <col-el :span="5" class="title center br">색상<span class="required">&nbsp;*</span></col-el>
                <col-el :span="6" class="title center br">차종<span class="required">&nbsp;*</span></col-el>
                <col-el :span="6" class="title center">차량분류<span class="required">&nbsp;*</span></col-el> 
              </el-row>
              <el-row class="">
                <col-el :span="3" class="br center"> 
                  <label>
                    <CustomCheck 
                      :check="applicationForEntryExistVehicle.entryExistRegistration" 
                      @onChange="(check)=>applicationForEntryExistVehicle.entryExistRegistration = check" 
                    />
                  </label>
                </col-el>
                <col-el :span="4" class="br">
                  <CustomInput v-model="applicationForEntryExistVehicle.vehicleNumber" />
                </col-el>
                <col-el :span="5" class="br">
                  <CustomInput v-model="applicationForEntryExistVehicle.color" />
                </col-el>
                <col-el :span="6" class="br">
                  <CustomInput v-model="applicationForEntryExistVehicle.vehicleType" />
                </col-el>
                <col-el
                  class=""
                  :lg="{ span: 4}"
                  :xl="{ span: 3}">
                  <CustomSelect 
                    v-model="applicationForEntryExistVehicle.classification"
                    :label="'차량 선택'" 
                    :data="classification" 
                  />
                </col-el> 
              </el-row>
            </div> 
          </col-el> 
        </el-row> 
      </div> 
    </div> 
    <div class="flex gap-15 justify-center"> 
      <el-col :span="1"> 
        <CustomButton 
          :height="30"
          :type="'button'"
          class="primary font-base" 
          @click="console.log(
            visitingOverview,
            accessCard,
            applicationForEntryExistVehicle
          )">
          등록
        </CustomButton>
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
import { visitedPlaces } from '../../constants'

  
export default { 
  name:'ResidentReqPage',
  data() {
    return {
      visitedPlaces,
      classification: ['일반차량', '전기차량'],
      vehicleClassification: [
        {
          label: '일반차량',
          value: '일반차량'
        },
        {
          label: '전기차량',
          value: '전기차량'
        }
      ],
      // input feilds values
      applicationInfo: {
        agentName: '',
        agentAffiliation: '',
        agentContact: '',
        officerName: '',
        officerAffiliation: '',
        officerContact: '',
        refrences:[]
      },  
      visitingOverview: { 
        // 상주유형
        shortTermResident: false,
        longTermResident: false, 
        // 사업장
        businessPlace: '',
        cheongjuPlant1: false,
        cheongjuPlant2: false, 
        // 업체명  -> 회사명
        companyName: '', 
        name: '', 
        level: '', 
        dutiesAndPositions: '', 
        reasonForApplication: '', 
        residentContactInformation: '',
        // 상주기간
        periodOfResidenceStart:'',
        periodOfResidenceEnd: '',
        // 식사 유무 및 결재 담당 여부
        responsibleForPayment: '식수제공없음',
      },
      // 출입카드
      accessCard: {
        applyForIdCard: false,
        englishStatement: '',
        etc: '',
        picture: '선택된 파일 없음',
        idCardNumber:'100'
      },
      applicationForEntryExistVehicle: {
        entryExistRegistration: false,
        vehicleNumber: '',
        color: '',
        vehicleType: '',
        classification: '', 
      },  
      // dialogs
      referenceLookup:false, 
      employeeDepartment:false, 
    }  
  },
  methods: { 
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => { 
          this.accessCard.picture = file.name
        }
        reader.readAsDataURL(file) 
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