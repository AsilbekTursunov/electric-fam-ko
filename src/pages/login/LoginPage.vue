<template>
  <div class="main_bg_gradient">
    <div class="center_box">
      <div class="login-registration-box">
        <img 
          src="/images/login-bg.jpeg" 
          alt="login-bg" 
          class="img"
        > 
        <div class="login_box">
          <h3 class="login-header">Log in to access your account</h3>
          <el-form 
            :model="form"  
            label-position="top"
            :rules="rules" 
          >
            <el-form-item prop="id">
              <el-input 
                v-model="form.id"
                type="text" 
                placeholder="ID"
                clearable   
              /> 
            </el-form-item> 
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                type="password"
                placeholder="Password" 
                show-password
                clearable
              /> 
            </el-form-item> 
            <el-button 
              v-loading="isLoading"
              native-type="submit" 
              class="submit_btn" 
              :disabled="!form.id || !form.password" 
              @click.prevent="submitForm"
            >로그인</el-button> 
            <el-col class="grid-first_content"> 
              <el-row :gutter="10" class="change-type">
                <el-col :span="8" @click="setOpenDialog">비밀번호 변경</el-col>
                <el-col :span="8">비밀번호 초기화</el-col>
                <el-col :span="8">분실 시 대응방법</el-col>
              </el-row>  
              <el-row :gutter="10" class="warn_message">
                <el-col :span="3" :offset="0">
                  <el-icon><Warning style="width: 2rem; height:2rem;" /></el-icon></el-col>
                <el-col :span="21" :offset="0">
                  <p>비밀번호 변경 또는 초기화시 팝업차단을 해제하시기 바랍니다. 아이디는 사번, 최초 비밀번호는 주민번호 뒷 7자리 입니다.</p>
                </el-col>
              </el-row> 
            </el-col>  
          </el-form>
        </div>
      </div>
      <div class="info_box"> 
        <ul class="description_box">
          <li class="description_box_item">
            - 인가된 사용자만이 LS ELECTRIC의 네트워크, 시스템, 컴퓨터 및 데이터에 접근할 수 있으며, 업무적인 목적으로만 사용 해야 합니다. 
          </li>
          <li class="description_box_item">
            - 인가받지 않은 사용자의 접근은 LS ELECTRIC 보안규정에 위배되며, 법적인 책임을 지게됩니다. 
          </li>
          <li class="description_box_item">  
            - LS ELECTRIC 네트워크,시스템,컴퓨터 및 데이터에 접근한 모든 활동은 기록, 관리되며 이러한 활동 기록은 법적 증거자료로 사용됩니다.
          </li>
        </ul>
        <div class="confirm_block"> 
          <button 
            type="button" 
            class="confirm_block_btn">
            관련 지점 연락처
          </button>
          <!-- AutoSearch modal -->
          <!-- <MiniPopups 
            :open="true" 
            :description="'조회 결과가 없습니다.'" 
            :title="'결과'"
            :type="'notice'" 
            :onCancel="() => console.log('blu blu')" 
          /> -->
          <!-- <CompanionModal /> -->
        </div>
      </div>
    </div>
    <CustomDialog 
      :open="openDialog" 
      :onClose="setOpenDialog" 
      :title="'비밀번호 변경'">
      <div class="first-content">
        <div class="info-content">
          <p class="info-title">※비밀번호 변경 안내</p>
          <p class="info-desc-blue">- 비밀번호는 최소 8자 이상 16자 이하여야 합니다.</p>
          <p class="info-desc-blue">- 특수문자/영문/숫자/대문자 중 3개 이상 사용하여 비밀번호를 입력해야 합니다.</p>
          <p class="info-desc-black">- 마지막에 사용한 비밀번호는 사용하지 못합니다.</p>
          <p class="info-desc-red">- M365 계정 이름에서 연속된 4글자 이상은 암호로 사용할 수 없습니다. (대, 소문자 관계없음)</p>
          <p class="info-desc-black">- 사번의 4글자 이상은 사용할 수 없습니다.</p> 
          <br> 
          <p class="info-title">※비밀번호 변경 이후 현상</p>
          <p class="info-desc-black">- 팀즈(M365) 계정 이름 : 홍길동(Hong Gil Dong)/WeLS운영팀</p>
          <p class="info-desc-black">- 사번 : 12345678</p>
          <p class="info-desc-black">&nbsp; 1&rpar; Hong1234 -> 비밀번호 불가(영문이름과 사번 4글자(Hong, 1234) 포함)</p>
          <p class="info-desc-black">&nbsp; 2&rpar; 2024WeLS!@ -> 비밀번호 불가(M365계정 4글자(WeLS) 포함)</p> 
          <br> 
          <p class="info-title">※비밀번호 변경 이후 현상</p>
          <p class="info-desc-black">- M365(팀즈, 아웃룩 등)에서 자동 로그아웃 후 재 로그인 창 활성화(PC/모바일 동일)</p> 
          <p class="info-desc-black">- 변경된 패스워드 동기화는 최대 30분 소요</p> 
        </div>
        <div class="form-content">
          <div class="form-item">
            <div class="form-item-label">현재 비밀번호</div>
            <CustomInput />
          </div>
          <div class="form-devider"></div>
          <div class="form-item">
            <div class="form-item-label">새 비밀번호</div>
            <CustomInput />
          </div>
          <div class="form-item">
            <div class="form-item-label">비밀번호 확인</div>
            <CustomInput />
          </div>
        </div> 
      </div>
      <div class="second-content">
        <div class="btn-content">
          <CustomButton class="secondary" :size="'md'">취소</CustomButton>
        </div>
        <div class="btn-content">
          <CustomButton class="primary" :size="'md'">변경</CustomButton>
        </div>
      </div>
    </CustomDialog>
  </div>

  
</template>

<script>
// dialogs
// import MiniPopups from '../../components/dialogs/MiniPopups.vue'
import { mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        id: '', 
        password: ''
      },
      openDialog:false,
      rules: {
        username: [
          { message: 'Please enter your username', trigger:'blur' },
        ], 
        password: [
          { message: 'Please enter your password', trigger:'blur' },
        ]
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['setToken']),
    async submitForm() {
      await this.login()
    },
    async login(){

      // const data = {
      //   username: this.form.id,
      //   userpassword: this.form.password
      // }
      // this.isLoading = true
      // const res = await queryService.login(data)
      // this.isLoading = false

      // Check Role of use and 
      // navigate it user main page or admin main page

      this.setToken('1234')
      this.$router.push({
        name: 'Main'
      })
    },
    setOpenDialog() {
      this.openDialog = !this.openDialog
    }
  },
}
</script>
 
<style lang="scss" scoped>  
.main_bg_gradient{ 
  height: 100vh;  
  width: 100vw;
  display: flex; 
  background-color: #ffffff;
  justify-content: center;
  align-items: center;  
  .center_box{
    width: 840px; 
    .login-registration-box{ 
      overflow: hidden;
      display: flex;
      border-radius: 20px;
      height: 400px; 
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
      .img{  
        object-fit: inherit;
      }
      .login_box{ 
        padding: 40px;  
        width: 440px;
        border-radius: 0px 20px 20px 0px;
        border-top: 1px solid rgb(214, 217, 227);  
        border-right: 1px solid rgb(214, 217, 227);  
        border-bottom: 1px solid rgb(214, 217, 227); 
        .login-header{
          color: rgb(48, 48, 48); 
          font-size: 15px;  
          text-align: center;
          margin-bottom: 20px;
          margin-top: 0px;
        }
        :deep(.el-input__wrapper){  
          border: 1px solid #D6D9E3;
          border-radius: 10px; 
          outline: none;
          box-shadow: none;
          height: 40px !important;
          font-size: $font-medium-base;
        }
        :deep(.el-input__inner){ 
          color: black ;
        }
        .grid-first_content{
          margin-top:20px;
          padding: 0px 10px;
          color: #0000 !important;
          font-size: $font-regular-base;
          .change-type{  
            .is-guttered{
              color: black !important;
              text-align: center;
              border-right: 1px solid black;
              cursor: pointer;
            }
            .is-guttered:hover{
              color:  rgb(0, 161, 192) !important; 
              text-decoration: underline;
            }
            .is-guttered:last-child{
              border-right: none;
            }
          }
          .warn_message{
            margin-top: 20px;
            padding:0px 10px;
            .is-guttered{
              color: rgb(144, 144, 144) !important;
              text-align: justify;
               font-size: 10px;
               :deep(.el-icon){
                width: 1rem;
                height: 1rem;
              }
            }
          }
        }
        .submit_btn{ 
          width: 100%;
          height: 50px; 
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 5;
          color: white;
          margin-top: 20px;
          padding: 10px 20px 10px 20px;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;  
          box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
          font-weight: bolder;
          background: linear-gradient(180.00deg, rgb(1, 179, 213),rgb(1, 155, 185) 100%);
        } 
        @media only screen and  (max-width:767px){ 
          padding: 20px;
          .grid-first_content{
            margin-top:40px;
            padding: 0px 10px;
            font-size: $font-regular-base; 
          }
          }
        }
      }
    }
    .info_box{
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .confirm_block{
        display: flex;
        justify-content: space-between;
        align-self: self-start;
        color: rgb(144, 144, 144); 
        font-size: 10px;
        font-weight: 'Pretendard-Bold';
        .confirm_block_content{
          display: flex;
          align-items: center; 
        }
        .confirm_block_btn{ 
          font-family: $font-medium;
          font-size: 10px;    
          padding: 5px 10px;
          color: #000000; 
          cursor: pointer; 
          background-color: #ffffff;
          box-sizing: border-box; 
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 100px; 
          box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
        }
      }
      .description_box{
        list-style-type: none;
        padding: 0;
        margin-top: 10px;
        color: rgb(144, 144, 144); 
        font-size: 9px;
        font-weight: 700;
        .description_box_item{
          text-wrap: inherit;
        }
      }
    }
    @media only screen and  (max-width:767px){ 
      width: 90%;  
    }
    @media only screen and  (max-width:450px){ 
      .info_box{
        .confirm_block{ 
           flex-direction: column;
           gap: 10px;
        }
      }   
  }
  .first-content{
    font-size: $font-regular-base;
    font-family: $font-regular;
    display: flex;
    width: 720px;
    gap: 20px;
    .info-content{ 
      padding-right: 20px;
      border-right: 1px solid #0000001a;
      .info-title{
        color: #202020;
        font-family: $font-bold;
      }
      .info-desc-blue{
        color: #00A1C0;
      }
      .info-desc-red{
        color: #FF0000;
      }
      .info-desc-black{
        color: #202020;
      }
    }
    .form-content{
      flex: 1;
      .form-item {
        margin-bottom: 15px;
        .form-item-label{
          font-size: $font-medium-base;
          color: #000000;
          font-family: $font-semibold;
          margin-bottom: 8px;
        }
      }
      .form-devider{
        margin: 15px 0;
        height: 1px;
        background-color: #0000001a;
      }
    }
  }
  .second-content{
    margin-top: 20px;
    display: flex;
    justify-content: end;
    gap: 20px;
    align-items: center;
  }
} 
</style>
