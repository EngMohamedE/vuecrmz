import {Http} from '@/http-config.js'
import router from "../../router";

export default {
    name: 'GmailContacts',

    data() {
        return {
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
            errorhandle:false
        }
    },
    created: function (event) {
        if(this.$ls.get('token')=='')
        {
            router.push({path: '/login'})

        }
        else {
        var tokenapi = this.$ls.get('token')
        socialinviter.load({
            "message": {

                "twitter": "Check it out https://venuelista.com ",

                "googleplus": "Check it out https://venuelista.com ",

                "facebook": "Check it out https://venuelista.com ",

                "skyrock": "Check it out https://venuelista.com "

            },
            "path": {
                "css": "./static/scripts/",
                "js": "./static/scripts/",
                "authpage" : "https://crmzz.com/oauth.html"
            },
            "callbacks": {

                "loaded": function (service, data) {

                    //Contacts will be available in data object

                    console.log(data);

                },
                "proceed": function (event, service, product) {

                    var selected_contacts = socialinviter.contactimporter.getSelectedContacts();

                    console.log(selected_contacts);



                    if (service == 'yahoo' || service == 'gmail' || service == 'outlock' || service == 'alo' || service == 'csv' || service == 'mailchimp' || service == 'eventbrite' || service == 'email') {

                        var emails = selected_contacts.addressbook;

                        $.ajax({

                            type: "GET",

                            data: {'emails': emails, "source": service},

                            beforeSend: function () {


                            },

                            success: function (res) {
                               console.log(emails)
                                var datacontacts = {
                                    result: emails,
                                }
                                Http.post('api/founders/addcontacts?api_token=' + tokenapi, datacontacts).then(successResponse => {
                                    console.log(successResponse);
                                }).catch(errorResponse => {
                                    console.log("Error ", errorResponse)
                                });
                                socialinviter.close();



                            },

                            error: function () {

                                console.log('error');

                            }

                        });

                        return false;

                    }
                },
                "send": function (element, service, recipients, product, subject, message) {


                    socialinviter.close();





                }



            }
        });
    }}



    ,
    methods: {


    }

}
