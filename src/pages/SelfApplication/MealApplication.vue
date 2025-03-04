<template>
  <div class="apply-page__main">
    <div class="page-content-box">
      <p class="block-title">신청자정보</p>
      <div class="main-table">
        <el-row class="each-row">
          <col-el 
            class="title center br" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">신청자</col-el>
          <col-el 
            class="start gap-10 br"
            :lg="{ span: 6 }" 
            :xl="{ span: 5 }">
            <label>
              <CustomInput v-model="applicationInfo.proposer" :width="200" />
            </label>
            <label>
              <col-el class="start p-none" :width="50">
                <CustomButton 
                  class="secondary" 
                  @click="addPeople">조회</CustomButton>   
              </col-el> 
            </label> 
          </col-el>
          <col-el 
            class="title center br"
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">신청일자<span class="required">&nbsp;*</span></col-el>
          <col-el :span="10">
            <CustomDatePicker v-model="applicationInfo.applicationDate" /> 
          </col-el>
        </el-row>
        <el-row class="each-row">
          <col-el 
            class="title center br h-full"
            :height="'100%'" 
            :lg="{ span: 4 }" 
            :xl="{ span: 3 }">식 수</col-el>
          <col-el 
            class="start p-none h-full"
            :height="'100%'" 
            :lg="{ span: 20 }" 
            :xl="{ span: 21 }">
            <div class="w-full">
              <el-row class="each-row"> 
                <col-el class="gap-15">
                  <label for="meal-application-short-term-resident" class="flex align-center gap-10">
                    <CustomCheck 
                      :id="'meal-application-short-term-resident'" 
                      :check="applicationInfo.shortTermResidence" 
                      @onChange="check => applicationInfo.shortTermResidence = check" 
                    /> 단기상주
                  </label>
                  <label for="meal-application-short-long-resident" class="flex align-center gap-10">
                    <CustomCheck 
                      :id="'meal-application-short-long-resident'" 
                      :check="applicationInfo.longTermResidence" 
                      @onChange="check => applicationInfo.longTermResidence = check" 
                    /> 장기상주
                  </label>
                </col-el>
              </el-row>
              <el-row class="">
                <col-el
                  class="br center"
                  :lg="{ span: 3 }" 
                  :xl="{ span: 2 }"> 
                  2명 이상
                </col-el>
                <col-el :span="20" class="flex gap-10 align-center"> 
                  <tag-el
                    v-for="tag in applicationInfo.selectedPeople"
                    :key="tag"
                    closable
                    :disable-transitions="false"
                    @close="handleReferrerClose(tag)"
                  >
                    {{ tag }}
                  </tag-el> 
                </col-el> 
              </el-row>
            </div> 
          </col-el>
        </el-row> 
      </div> 
    </div> 
    <p class="description">※ 식수 신청은 식사 제공을 위한 것이 아니라 식사 준비를 위한 것입니다.</p>
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
import TagEl from '../../components/TagEl.vue' 
export default { 
  name:'ResidentReqPage',
  data() {
    return {
      applicationInfo: {
        proposer: '',
        applicationDate: '',
        // 식 수
        shortTermResidence: false,
        longTermResidence: false,
        selectedPeople:[]
      }, 
      selectedPlan: [],
      vip: false,
      repeate: '없음',
      foodAcception:'식수제공없음', 
    }  
  },
  components: { 
    TagEl,
  },
  methods: {
    addPeople() {
      if (this.applicationInfo.proposer) { 
        this.applicationInfo.selectedPeople.push(this.applicationInfo.proposer)
      }
    },
    handleReferrerClose(tag) {
      this.applicationInfo.selectedPeople = this.applicationInfo.selectedPeople.filter(people => people != tag) 
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