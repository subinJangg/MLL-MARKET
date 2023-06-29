<template>
  <div class="">
    <footer>
      <div class="row" style="padding-top:20px;">
      <!-- 전화번호 및 상호명 -->
      <div class="col-md-3">
        <ul>(주)망링레</ul>
        <ul>전화번호 : </ul>
      </div> 

      <!-- 이용내역 -->
      <div class="col-md-3">
        <ul>개인정보</ul>
        <ul>submit</ul>
      </div> 

      <!-- 문의사항 -->
      <div class="col-md-3">
        <ul>Q & A</ul>
        <ul>자주묻는질문</ul>
        <ul>고객센터</ul>
      </div> 

      <!-- sns -->
      <div class="col-md-3">
        <ul>
          <img 
          src="@/assets/image/instaLogo.png"
          class="logo-img"
          @click="instaLink('https://instagram.com/mango_lingo_lego?igshid=OGQ5ZDc2ODk2ZA==')"
          style="height: 6%; width: 6%; cursor: pointer;"
        /> instagram
        </ul>
        <ul>
          <img 
          src="@/assets/image/youtubeLogo.png"
          class="logo-img"
          @click="youtubeLink('https://youtube.com/@mango_lingo_lego')"
          style="height: 8%; width: 8%; cursor: pointer;"
        /> youtube
        </ul>
      </div> 
    </div>
    </footer>

  </div>
</template>
  
<script>
  export default{
    name : "MainPageFooter",

  data() {
    return {



    };
  },

  methods: {

    /* youtube 이동 */ 
    youtubeLink(url) {
      window.location.href = url;
    },

    /* instagram  이동 */
    instaLink(url) {
      window.location.href = url;
    },


    


  },
  // ...
}
</script>
  
<style scoped>


</style>
