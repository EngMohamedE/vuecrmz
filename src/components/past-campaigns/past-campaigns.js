import {Http} from '@/http-config.js'
import router from "../../router";


export default {
    name: 'pastcampaigns',

    data() {
        return {
            Namelist: [],
        }
    },
    created: function () {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
            Http.get('api/founders/past_count?api_token=' + this.$ls.get('token')).then(successResponse => {
                this.Namelist = successResponse.data.data
                console.log(successResponse)
                console.log("Success ", successResponse.data)
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        }
    },
    computed : {
    },
    methods: {


    }
}
