import {Http} from '@/http-config.js'
import router from '../../router'

export default {
  name : 'CrmVideo',
  data() {
    return {plivoBrowserSdk: null}
  },
  created : function() {
    var options = {
      "debug": "DEBUG",
      "permOnClick": true,
      "audioConstraints": {
        "optional": [
          {
            "googAutoGainControl": false
          }, {
            "googEchoCancellation": false
          }
        ]
      },
      "enableTracking": true
    };
    var plivoBrowserSdk = new window.Plivo(options);
    var username = 'mohamed.ahmed.rid@gmail.com';
    var pass = 'Kashef#2014';
    plivoBrowserSdk.client.login(username, pass);
    this.plivoBrowserSdk = plivoBrowserSdk
  },
  methods : {
    call: function(event) {
      var dest = "+201145155565";
      var extraHeaders = {
        'X-PH-Test1': 'test1',
        'X-PH-Test2': 'test2'
      };
      this.plivoBrowserSdk.client.call(dest, extraHeaders);
      this.plivoBrowserSdk.client.on('onCallFailed', ()=>{
        console.log("FAILED");
      });
      this.plivoBrowserSdk.client.on('onCalling', ()=>{
        console.log("CALLING");
      });
    }
  }
}
