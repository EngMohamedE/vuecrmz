import {Http} from '@/http-config.js'
import router from "../../router";

export default {

data(){
    return{
        selected: '',
        balance:'',
        package: {
            "ID":-1,
            "Name":"",
            "Amount":"",
            "Quantity":"",
        }
    }

},
    created : function() {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
            Http.get('api/founders/listpackage?api_token=' + this.$ls.get('token')).then(successResponse => {
                console.log("Success ", successResponse.data)
                this.package = successResponse.data.data
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
            Http.get('api/founders/company?api_token=' + this.$ls.get('token')).then(successResponse => {
                console.log("Success ", successResponse.data)
                this.balance = successResponse.data.data.balance
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        }
    },
    methods: {
        checkout: function(event) {
            var amount=Math.round( this.selected / 100)
                this.$checkout.open({
                name: 'Write  your  information!',
                currency: 'USD',
                amount: amount,
                token: (token) => {
                    Http.patch('api/founders/updatebalance?api_token='+this.$ls.get('token')).then(successResponse => {
                        this.balance = successResponse.data.data.balance
                    }).catch(errorResponse => {
                        console.log("Error ", errorResponse)
                    });
                }
            });
        }
    }
}

