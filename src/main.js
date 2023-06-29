import { createApp } from 'vue'
import App from './App.vue'

// import the fontawesome core 
import { library } from '@fortawesome/fontawesome-svg-core'

//  import specific icons : 원하는 아이콘을 개별적으로 import
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

//import font awesome 컴포넌트
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//위에서 import한 아이콘들을 Core library에 등록 
library.add(fab, far, fas)

//부트스트랩 import
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//생성한 뷰 라우터 받아오기
import { router } from './router/index.js'

const app = createApp(App)

//font awesome 컴포넌트를 전역으로 등록
app.component('font-awesome-icon', FontAwesomeIcon)

// 라우터 사용
app.use(router)  
app.mount('#app')