import {Http} from '@/http-config.js'

export default {
  name : 'company',
  data() {
    return {
      company: {
        "id": -1,
        "brand_name": "",
        "inudustry": "",
        "email": "",
        "website": "",
        "phone": "",
        "address": "",
        "city": "",
        "country": "Egypt",
        "state": "",
        "zip": 0,
        "established_date": "",
        "about_company": "",
        "linkedIn": "",
        "facebook": "",
        "twitter": "",
        "instagram": "",
        "created_at": null,
        "updated_at": null
      },
      founder: {
        "id": -1,
        "name": "",
        "position": "",
        "email": "",
      },
        video:{
             "video_id":-1,
            "video_token":"",
        }
    }
  },
  created : function() {
    Http.get('api/founders/company?api_token='+this.$ls.get('token')).then(successResponse => {
      console.log("Success ", successResponse.data)
      this.company = successResponse.data.data
    }).catch(errorResponse => {
      console.log("Error ", errorResponse)
    });
    Http.get('api/founders/profile?api_token='+this.$ls.get('token')).then(successResponse => {
      console.log("Success ", successResponse.data.founder)
      this.founder = successResponse.data.founder
    }).catch(errorResponse => {
      console.log("Error ", errorResponse)
    });

    //get video created by  mohamed mahmoud
      Http.get('api/founders/video?api_token='+this.$ls.get('token')).then(successResponse => {
          console.log("Success ", successResponse.data.video)
          this.video = successResponse.data.video;
          var  token  =successResponse.data.video.video_token;
          var embedding = ZiggeoApi.Embed.embed(
              "#player_placeholder", {
                  width: 320,
                  height: 180,
                  video: token
              });
      }).catch(errorResponse => {
          console.log("Error ", errorResponse)
      });
  },
  methods : {
    updateCompany: function(event) {
      this.company['company_id'] = this.company['id']
      this.company['api_token'] = this.$ls.get('token')
      console.log(this.company);
      Http.patch('api/founders/updatecompany?api_token='+this.$ls.get('token'), this.company).then(successResponse => {
        console.log("Success ", successResponse.data)
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });
    },
    updateFounder: function(event){
      Http.patch('api/founders/updateprofile', this.founder, {
        headers: {
          'x-access-token': this.$ls.get('token')
        }
      }).then(successResponse => {
        console.log("Success ", successResponse.data)
      }).catch(errorResponse => {
        console.log("Error ", errorResponse)
      });
    },
      updatevideo: function(event){
          var  field = document.querySelector("input[name=videotoken]").value;
          var  video_id = this.founder['id'];
          var token =this.$ls.get('token');
              var viedo2 = {
                  video_id:video_id,
                  video_token: field,
                  status:1
              }
              console.log(viedo2);
              Http.patch('api/founders/updatevideo?api_token='+this.$ls.get('token'), viedo2).then(successResponse => {
                  console.log("Success ", successResponse.data)
              }).catch(errorResponse => {
                  console.log("Error ", errorResponse)
              });

      }

  }
}
