import {Http} from '@/http-config.js'
import router from '../../router'

export default {
  name : 'signUp',
  data() {
    return {
      username: 'h@h.com',
      password: '12345',
      email: '',
      gender: '',
      birthdate: '',
      loginForm: null,
      signupForm: null
    }
  },
  mounted : function() {
    var signupForm = new cf.ConversationalForm({'formEl': document.getElementById('signup-form'), 'context': document.getElementById('cf-context'), submitCallback: this.signUpSubmit});
    this.signupForm = signupForm

  },
  methods : {
    // loginSubmit: function(event) {
    //   var formData = this.loginForm.getFormData(true)
    //   console.log(formData);
    //   var user = {
    //     email: formData['tag-0'],
    //     password: formData['tag-1']
    //   }
    //   Http.post('api/founders/login', user).then(successResponse => {
    //     this.$ls.set('token', successResponse.data.token)
    //     this.$ls.set('authentiated', true)
    //     router.push({path: '/company'})
    //   }).catch(errorResponse => {
    //     console.log("Error ", errorResponse)
    //   });
    // },
    signUpSubmit: function(event) {
      this.signupForm.addRobotChatResponse("Just a sec...");
      var formData = this.signupForm.getFormData(true)
      console.log(formData);
      Http.post('api/founders/register', formData).then(successResponse => {
          this.signupForm.addRobotChatResponse("Account created succefully !!");
          Http.post('api/founders/login', formData).then(successResponse => {
            this.$ls.set('token', successResponse.data.data.api_token)
            this.$ls.set('authentiated', true)

            setTimeout(()=>{
              router.push({path: '/add-company'}
            )}, 500)
          }).catch(errorResponse => {
            this.loginForm.addRobotChatResponse("Invalid crecentials, please try again");
            console.log("Error ", errorResponse)
          });

      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
        setTimeout(() => {
          this.signupForm.remove()
          this.signupForm = new cf.ConversationalForm({'formEl': document.getElementById('signup-form'), 'context': document.getElementById('cf-context'), submitCallback: this.signUpSubmit});
        }, 5000)
      });
    }

  }
}
