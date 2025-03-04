<template>
  <div class="visit-req-page"> 
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
            방문대상자 
            <span class="required">&nbsp;*</span> 
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
            :xl="{ span: 4 }">{{ applicationInfo.officerAffiliation}}</col-el>
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
      <p class="block-title">방문 개요</p>
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
              v-model="visitingOverview.visitedPlace"  
              :width="160" 
              :data="visitedPlaces"  
            /> 
            <label for="factory-1" class="flex gap-5 justify-center">
              <CustomCheck 
                :id="'factory-1'" 
                :check="visitingOverview.factoryOne" 
                @onChange="(value)=>visitingOverview.factoryOne = value" 
              /> 청주1공장
            </label>
            <label for="factory-2" class="flex gap-5 justify-center">
              <CustomCheck 
                :id="'factory-2'" 
                :check="visitingOverview.factoryTwo" 
                @onChange="()=>visitingOverview.factoryTwo = value" 
              /> 청주2공장
            </label>
          </col-el> 
        </el-row>
        <el-row class="each-row"> 
          <col-el 
            class="title center br"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">업체명/단체명<span class="required">&nbsp;*</span></col-el>
          <col-el 
            class="start gap-15"
            :lg="{ span: 20, }" 
            :xl="{ span: 21 }">
            <label>
              <CustomInput 
                v-model="visitingOverview.companyName" 
                :width="160" /> 
            </label>
            <label>
              <col-el class="start p-none" :width="50">
                <CustomButton class="secondary" :size="'sm'">조회</CustomButton>   
              </col-el> 
            </label>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">방문목적<span class="required">&nbsp;*</span></col-el>
          <col-el
            class="start"
            :lg="{ span: 12, }" 
            :xl="{ span: 10 }">
            <CustomInput 
              v-model="visitingOverview.purposefromVisit" 
              :width="160" 
            /> 
          </col-el> 
        </el-row> 
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">유사업종 및 경쟁사 여부</col-el>
          <col-el
            class="start"
            :lg="{ span: 20, }" 
            :xl="{ span: 21 }">
            <el-radio-group 
              v-model="visitingOverview.similarBusiness" 
              class="ml-4" 
            > 
              <CustomRadio 
                :label="'YES'"
                :size="'small'" 
                :name="'YES'" 
              /> 
              <CustomRadio 
                :label="'NO'"
                :size="'small'" 
                :name="'NO'"  
              />   
            </el-radio-group>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">방문 일시/기간<span class="required">&nbsp;*</span></col-el>
          <col-el
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">  
            <col-el class="start gap-10 p-none">
              <div class="flex gap-5 align-center">
                <CustomDatePicker v-model="visitingOverview.startDate" />
                <CustomHour :onChange="(value) => visitingOverview.startTime = value" />:
                <CustomMinute :onChange="(value) => visitingOverview.startMinute = value" />
              </div>
              ~ 
              <div class="flex gap-5 align-center">
                <CustomDatePicker v-model="visitingOverview.endDate" />
                <CustomHour :onChange="(value) => visitingOverview.endTime = value" />:
                <CustomMinute :onChange="(value) => visitingOverview.endMinute = value" />
              </div>
            </col-el>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">방문자 규모</col-el>
          <col-el 
            class="start"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <label class="flex gap-5 align-center">
              <CustomInput v-model="visitingOverview.visitorVolume" :width="100" />
              <span class="input-label">명</span>
            </label>
          </col-el> 
        </el-row> 
        <el-row class="each-row">
          <col-el
            class="title br center"
            :lg="{ span: 4, }" 
            :xl="{ span: 3 }">의전 레벨</col-el>
          <col-el 
            class="start gap-10" 
            :lg="{ span: 20, }" 
            :xl="{ span: 21 }">
            <label for="vip-visit" class="flex gap-10 align-center text-nowrap">
              <CustomCheck 
                :id="'vip-visit'" 
                :check="visitingOverview.vipVisit" 
                @onChange="(check)=>visitingOverview.vipVisit = check" 
              /> VIP 방문  
              <span class="text-tab-center text-nowrap">
                &lpar;고위 공무원, 사회단체장, 주요 바이어, 임원급 이상 등&rpar;
              </span>
            </label>
            <label for="general-visitors" class="flex gap-10 align-center text-nowrap">
              <CustomCheck 
                :id="'general-visitors'" 
                :check="visitingOverview.generalVisit" 
                @onChange="(check) => visitingOverview.generalVisit = check" 
              /> 일반 방문객 
              <span class="text-tab-center text-nowrap">
                &lpar;공무원, 바이어 등&rpar;
              </span>
            </label>
            <label for="tourist" class="flex gap-10 align-center text-nowrap">
              <CustomCheck 
                :id="'tourist'" 
                :check="visitingOverview.visitorsFieldTrip" 
                @onChange="(check) => visitingOverview.visitorsFieldTrip = check" 
              /> 견학 방문객 
              <span class="text-tab-center text-nowrap">
                &lpar;LS그룹 신입사원, 기업체 산업시찰단 등&rpar;
              </span>
            </label>
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el
            class="title br center h-full"
            :height="'100%'"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">안내 계획  </col-el> 
          <col-el 
            class="start d-block p-none" 
            :height="'100% !important'"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <el-row class="each-row">
              <div class="flex gap-10 align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="line-tour" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'line-tour'" 
                      :check="guidePlan.lineTourActive" 
                      @onChange="(check)=>guidePlan.lineTourActive = check" 
                    /> 라인투어
                  </label>
                </col-el>
              </div> 
              <div class="flex gap-10 align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none">
                    <label>투어일시/인솔자 :</label>
                    <div class="flex gap-5 align-center">
                      <CustomDatePicker v-model="guidePlan.lineTourStartDate" />
                      <CustomHour :onChange="(value)=> guidePlan.lineTourStartTime = value" />
                      <CustomMinute :onChange="(value)=> guidePlan.lineTourStartMinute = value" />
                    </div> 
                    /
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="guidePlan.lineTourGuide" :width="120" />
                    </div>
                  </col-el>
                </col-el>
              </div> 
              
            </el-row>
            <el-row class="each-row">
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="introduction-video" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'introduction-video'" 
                      :check="guidePlan.businessIntroVideoActive" 
                      @onChange="(check) => guidePlan.businessIntroVideoActive = check" 
                    /> 사업장 소개 영상
                  </label>
                </col-el> 
              </div>
              <div class="flex align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none">
                    <label>이용장소/사용언어 :</label>
                    <div>
                      <CustomInput v-model="guidePlan.businessIntroVideoPlaceOfUse" :width="200" />
                    </div> 
                    /
                    <div>
                      <CustomInput v-model="guidePlan.businessIntroVideoLanguageOfUse" :width="120" />
                    </div>
                  </col-el>
                </col-el> 
              </div> 
            </el-row>
            <el-row>
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="etc" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'etc'" 
                      :check="guidePlan.etcActive" 
                      @onChange="(check)=>guidePlan.etcActive = check" 
                    />기타
                  </label>
                </col-el> 
              </div>
              <div class="flex gap-10 align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class=" p-none"> 
                    <div>
                      <CustomInput v-model="guidePlan.etcValue" :width="600" />
                    </div>  
                  </col-el>
                </col-el>
              </div>
            </el-row> 
          </col-el> 
        </el-row>
        <el-row class="each-row">
          <col-el
            class="title br center h-full"
            :height="'100%'"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">지원 요청 사항 </col-el> 
          <el-col 
            class="start d-block p-none" 
            :height="'100% !important'" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <el-row class="each-row">
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="vehicle-support" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'vehicle-support'" 
                      :check="supportRequest.vehicleSupportActive" 
                      @onChange="(check)=>supportRequest.vehicleSupportActive = check" 
                    /> 차량 지원
                  </label>
                </col-el> 
              </div>
              <div class="flex  align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none">
                    <label>이용일시/인원(명) :</label>
                    <div class="flex gap-5 align-center">
                      <CustomDatePicker v-model="supportRequest.vehicleSupportDate" />
                      <CustomHour :onChange="(value)=> supportRequest.vehicleSupportStartTime = value" />
                      <CustomMinute :onChange="(value)=> supportRequest.vehicleSupportStartMinute = value" />
                    </div> 
                    /
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="supportRequest.vehicleSupportPeopleCount" :width="80" /> 명
                    </div>
                  </col-el>
                </col-el> 
              </div>
            </el-row>
            <el-row class="each-row">
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="shooting-approval" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'shooting-approval'" 
                      :check="supportRequest.filmingApprovalActive" 
                      @onChange="(check) => supportRequest.filmingApprovalActive = check" 
                    /> 촬영승인
                  </label>
                </col-el> 
              </div>
              <div class="flex align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none">
                    <label>촬영목적 :</label>
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="supportRequest.filmingApprovalPurpose" :width="350" />
                    </div> 
                    <label>촬영자 규모(명) :</label>
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="supportRequest.filmingApprovalPhotographers" :width="80" /> 명
                    </div>
                  </col-el>
                </col-el> 
              </div>
            </el-row>
            <el-row class="each-row">
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="refreshment" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'refreshment'" 
                      :check="supportRequest.refreshmentActive" 
                      @onChange="(check) => supportRequest.refreshmentActive = check" 
                    /> 다과 제공
                  </label>
                </col-el> 
              </div>
              <div class="flex align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none">
                    <label>비치 장소/이용인원(명) :</label>
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="supportRequest.refreshmentBeachLocation" :width="250" />
                    </div> 
                    <label>/</label>
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="supportRequest.refreshmentNumberOfUsers" :width="80" /> 명
                    </div>
                  </col-el>
                </col-el> 
              </div>
            </el-row> 
            <el-row class="each-row">
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="vip-restaurant-use" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'vip-restaurant-use'" 
                      :check="supportRequest.vipRestaurantAccessActive" 
                      @onChange="(check) => supportRequest.vipRestaurantAccessActive = check" 
                    /> VIP 식당 이용
                  </label>
                </col-el> 
              </div>
              <div class="flex align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none">
                    <label>식사시간/이용인원(명) :</label>
                    <div class="flex gap-5 align-center">
                      <CustomHour @onChange="(value) => supportRequest.vipRestaurantAccessStartTime = value" />:
                      <CustomMinute @onChange="(value) => supportRequest.vipRestaurantAccessStartMinute = value" />
                    </div> 
                    <label>/</label>
                    <div class="flex gap-5 align-center">
                      <CustomInput v-model="supportRequest.vipRestaurantAccessNumberOfUsers" :width="80" /> 명
                    </div>
                    <label><span class="required">※</span> 식수관리시스템에 사전 별도 신청 요망</label>
                  </col-el>
                </col-el> 
              </div>
            </el-row> 
            <el-row class="each-row">
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="welcome-board-post" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'welcome-board-post'" 
                      :check="supportRequest.welcomeBoardPostingActive" 
                      @onChange="(check)=>supportRequest.welcomeBoardPostingActive = check" 
                    /> 웰컴보드 게시
                  </label>
                </col-el> 
              </div>
              <div class="flex align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none"> 
                    <div>
                      <CustomInput 
                        v-model="supportRequest.welcomeBoardPostingValue"
                        :width="600" 
                        :placeholder="'기타 준비시 고려사항 기재'" /> 
                    </div> 
                  </col-el>
                </col-el> 
              </div>
            </el-row> 
            <el-row>
              <div class="flex align-center justify-start">
                <col-el class="br start" :width="180">
                  <label for="last-etc" class="flex gap-10 align-center">
                    <CustomCheck 
                      :id="'last-etc'" 
                      :check="supportRequest.etcActive" 
                      @onChange="(check)=>supportRequest.etcActive = check" 
                    /> 기타
                  </label>
                </col-el>
              </div> 
              <div class="flex align-center justify-start">
                <col-el class=" start gap-5">
                  <col-el class="start gap-10 p-none"> 
                    <div>
                      <CustomInput v-model="supportRequest.etcValue" :width="600" /> 
                    </div> 
                  </col-el>
                </col-el> 
              </div>
            </el-row> 
          </el-col> 
        </el-row>
      </div> 
    </div>

    <div class="page-content-box">
      <p class="block-title">방문자등록</p>
      <div class="main-table">
        <el-row class="each-row">
          <col-el :span="2" class="title p-2-4 justify-center">국적 <span class="required">*</span></col-el>
          <col-el :span="3" class="title p-2-4 justify-center">업체명<span class="required">*</span></col-el>
          <col-el :span="2" class="title p-2-4 justify-center">이름<span class="required">*</span></col-el>
          <col-el :span="2" class="title p-2-4 justify-center">직급<span class="required">*</span></col-el>
          <col-el :span="3" class="title p-2-4 justify-center">방문자연락처</col-el>
          <col-el :span="2" class="title p-2-4 justify-center">입문시간</col-el>
          <col-el :span="2" class="title p-2-4 justify-center">출문시간</col-el>
          <col-el :span="3" class="title p-2-4 justify-center">차량번호</col-el>
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
            <CustomInput v-model="user.nationality" />
          </col-el>
          <col-el :span="3" class="center p-2-4">
            <CustomInput v-model="user.companyName" />
          </col-el>
          <col-el :span="2" class="center p-2-4">
            <CustomInput v-model="user.name" />
          </col-el>
          <col-el :span="2" class="center p-2-4">
            <CustomInput v-model="user.rank" />
          </col-el>
          <col-el :span="3" class="center p-2-4">
            <CustomInput v-model="user.visitorContact" />
          </col-el>
          <col-el :span="2" class="center p-2-4">
            <CustomTimePicker v-model="user.introductoryTime" :placeholder="'hh:mm:ss'" />
          </col-el>
          <col-el :span="2" class="center p-2-4">
            <CustomTimePicker v-model="user.departureTime" :placeholder="'hh:mm:ss'" />
          </col-el>
          <col-el :span="3" class="center p-2-4">
            <CustomInput v-model="user.vehicle" />
          </col-el>
          <col-el :span="4" class="center p-2-4">
            <CustomInput v-model="user.cardNumber" />
          </col-el>
          <col-el :span="1" class="center p-2-4">
            <CustomButton 
              class="default" 
              :onClick="() => moveRegistrationVisitor(user.visitorId)">삭제</CustomButton>
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
          class="default font-base" 
          :type="'button'"
          :height="30" 
          :onClick="() => console.log('reset')">취소
        </CustomButton>
      </el-col>  
    </div>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
import { visitedPlaces } from '../../constants'
export default {
  name: 'VisitRequestPage',
  data() {
    return {
      uuid: uuid,
      visitedPlaces,
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
      // input feilds values
      // 신청자정보
      applicationInfo: {
        agentName: '',
        agentAffiliation: '',
        agentContact: '',
        officerName: '',
        officerAffiliation: '',
        officerContact: '',
      },
      // 방문 개요
      visitingOverview: {
        // 방문사업장
        visitedPlace: '',
        factoryOne: false,
        factoryTwo: false, 
        // 업체명/단체명
        companyName: '', 
        // 방문목적
        purposefromVisit: '',
        similarBusiness: 'YES',
        // 방문 일시/기간
        startDate: '',
        startTime: '',
        startMinute: '',
        endDate: '',
        endTime: '',
        endMinute: '', 
        // 방문자 규모
        visitorVolume: '',
        // 의전 레벨 
        vipVisit: false,
        generalVisit: false,
        visitorsFieldTrip: false, 
      },
      // 방문 개요 -> 안내 계획
      guidePlan: {
        // 안내 계획 -> 라인투어 
        lineTourActive: false,
        lineTourStartDate: '',
        lineTourStartTime: '',
        lineTourStartMinute: '',
        lineTourGuide:'',
        // 의전 레벨 -> 사업장 소개 영상
        businessIntroVideoActive: false,
        businessIntroVideoPlaceOfUse: '',
        businessIntroVideoLanguageOfUse: '', 
        // 의전 레벨 -> 기타
        etcActive: false,
        etcValue: '', 
      }, 
      // 방문 개요 -> 지원 요청 사항
      supportRequest: {
        // 지원 요청 사항 -> 차량 지원
        vehicleSupportActive: false,
        vehicleSupportDate: '',
        vehicleSupportStartTime: '',
        vehicleSupportStartMinute: '',
        vehicleSupportPeopleCount: '',
        // 지원 요청 사항 -> 촬영승인
        filmingApprovalActive: false,
        filmingApprovalPurpose: '',
        filmingApprovalPhotographers:'',  
        // 지원 요청 사항 -> 다과 제공
        refreshmentActive: false,
        refreshmentBeachLocation: '',
        refreshmentNumberOfUsers: '', 
        // 지원 요청 사항 -> VIP 식당 이용
        vipRestaurantAccessActive: false,
        vipRestaurantAccessStartTime:'',
        vipRestaurantAccessStartMinute:'',
        vipRestaurantAccessNumberOfUsers: '', 
        // 지원 요청 사항 -> 웰컴보드 게시
        welcomeBoardPostingActive: false,
        welcomeBoardPostingValue: '',
        // 지원 요청 사항 -> 기타
        etcActive: false,
        etcValue: '', 
      },
      employeeDepartment:false,
      registrationVisitors: []
    }  
  },
  methods: {  
    addRegistrationVisitor() { 
      this.registrationVisitors.push(
        { visitorId: this.uuid.v4(),
          nationality: '',
          companyName: '',
          name: '',
          rank: '',
          visitorContact: '',
          introductoryTime: '',
          departureTime: '',
          vehicle: '',
          cardNumber: '', 
        }
      )
    }, 
    moveRegistrationVisitor(id) {
      this.registrationVisitors = this.registrationVisitors.filter(item => item.visitorId != id)
    } 
  } 
}
</script>

<style lang="scss" scoped>
.visit-req-page{ 
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding-right: 10px; 
  padding-bottom: 20px; 
}
</style>