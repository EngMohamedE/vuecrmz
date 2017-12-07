import {Http} from '@/http-config.js'

export default {
  name : 'Profile',
  data() {
    return {
        errorhandle:false,
      founder: {
        "id": -1,
        "name": "",
        "position": "",
        "email": "",
      },
      password: {
        old: "",
        newPassword: "",
        rePassword: ""
      }
    }
  },
  created : function() {
    Http.get('api/founders/profile?api_token='+this.$ls.get('token')
      ).then(successResponse => {
      console.log("Success ", successResponse.data.founder)
      this.founder = successResponse.data.founder
    }).catch(errorResponse => {
      console.log("Error ", errorResponse)
    });
  },
  methods : {
    updateProfile: function(event){
      this.founder['api_token'] = this.$ls.get('token')
      Http.patch('api/founders/updateprofile', this.founder).then(successResponse => {
this.errorhandle=true
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });
    },
    updatePassword: function(event){
      console.log(this.password);
    }
  }
}
