import {Http} from '@/http-config.js'
import router from "../../router";


export default {
    name: 'blast',

    data() {
        return {
            Namelist: [],
            selected: '',
            checkedNames:[],
            content:'',
            shortlink:''
        }
    },
    created: function () {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
            Http.get('api/founders/getfounderListcount?api_token=' + this.$ls.get('token')).then(successResponse => {
                this.Namelist = successResponse.data.data
                console.log(successResponse)
                console.log("Success ", successResponse.data)
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        }
    },
    computed: {
        url() {
            return this.shortlink;
        },

        title() {
            return "CRMZZ";
        },

        description() {
            return this.content;
        },
    },
    methods: {
        sendblast:function(){
            var data={
                selected:this.selected,
                checkedNames:this.checkedNames,
                content:this.content,
                shortlink:this.shortlink
            };
            Http.post('api/founders/sendblast?api_token=' + this.$ls.get('token'),data).then(successResponse => {
                this.Namelist = successResponse.data.data
                console.log(successResponse)
                console.log("Success ", successResponse.data)
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        }



    }
}
