import {Http} from '@/http-config.js'
import router from "../../router";

export default {
    name: 'list',

    data() {
        return {
            loading: false,
            post: [],
            error: null,
            search:'',

        }
    },
    created: function () {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
            this.fetchData()
        }
    },

    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },

    methods: {
        fetchData:function (event) {
            var id=this.$route.params.id
            var data = {
                result: id,
            }
            Http.post('api/founders/getListContacts?api_token=' + this.$ls.get('token'),data).then(successResponse => {
                console.log(successResponse.data.data)
                this.post = successResponse.data.data
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        },
        fetchsearch:function(event)
        {
            var vm = this;
            return vm.post.filter((list) => {
                return list.Name.match(this.search)
            })
        }


    }
}
