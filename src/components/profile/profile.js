import {Http} from '@/http-config.js'
import router from "../../router";

export default {
    name: 'Profile',
    data() {
        return {
            errorhandle: '',
            founder: {
                "id": -1,
                "name": "",
                "position": "",
                "email": "",
            },
            password: {
                old: "",
                newPassword: "",
                rePassword: ""
            }
        }
    },
    created: function () {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
            Http.get('api/founders/profile?api_token=' + this.$ls.get('token')
            ).then(successResponse => {
                console.log("Success ", successResponse.data.founder)
                this.founder = successResponse.data.founder
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        }
    },
    methods: {
        updateProfile: function (e) {
            e.preventDefault();
            if (this.errors.all().length > 0) {
                this.errorhandle = "Validation error";
            }
            else {
                this.founder['api_token'] = this.$ls.get('token')
                Http.patch('api/founders/updateprofile', this.founder).then(successResponse => {
                    this.errorhandle = "Updated Sucessfuly"
                }).catch(errorResponse => {
                    console.log("Error ", errorResponse)
                });
            }
        },
        updatePassword: function (event) {
            console.log(this.password);
        }
    }
}
