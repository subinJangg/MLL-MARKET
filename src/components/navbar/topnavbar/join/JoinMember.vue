<template>
    <div class="container">

    <div class="d-flex justify-content-center" style="margin-top:50px;">
      <h4>
        <font-awesome-icon :icon="['fas', 'paw']" />
            JOIN US
        <font-awesome-icon :icon="['fas', 'paw']" /> 
      </h4>
    </div>

    <div class="d-flex justify-content-center " style="margin-top:10px;">
      아이디
    </div>
    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
          class="form-control box_size" 
          type="text" 
          maxlegth="20" 
          placeholder="아이디 입력(6~15자)"
          ref="userId"
        />
    </div>
    <div class="d-flex justify-content-center " style="margin-top:10px;">
      비밀번호
    </div>
    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
        class="form-control box_size" 
        type="text" 
        maxlegth="20" 
        placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
      />
    </div>

    <div class="d-flex justify-content-center " style="margin-top:10px;">
    비밀번호 확인
    </div>
    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
        class="form-control box_size" 
        type="text" 
        maxlegth="20" 
        placeholder="비밀번호 재입력"
      />
    </div>

    <div class="d-flex justify-content-center align-items-start" style="margin-top:10px;">
      이름
    </div>
    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
        class="form-control box_size" 
        type="text" 
        maxlegth="20" 
        placeholder="이름을 입력해주세요"
      />
    </div>

    <div class="d-flex justify-content-center" style="margin-top:10px;">
      전화번호
    </div>
    <div class="d-flex justify-content-center" style="margin-top:10px;">
      <input 
        class="form-control " 
        type="text" 
        maxlegth="3" 
        placeholder="010"
        style="width: 100px;"
      /> &nbsp; - &nbsp; 
      <input 
        class="form-control " 
        type="text" 
        maxlegth="4" 
        placeholder=""
        style="width: 100px;"
      /> &nbsp; - &nbsp;
      <input 
        class="form-control " 
        type="text" 
        maxlegth="4" 
        placeholder=""
        style="width: 100px;"
      />
    </div>

        
    </div>
</template>
    
<script>
export default{
    name : "JoinMember",
}
</script>

<style scoped>
.box_size {
  width: 300px;
}

</style>
    