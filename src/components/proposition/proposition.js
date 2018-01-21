import {Http} from '@/http-config.js'
import router from "../../router";

export default {
  name : 'proposition',
  data() {
    return {
        errorhandle:"",
        proposition:{
          "id": -1,
          "proposition1": "",
          "proposition2": "",
          "proposition3": ""
      },
      serverResponse:[]
    }
  },
  created : function() {
      if(this.$ls.get('token')=='')
      {
          router.push({path: '/login'})

      }
      else {
          Http.get('api/founders/propositions/list?api_token=' + this.$ls.get('token')).then(successResponse => {
              console.log("Success ", successResponse.data.data)
              this.proposition = successResponse.data.data
          }).catch(errorResponse => {
              console.log("Error ", errorResponse)
          });
      }
  },
  methods : {
    save: function(event){
        event.preventDefault();
        if (this.errors.all().length > 0) {
            this.errorhandle = "Validation error";
        }
        else{
        this.proposition['proposition_id'] = this.proposition['id']
      Http.patch('api/founders/propositions/update?api_token='+this.$ls.get('token'), this.proposition, {headers : {
        'x-access-token': this.$ls.get('token')
      }}).then(successResponse => {
          this.errorhandle="Updated Sucessfuly",
          console.log("Success ", successResponse.data)
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });}
    }
  }
}
