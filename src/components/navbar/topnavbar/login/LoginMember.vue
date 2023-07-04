<template>
  <div class="container">

    <div class="d-flex justify-content-center" style="margin-top:50px;">
      <h4>
        <font-awesome-icon :icon="['fas', 'paw']" />
        LOGIN
        <font-awesome-icon :icon="['fas', 'paw']" /> 
      </h4>
    </div>

    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
          class="form-control box_size" 
          type="text" 
          maxlegth="20" 
          placeholder="ID"
          ref="userId"
          @keydown="checkId(str)" 
        />
    </div>
    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
        class="form-control box_size" 
        type="text" 
        maxlegth="20" 
        placeholder="PASSWORD"
        @keydown="checkPass()" 
      />
    </div>

    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <button class="btn btn_color box_size float-start" type="button" @click="loginBtn()">
        로그인
      </button>
    </div>

    <div class="d-flex justify-content-center" style="margin-top:10px;">
        <router-link 
            class="nav-link active"
            :to="{ name : 'FindId'}" 
          > 아이디 찾기  &nbsp; </router-link> | 
          <router-link 
            class="nav-link active"
            :to="{ name : 'FindPass'}" 
          > &nbsp; 비밀번호 찾기 &nbsp; </router-link> | 
          <router-link 
            class="nav-link active"
            :to="{ name : 'JoinMember'}" 
          > &nbsp; 회원가입 </router-link>
    </div>
  </div>
</template>
    
<script>

//var pattern_num = /[0-9]/;	// 숫자 
//var pattern_eng = /[a-zA-Z]/;	// 문자 
var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

export default {
  name: "LoginMember",

  data() {
    return {

    };
  },

  mounted() {
    this.$refs.userId.focus();   
  },

  methods: {

    // 아이디 특수문자 제어
    checkId(str) {
      if(pattern_kor.test(str) || pattern_spc.test(str)) {
        alert("소문자와 숫자만 이용하여 아이디를 입력해주세요");
        return;
      }
    },
    
    // 비밀번호 특수문자 제어
    checkPass() {

    },

    // 로그인 버튼
    loginBtn() {

    },



  },
}


</script>

<style scoped>
.box_size {
  width: 300px;
}

.btn_color {
  background-color: #FFD89C
}

.btn_color:active {

}

</style>