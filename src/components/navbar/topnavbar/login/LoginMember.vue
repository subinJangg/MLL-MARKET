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
          @keydown="checkId()" 
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
            :to="{ name : 'JoinMember'}" 
          > 아이디 찾기  &nbsp; </router-link> | 
          <router-link 
            class="nav-link active"
            :to="{ name : 'JoinMember'}" 
          > &nbsp; 비밀번호 찾기 &nbsp; </router-link> | 
          <router-link 
            class="nav-link active"
            :to="{ name : 'JoinMember'}" 
          > &nbsp; 회원가입 </router-link>

    </div>

    
  </div>
</template>
    
<script>
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
    checkId() {

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