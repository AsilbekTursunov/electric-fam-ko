<template>
  <div class="apply-page__main"> 
    <div class="apply-page_content">
      <p class="block-title">개인정보관리 <span class="primary-color">5</span> 건</p>
      <div class="content-wrapper">
        <div class="grid-row">
          <div class="wrapper-l">
            <div class="content_box">
              <div class="content_box_header">
                <ImageWrapper src="icon1_visitor_gray" medium /> <span class="name">사업장/직급</span>
              </div>
              <div class="content_box_info">
                <div class="content_box_info_details">
                  <div class="content_box_info_details_item">
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">사업장명</el-col>
                      <el-col :span="18">{{ personalInfo?.establishmentName }}</el-col>
                    </el-row>
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">부서</el-col>
                      <el-col :span="18">{{ personalInfo?.deptName }}</el-col>
                    </el-row>
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">직급</el-col>
                      <el-col :span="18">{{ personalInfo?.jobtitleName }}</el-col>
                    </el-row>
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">최근접속일</el-col>
                      <el-col :span="18">{{ personalInfo?.lastLoginDate }}</el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_box">
              <div class="content_box_header">
                <ImageWrapper src="icon9_card_gray" medium /> <span class="name">ID카드</span>
              </div>
              <div class="content_box_info"> 
                <div class="content_box_info_details">
                  <div class="content_box_info_details_item">
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">발급여부</el-col>
                      <el-col :span="18">발급됨</el-col>
                    </el-row>
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">외부인식번호</el-col>
                      <el-col :span="18">XJ011326</el-col>
                    </el-row>
                    <el-row class="item-row">
                      <el-col :span="1"> 
                        <ImageWrapper :src="'arrow-r'" />
                      </el-col>
                      <el-col :span="5" class="item-row-name">발급일</el-col>
                      <el-col :span="18">2010.01.15 09:00</el-col>
                    </el-row> 
                  </div>
                </div>
              </div>
            </div> 
          </div> 
          <div class="content_box">
            <div class="content_box_header">
              <ImageWrapper src="account-box-fill_gray" medium /> <span class="name">개인정보수정</span>
            </div>
            <div class="content_box_info">
              <div class="content_box_info_details">
                <div class="content_box_info_details_item">
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">이름</el-col>
                    <el-col :span="18">{{ personalInfo.userName }}</el-col>
                  </el-row>
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">영문이름</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.userNameE" />
                    </el-col>
                  </el-row>
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">영문이니셜</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.userNameE2" />
                    </el-col>
                  </el-row> 
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">이메일</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.eMail" />
                    </el-col>
                  </el-row> 
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">내선번호</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.offNum" />
                    </el-col>
                  </el-row> 
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">핸드폰번호</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.hpNum" />
                    </el-col>
                  </el-row> 
                </div>
              </div>
              <div class="content_accept">
                <el-col :span="5">
                  <CustomButton 
                    class="primary font-base" 
                    :height="30"
                    @click="handleEditUserInfo">정보수정</CustomButton>
                </el-col>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-row">
          <div class="content_box">
            <div class="content_box_header">
              <ImageWrapper src="icon5_people+car_gray" medium /> <span class="name">차량등록현황</span>
            </div>
            <div class="content_box_info">
              <div class="content_box_info_details">
                <div class="content_box_info_details_item">
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">발급여부</el-col>
                    <el-col :span="18">발급됨</el-col>
                  </el-row>
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">차량번호</el-col>
                    <el-col :span="18"></el-col>
                  </el-row>
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">차종</el-col>
                    <el-col :span="18"></el-col>
                  </el-row> 
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">색상</el-col>
                    <el-col :span="18"></el-col>
                  </el-row> 
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">차량분류</el-col>
                    <el-col :span="18"></el-col>
                  </el-row> 
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">등록일</el-col>
                    <el-col :span="18"></el-col>
                  </el-row> 
                </div>
              </div>
            </div>
          </div>
          <div class="content_box">
            <div class="content_box_header">
              <ImageWrapper src="account-box-fill_gray" medium /> <span class="name">비밀번호변경</span>
            </div>
            <div class="content_box_info">
              <div class="content_box_info_details">
                <div class="content_box_info_details_item">
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">현재비밀번호</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.userPassword" type="password" />
                    </el-col>
                  </el-row>
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">새비밀번호</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.userNewPassword" type="password" />
                    </el-col>
                  </el-row>
                  <el-row class="item-row">
                    <el-col :span="1"> 
                      <ImageWrapper :src="'arrow-r'" />
                    </el-col>
                    <el-col :span="5" class="item-row-name">새비밀번호 확인</el-col>
                    <el-col :span="10">
                      <CustomInput v-model="personalInfo.userCheckPassword" type="password" />
                    </el-col>
                  </el-row> 
                </div>
              </div>
              <div class="content_accept">
                <el-col :span="5">
                  <CustomButton 
                    class="primary font-base" 
                    :height="30"
                    :onClick="updateUserInfo">비밀번호 변경하기</CustomButton>
                </el-col>
              </div>
            </div>
          </div>
        </div>    
      </div> 
    </div>  
  </div> 
</template>

<script>    
import queryService from "@/api/queries/queryService.js"
import { ElMessageBox } from "element-plus"
export default { 
  name:'PersonalManagement',
  data() {
    return {
      personalInfo: {
        userName: '',
        userNameE: '',
        userNameE2: '',
        eMail: '',
        offNum: '',
        hpNum: '',
        userPassword: '',
        userNewPassword: '',
        userCheckPassword: ''
      }, 
    }  
  },
  async created(){
    await this.fetchUserInfo()
  },
  methods: {
    async fetchUserInfo(){
      const res = await queryService.getUser('admin1')
      console.log(res)
      if (res) { 
        this.personalInfo = res?.data?.userIfo  
      }
    },
     
    async handleEditUserInfo()
    {
      await queryService.updateUser('admin1', this.personalInfo)
      this.handleAlert('정보 변경되었습니다.', '성공')
    },
    handleAlert(message, title) {
      ElMessageBox.alert(message, title, {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: '확인',
      })
    },
    updateUserInfo() {
      console.log(this.personalInfo, this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-page__main{  
  height: 100%; 
  background-color: white;
  overflow-y: auto;
  padding-right: 10px;
  .primary-color {
    color: #00A1C0;
  }   
  .apply-page_content{
    margin-top: 12px;
    margin-bottom: 20px;
    .content-wrapper{ 
      background-color: #F6F6FC;
      padding: 10px;
      border-radius: 5px;
      display: grid;
      grid-template-columns: repeat(1, 1fr); 
      gap: 20px; 
      .grid-row{
        display: grid;
        grid-template-columns: 1fr 1.2fr; 
        gap: 20px;
      }
      .wrapper-l{
        display: grid;
        grid-template-rows: repeat(2, minmax(100px)); 
        gap: 20px;
      }
      .content_box {
        border-radius: 10px; 
        box-sizing: border-box;
        border: 1px solid rgb(230, 230, 233); 
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
        background: rgb(255, 255, 255); 
        &_header{
          padding: 8px;
          display: flex; 
          align-items: center; 
          justify-content: start; 
          gap: 10px;
          .name { 
            font-size: 15px; 
            color: #000;
            font-family: $font-bold
          } 
          border-bottom: 1px solid rgb(230, 230, 233); 
        }
        &_info{
          padding: 8px;
          &_details{ 
            border-radius: 5px; 
            background-color: #F6F6FC;
          }
          &_item{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;
          }
          .item-row{
            padding: 5px 7px;
            font-size: $font-regular-base; 
            display: flex; 
            align-items: center;  
            border-bottom: 1px solid rgb(230, 230, 233); 
            .item-row-name{
              font-family: 'Pretendard-SemiBold'; 
            }
          }
          .item-row:last-child{ 
            border: none; 
          }
        }
        .content_accept{
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
      }
      
    }
    .table-title{
      font-size: 15px;
      font-family: 'Pretendard-SemiBold';
      margin-bottom: 5px;
    }
    .table-main{ 
      color: #000000;
      font-size: $font-regular-base;
      font-weight: 900; 
    } 
  }
  .global-flex-row-gap{
    gap: 5px;
    display: flex;
    align-items: center; 
  } 
  .submit-form{
    justify-content: center;
  }
  .disable-note{
    color: #909090 !important;
  } 
}

</style>