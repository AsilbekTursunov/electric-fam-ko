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
            :xl="{ span: 3 }">{{ applicationInfo.officerName }}
          </col-el>
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
      <p class="block-title">발급대상자 정보</p>
      <div class="main-table"> 
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">사업장<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start gap-15" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }"> 
            <CustomSelect 
              v-model="partisipationInfo.workPlace"
              :data="visitedPlaces"
              :width="160" 
            /> 
            <label for="entry-permission-factory-1" class="flex align-center gap-10">
              <CustomCheck 
                :id="'entry-permission-factory-1'" 
                :check="partisipationInfo.cheongjuFactoryOne" 
                @onChange="check => partisipationInfo.cheongjuFactoryOne = check" 
              /> 청주1공장
            </label> 
            <label for="entry-permission-factory-2" class="flex align-center gap-10">
              <CustomCheck 
                :id="'entry-permission-factory-2'" 
                :check="partisipationInfo.cheongjuPlantTwo" 
                @onChange="check => partisipationInfo.cheongjuPlantTwo = check" 
              /> 청주2공장
            </label> 
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">영문성명<span class="required">&nbsp;*</span></col-el> 
          <col-el 
            class="start" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomInput v-model="partisipationInfo.englishStatement" :width="200" />
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
            <CustomSelect
              v-model="partisipationInfo.applicantion" 
              :width="140"
              :data="reasons" 
            />
          </col-el>
        </el-row> 
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">기타</col-el> 
          <col-el 
            class="start" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div>
              <CustomInput v-model="partisipationInfo.etc" :width="500" />
            </div>
          </col-el>
        </el-row>
        <el-row class="each-row"> 
          <col-el 
            class="title center br h-full"
            :height="'100%'" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">사진</col-el> 
          <col-el 
            class="start h-full" 
            :height="'100%'"
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="flex gap-15 align-center w-full"> 
              <img
                :src="partisipationInfo.picture || defaultImage"
                style="width:50px; height:50px; object-fit: contain;"
                alt="user imag"
                class="uploaded-image btnImg"
              />  
              <div>
                <col-el class="start" :width="120"> 
                  <CustomButton 
                    class="default" 
                    :size="'md'"
                    @click="triggerFileInput"
                  >
                    사진파일 선택
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
              <p v-if="fileName" class="description">{{ fileName }}</p>
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
          @click="console.log('send')" 
        >등록</CustomButton>
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
  name:'EntryPermission',
  data() {
    return {
      imageUrl: '',
      fileName: '선택된 파일 없음',
      defaultImage: '/images/user_imag.jpg', // Default image
      applicationInfo: {
        agentName: '관리자1',
        agentAffiliation: '청주2)변압기생산팀',
        agentContact: '',
        officerName: '관리자1',
        officerAffiliation: '청주2)변압기생산팀	',
        officerContact: '',  
      },
      partisipationInfo: {
        workPlace: '',
        cheongjuFactoryOne: false,
        cheongjuPlantTwo: false,
        englishStatement: '',
        applicantion:'',
        etc: '',
        picture: '', 
      },
      visitedPlaces,
      reasons: ['신규', '분실', '훼손'],  
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
    constant(event, name) {
      console.log(this.form.applicant[name] = event)
    },
    toggleRegistrationVisitor(id) {
      if (id && this.registrationVisitors.includes(item => item.id == id)) {
        this.registrationVisitors = this.registrationVisitors.filter(item => item.id != id)
      } else { 
        this.registrationVisitors.push(
          { id: Math.ceil(Math.random()),
            nationality: '',
            companyName: '',
            name: '',
            position: '',
            contact: '',
            vehicle: '',
            cardNumber: ''
          }
        )
      }
    },
 
    
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.partisipationInfo.picture = e.target.result
          this.fileName = file.name
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