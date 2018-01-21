import {Http} from '@/http-config.js'
import router from "../../router";

export default {
  name : 'Settings',
  data() {
    return {}
  },
  created : function() {
      if(this.$ls.get('token')=='')
      {
          router.push({path: '/login'})

      }
      else {}


  },
  methods : {}
}
