import {Http} from '@/http-config.js'
import router from '../../router'

export default {
  name : 'login',
  data() {
    return {loginForm: null, signupForm: null}
  },
  created : function() {
    if (this.$ls.get('authentiated') == true) {
      router.push({path: '/company'})
    }
  },
  mounted : function() {
    var loginForm = new cf.ConversationalForm({'formEl': document.getElementById('login-form'), 'context': document.getElementById('cf-context'), submitCallback: this.loginSubmit});
    this.loginForm = loginForm

  },
  methods : {
    loginSubmit: function(event) {
      this.loginForm.addRobotChatResponse("Just a sec...");
      var formData = this.loginForm.getFormData(true)
      console.log(formData);
      var user = {
        email: formData['tag-0'],
        password: formData['tag-1']
      }
      Http.post('api/founders/login', user).then(successResponse => {
        this.loginForm.addRobotChatResponse("Authenticated !!");
        console.log(successResponse.data.data.api_token);
        this.$ls.set('token', successResponse.data.data.api_token)
        this.$ls.set('authentiated', true)
        router.push({path: '/company'})
      }).catch(errorResponse => {

        this.loginForm.addRobotChatResponse("Invalid crecentials, please try again");

        setTimeout(() => {
          this.loginForm.remove()
          this.loginForm = new cf.ConversationalForm({'formEl': document.getElementById('login-form'), 'context': document.getElementById('cf-context'), submitCallback: this.loginSubmit});
        }, 5000)

        console.log("Error ", errorResponse)
      });
    },
    goToSignUp: function(event) {
      console.log("submitted");
      router.push({path: '/signup'})
    }

  }
}
