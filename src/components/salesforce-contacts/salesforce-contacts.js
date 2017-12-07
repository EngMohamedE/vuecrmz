import {Http} from '@/http-config.js'

export default {
  name : 'SalesForceContacts',
  data() {
    return {}
  },
  created : function() {
    if(this.$ls.get('salesforce-token')){
      console.log(this.$ls.get('salesforce-token'));
    }else{
      jsforce.browser.init({clientId: '3MVG9I5UQ_0k_hTkl7Lk6YX9Qi47ZErx_FsUVWbtKOQfZPMxOsLu9YR9iZx_YphqpGpdOAGo5On0HyvA4z.nU', redirectUri: 'http://localhost:8080/crm-video'});
      var token = "00D0O000000qr8w%21AQUAQGauF.5YMQNYI4Zh7lCYTDjSA21yVP9rR_iUV80qu3Pfi8X1Ok8uyIooN5KguWFfr4wPS.gtSECaNTKhPZLS5Vywjt.S"
      jsforce.browser.login()
      jsforce.browser.on('connect', function(conn) {
        conn.query('SELECT Id, Name FROM Account', function(err, res) {
          if (err) {
            return console.log(err);;
          }
          console.log(res);;
        });
      });
    }


  },
  methods : {}
}
