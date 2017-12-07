import {Http} from '@/http-config.js'
import router from '../../router'

export default {
  name : 'Logout',
  data() {
    return {}
  },
  created : function() {
    this.$ls.set('token', '')
    this.$ls.set('authentiated', false)
    router.push({path: '/login'})
  },
  methods : {}
}
