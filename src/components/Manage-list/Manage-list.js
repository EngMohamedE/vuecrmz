import {Http} from '@/http-config.js'
import router from "../../router";


export default {
    name: 'ManageList',

    data() {
        return {
            Namelist: [],
            search: '',
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
    computed : {
        filteredList:function()
        {
            var vm = this;
            return vm.Namelist.filter((list) => {
                return list.Name.match(this.search)
            })
        }
    },
    methods: {


    }
}
