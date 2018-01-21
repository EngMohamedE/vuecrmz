import {Http} from '@/http-config.js'
import router from "../../router";

export default {
    name: 'GmailContacts',

    data() {
        return {
            errordata:false,
            contact: {
                ID: -1,
                Name: '',
                phone: '',
                email: '',
                image: '',

            },
            Namelist: {
                listname: ''
            },
            groupdata: {
                ID: -1,
                Name: ""
            },
            checkedNames: [],
            selected: '',
            errorhandle:""
        }
    },
    created: function () {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
            Http.get('api/founders/Contacts?api_token=' + this.$ls.get('token')).then(successResponse => {
                this.contact = successResponse.data.data
                console.log(successResponse)
                console.log("Success ", successResponse.data)
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
            Http.get('api/founders/getfounderList?api_token=' + this.$ls.get('token')).then(successResponse => {
                this.groupdata = successResponse.data.data
                console.log(successResponse)
                console.log("Success ", successResponse.data)
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        }
    },
    methods: {
        auth() {
            var config = {
                'client_id': '723861761880-m66ak7nqtfe8i3edibune5nmasgfd59t.apps.googleusercontent.com',
                'scope': 'https://www.google.com/m8/feeds'
            };
            let _this = this
            gapi.auth.authorize(config, function () {
                _this.fetchcontacts(gapi.auth.getToken());
            });
        },
        fetchcontacts(token) {
            token['g-oauth-window'] = null;
            var access = token.access_token
            console.log(token)
            var tokenapi = this.$ls.get('token')
            $.ajax({
            url:'https://www.google.com/m8/feeds/contacts/default/full/',
                data: {
                    "access_token": token.access_token,
                    "alt":          "json",
                    "max-results":  "2000"
                },
                headers: {
                    "Gdata-Version":    "3.0"
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                dataType: "jsonp",
                success: function (output) {
                    console.log(output);

                    var datacontacts = {
                        result: output,
                        access: access
                    }
                    Http.post('api/founders/addcontacts?api_token=' + tokenapi, datacontacts).then(successResponse => {
                        console.log(output);
                    }).catch(errorResponse => {
                        console.log("Error ", errorResponse)
                    });
                }
            });
        },
        addlist: function (event) {
            event.preventDefault();
            if (this.errors.all().length > 0) {
                this.errorhandle = "Validation error";
            }
            else{
            this.Namelist['Name'] = this.Namelist['listname'];
            // console.log(listname);
            Http.post('api/founders/createlist?api_token=' + this.$ls.get('token'), this.Namelist).then(successResponse => {
                this.errorhandle="Created List Sucessfuly"
                console.log("Success ", successResponse.data)
                //get all  list  after  add  new  list
                Http.get('api/founders/getfounderList?api_token=' + this.$ls.get('token')).then(successResponse => {
                    this.groupdata = successResponse.data.data
                    console.log("Success ", successResponse.data)
                }).catch(errorResponse => {
                    console.log("Error ", errorResponse)
                });
            }).catch(errorResponse => {
                console.log(listname)
                console.log("Error ", errorResponse)
            });
            }

        },
        addtolist: function (event) {
            console.log(this.selected)
            console.log(this.checkedNames)
            var contactslist = {
                list : this.selected,
                contacts : this.checkedNames
            }
            Http.patch('api/founders/updatetolist?api_token=' + this.$ls.get('token'), contactslist).then(successResponse => {
                this.errordata=true,
                    console.log("Success ", successResponse.data)
            }).catch(errorResponse => {
                console.log("Error ", errorResponse)
            });
        },


    }
}
