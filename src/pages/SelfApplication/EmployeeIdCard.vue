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
      </div> 
    </div>  
    <div class="page-content-box">
      <p class="block-title">권한정보</p>
      <div class="main-table"> 
        <el-row class="">
          <col-el 
            class="title center br h-full"
            :height="'100%'" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">사업장<span class="required">&nbsp;*</span></col-el> 
          <el-col 
            class=""  
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <el-row class="each-row">
                <col-el :span="24" class="title center">청주사업장</col-el> 
              </el-row>
              <el-row class="each-row">
                <col-el :span="7" class="title center br">출입문그룹</col-el> 
                <col-el :span="10" class="title center br">유효기간</col-el> 
                <col-el :span="7" class="title center">권한승인담당자</col-el> 
              </el-row>
              <el-row 
                v-for="(item, index) in cheongjubusinessSite" 
                :key="index"
                class="each-row"  
              >
                <col-el :span="7" class="br center"> 
                  <label :for="`cheongju-${item.entrance}`" class="w-full flex space-between"> 
                    <p>{{ item.entrance }}</p>
                    <CustomCheck 
                      :id="`cheongju-${item.entrance}`" 
                      :check="item.active" 
                      @onChange="check => item.active = check" 
                    /> 
                  </label>
                </col-el>
                <col-el :span="10" class="start br gap-10"> 
                  <CustomDatePicker v-model="item.startDate" />
                  ~ 
                  <CustomDatePicker v-model="item.endDate" />
                </col-el>
                <col-el :span="7" class="start">
                  {{ item.officer }}
                </col-el> 
              </el-row>
              <el-row>
                <div class="w-full">
                  <el-row class="each-row">
                    <col-el :span="24" class="title center ">천안사업장</col-el> 
                  </el-row>
                  <el-row class="each-row">
                    <col-el :span="7" class="title center br">출입문그룹</col-el> 
                    <col-el :span="10" class="title center br">유효기간</col-el> 
                    <col-el :span="7" class="title center">권한승인담당자</col-el> 
                  </el-row> 
                  <el-row
                    v-for="(item, index) in cheongnanbusinessSite" 
                    :key="index"
                    class="each-row">
                    <col-el :span="7" class="br center">  
                      <label :for="`cheongnan-${item.entrance}`" class="w-full flex space-between">
                        {{ item.entrance }}
                        <CustomCheck 
                          :id="`cheongnan-${item.entrance}`" 
                          :check="item.active" 
                          @onChange="check => item.active = check" 
                        />
                      </label> 
                    </col-el>
                    <col-el :span="10" class="start br gap-10"> 
                      <CustomDatePicker v-model="item.startDate" />
                      ~ 
                      <CustomDatePicker v-model="item.endDate" />
                    </col-el>
                    <col-el :span="7" class="start">
                      {{ item.officer }}
                    </col-el> 
                  </el-row> 
                </div> 
              </el-row>
            </div> 
          </el-col>  
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br h-full" 
            :height="'100%'"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">영문성명<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start h-full" 
            :height="'100%'"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <CustomTextArea 
                v-model="englishStatement"
                :placeholder="'메시지를 적어주세요'" 
                @onChange="(value) => englishStatement = value" />  
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
          @click="console.log('send')">등록</CustomButton>
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
export default { 
  name:'EmployeeIdCard',
  data() {
    return {  
      cheongjubusinessSite: [
        { 
          name:"basic", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '기본', 
          officer: '청주)지원혁신팀 한희진' },
        { 
          name:"design", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '1사업장설계', 
          officer: '청주)전력설계실(기획Part) 문경주' },
        { 
          name:"drawingRoom", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '도면실', 
          officer: '청주)전력설계실(기획Part) 권오식' },
        { 
          name:"research", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '연구소', 
          officer: 'CTO)기술경영팀(연구전략Part) 이유정' },
        { 
          name:"testCenter", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '시험센터', 
          officer: '전력시험)시험운영Part 성보경' },
        { 
          name:"highPresure", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '고압 시작실', 
          officer: '청주)LMV솔루션팀 김학민' },
        { 
          name:"smartDevice", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '1사업장 스마트기기 시험반', 
          officer: '전력시험)QA Part 김준하' },
        { 
          name:"ptRoom", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: 'PT&T발전기실', 
          officer: '전력시험)시험운영Part 성보경' },
        { 
          name:"complexLab", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '복합환경시험실', 
          officer: '전력시험)시험운영Part 성보경' },
        { 
          name:"famStation", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: 'FEMS Station', 
          officer: '청주)지원혁신팀 엄경수' },
        { 
          name:"busanSite", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '부산사업장', 
          officer: '부산)지원혁신Part 이정흥' },
        { 
          name:"preparationLab", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: 'PT&T 시료준비실', 
          officer: '전력시험)시험운영Part 성보경' },
        { 
          name:"electrikArea", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '1사업장 전기반', 
          officer: '안전환경)환경안전팀 박재훈' },
        { 
          name:"southernDevision", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '전력남부사업부(부산)', 
          officer: '부산)지원혁신Part 이정흥' },
        { 
          name:"basicTrainCenter", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '기본(연수원)', 
          officer: '청주)지원혁신팀 엄경수' },
        { 
          name:"metalBulan", 
          active:false, 
          startDate:'', 
          endDate:'', 
          entrance: '메탈(부산)', 
          officer: '부산)지원혁신Part 이정흥' }
      ], 
      englishStatement: '', 
      cheongnanbusinessSite: [
        { 
          name: "basic", 
          active: false, 
          startDate:'', 
          endDate:'', 
          entrance: '기본', 
          officer: '천안)지원혁신팀 임채균' 
        },
        { 
          name: "automation", 
          active: false, 
          startDate:'', 
          endDate:'', 
          entrance: '사무동2층 자동화연구소', 
          officer: '천안)지원혁신팀 임채균' 
        },
        { 
          name: "aFloorRoom", 
          active: false, 
          startDate:'', 
          endDate:'', 
          entrance: 'A동 2층 신뢰성 시험실', 
          officer: '천안)지원혁신팀 임채균' 
        },
        { 
          name: "bFloorRoom", 
          active: false, 
          startDate:'', 
          endDate:'', 
          entrance: 'B동 1층 전력용반도체현장', 
          officer: '천안)지원혁신팀 임채균' 
        }
      ],
      applicationInfo: {
        agentName: '관리자1',
        agentAffiliation: '청주2)변압기생산팀',
        agentContact: '',
        officerName: '관리자1',
        officerAffiliation: '청주2)변압기생산팀	',
        officerContact: '',  
      },
      businessSite: {
        entranceGroup: [],
        expirationPeriod:[]
      }, 
      employeeDepartment:false
    }  
  },
  methods: { 
  },
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