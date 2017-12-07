import {Http} from '@/http-config.js'

export default {
  name : 'proposition',
  data() {
    return {
      proposition:{
        prop1: "",
        prop2: "",
        prop3: ""
      },
      serverResponse:[]
    }
  },
  created : function() {
    Http.get('api/founders/propositions/list?api_token='+this.$ls.get('token')).then(successResponse => {
      console.log("Success ", successResponse.data.data)
      var response = successResponse.data.data
      this.serverResponse = response
      this.proposition.prop1 = response[0].proposition
      this.proposition.prop2 = response[1].proposition
      this.proposition.prop3 = response[2].proposition
    }).catch(errorResponse => {
      console.log("Error ", errorResponse)
    });
  },
  methods : {
    save: function(){
      this.serverResponse[0].proposition = this.proposition.prop1
      this.serverResponse[0]['proposition_id'] = this.serverResponse[0].id
      this.serverResponse[1].proposition = this.proposition.prop2
      this.serverResponse[1]['proposition_id'] = this.serverResponse[1].id
      this.serverResponse[2].proposition = this.proposition.prop3
      this.serverResponse[2]['proposition_id'] = this.serverResponse[2].id
      Http.patch('api/founders/propositions/update?api_token='+this.$ls.get('token'), this.serverResponse[0], {headers : {
        'x-access-token': this.$ls.get('token')
      }}).then(successResponse => {
        console.log("Success ", successResponse.data)
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });

      Http.patch('api/founders/propositions/update?api_token='+this.$ls.get('token'), this.serverResponse[1], {headers : {
        'x-access-token': this.$ls.get('token')
      }}).then(successResponse => {
        console.log("Success ", successResponse.data)
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });

      Http.patch('api/founders/propositions/update?api_token='+this.$ls.get('token'), this.serverResponse[2], {headers : {
        'x-access-token': this.$ls.get('token')
      }}).then(successResponse => {
        console.log("Success ", successResponse.data)
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });
    }
  }
}
