import {Http} from '@/http-config.js'
import router from '../../router'

export default {
  name : 'companyCreate',
  data() {
    return {signupForm: null}
  },
  mounted : function() {
    var signupForm = new cf.ConversationalForm({'formEl': document.getElementById('signup-form'), 'context': document.getElementById('cf-context'), submitCallback: this.signUpSubmit});
    this.signupForm = signupForm

  },
  methods : {
    signUpSubmit: function(event) {
      this.signupForm.addRobotChatResponse("Just a sec...");
      var formData = this.signupForm.getFormData(true)
      console.log(formData);
      Http.post('api/founders/createcompany?api_token=' + this.$ls.get('token'), formData).then(successResponse => {
        this.signupForm.addRobotChatResponse("Uploading your video ...");
        Http.post('api/founders/upload_video', formData).then(successResponse => {
          console.log(successResponse);
          this.signupForm.addRobotChatResponse("Company created succefully !!");
          this.signupForm.addRobotChatResponse("Welcome to CRMZz !");
          setTimeout(() => {
            router.push({path: '/company'})
          }, 1000)

        }).catch(errorResponse => {
          this.loginForm.addRobotChatResponse("Invalid crecentials, please try again");
          console.log("Error ", errorResponse)
        });

      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });
    },
    test: function(event) {
      let files = event.target.files;
      console.log(files);
      // if (files.length)
      //   this.newDiploma.content = files[0];
       }
    }
}
