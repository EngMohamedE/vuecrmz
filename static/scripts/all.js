/*
Social Inviter
Copyright (c) 2016  www.socialinviter.com
You can use the script on you website for free but this comment part should not be removed.
version 5.3 (Mar 13, 2017)
*/

var socialinviter = (function () {
    var config = {
        servicepanel: {
            type: "",
            target: "popup",
            alignment: "vertical",
            path: {
                css: "./",
                js: "./"
            },
            position: {
                left: "wall",
                top: "wall"
            },
            callbacks: undefined
        },
        contactspanel: {

        }

    };
    var oauthpagename = "oauth.html", oauthpage = "oauth.html";
    var contentObj = { "step1": { "title": "Connect with people you know on {0}.", "description": "We found {0} people from your address book. Select the people you'd like to connect to.", "selected": "{0} Selected", "selectall": "Select all", "validation": { "selectcontact": "Please select a contact to proceed" }, "button": { "refresh": "Refresh", "proceed": "Proceed"} }, "step2": { "title": "Send invitation/message to your friends", "note": "Note: Seperate emails by semicolon(';')", "to": "To", "subject": "Subject", "message": "Message", "validation": { "to": "Enter to address", "subject": "Enter subject", "message": "Enter message" }, "button": { "back": "Back", "send": "Send"} }, "navigation": "Step {0} of {1}", "csv": { "label": "Please select a CSV file", "supported": "Supported CSV files from:", "link": { "back": "Back", "backtolist": "Back to list" }, "validation": { "selectfile": "Please select a CSV file.", "wrongupload": "Please upload a file of type *.CSV" }, "button": { "upload": "Upload"} }, "messages": { "popupblock": "Please make sure you browser doesn't block the authentication popup window.", "fetchingcontacts": "Fetching contacts...", "contactsimported": "{0} contacts were imported.", "fetchingfriends": "Fetching friends...", "fetchingprofile": "Fetching profile...", "postingtowall": "Sharing on wall...", "loadingcontacts": "Loading contacts...", "loadingfriends": "Loading friends...", "authenticating": "Authenticating...", "verification": "Verifying credentials", "authenticationfailed": "Authentication failed.", "tryagain": "Please try again.", "authprogress": "Please authenticate your {0} account."} };
    var popuperror = "", confLoadFlag = 0;
    var services = [
        {
            title: "Salesforce",
            desc: "Import your contacts",
            classRef: "salesforce"
        },
        {
            title: "Zoho",
            desc: "Import your contacts",
            classRef: "zoho"
        },
        {
            title: "Base",
            desc: "Import your contacts",
            classRef: "base"
        },
        {
            title: "Hubspot",
            desc: "Import your contacts",
            classRef: "hubspot"
        },
        {
            title: "Nimble",
            desc: "Import your contacts",
            classRef: "nimble"
        },
        {
            title: "Podio",
            desc: "Import your contacts",
            classRef: "podio"
        },
        {
            title: "Pipedrive",
            desc: "Import your contacts",
            classRef: "pipedrive"
        },
        {
            title: "Onepage",
            desc: "Import your contacts",
            classRef: "onepage"
        },
        {
            title: "Karma",
            desc: "Import your contacts",
            classRef: "karma"
        },
        {
            title: "Xero",
            desc: "Import your contacts",
            classRef: "xero"
        },
        {
            title: "Contactually",
            desc: "Import your contacts",
            classRef: "contactually"
        },
        {
            title: "Gmail",
            desc: "Import your contacts",
            classRef: "gmail"
        },
        {
            title: "Google+",
            desc: "Import your contacts",
            classRef: "googleplus"
        },
        {
            title: "Facebook",
            desc: "Invite your friends",
            classRef: "facebook"
        },
        {
            title: "Twitter",
            desc: "Invite your friends",
            classRef: "twitter"
        },
        {
            title: "Linkedin",
            desc: "Import your contacts",
            classRef: "linkedin"
        },
        {
            title: "Instagram",
            desc: "Invite your friends",
            classRef: "instagram"
        },
        {
            title: "Pinterest",
            desc: "Invite your friends",
            classRef: "pinterest"
        },
        {
            title: "Github",
            desc: "Invite your friends",
            classRef: "github"
        },
        {
            title: "Google",
            desc: "Invite your friends",
            classRef: "google"
        },

        {
            title: "Foursquare",
            desc: "Import your contacts",
            classRef: "foursquare"
        },
        {
            title: "Tumblr",
            desc: "Share in ",
            classRef: "tumblr"
        },
        {
            title: "Delicious",
            desc: "Share in",
            classRef: "delicious"
        },
        {
            title: "Slack",
            desc: "Invite your friends",
            classRef: "slack"
        },
        {
            title: "Yahoo",
            desc: "Import your contacts",
            classRef: "yahoo"
        },
        {
            title: "Outlook",
            desc: "Import your contacts",
            classRef: "outlook"
        },
        {
            title: "Aol",
            desc: "Import your contacts",
            classRef: "aol"
        },
        {
            title: "CSV",
            desc: "Import your contacts",
            classRef: "csv"
        },
        {
            title: "Xing",
            desc: "Invite your friends",
            classRef: "xing"
        },
        {
            title: "MailChimp",
            desc: "Import your contacts",
            classRef: "mailchimp"
        },
        {
            title: "Mailru",
            desc: "Import your contacts",
            classRef: "mailru"
        },
        {
            title: "Yammer",
            desc: "Import your contacts",
            classRef: "yammer"
        },
        {
            title: "Box",
            desc: "Import your contacts",
            classRef: "box"
        },
        {
            title: "Skyrock",
            desc: "Import your contacts",
            classRef: "skyrock"
        },
        {
            title: "Eventbrite",
            desc: "Import your contacts",
            classRef: "eventbrite"
        },
        {
            title: "Email",
            desc: "Import your contacts",
            classRef: "email"
        }
    ]
    var icons = {
        "gmail": "//socialinviter.com/assets/img/icons/gmail-icon.png",
        "yahoo": "//socialinviter.com/assets/img/icons/yahoo-icon.png",
        "aol": "//socialinviter.com/assets/img/icons/aol-icon.png",
        "hotmail": "//socialinviter.com/assets/img/icons/hotmail-icon.png",
        "outlook": "//socialinviter.com/assets/img/icons/outlook-icon.png",
        "facebook": "//socialinviter.com/assets/img/icons/facebook-icon.png",
        "email": "//socialinviter.com/assets/img/icons/email-icon.png",
        "twitter": "//socialinviter.com/assets/img/icons/twitter-icon.png",
        "google": "//socialinviter.com/assets/img/icons/google-icon.png",
        "xing": "//socialinviter.com/assets/img/icons/xing-icon.png",
        "linkedin": "//socialinviter.com/assets/img/icons/linkedin-icon.png",
        "tumblr": "//socialinviter.com/assets/img/icons/tumblr-icon.png",
        "delicious": "//socialinviter.com/assets/img/icons/delicious-icon.png",
        "googleplus": "//socialinviter.com/assets/img/icons/googleplus-icon.png",
        "foursquare": "//socialinviter.com/assets/img/icons/foursquare-icon.png",
        "mailru": "//socialinviter.com/assets/img/icons/mailru-icon.png",
        "eventbrite": "//socialinviter.com/assets/img/icons/eventbrite-icon.png",
        "mailchimp": "//socialinviter.com/assets/img/icons/mailchimp-icon.png",
        "skyrock": "//socialinviter.com/assets/img/icons/skyrock-icon.png",
        "salesforce": "//socialinviter.com/assets/img/icons/salesforce-icon.png",
        "base": "//socialinviter.com/assets/img/icons/base-icon.png",
        "hubspot": "//socialinviter.com/assets/img/icons/hubspot-icon.png",
        "nimble": "//socialinviter.com/assets/img/icons/nimble-icon.png",
        "podio": "//socialinviter.com/assets/img/icons/podio-icon.png",
        "csv": "//socialinviter.com/assets/img/icons/csv-icon.png",
        "pipedrive": "//socialinviter.com/assets/img/icons/pipedrive-icon.png",
        "zoho": "//socialinviter.com/assets/img/icons/zoho-icon.png",
        "onepage": "//socialinviter.com/assets/img/icons/onepage-icon.png",
        "karma": "//socialinviter.com/assets/img/icons/karma-icon.png",
        "xero": "//socialinviter.com/assets/img/icons/xero-icon.png",
        "contactually": "//socialinviter.com/assets/img/icons/contactually-icon.png",
        "box": "//socialinviter.com/assets/img/icons/box-icon.png",
        "yammer": "//socialinviter.com/assets/img/icons/yammer-icon.png",
        "slack": "//socialinviter.com/assets/img/icons/slack-icon.png",
        "github": "//socialinviter.com/assets/img/icons/github-icon.png",
        "pinterest": "//socialinviter.com/assets/img/icons/pinterest-icon.png",
        "instagram": "//socialinviter.com/assets/img/icons/instagram-icon.png"
    };
    var endpoints = {}, licDatas;
    var portNumber = "56753";
    endpoints.connect = "//socialinviter.com/api/connect.aspx";
    endpoints.contacts = "//socialinviter.com/api/contacts.aspx";
    endpoints.friends = "//socialinviter.com/api/friends.aspx";
    endpoints.upoader = "//socialinviter.com/api/uploader.aspx";
    endpoints.crmcontacts = "//socialinviter.com/api/crmcontacts.aspx";
    endpoints.share = "//socialinviter.com/api/share.aspx";
    endpoints.signature = "//socialinviter.com/api/getsignature.aspx";
    endpoints.iconPath = "//socialinviter.com/assets/img/sicon/";

    var apilinks = {
        "Gmail": "https://code.google.com/apis/console/?pli=1#welcome:",
        "Yahoo": "https://developer.yahoo.com/apps/create/",
        "Aol": "",
        "Hotmail": "https://account.live.com/developers/applications/create?tou=1",
        "Facebook": "https://developers.facebook.com/quickstarts/?platform=web",
        "Linkedin": "https://www.linkedin.com/secure/developer?newapp=",
        "Twitter": "https://apps.twitter.com/app/new",
        "Google": "https://code.google.com/apis/console/?pli=1#welcome:",
        "Googleplus": "https://code.google.com/apis/console/?pli=1#welcome:",
        "Foursquare": "https://foursquare.com/developers/register",
        "Tumblr": "https://www.tumblr.com/oauth/register",
        "Delicious": "https://delicious.com/settings/developer",
        "Mailru": "http://api.mail.ru/sites/my/add",
        "Eventbrite": "http://www.eventbrite.com/myaccount/apps/new/",
        "Mailchimp": "https://us1.admin.mailchimp.com/account/oauth2/client/",
        "Skyrock": "https://www.skyrock.com/developer/application/application_create.php",
        "Box": "https://app.box.com/developers/services/edit/",
        "Yammer": "https://www.yammer.com/client_applications",
        "Slack": "https://api.slack.com/apps/new",
        "Pinterest": "https://www.instagram.com/developer/clients/register/",
        "Github": "https://github.com/settings/applications/new",
        "Instagram": "https://www.instagram.com/developer/clients/register/"
    }


    if (window.location.href.toString().indexOf(portNumber) != -1 && window.location.href.toString().indexOf("toredirect") == -1) {
        endpoints.contacts = "//localhost:" + portNumber + "/socialinviter/api/contacts.aspx";
        endpoints.crmcontacts = "//localhost:" + portNumber + "/socialinviter/api/crmcontacts.aspx";
        endpoints.connect = "//localhost:" + portNumber + "/socialinviter/api/connect.aspx";
        endpoints.friends = "//localhost:" + portNumber + "/socialinviter/api/friends.aspx";
        endpoints.upoader = "//localhost:" + portNumber + "/socialinviter/api/uploader.aspx";
        endpoints.share = "//localhost:" + portNumber + "/socialinviter/api/share.aspx";
        endpoints.signature = "//localhost:" + portNumber + "/socialinviter/api/getsignature.aspx";
    }

    var getConfig = function () {
        return config;
    }
    var setModalConfig = function (val) {
        config.servicepanel.showmodal = val;
    }
    var getServiceConfiguration = function (serv) {
        var len = services.length;
        for (var j = 0; j < len; j++) {
            if (services[j].classRef == serv) {
                return services[j];
            }
        }
    }
    var setAPIKeys = function (api) {
        if (api) {
            putInToStore("apikeys", encodeURIComponent(encodeURIComponent(JSON.stringify(api))));
            var len = services.length;
            for (var j = 0; j < len; j++) {
                var newAPIKey = api[services[j].classRef];
                if (newAPIKey) {
                    services[j].consumerKey = newAPIKey.consumerKey;
                    services[j].consumerSecret = newAPIKey.consumerSecret;
                }
            }
        }
    }
    var whichVersion = function () {
        var len = services.length;
        for (var j = 0; j < len; j++) {
            if (services[j].consumerKey || services[j].consumerKey == "") {
                return "pro";
            }
        }
    }
    var setConfig = function (conf) {
        $(".socialinviter:visible").addClass("temphide").css("display", "none");
        var flagIconLoader = 0;
        if (!config) {
            conf = config;
        }
        if (conf) {
            putInToStore("apiurl");
            putInToStore("apikeys");
            if (conf.alignment || conf.type || conf.position) {
                flagIconLoader = 1;
            }
            if (conf.popup == false) {
                config.servicepanel.authpopup = false;
            }
            else {
                config.servicepanel.authpopup = true;
            }
            if (conf.dock) {
                if (conf.dock == "left") {
                    config.servicepanel.dock = "left";
                    conf.type = "slide",
                        conf.alignment = "Vertical",
                        conf.position = {
                            right: "",
                            left: "wall",
                            top: "100px"
                        }
                }
                else {
                    config.servicepanel.dock = "right";
                    conf.type = "slide",
                        conf.alignment = "Vertical",
                        conf.position = {
                            right: "wall",
                            left: "",
                            top: "100px"
                        }
                }
                if (conf.excludedockservices) {
                    config.servicepanel.excludedockservices = conf.excludedockservices;
                }
            }
            if (conf.apikeys) {
                setAPIKeys(conf.apikeys);
            }

            if (conf.target)
                config.servicepanel.target = conf.target;
            else
                config.servicepanel.target = "popup";

            if (conf.alignment)
                config.servicepanel.alignment = conf.alignment;
            else
                config.servicepanel.alignment = "horizontal";

            if (conf.style) {
                if (conf.style.header) {
                    config.servicepanel.style = { header: {} };
                    if (conf.style.header["background-color"]) {
                        config.servicepanel.style.header["background-color"] = conf.style.header["background-color"];
                    }
                    if (conf.style.header["color"]) {
                        config.servicepanel.style.header["color"] = conf.style.header["color"];
                    }
                }
            }

            if (conf.path) {
                var sendposturl = "";
                if (conf.path.send) {
                    sendposturl = conf.path.send;
                }
                if (!conf.path.css) {
                    var apiurl = (conf.path.apiurl) ? conf.path.apiurl : undefined;
                    var apiuploaderapi = (conf.path.uploaderapi) ? conf.path.uploaderapi : undefined;
                    conf.path = {
                        "css": "//socialinviter.com/",
                        "js": "//socialinviter.com/",
                        "authpage": conf.path.authpage
                    }
                    if (apiurl) {
                        conf.path.apiurl = apiurl;
                    }
                    if (apiuploaderapi) {
                        conf.path.uploaderapi = apiuploaderapi;
                    }
                    putInToStore("csspath", "//socialinviter.com/");
                    putInToStore("jspath", "//socialinviter.com/");
                }
                if (conf.path.css) {
                    config.servicepanel.path.css = conf.path.css;
                    includeStyle(conf.path.css);
                }
                else {
                    includeStyle("./");
                }
                if (conf.path.js) {
                    config.servicepanel.path.js = conf.path.js;
                }
                if (!conf.path.authpage) {
                    var currUrl = window.location.href.split("/");
                    currUrl.pop();
                    conf.path.authpage = currUrl.join("/") + "/";
                }
                if (conf.facebooklink) {
                    config.servicepanel.facebooklink = conf.facebooklink;
                }
                if (conf.path.authpage) {
                    //                conf.path.authpage = conf.path.authpage.replace("oauth.html", "");
                    conf.path.authpage = conf.path.authpage;
                    config.servicepanel.path.oauth = conf.path.authpage;
                    //                oauthpage = conf.path.authpage + oauthpagename;
                    oauthpage = conf.path.authpage;
                    putInToStore("oauthpageurl", oauthpage);
                    var apage = oauthpage.split("/");
                    putInToStore("oauthpage", apage[apage.length - 1]);
                }


                if (conf.path.apiurl) {
                    endpoints.contacts = conf.path.apiurl;
                    endpoints.connect = conf.path.apiurl;
                    endpoints.crmcontacts = conf.path.apiurl;
                    endpoints.friends = conf.path.apiurl;
                    endpoints.upoader = conf.path.apiurl;
                    endpoints.share = conf.path.apiurl;
                    if (conf.path.uploaderapi) {
                        endpoints.upoader = conf.path.uploaderapi;
                    }

                    putInToStore("apiurl", conf.path.apiurl);
                }
                else {
                    putInToStore("apiurl", "");
                }
                if (!config.servicepanel.path.send && sendposturl != "") {
                    config.servicepanel.path.send = sendposturl;
                }
            }


            if (conf.showmore) {
                config.servicepanel.showmore = conf.showmore;
            }
            else {
                config.servicepanel.showmore = false;
            }
            if (conf.content) {
                config.servicepanel.content = $.extend({}, contentObj, conf.content);
            }
            else {
                config.servicepanel.content = contentObj;
            }
            if (conf.urltopostemailrequest && conf.urltopostemailrequest != "") {
                config.servicepanel.urltopostemailrequest = conf.urltopostemailrequest;
            }
            else {
                config.servicepanel.urltopostemailrequest = "";
            }

            if (conf.selectall) {
                config.servicepanel.selectall = true;
            }
            else {
                config.servicepanel.selectall = false;
            }
            if (conf.showsearch == false) {
                config.servicepanel.showsearch = conf.showsearch;
            }
            else {
                config.servicepanel.showsearch = true;
            }

            if (conf.showform == false) {
                config.servicepanel.showform = conf.showform;
            }
            else {
                config.servicepanel.showform = true;
            }

            if (conf.subject) {
                config.servicepanel.subject = conf.subject
            }
            else {
                config.servicepanel.subject = "Lets spread the word!";
            }

            if (conf.message) {
                config.servicepanel.message = conf.message
            }
            else {
                config.servicepanel.message = "Check it out https://socialinviter.com";
            }
            if (conf.showmodal == false) {
                config.servicepanel.showmodal = false;
            }
            else {
                config.servicepanel.showmodal = true;
            }

            if (conf.callbacks) {
                config.callbacks = {};
                if (conf.callbacks.proceed)
                    config.callbacks.proceed = conf.callbacks.proceed
                if (conf.callbacks.send)
                    config.callbacks.send = conf.callbacks.send
                if (conf.callbacks.back)
                    config.callbacks.back = conf.callbacks.back
                if (conf.callbacks.loaded)
                    config.callbacks.loaded = conf.callbacks.loaded
                if (conf.callbacks.fetched)
                    config.callbacks.fetched = conf.callbacks.fetched
                if (conf.callbacks.login)
                    config.callbacks.login = conf.callbacks.login
                if (conf.callbacks.post)
                    config.callbacks.post = conf.callbacks.post
                if (conf.callbacks.beforeSend)
                    config.callbacks.beforeSend = conf.callbacks.beforeSend

            }
            if (conf.position) {
                if (conf.position.left)
                    config.servicepanel.position.left = conf.position.left;
                else
                    config.servicepanel.position.left = "";
                if (conf.position.top)
                    config.servicepanel.position.top = conf.position.top;
                else
                    config.servicepanel.position.top = "";
                if (conf.position.right)
                    config.servicepanel.position.right = conf.position.right;
                else
                    config.servicepanel.position.right = "";
                if (conf.position.bottom)
                    config.servicepanel.position.bottom = conf.position.bottom;
                else
                    config.servicepanel.position.bottom = "";
            }
            if (conf.type == "slide") {
                config.servicepanel.type = conf.type;
                config.servicepanel.target = "popup";
            }
            else if (conf.type == "full") {
                config.servicepanel.type = conf.type;
            }
            else
                config.servicepanel.type = "";
        }

        initialize();
        if (flagIconLoader == 1) {
            configureServicePanel();
        }
        socialinviter.modalSI.init(conf);
        socialinviter.init();
        window.setTimeout(function () {
            $(".temphide").removeClass("temphide").show();
            //$(".temphide").removeClass("temphide").removeAttr("style");
        }, 500);
    }
    var setWindows = function () {
        window.windowCounts = {
            "defaultproduct": $(".socialinviter:not([type])").length,
            "contactimporter": $(".socialinviter[type='contactimporter']").length,
            "crmcontacts": $(".socialinviter[type='crmcontacts']").length,
            "friendsinviter": $(".socialinviter[type='friendsinviter']").length,
            "socialconnect": $(".socialinviter[type='socialconnect']").length,
            "socialpost": $(".socialinviter[type='socialpost']").length
        }
    }
    var setWindowsDefault = function () {
        window.windowCounts.contactimporter = 0;
        window.windowCounts.crmcontacts = 0;
        window.windowCounts.friendsinviter = 0
        window.windowCounts.socialconnect = 0;
        window.windowCounts.socialpost = 0;
    }
    var checkWindows = function () {
        if (window.windowCounts.defaultproduct != $(".socialinviter:not([type])").length ||
            window.windowCounts.contactimporter != $(".socialinviter[type='contactimporter']").length ||
            window.windowCounts.crmcontacts != $(".socialinviter[type='crmcontacts']").length ||
            window.windowCounts.friendsinviter != $(".socialinviter[type='friendsinviter']").length ||
            window.windowCounts.socialpost != $(".socialinviter[type='socialpost']").length ||
            window.windowCounts.socialconnect != $(".socialinviter[type='socialconnect']").length) {
            setWindows();
            return true;
        }
        else {
            return false;
        }
    }
    var destroy = function () {
        $("#socialinviter-template").html("");
        $(".socialinviter").html("");
        $(".modal-SI-CI-BG,.modal-SI-CI,.hasDock").remove();
    }
    var load = function (conf) {
        $(document).ready(function () {
            //        if (!conf) {
            //            conf = {
            //                oauthpagename: "oauth.html"
            //            }
            //        }
            //        if (conf.oauthpagename) {
            //            oauthpagename = conf.oauthpagename;
            //            oauthpage = conf.oauthpagename;
            //            putInToStore("oauthpage", oauthpage);
            //        }
            //        else if (conf) {
            //            putInToStore("oauthpage", oauthpage);
            //        }
            window.clearInterval(window.socialinviterTimer);
            var thisConf = conf
            setConfig(conf);
            setWindows();
            window.timerinterval = 2000;
            window.timercounter = 0;
            window.socialinviterTimer = window.setInterval(function () {
                if ($(".socialinviter:visible").length == 0) {
                    window.timerinterval = 30000;
                    setWindowsDefault();
                }
                else {
                    window.timercounter += 1;
                    if (window.timercounter > 10) {
                        window.timerinterval = 30000;
                    }
                    else {
                        window.timerinterval = 2000;
                    }
                }
                var winLen = $(".socialinviter").length;
                if (winLen > 0 || window.location.href.indexOf(socialinviter.oauthpage) != -1) {
                    if (checkWindows() == true) {
                        socialinviter.initialize();
                    }
                    if ($(".socialinviter[type!='socialconnect']").length > 0 || $(".socialinviter[type!='socialpost']").length > 0 || $(".socialinviter[type!='crmcontacts']").length > 0) {
                        if (socialinviter.getConfig().servicepanel.dock) {
                            $(".hasDock").show();
                        }
                    }
                    else {
                        $(".hasDock").hide();
                    }
                }
                else {
                    $(".modal-SI-CI-BG,.modal-SI-CI").hide();
                    $(".CI-SI-Holder").hide();
                }

            }, window.timerinterval);
            if (window.location.href.indexOf(socialinviter.oauthpage) != -1) {
                window.setTimeout(function () {
                    window.clearInterval(window.socialinviterTimer);
                }, 600);
            }
        });
    }
    var configureServicePanel = function () {
        $(document).ready(function () {
            var sInviters = $(".socialinviter");
            var sLen = sInviters.length;
            if (config.servicepanel.dock) {
                var dockFlag = 0;
                for (var i = 0; i < sLen; i++) {
                    if ((!sInviters.eq(i).attr("type")) || (sInviters.eq(i).attr("type") == "friendsinviter") || (sInviters.eq(i).attr("type") == "contactimporter")) {
                        dockFlag = 1;
                    }
                }
                if (dockFlag == 1) {
                    if ($(".hasDock").length == 0) {
                        if (config.servicepanel.dock) {
                            config.servicepanel.productType = "default";
                            config.servicepanel.appearance = "square";
                            if (config.servicepanel.dock == "left") {
                                config.servicepanel.type = "slide",
                                    config.servicepanel.alignment = "Vertical",
                                    config.servicepanel.position = {
                                        right: "",
                                        left: "wall",
                                        top: "100px"
                                    }
                            }
                            else {
                                config.servicepanel.type = "slide",
                                    config.servicepanel.alignment = "Vertical",
                                    config.servicepanel.position = {
                                        right: "wall",
                                        left: "",
                                        top: "100px"
                                    }
                            }
                        }
                        $("body").append(buildServicePanel());
                        attachEvents();
                    }
                }
            }

            for (var i = 0; i < sLen; i++) {
                //config.servicepanel.dock=undefined;
                var me = sInviters.eq(i);
                config.servicepanel.me = me;
                if (me.attr("alignment") == "vertical") {
                    config.servicepanel.type = "full",
                        config.servicepanel.alignment = "Vertical",
                        config.servicepanel.position = {
                            right: "",
                            left: "wall",
                            top: "200px"
                        }
                }
                else {
                    config.servicepanel.type = "full",
                        config.servicepanel.alignment = "horizontal",
                        config.servicepanel.position = {
                            right: "",
                            left: "wall",
                            top: "200px"
                        }
                }
                if (me.attr("layout") == "small") {
                    config.servicepanel.type = "small";
                }
                else {
                    config.servicepanel.type = "full";
                }
                if (me.attr("text") != undefined && me.attr("text") != "") {
                    config.servicepanel.connecttext = me.attr("text");
                }
                else {
                    if (me.attr("type") == "socialpost") {
                        config.servicepanel.connecttext = "Share on {0}";
                    }
                    else {
                        if (me.attr("type") == "socialconnect") {
                            config.servicepanel.connecttext = "Connect using {0}";
                        }
                        else {
                            config.servicepanel.connecttext = "";
                        }
                    }
                }
                if (me.attr("type") == "socialconnect") {
                    config.servicepanel.productType = "socialconnect";
                }
                else if (me.attr("type") == "contactimporter") {
                    config.servicepanel.productType = "contactimporter";
                }
                else if (me.attr("type") == "crmcontacts") {
                    config.servicepanel.productType = "crmcontacts";
                }
                else if (me.attr("type") == "friendsinviter") {
                    config.servicepanel.productType = "friendsinviter";
                }
                else if (me.attr("type") == "socialpost") {
                    config.servicepanel.productType = "socialpost";
                }
                else {
                    config.servicepanel.productType = "default";
                }
                if (me.attr("appearance") != undefined && me.attr("appearance") != "") {
                    if (me.attr("appearance") == "circle") {
                        config.servicepanel.appearance = "circle";
                    }
                    else if (me.attr("appearance") == "square") {
                        config.servicepanel.appearance = "square";
                    }
                    else {
                        config.servicepanel.appearance = "rounded";
                    }
                }
                else {
                    config.servicepanel.appearance = "rounded";
                }

                me.html(buildServicePanel(true));
                attachEvents(me.attr("layout"));
                if (config.servicepanel.productType == "socialconnect" && config.servicepanel.type != "small") {
                    if (me.find(".foursquare-SC").eq(0).width() > 50) {
                        me.find(".SC-service").width(me.find(".foursquare-SC").eq(0).width() + 2);
                    }
                }
                else if (config.servicepanel.productType == "socialpost" && config.servicepanel.type != "small") {
                    if (me.find(".facebook-SC").eq(0).width() > 50) {
                        me.find(".SC-service").width(me.find(".facebook-SC").eq(0).width() + 2);
                    }
                }
            }
            $(".socialinviter").removeClass("socialinviterloading");
            var topVal = ($(window).height() - $(".dock-leftwall").closest(".CI-SI-ul").closest(".CI-SI-Holder").height()) / 2;
            if (topVal > 100) {
                $(".dock-leftwall,.dock-rightwall").css("top", topVal);
            }
            setResizeFunction();
            if (getQueryString("authprocess", window.location.href) == "done") {
                if (socialinviter.getFromStore("activatefetching") == "yes") {
                    putInToStore("activatefetching", "no");
                    var product = socialinviter.getFromStore("product");
                    if (product != "socialconnect" && product != "socialpost") {
                        var loadtext = socialinviter.getConfig().servicepanel.content.messages.fetchingcontacts;
                        if (product == "friendsinviter") {
                            loadtext = socialinviter.getConfig().servicepanel.content.messages.fetchingfriends;
                        }
                        socialinviter.modalSI.load({ "title": convertName(serv), icon: icons[serv], "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + loadtext + "</span></div>" }, "show");
                    }
                    var authData = socialinviter.getFromStore("authData");
                    authData = eval("(" + decodeURIComponent(decodeURIComponent(authData)) + ")");
                    socialinviter.contactimporter.startgrabbing(authData);
                }
            }
            else if (getQueryString("authprocess", window.location.href) == "error") {
                var authData = socialinviter.getFromStore("authData");
                if (authData && authData != "") {
                    authData = eval("(" + decodeURIComponent(decodeURIComponent(authData)) + ")");
                    socialinviter.contactimporter.setPopupError(authData.responseStatus.message);
                    var errorStatDom = "", productType = "default";
                    productType = socialinviter.getFromStore("product");
                    var authmsg = socialinviter.getConfig().servicepanel.content.messages.authenticationfailed;
                    var linkmsg = socialinviter.getConfig().servicepanel.content.messages.tryagain;
                    var authfunction = "socialinviter.contactimporter.auth";
                    var serv = socialinviter.getFromStore("service");
                    if ((productType == "friendsinviter" || productType == "default") && serviceNotIn(productType, serv)) {
                        authfunction = "socialinviter.friendsinviter.auth";
                    }
                    else if ((productType == "contactimporter" || productType == "default") && serviceNotIn(productType, serv)) {
                        authfunction = "socialinviter.contactimporter.auth";
                    }
                    else if ((productType == "crmcontacts") && serviceNotIn(productType, serv)) {
                        authfunction = "socialinviter.crmcontacts.auth";
                    }
                    else if (productType == "socialconnect" && serviceNotIn(productType, serv)) {
                        authfunction = "socialinviter.socialconnect.auth";
                    }
                    else if (productType == "socialpost" && serviceNotIn(productType, serv)) {
                        authfunction = "socialinviter.socialpost.auth";
                    }
                    if (socialinviter.popuperror != "") {
                        errorStatDom = "<div class=\"error-stat\"><div class=\"model-err-msg\">" + decodeURIComponent(socialinviter.popuperror) + "</div></div>";
                    }
                    if (socialinviter.getConfig().servicepanel.showmodal == false && (productType == "socialpost" || productType == "socialconnect")) {
                        //No modal window
                    }
                    else {
                        socialinviter.modalSI.load({ "title": convertName(socialinviter.getService()), icon: icons[serv], "body": "<div class='CI-loading loaderror'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + authmsg + " <a href=\"javascript:;\" onclick=\"" + authfunction + "('" + socialinviter.contactimporter.getService() + "','" + productType + "',true)\">" + linkmsg + "</a></span>" + errorStatDom + "</div>" }, "show");
                        $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                    }
                    socialinviter.contactimporter.processLock("release");

                    socialinviter.putInToStore("authData", "");
                }
            }
            socialinviter.resize();
            window.setTimeout(function () {
                $(".socialinviter:visible").removeClass("socialinviterloading");
            }, 1000);
        });
    }
    var serviceNotIn = function (productType, serv) {
        if ((productType == "friendsinviter" || productType == "default") && serv != "instagram" && serv != "pinterest" && serv != "github" && serv != "gmail" && serv != "aol" && serv != "yahoo" && serv != "box" && serv != "yammer" && serv != "hotmail" && serv != "outlook" && serv != "csv" && serv != "office365" && serv != "email" && serv != "foursquare" && serv != "linkedin" && serv != "google" && serv != "tumblr" && serv != "delicious" && serv != "mailru" && serv != "eventbrite" && serv != "mailchimp" && serv != "salesforce" && serv != "office365" && serv != "base" && serv != "hubspot" && serv != "nimble" && serv != "podio" && serv != "onepage" && serv != "karma" && serv != "xero" && serv != "contactually" && serv != "pipedrive" && serv != "zoho") {
            return true;
        }
        else if ((productType == "contactimporter" || productType == "default") && serv != "instagram" && serv != "pinterest" && serv != "github" && serv != "xing" && serv != "skyrock" && serv != "google" && serv != "facebook" && serv != "twitter" && serv != "slack" && serv != "foursquare" && serv != "linkedin" && serv != "googleplus" && serv != "tumblr" && serv != "delicious" && serv != "salesforce" && serv != "office365" && serv != "base" && serv != "hubspot" && serv != "nimble" && serv != "podio" && serv != "onepage" && serv != "karma" && serv != "xero" && serv != "contactually" && serv != "pipedrive" && serv != "zoho") {
            return true;
        }
        else if (productType == "socialconnect" && serv != "csv" && serv != "email" && serv != "google" && serv != "aol" && serv != "box" && serv != "yammer" && serv != "xing" && serv != "skyrock" && serv != "gmail" && serv != "tumblr" && serv != "delicious" && serv != "slack" && serv != "mailru" && serv != "eventbrite" && serv != "mailchimp" && serv != "salesforce" && serv != "office365" && serv != "base" && serv != "hubspot" && serv != "nimble" && serv != "podio" && serv != "onepage" && serv != "karma" && serv != "xero" && serv != "contactually" && serv != "pipedrive" && serv != "zoho") {
            return true;
        }
        else if (productType == "socialpost" && serv != "outlook" && serv != "instagram" && serv != "pinterest" && serv != "aol" && serv != "github" && serv != "csv" && serv != "email" && serv != "box" && serv != "yammer" && serv != "google" && serv != "skyrock" && serv != "googleplus" && serv != "gmail" && serv != "slack" && serv != "yahoo" && serv != "hotmail" && serv != "foursquare" && serv != "mailru" && serv != "eventbrite" && serv != "mailchimp" && serv != "salesforce" && serv != "office365" && serv != "base" && serv != "hubspot" && serv != "nimble" && serv != "podio" && serv != "onepage" && serv != "karma" && serv != "xero" && serv != "contactually" && serv != "pipedrive" && serv != "zoho") {
            return true;
        }
        else if ((productType == "crmcontacts") && serv != "xing" && serv != "instagram" && serv != "pinterest" && serv != "aol" && serv != "github" && serv != "email" && serv != "box" && serv != "yammer" && serv != "gmail" && serv != "yahoo" && serv != "hotmail" && serv != "outlook" && serv != "csv" && serv != "slack" && serv != "skyrock" && serv != "facebook" && serv != "twitter" && serv != "foursquare" && serv != "linkedin" && serv != "googleplus" && serv != "google" && serv != "tumblr" && serv != "delicious" && serv != "mailru" && serv != "eventbrite" && serv != "mailchimp") {
            return true;
        }
        return false;
    }
    var attachEvents = function (layout) {
        if (config.servicepanel.dock) {
            $(".dock-leftwall,.dock-rightwall").find(".CI-SI-services").unbind("mouseenter").unbind("mouseleave").mouseenter(function () {
                $(this).find(".CI-SI-text").fadeIn("slow").addClass("CI-SI-text-lines");
            }).mouseleave(function () {
                $(this).find(".CI-SI-text").addClass("CI-SI-text-nolines").removeClass("CI-SI-text-lines")
            });
        }
        if (layout && layout == "small") {
            if ($("nodock .CI-SI-i").eq(0).css("margin-left") != "14px")
                showTextAnimation();
        }
    }
    var showTextAnimation = function () {
        $(".CI-SI-text").hide().removeClass("hide");
        $(".nodock-small .CI-SI-services").unbind("mouseenter").unbind("mouseleave").mouseenter(function () {
            $(this).css({ "font-size": "13px", "text-align": "center", "height": "55px" });
            $(this).find(".CI-SI-text").css({ "float": "left", "margin-top": "-25px", "clear": "both", "opacity": 0, "width": "100%" }).show();
            $(this).find("i").animate({ "margin-top": "3px", "height": "42px" }, 150);
            $(this).find(".CI-SI-text").animate({ "opacity": 1, "margin-top": "-22px" }, 150);

        }).mouseleave(function () {
            $(this).find("i").animate({ "margin-top": "10px", "height": "35px" }, 150);
            $(this).find(".CI-SI-text").animate({ "opacity": 0 }, 50);
            $(this).find(".CI-SI-text").css({ "margin-top": "10px" }).hide();
        });
    }
    var isExcluded = function (me, service, dck) {
        if (dck && dck != "") {
            if (config.servicepanel.excludedockservices) {
                var excluded = config.servicepanel.excludedockservices;
                if (excluded && excluded != "") {
                    if (excluded.toLowerCase().indexOf(service) != -1) {
                        return true;
                    }
                }
            }
        }
        else if (me) {
            var excluded = me.attr("exclude");
            if (excluded && excluded != "") {
                if (excluded.toLowerCase().indexOf(service) != -1) {
                    return true;
                }
            }
        }
        var pdtType = me.attr("type");
        if (!pdtType) {
            pdtType = "contactimporter";
            var servObj = getServicesForProduct(pdtType.toLowerCase());
            var thisServ = convertName(service);
            if (servObj && thisServ) {
                if (servObj[thisServ] == false) {
                    return true;
                }
                pdtType = "friendsinviter";
                servObj = getServicesForProduct(pdtType.toLowerCase());
                if (servObj && servObj[thisServ] == false) {
                    return true;
                }
            }
        }
        else {
            var servObj = getServicesForProduct(pdtType.toLowerCase());
            var thisServ = convertName(service);
            if (thisServ && servObj) {
                if (servObj[thisServ] == false) {
                    return true;
                }
            }
        }
        return false;
    }
    var getServicesForProduct = function (pdt) {
        if (!licDatas) {
            licDatas = eval("(" + decodeURIComponent(decodeURIComponent(socialinviter.getFromStore("licenses"))) + ")");
        }
        if (licDatas) {
            var len = licDatas.length;
            for (var i = 0; i < len; i++) {
                if (licDatas[i].product == pdt) {
                    return licDatas[i].services;
                }
            }
        }
    }
    var buildServicePanel = function (dockFlag) {
        var len = services.length;
        var servicePanelDom = "";
        var pos = "";
        if (config.servicepanel.dock && dockFlag == undefined) {
            pos = "position:fixed;overflow:hidden;";
            if (config.servicepanel.position.left && config.servicepanel.position.left != "") {
                if (config.servicepanel.position.left.toLowerCase() == "wall")
                    pos += "left:0px;"
                else
                    pos += "left:" + config.servicepanel.position.left + ";";
                if (config.servicepanel.position.top.toLowerCase() == "wall")
                    pos += "left:0px;"
                else
                    pos += "top:" + config.servicepanel.position.top + ";";
            }
            else if (config.servicepanel.position.right && config.servicepanel.position.right != "") {
                if (config.servicepanel.position.right.toLowerCase() == "wall")
                    pos += "right:0px;"
                else
                    pos += "right:" + config.servicepanel.position.right + ";";
                if (config.servicepanel.position.top.toLowerCase() == "wall")
                    pos += "left:0px;"
                else
                    pos += "top:" + config.servicepanel.position.top + ";";
            }
            else {
                pos += "left:0px;top:" + ($(window).height() / 2) + ";";
            }
        }
        var alignCls = "horiz", smallVert = "";
        if (config.servicepanel.alignment.toLowerCase() == "vertical") {
            alignCls = "vert";
            if (config.servicepanel.type == "")
                pos += "width: 63px;"
            else if (config.servicepanel.type == "small") {
                smallVert = "smallVert";
            }
        }
        var lineCls = "CI-SI-text-nolines";
        if (config.servicepanel.type == "full") {
            alignCls += " CI-SI-horiz-full";
            lineCls = "CI-SI-text-lines";
        }
        var rightSideFlag = 0;
        if ((config.servicepanel.target == "popup") && ((config.servicepanel.position.right && config.servicepanel.position.right.toLowerCase() == "wall")) && (config.servicepanel.type == "slide")) {
            rightSideFlag = 1;
        }

        var dockcls = "nodock", hasDock = "";
        if (config.servicepanel.dock && dockFlag == undefined) {
            if (config.servicepanel.dock == "left") {
                dockcls = "dock-leftwall";
            }
            else {
                dockcls = "dock-rightwall";
            }
            hasDock = "hasDock";
        }
        else {
            if (config.servicepanel.type == "small") {
                dockcls = "nodock-small"
            }
        }

        var appearance = "square", productType = "default";
        if (config.servicepanel.appearance) {
            appearance = config.servicepanel.appearance;
        }
        if (config.servicepanel.productType) {
            productType = config.servicepanel.productType;
        }
        servicePanelDom += "<div class=\"CI-SI-Holder " + hasDock + "\" style=\"" + pos + "\">";
        servicePanelDom += "<div class=\"CI-SI\">";
        servicePanelDom += "    <ul class=\"CI-SI-ul\">";
        for (var i = 0; i < len; i++) {
            if (isExcluded(config.servicepanel.me, services[i].classRef, hasDock) == false) {
                var gosignal = false;
                var authfunction = "socialinviter.contactimporter.auth";
                var serv = services[i].classRef;
                if ((productType == "friendsinviter" || productType == "default") && serviceNotIn(productType, serv) && (serv == "facebook" || serv == "twitter" || serv == "slack" || serv == "googleplus" || serv == "xing" || serv == "skyrock")) {
                    gosignal = true;
                    authfunction = "socialinviter.friendsinviter.auth";
                }
                else if ((productType == "contactimporter" || productType == "default") && serviceNotIn(productType, serv)) {
                    gosignal = true;
                    authfunction = "socialinviter.contactimporter.auth";
                }
                else if ((productType == "crmcontacts") && serviceNotIn(productType, serv)) {
                    gosignal = true;
                    authfunction = "socialinviter.crmcontacts.auth";
                }
                else if (productType == "socialconnect" && serviceNotIn(productType, serv)) {
                    gosignal = true;
                    authfunction = "socialinviter.socialconnect.auth";
                }
                else if (productType == "socialpost" && serviceNotIn(productType, serv)) {
                    gosignal = true;
                    authfunction = "socialinviter.socialpost.auth";
                }


                if (gosignal) {
                    if ((productType == "socialconnect" || productType == "socialpost") && config.servicepanel.type != "small" && dockFlag != undefined) {
                        var conf = {
                            alignment: "group-horizontal",
                            style: "rounded"
                        }
                        var configuration = {
                            text: config.servicepanel.connecttext
                        }
                        var SCDom1 = "";
                        SCDom1 += "<li class=\"socialinviter-sc-li " + ((conf.alignment == 'group-vertical') ? 'break sc_marTop10' : 'fl') + "\" index=\"" + i + "\">";
                        SCDom1 += "<div class=\"" + services[i].classRef + "-SC fl SC-service " + ((appearance == 'rounded') ? "sc_roundedcorner" : "") + "\"";
                        SCDom1 += " onclick=\"" + authfunction + "('" + services[i].classRef + "')\">";
                        SCDom1 += "<div class=\"SC-service-icon\">";
                        SCDom1 += "<img src=\"//socialinviter.com/assets/img/pluginimg/" + services[i].classRef + "_icon.png\" />";
                        SCDom1 += "</div>";
                        if (conf.iconsep == false) {
                            SCDom1 += "<div class=\"fl SC-service-text sc_nosep\">" + configuration.text.replace("{0}", services[i].title) + "</div>";
                        }
                        else {
                            SCDom1 += "<div class=\"fl SC-service-sep\"></div>";
                            var descrpn = configuration.text.replace("{0}", services[i].title);
                            SCDom1 += "<div class=\"fl SC-service-text\">" + descrpn + "</div>";
                        }
                        SCDom1 += "</div>";
                        SCDom1 += "</li>";
                        servicePanelDom += SCDom1;
                    }
                    else {
                        servicePanelDom += "        <li class=\"CI-SI-ul-li " + dockcls + " pdt" + productType + "\" onclick=\"" + authfunction + "('" + services[i].classRef + "')\">";
                        servicePanelDom += "            <div class=\"CI-SI-services " + smallVert + " CI-SI-shape-" + appearance + " " + ((rightSideFlag == 1) ? "CI-SI-services-rev" : "") + " CI-SI-" + services[i].classRef + " CI-SI-" + alignCls + "\" >";
                        if (rightSideFlag == 0) {
                            servicePanelDom += "            <i class=\"CI-SI-i-" + services[i].classRef + " CI-SI-i\"></i>";
                            //servicePanelDom += "<div class=\"fl posrel\"><div class=\"fl SC-service-sep\"></div></div>";
                        }

                        var sctitle = services[i].title;
                        if ((config.servicepanel.type != "slide") && (config.servicepanel.type != "full")) {

                            if (services[i].classRef == "foursquare") {
                                sctitle = "4Square";
                            }
                            servicePanelDom += "            <div class=\"CI-SI-text hide" + ((rightSideFlag == 1) ? " CI-SI-text-rev" : "") + "\">";
                            servicePanelDom += "                <div class=\"CI-SI-text-line1\">" + sctitle + "</div>";
                        }
                        else {

                            servicePanelDom += "            <div class=\"CI-SI-text " + lineCls + ((rightSideFlag == 1) ? " CI-SI-text-rev" : "") + "\">";
                            servicePanelDom += "                <div class=\"CI-SI-text-line1\">" + sctitle + "</div>";
                        }

                        if ((config.servicepanel.type != "slide") && (config.servicepanel.type != "full"))
                            servicePanelDom += "                <div class=\"CI-SI-text-line2 " + lineCls + "\">" + services[i].desc + "</div>";
                        else {
                            var descrpn = services[i].desc;
                            if (config.servicepanel.connecttext && config.servicepanel.connecttext != "") {
                                descrpn = config.servicepanel.connecttext.replace("{0}", services[i].title);
                            }
                            if (productType == "socialpost") {
                                descrpn = "Share this content"
                            }
                            servicePanelDom += "                <div class=\"CI-SI-text-line2\">" + descrpn + "</div>";
                        }
                        servicePanelDom += "            </div>";
                        if (rightSideFlag == 1)
                            servicePanelDom += "            <i class=\"CI-SI-i-" + services[i].classRef + " CI-SI-i\"></i>";
                        servicePanelDom += "            </div>";
                        servicePanelDom += "        </li>";
                    }
                }
            }
        }
        servicePanelDom += "    </ul>";
        servicePanelDom += "</div>";
        servicePanelDom += "</div>";
        return servicePanelDom;
    }
    var makecall = function (apiurl, noescape) {
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        var filerefUrls = apiurl;
        if (noescape)
            fileref.setAttribute("src", apiurl);
        else
            fileref.setAttribute("src", decodeMe(apiurl));
        try {
            document.body.appendChild(fileref);
        }
        catch (e) {
            document.getElementsByTagName("head")[0].appendChild(fileref)
        }
    }
    var includeStyle = function (cssurl) {
        $("head").append('<link rel="stylesheet" href="' + cssurl + 'all.css">');
    }
    var decodeMe = function (a) {
        a = unescape(a);
        while (a.indexOf("%20") != -1) {
            a = a.replace("%20", "");
        }
        return unescape(a);
    }
    var setPopupError = function (poperr) {
        popuperror = poperr;
        socialinviter.popuperror = poperr;
    }
    var updateapikeys = function (apikey, secretkey, redirecturl) {
        $.ajax({
            type: "POST",
            url: "//socialinviter.com/api/updateapi.aspx",
            data: "userid=" + socialinviter.getFromStore("id") + "&domid=" + socialinviter.getFromStore("domid") + "&apikey=" + apikey + "&secretkey=" + secretkey + "&service=" + socialinviter.getFromStore("service") + "&configured=true&returnurl=" + redirecturl,
            success: function (resp) {
                window.location.href = window.location.href;
            }
        });
    }
    var displayError = function (msg) {
        msg = decodeURIComponent(msg);

        if (msg.indexOf("is missing") != -1) {
            $(".apimissing").show();
            if ($(".apimissing").length > 0) {
                $(".loading").css({ "margin-top": "100px" });
                var serv = socialinviter.getFromStore("service");
                var servName = convertName(serv);
                $(".titleservice").html(servName);
                $("#linkapikey").attr("href", apilinks[servName]);
                $("#linkscreenshot").attr("href", "//socialinviter.com/assets/screenshot/" + serv + ".pdf");
                $("#callbackurl").val(window.location.href.split("?")[0]);
                $(".addbtn").unbind("click").click(function () {
                    var apikey = $("#apikey").val();
                    var apisecret = $("#secretkey").val();
                    var apicallback = $("#callbackurl").val();
                    if ($.trim(apikey) != "" && $.trim(apisecret) != "" && $.trim(apicallback) != "") {
                        $(".apimissing .apierror").hide();
                        updateapikeys(apikey, apisecret, apicallback);
                    }
                    else {
                        $(".apimissing .apierror").show();
                    }
                });
            }
        }
        if (document.getElementById("loadingStatus") != null) {
            document.getElementById("loadingStatus").innerHTML = "<div class='errhldr'><img class='erricn' src='//socialinviter.com/assets/img/icons/alert-icon.png'/><span class='errmsg'>Error:   " + unescape(decodeURIComponent(msg)) + "</span></div>";
        }
        else {
            try { console.log(msg); } catch (e) { };
        }
        $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
    }
    var closepopup = function (accData) {
        var verificationurl = getFromStore("verificationurl")
        if (verificationurl) {
            clearCache();
            window.location.href = verificationurl;
        }
        else {
            var service = getFromStore("service");
            if (service == "onepage" || service == "contactually" || service == "karma" || service == "pipedrive" || service == "zoho") {
                socialinviter.contactimporter.startgrabbing(accData.data);
            }
            else if (window.opener) {
                window.opener.socialinviter.contactimporter.startgrabbing(accData.data);
                window.self.close();
            }
            else {
                //Redirection
                putInToStore("activatefetching", "yes");
                putInToStore("authData", encodeURIComponent(encodeURIComponent(JSON.stringify(accData.data))));
                var homeurl = getFromStore("homeurl");
                if (homeurl) {
                    if (homeurl.indexOf("?") != -1) {
                        homeurl += "&authprocess=done";
                    }
                    else {
                        homeurl += "?authprocess=done";
                    }
                    window.location.href = homeurl;
                }
            }
        }
    }
    var clearCache = function () {
        removeFromStore("service", "/", "." + document.domain);
        removeFromStore("product", "/", "." + document.domain);
        removeFromStore("authData", "/", "." + document.domain);
        removeFromStore("verificationurl", "/", "." + document.domain);
        removeFromStore("toredirect", "/", "." + document.domain);

    }
    var removeFromStore = function (name, path, domain) {
        if (path)
            document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        else
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    var getQueryString = function (name, target) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(target);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    var putInToStore = function (name, value) {
        var c_name = name;
        var exdays = 300;
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        if (document.domain === 'localhost' || document.domain === '127.0.0.1') {
            document.cookie = c_name + "=" + c_value + ";path=/;";
        } else {
            document.cookie = c_name + "=" + c_value + ';domain=' + document.domain + ';path=/;';
        }
    }
    var getFromStore = function (name) {
        var c_name = name;
        var i, x, y, ARRcookies = document.cookie.split(";").reverse();
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }
    var getKeys = function (type) {
        var mykeys = {};
        var thiskeys = getFromStore("userIdentity");
        if (thiskeys) {
            var data = eval("(" + thiskeys + ")").data;
            var len = data.length;
            for (var i = 0; i < len; i++) {
                if (data[i].product == type) {
                    return data[i];
                }
            }
        }
    }
    var hadProductLicense = function (pdt) {
        var hasLic = false;
        var pLicenses = socialinviter.getFromStore("userIdentity");
        if (pLicenses) {
            var pLicObj = eval("(" + decodeURIComponent(decodeURIComponent(pLicenses)) + ")");
            if (pLicObj.data) {
                var len = pLicObj.data.length;
                for (var j = 0; j < len; j++) {
                    if (pLicObj.data[j].product == pdt) {
                        return true;
                    }
                }
            }
        }
        return hasLic;
    }
    var updateUser = function (data) {
        putInToStore("userIdentity", decodeURIComponent(decodeURIComponent(data)));
        data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
        if (data.responseStatus.type == "error") {
            window.invalidkey = data.responseStatus.message;
            removeFromStore("userIdentity", "/", "." + document.domain);
            displayError(data.responseStatus.message);
        }
        else {
            window.invalidkey = "";
            data = data.data;
            putInToStore("licenses", JSON.stringify(data));
            init();
        }
    }
    var scrollToWindow = function () {
        if ($("#socialinviter-template").length > 0) {
            $('body,html').animate({
                // scrollTop: $("#socialinviter-template").offset().top + $("#socialinviter-template").find(".modal-SI-CI").height()-80
                scrollTop: $(".modal-SI-CI").offset().top - 50
            }, 600);
        }
    }
    var convertName = function (name) {
        if (name != "" && name != undefined) {
            var fLetter = name.substr(0, 1).toUpperCase();
            var name_ = name.substr(1, name.length - 1);
            name = fLetter + name_;
        }
        return name;
    }
    var isMobileScreen = function () {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        }
        else {
            return false;
        }
    }
    var initsignaturecall = function (licenseObj) {
        if (licenseObj) {
            putInToStore("frommobile", "1");
            var type = Object.prototype.toString.call(licenseObj);
            if (type == "[object String]") {
                var rurl = socialinviter.endpoints.signature + "?licenses=" + licenseObj + "&callback=socialinviter.loadsignatures" + "&formaturl=" + window.location;
                makecall(rurl);
            }
            else if (type == "[object Array]") {
                var licenses = [];
                var len = list.length;
                for (var i = 0; i < len; i++) {
                    licenses.push(licenseObj[i]);
                }
                var rurl = socialinviter.endpoints.signature + "?licenses=" + licenses.join(",") + "&callback=socialinviter.loadsignatures" + "&formaturl=" + window.location;
                makecall(rurl);
            }
            else {
                processError("Invalid argument");
                return "Invalid argument";
            }
        }
        else {
            processError("License empty");
            return "License empty";
        }
    }
    var getformattedkey = function (lic, data) {
        var len = data.length;
        var license = "";
        for (var i = 0; i < len; i++) {
            if (Object.keys(data[i])[0] == lic)
                license = data[i];
        }
        return license;
    }
    var processError = function (val) {
        if ($("#error").length == 0) {
            $("body").append('<input type="hidden" name="error" id="error"/>');
        }
        $("#error").val(val);
    }
    var loadsignatures = function (data) {
        if (data) {
            if (data.error == "") {
                var len = data.formattedkeys.length;
                var sigObj = {};
                for (var i = 0; i < len; i++) {
                    sigObj[Object.keys(data.formattedkeys[i])[0].toString()] = { "keys": {}, "formattedkey": data.formattedkeys[i][Object.keys(data.formattedkeys[i])[0].toString()] };
                }
                var len = data.apidetails.length;
                if (len == 0) {
                    processError("Something went wrong.");
                    window.location = 'ios:webToNativeCall';
                }
                else {
                    for (var i = 0; i < len; i++) {
                        var obj = {};
                        obj[data.apidetails[i].service] = { "apikey": data.apidetails[i].apikey, "domid": data.apidetails[i].domid, "userid": data.apidetails[i].userid, "secretkey": data.apidetails[i].secretkey };
                        var fkeys = getformattedkey(data.apidetails[i].licensekey, data.formattedkeys);
                        sigObj[data.apidetails[i].licensekey]["keys"][data.apidetails[i].service] = obj[data.apidetails[i].service];
                    }
                    if ($("#formatteddata").length == 0)
                        $("body").append('<input type="hidden" name="formatteddata" id="formatteddata"/>');
                    $("#formatteddata").val(JSON.stringify(sigObj));
                    processError("");
                    window.location.href = 'ios:webToNativeCall';
                }
            }
            else {
                processError("Something went wrong.");
                window.location = 'ios:webToNativeCall';
            }
        }
        else {
            processError("Something went wrong.");
            window.location = 'ios:webToNativeCall';
        }
    }
    var initializeUser = function () {
        if (getQueryString("authprocess", window.location.href) == "done" && socialinviter.getFromStore("activatefetching") == "yes") {
            //Only for auth redirection
        }
        else {
            socialinviter.removeFromStore("service", "/", "." + document.domain);
            socialinviter.removeFromStore("product", "/", "." + document.domain);
            socialinviter.removeFromStore("keys", "/", "." + document.domain);
            socialinviter.removeFromStore("id", "/", "." + document.domain);
            socialinviter.removeFromStore("domid", "/", "." + document.domain);
            socialinviter.removeFromStore("userIdentity", "/", "." + document.domain);
            socialinviter.removeFromStore("verificationurl", "/", "." + document.domain);
            socialinviter.removeFromStore("whichVersion", "/", "." + document.domain);
        }
        var srcUrl = document.getElementById("apiscript").src;
        var key = getQueryString("keys", srcUrl);
        if (socialinviter.whichVersion() == "pro") {
            putInToStore("whichVersion", "pro");
            socialinviter.updateUser(encodeURIComponent(encodeURIComponent('{"data":[{"domid":"1","userid":"1","licensekey":"pro","product":"contactimporter","fbkey":""},{"domid":"1","userid":"1","licensekey":"pro","product":"friendsinviter","fbkey":""},{"domid":"1","userid":"1","licensekey":"pro","product":"socialconnect","fbkey":""},{"domid":"1","userid":"1","licensekey":"pro","product":"socialpost","fbkey":""}],"responseStatus":{"message":"","type":"success"}}')));
        }
        else {
            makecall(endpoints.connect + "?keys=" + key + "&callback=socialinviter.updateUser");
        }
    }
    var initialize = function () {

        if ((getQueryString("keys", window.location.href) == "") && (getQueryString("uploadedstatus", window.location.href) == "") && (getQueryString("domid", window.location.href) == "") && (window.location.href.indexOf(socialinviter.oauthpage) == -1)) {
            if (window.initPlugin) {
                if (socialinviter.getKeys("contactimporter") == undefined && socialinviter.getKeys("crmcontacts") == undefined && socialinviter.getKeys("friendsinviter") == undefined && socialinviter.getKeys("socialconnect") == undefined) {
                    initializeUser();
                }
            }
            else {
                window.initPlugin = true;
                initializeUser();
            }
        }
        else if (window.location.href.indexOf(socialinviter.oauthpage) != -1) {
            initAuth();
        }
    }
    var init = function () {
        if (window.location.href.indexOf(socialinviter.oauthpage) == -1) {
            configureServicePanel()
            window.gmailwin;
            window.poptracker;
            window.pollTimer;
            window.authLock;
            window.sendemailtimer = 0;
        }
        else {
            initAuth();
        }

    }

    var initAuth = function () {
        var apiurl = getFromStore("apiurl");
        var apikeys = getFromStore("apikeys");
        var authCback = getFromStore("oauthpageurl");
        if (apiurl && apiurl != "") {
            endpoints.contacts = apiurl;
            endpoints.crmcontacts = apiurl;
            endpoints.connect = apiurl;
            endpoints.friends = apiurl;
            endpoints.upoader = apiurl;
            endpoints.share = apiurl;
        }
        if (apikeys && apikeys != "") {
            apikeys = eval("(" + decodeURIComponent(decodeURIComponent(apikeys)) + ")");
            setAPIKeys(apikeys);
        }
        if (authCback && authCback != "") {
            config.servicepanel.path.oauth = authCback;
        }
        var service = getQueryString("service", window.location.href);
        var product = getQueryString("product", window.location.href);
        var portal = getQueryString("portal", window.location.href);
        if (document.getElementById("apiscript")) {
            var srcUrl = document.getElementById("apiscript").src;
            var id = getQueryString("id", srcUrl);
            var key = getQueryString("key", srcUrl);
            var did = getQueryString("did", srcUrl);
            var toredirect = getQueryString("toredirect", window.location.href);
            if (id == "" && did == "") {
                if (product == "") {
                    product = getFromStore("product");
                }
                var data = getKeys(product);
                if (toredirect != "") {
                    data = undefined;
                }
                if (data) {
                    id = data.userid;
                    did = data.domid;
                    key = data.licensekey;
                }
                else {
                    id = getQueryString("id", window.location.href);
                    key = getQueryString("key", window.location.href);
                    did = getQueryString("did", window.location.href);
                }
            }
            var endpoint = "";
            if (portal != "") {
                portal = "&portal=" + portal;
            }
            if (product == "") {
                product = getFromStore("product");
            }
            if (product == "contactimporter") {
                endpoint = endpoints.contacts;
            }
            else if (product == "crmcontacts") {
                endpoint = endpoints.crmcontacts;
            }
            else if (product == "friendsinviter") {
                endpoint = endpoints.friends;
            }
            else if (product == "socialconnect") {
                endpoint = endpoints.connect;
            }
            else if (product == "socialpost") {
                endpoint = endpoints.share;
            }
            if (product != "" && service != "") {
                //authentication
                if (document.getElementById("loadingtext") != null) {
                    document.getElementById("loadingtext").innerHTML = "Authenticating";
                }
                clearCache();
                var verificationurl = getQueryString("verification", window.location.href);
                if (verificationurl != "") {
                    putInToStore("verificationurl", verificationurl);
                }
                else {
                    removeFromStore("verificationurl", "/", "." + document.domain);
                }
                if (service) {
                    putInToStore("service", service);
                    putInToStore("product", product);
                    putInToStore("key", key);
                    putInToStore("id", id);
                    putInToStore("domid", did);
                    if (socialinviter.whichVersion() == "pro") {
                        var consumerkey = socialinviter.getServiceConfiguration(service).consumerKey;
                        var consumerSecret = socialinviter.getServiceConfiguration(service).consumerSecret;
                        var oauthpagefullurl = encodeURIComponent(encodeURIComponent(encodeURIComponent(socialinviter.getConfig().servicepanel.path.oauth)));
                        makecall(endpoint + "?type=authentication&redirecturl=" + oauthpagefullurl + "&service=" + service + "&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + product + "&callback=socialinviter.authCallback" + portal);
                    }
                    else {
                        //var toredirect = getQueryString("toredirect", window.location.href);
                        if (toredirect != "") {
                            putInToStore("toredirect", toredirect);
                        }
                        makecall(endpoint + "?id=" + id + "&did=" + did + "&key=" + key + "&product=" + product + "&service=" + service + "&callback=socialinviter.authCallback" + portal);
                    }
                }
            }
            else if ((getQueryString("oauth_token", window.location.href) != "") || getQueryString("code", window.location.href) || getQueryString("access_token", window.location.href)) {
                //accesstoken
                if (document.getElementById("loadingtext") != null) {
                    document.getElementById("loadingtext").innerHTML = "Verifying credentials";
                }
                var authData = socialinviter.contactimporter.getFromStore("authData");
                if (authData) {
                    authData = eval("(" + unescape(unescape(authData)) + ")").data;
                    var constructedData = getInputData(authData);
                    var getAccessUrl = "";
                    if (socialinviter.whichVersion() == "pro") {
                        var consumerkey = socialinviter.getServiceConfiguration(authData.service).consumerKey;
                        var consumerSecret = socialinviter.getServiceConfiguration(authData.service).consumerSecret;
                        var oauthpagefullurl = encodeURIComponent(encodeURIComponent(encodeURIComponent(socialinviter.getConfig().servicepanel.path.oauth)));
                        getAccessUrl = endpoint + "?type=accesstoken&redirecturl=" + oauthpagefullurl + "&service=" + authData.service + "&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + getFromStore("product");
                    }
                    else {
                        getAccessUrl = endpoint + "?id=" + id + "&did=" + did + "&key=" + key + "&service=" + authData.service + "&product=" + getFromStore("product");
                    }
                    getAccessUrl += constructedData + "&callback=socialinviter.accessCallback";
                    var toredirect = getFromStore("toredirect");
                    if (toredirect && toredirect != "") {
                        //                    putInToStore("toredirect", "");
                        //                    removeFromStore("toredirect", "/", "." + document.domain);
                        if (getQueryString("tokensecret", window.location.href) == "") {
                            if (window.location.href.indexOf("tokensecret") != -1) {
                                window.location.href = toredirect + window.location.search.replace("&tokensecret=", "&tokensecret=" + authData.tokensecret);
                            }
                            else {
                                window.location.href = toredirect + window.location.search + "&tokensecret=" + authData.tokensecret;
                            }
                        }
                        else {
                            window.location.href = toredirect + window.location.search + "&tokensecret=" + authData.tokensecret;
                        }
                    }
                    else {
                        makecall(getAccessUrl);
                    }
                }
                else {
                    displayError(escape("Invalid request"));
                }
            }
            else if (getQueryString("uploadedstatus", window.location.href) != "") {
                var uploadedstatus = getQueryString("uploadedstatus", window.location.href);
                if (uploadedstatus != "") {
                    var uploadedObj = eval("(" + uploadedstatus + ")");
                    parent.socialinviter.contactimporter.uploadCallback(uploadedObj);

                }
            }
            else if (getQueryString("emailstatus", window.location.href) != "") {
                var uploadedstatus = getQueryString("emailstatus", window.location.href);
                if (uploadedstatus != "") {
                    parent.socialinviter.contactimporter.messageCallback(uploadedstatus);

                }
            }
            else if (getQueryString("error", window.location.href) == "access_denied") {
                try {
                    if (window.opener) {
                        window.opener.processor.setPopupError("Permission denied");
                    }
                    else {
                        //Redirection
                        var err = "{\"data\":{},\"responseStatus\":{\"message\":\"Permission denied\",\"type\":\"error\"}}";
                        putInToStore("authData", encodeURIComponent(encodeURIComponent(err)));
                        var homeurl = getFromStore("homeurl");
                        if (homeurl) {
                            if (homeurl.indexOf("?") != -1) {
                                homeurl += "&authprocess=error";
                            }
                            else {
                                homeurl += "?authprocess=error";
                            }
                            window.location.href = homeurl;
                        }
                    }
                }
                catch (e) {
                }
                window.self.close();
            }
            else {
                if (window.location.href.indexOf(socialinviter.oauthpage) != -1) {
                    displayError("Invalid request, some parameters are missing.");
                }
            }
        }
        else if (getQueryString("uploadedstatus", window.location.href) != "") {
            var uploadedstatus = getQueryString("uploadedstatus", window.location.href);
            if (uploadedstatus != "") {
                var uploadedObj = eval("(" + uploadedstatus + ")");
                parent.socialinviter.contactimporter.uploadCallback(uploadedObj);
            }
        }
    }
    var authCallback = function (data) {
        putInToStore("authData", "");
        removeFromStore("authData", "/", "." + document.domain);
        putInToStore("authData", decodeURIComponent(decodeURIComponent(data)));
        data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
        if (data.responseStatus.type == "error") {
            removeFromStore("authData", "/", "." + document.domain);
            displayError(data.responseStatus.message);
            if (window.opener) {
                window.opener.socialinviter.contactimporter.setPopupError(data.responseStatus.message);
            }
            else {
                //Redirection
                var homeurl = getFromStore("homeurl");
                if (homeurl) {
                    if (homeurl.indexOf("?") != -1) {
                        homeurl += "&authprocess=error";
                    }
                    else {
                        homeurl += "?authprocess=error";
                    }
                    window.location.href = homeurl;
                }
            }
        }
        else {
            data = data.data;
            if ($.trim(data.authurl) == "")
                displayError("Something went wrong.");
            else {
                putInToStore("tokensecret", data.tokensecret);
                var redPage = $.trim(data.authurl);
                var toredirect = getFromStore("toredirect");
                if (redPage.indexOf("##") != -1) {
                    if (toredirect && toredirect != "") {
                        //                    putInToStore("toredirect", "");
                        //                    removeFromStore("toredirect", "/", "." + document.domain);
                        window.location.href = data.authurl.replace("##", "");
                    }
                    else {
                        var thisPage = window.location.href.toString();
                        thisPage = thisPage.split("?")[0];
                        var redirectUrl = "https://socialinviter.com/oauth.html" + window.location.search + "&toredirect=" + thisPage;
                        //putInToStore("toredirect", thisPage);
                        window.location.href = redirectUrl;
                    }
                }
                else {
                    window.location.href = data.authurl.replace("##", "");
                }
            }
        }
    }
    var accessCallback = function (data) {
        var rawData = data;
        data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
        if (data.responseStatus.type == "error") {
            var service = socialinviter.getFromStore("service");
            if (service == "onepage" || service == "contactually" || service == "karma" || service == "pipedrive" || service == "zoho") {
                $(".txtloginemailerr,.txtloginpasserr").hide();
                $(".directlogin").show();
                $(".CI-loading").hide();
                socialinviter.modalSI.showErrorMessage(decodeURIComponent(data.responseStatus.message));
            }
            else {
                displayError(data.responseStatus.message);
                if (window.opener) {
                    window.opener.socialinviter.setPopupError(data.responseStatus.message);
                }
                else {
                    //Redirection
                    var homeurl = getFromStore("homeurl");
                    if (homeurl) {
                        if (homeurl.indexOf("?") != -1) {
                            homeurl += "&authprocess=error";
                        }
                        else {
                            homeurl += "?authprocess=error";
                        }
                        window.location.href = homeurl;
                    }
                }
            }
        }
        else {
            putInToStore("authData", rawData);
            var service = socialinviter.getFromStore("service");
            setUserSession(service + "session", rawData);
            var isMobile = socialinviter.getFromStore("isMobile");
            if (isMobile == "yes") {
                putInToStore("isMobile", "");
                removeFromStore("isMobile", "/", "." + document.domain);
                if ($("#token").length == 0)
                    $("body").append('<input type="hidden" name="token" id="token"/>');
                $("#token").val(data.data.token);

                if ($("#tokenverifier").length == 0)
                    $("body").append('<input type="hidden" name="tokenverifier" id="tokenverifier"/>');
                $("#tokenverifier").val(data.data.tokenverifier);

                if ($("#tokensecret").length == 0)
                    $("body").append('<input type="hidden" name="tokensecret" id="tokensecret"/>');
                $("#tokensecret").val(data.data.tokensecret);

                if ($("#userid").length == 0)
                    $("body").append('<input type="hidden" name="userid" id="userid"/>');
                $("#userid").val(data.data.userid);
                processError("");
                window.location = 'ios:auth:webToNativeCall';
            }
            else {
                closepopup(data);
            }

        }
    }

    function setUserSession(name, value) {
        var date = new Date();
        date.setTime(date.getTime() + (15 * 60 * 1000)); //30 minutes
        var expires = "; expires=" + date.toGMTString();
        if (document.domain === 'localhost' || document.domain === '127.0.0.1') {
            document.cookie = name + "=" + value + expires + "; path=/";
        } else {
            document.cookie = name + "=" + value + expires + ';domain=.' + document.domain + ';path=/;';
        }
    }
    var getInputData = function (data) {
        var urlValue = "";
        var pageUrl = window.location.href;
        if (getQueryString("tokensecret", window.location.href) != "") {
            data.tokensecret = getQueryString("tokensecret", window.location.href);
        }
        //    if (data.service == "yahoo") {
        //        urlValue = "&token=" + getQueryString("oauth_token", pageUrl) + "&tokenverifier=" + getQueryString("oauth_verifier", pageUrl) + "&tokensecret=" + data.tokensecret;
        //    }
        //    else
        if ((data.service == "twitter") || (data.service == "skyrock") || (data.service == "xero") || (data.service == "xing") || (data.service == "tumblr")) {
            urlValue = "&token=" + getQueryString("oauth_token", pageUrl) + "&tokenverifier=" + getQueryString("oauth_verifier", pageUrl) + "&tokensecret=" + data.tokensecret;
        }
        else if ((data.service == "hubspot")) {
            urlValue = "&token=" + getQueryString("refresh_token", pageUrl) + "&tokenverifier=&tokensecret=";
        }
        else {
            urlValue = "&token=" + getQueryString("code", pageUrl) + "&tokensecret=" + data.tokensecret + "&tokenverifier=";
        }
        return urlValue;
    }
    var getService = function () {
        return socialinviter.getFromStore("service");
    }
    var getProduct = function () {
        return socialinviter.getFromStore("product");
    }
    var resize = function (force) {
        window.setTimeout(function () {
            $(".socialinviter[type='socialconnect'],.socialinviter[type='socialpost'],.socialinviter:not([type])").each(function () {
                var me = $(this);
                if (!me.attr("layout")) {
                    var scObj = me.find(".SC-service");
                    if (scObj.length == 0) {
                        scObj = me.find(".CI-SI-services");
                    }
                    var scLen = scObj.length, newWidy = 0, resizeFlg = 0;
                    for (var i = 0; i < scLen; i++) {
                        scObj.eq(i).removeAttr("style");
                        if (i == 0) {
                            newWidy = scObj.eq(i).width();
                        }
                        if (scObj.eq(i).width() > newWidy) {
                            resizeFlg = 1;
                            newWidy = scObj.eq(i).width();
                        }
                    }
                    if (resizeFlg == 1) {
                        newWidy = newWidy + 2;
                    }
                    scObj.width(newWidy);
                }
            });
        }, ((force) ? force : 1000));
        var socialTempWid = $(".inModal:visible");
        var dockDom = $(".hasDock:visible");
        var winHeight = $(window).height();
        if (dockDom.length > 0) {
            if ((dockDom.height() + 100) < winHeight) {
                dockDom.css("top", parseInt(((winHeight / 2) - (dockDom.height() / 2))) + "px");
            }
        }
        if (socialTempWid.length > 0) {
            if (socialTempWid.width() <= 520) {
                $("head").append("<style type='text/css'>.CI-contact-ul-li-list{width:" + (socialTempWid.width() - 65) + "px !important;}</style>");
            }
            else {
                $("head").append("<style type='text/css'>.CI-contact-ul-li-list{width:48% !important;}</style>");
            }

            var newHei = winHeight - 80;
            var isStep1 = false;
            var isStep2 = false;
            var isFBStep = false;
            var canResize = true;
            if (winHeight < 480) {
                canResize = false;
            }
            if ($(".step1:visible").length > 0) {
                isStep1 = true;
            }
            else if ($(".step2:visible").length > 0) {
                isStep2 = true;
            }
            else if ($(".fbHolder:visible").length > 0) {
                isFBStep = true;
            }


            if ($(window).width() < 450) {
                newHei = winHeight - 20;
                $(".inModal").css("margin-top", "10px");
            }
            if (isStep1 == true) {
                if (canResize == true) {
                    newHei = newHei + 40;
                    $(".inModal").height(newHei);
                }
                var containerHeader = $(".CI-list-container-header:visible");
                var containerStatus = $(".CI-list-container-status:visible");
                var containerFooter = $(".CI-list-container-footer:visible");
                var panelHeader = $(".CI-contact-Panel-header:visible");
                var heights = 0;

                if (containerHeader.length > 0) {
                    heights += containerHeader.height() + 25;
                }
                if (containerStatus.length > 0) {
                    heights += containerStatus.height() + 10;
                }
                if (containerFooter.length > 0) {
                    heights += containerFooter.height() + 8;
                }
                if (panelHeader.length > 0) {
                    heights += panelHeader.height() + 40;
                }
                heights += 25;
                heights += 30;
                if (isStep1 == true && canResize == true) {
                    $(".CI-contact-Panel-body").height(newHei - heights);
                }
            }
            else if (isStep2 == true) {
                if (canResize == true && winHeight < 600) {
                    $(".inModal").height(newHei + 40);
                }
                else if (canResize == true && winHeight >= 600) {
                    $(".inModal").height(550);
                }
                else {
                    $(".inModal").height(450);
                }
                var wrapperHeader = $(".mailing-wrapper-header");
                var torow = $(".torow");
                var subjectrow = $(".subjectrow");
                var messagerow = $(".messagerow .mailing-label");
                var charcount = $(".charcountholder");
                var footer = $(".mailing-footer-holder");
                var newHei = 75;
                newHei += wrapperHeader.height();
                newHei += torow.height();
                newHei += subjectrow.height();
                newHei += messagerow.height();
                newHei += charcount.height();
                newHei += footer.height() + 25;
                newHei = $(".inModal").height() - newHei;
                if ((canResize == false & newHei > 60) || winHeight < 450) {
                    newHei = 60;
                }
                else if (newHei < 25) {
                    newHei = 25;
                }
                $(".mailing-message").height(newHei);
            }
            else if (isFBStep == true) {
                if (canResize == true && winHeight > 470 && winHeight < 670) {
                    $(".inModal").height(newHei + 40);
                }
                var fbWid = $(".inModal").width() - 20;
                $(".fb_dialog_iframe,.fbHolder,.FI-SI-FB-loading").width(fbWid).find("iframe").width(fbWid + 1);
                if (winHeight > 470 && winHeight < 670) {
                    var fbHei = $(window).height() - 95;
                    $(".FI-SI-FB-loading").height(230);
                    $(".fb_dialog_iframe,.fbHolder").height(fbHei).find("iframe").height(fbHei + 1);
                }
            }
            else if ($(".inModal").find(".CI-loading:visible").length > 0) {
                var fbHei = $(window).height() - 40;
                $(".inModal").height(fbHei);
            }
        }

    }
    var setResizeFunction = function () {
        if (!window.resizeFlag) {
            window.resizeFlag = true;
            $(window).resize(function () {
                socialinviter.resize();
            });
            $(document).keyup(function (e) {
                if (e.keyCode == 27) {
                    if ($(".inModal:visible").length > 0)
                        $(".modal-SI-CI").find('.modal-SI-close').click();
                }   // esc
            });
        }
    }

    var contactimporter = (function () {
        window.invalidkey = "";
        var addressbookData = {}, selectedAddressbookData = {}, selectedMailService = "", allImportedContacts = "", addedrecipient = [];
        var getAuthFunction = function () {
            var authfunction = "socialinviter.contactimporter.auth";
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                authfunction = "socialinviter.friendsinviter.auth";
            }
            else if (socialinviter.getFromStore("product") == "contactimporter") {
                authfunction = "socialinviter.contactimporter.auth";
            }
            else if (socialinviter.getFromStore("product") == "crmcontacts") {
                authfunction = "socialinviter.crmcontacts.auth";
            }
            else if (socialinviter.getFromStore("product") == "socialconnect" && socialinviter.getFromStore("service") != "outlook" && socialinviter.getFromStore("service") != "email" && socialinviter.getFromStore("service") != "xing" && socialinviter.getFromStore("service") != "skyrock" && socialinviter.getFromStore("service") != "gmail") {
                authfunction = "socialinviter.socialconnect.auth";
            }
            else if (socialinviter.getFromStore("product") == "socialpost") {
                authfunction = "socialinviter.socialpost.auth";
            }
            return authfunction;
        }
        var contactsCallback = function (data) {
            var dataStr = data;
            try {
                data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
            }
            catch (e) {

                data = { responseStatus: { type: "error", message: "Something went wrong, Please <a href=\"javascript:;\" onclick=\"" + getAuthFunction() + "('" + socialinviter.contactimporter.getService() + "','contactimporter')\">try again.</a>" }, data: { service: socialinviter.contactimporter.getService()} };
            }
            if (data.responseStatus.type == "error") {
                socialinviter.modalSI.load({ "title": convertName(data.data.service), "body": "<div class='CI-loading'>" + decodeURIComponent(data.responseStatus.message) + "</div>" }, "show");
                $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
            }
            else {
                var ciholder = $(".modal-SI-CI");
                if ($(".grabbedcicontacts").length == 0) {
                    $("body").append("<div class=\"posabs grabbedcicontacts\"></div>");
                    $(".grabbedcicontacts").attr("contacts", dataStr);
                }
                else {
                    $(".grabbedcicontacts").attr("contacts", dataStr);
                }
                allImportedContacts = "";
                window.setTimeout(function () {
                    var contactsData = data.data;
                    if (!window.modelHidden) {
                        var goload = true;
                        if (socialinviter.getConfig().callbacks) {
                            if (socialinviter.getConfig().callbacks.fetched) {
                                var retStat;
                                if (socialinviter.getProduct() == "friendsinviter") {
                                    retStat = socialinviter.getConfig().callbacks.fetched(contactsData.service, contactsData.friends, socialinviter.getProduct());
                                }
                                else {
                                    retStat = socialinviter.getConfig().callbacks.fetched(contactsData.service, contactsData.addressbook, socialinviter.getProduct());
                                }
                                if (retStat == false) {
                                    goload = false;
                                }
                            }
                        }
                        if (goload) {
                            var ldtext = socialinviter.getConfig().servicepanel.content.messages.loadingcontacts;
                            if (socialinviter.getFromStore("product") == "friendsinviter") {
                                ldtext = socialinviter.getConfig().servicepanel.content.messages.loadingfriends;
                            }
                            socialinviter.modalSI.load({ "title": convertName(data.data.service), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + ldtext + "</span></div>" }, "show");
                            window.setTimeout(function () {
                                socialinviter.contactimporter.showStep1(data.data);
                            }, 1500);
                        }
                        else {
                            ldtext = socialinviter.getConfig().servicepanel.content.messages.contactsimported;
                            socialinviter.modalSI.load({ "title": convertName(data.data.service), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/tickcomplete.png'></span><span>" + ldtext.replace("{0}", contactsData.addressbook.length) + "</span></div>" }, "show");
                        }
                    }
                }, 1);
            }
        }
        var uploadCallback = function (data) {
            if (data.responseStatus.type == "error") {
                socialinviter.modalSI.load({ "title": "", "body": "<div class='CI-loading'>" + data.responseStatus.message + "</div>" }, "show");
                $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
            }
            else {
                var ciholder = $(".modal-SI-CI");
                ciholder.find(".upload-SI-loading").hide();
                startgrabbing({ token: "", tokensecret: "", tokenverifier: "", userid: "", uploadedfile: data.data.uploadedFileUrl });
            }
        }
        var submitUploading = function (check) {
            var ciholder = $(".modal-SI-CI");
            if (!check) {
                ciholder.find(".upload-SI-loading").show();
            }
            if (document.getElementById("fupload").value == "") {
                $(".upload-SI-loading").hide();
                $(".upload-SI-error-panel").find(".model-err-msg").html(socialinviter.getConfig().servicepanel.content.csv.validation.selectfile);
                $(".upload-SI-error-panel").show();
                document.getElementById("fupload").value = "";
                $("#fupload").focus();
                return false;
            }
            else {
                var flag = 0;
                if ((document.getElementById("fupload").value.lastIndexOf(".csv") != -1) || (document.getElementById("fupload").value.lastIndexOf(".CSV") != -1))
                    flag = 1;

                if (flag == 0) {
                    $(".upload-SI-loading").hide();
                    $(".upload-SI-error-panel").find(".model-err-msg").html(socialinviter.getConfig().servicepanel.content.csv.validation.wrongupload);
                    $(".upload-SI-error-panel").show();
                    document.getElementById("fupload").value = "";
                    $("#fupload").focus();
                    return false;
                }
                else {
                    document.getElementById("pluginloc").value = socialinviter.getConfig().servicepanel.path.oauth;
                    $(".upload-SI-error-panel").find(".model-err-msg").html("");
                    $(".upload-SI-error-panel").hide();
                    return true;
                }
            }
        }

        var startgrabbing = function (authData) {
            socialinviter.contactimporter.processLock("release");
            var srcUrl = document.getElementById("apiscript").src;
            var id = getQueryString("id", srcUrl);
            var key = getQueryString("key", srcUrl);
            var did = getQueryString("did", srcUrl);
            var product = socialinviter.getFromStore("product");
            if (id == "" && did == "") {
                var data = socialinviter.getKeys(product);
                id = data.userid;
                did = data.domid;
                key = data.licensekey;
            }
            var endpoint = "";

            if (product == "contactimporter") {
                endpoint = socialinviter.endpoints.contacts;
            }
            else if (product == "crmcontacts") {
                endpoint = socialinviter.endpoints.crmcontacts;
            }
            else if (product == "friendsinviter") {
                endpoint = socialinviter.endpoints.friends;
            }
            else if (product == "socialconnect") {
                endpoint = socialinviter.endpoints.connect;
            }
            else if (product == "socialpost") {
                endpoint = socialinviter.endpoints.share;
            }
            var serv = socialinviter.getFromStore("service");
            if (authData) {
                if (product != "socialconnect" && product != "socialpost") {
                    var loadtext = socialinviter.getConfig().servicepanel.content.messages.fetchingcontacts;
                    if (product == "friendsinviter") {
                        loadtext = socialinviter.getConfig().servicepanel.content.messages.fetchingfriends;
                    }
                    socialinviter.modalSI.load({ "title": convertName(serv), icon: icons[serv], "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + loadtext + "</span></div>" }, "show");
                }
                var reqParam = "&token=" + authData.token + "&tokensecret=" + authData.tokensecret + "&tokenverifier=" + authData.tokenverifier + "&userid=" + ((authData.userid) ? authData.userid : (authData.user) ? authData.user : "");
                if (serv == "csv")
                    reqParam += "&uploadedfile=" + authData.uploadedfile;
                else
                    reqParam += "&uploadedfile=";
                var grabAPI = "";
                if (product == "socialconnect") {
                    if (socialinviter.getConfig().servicepanel.showmodal == false && (product == "socialpost" || product == "socialconnect")) {
                        //No modal window
                    }
                    else {
                        socialinviter.modalSI.load({ "title": convertName(serv), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + socialinviter.getConfig().servicepanel.content.messages.fetchingprofile + "</span></div>" }, "show");
                        $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                    }
                    grabAPI = endpoint + "?id=" + id + "&did=" + did + "&product=" + getFromStore("product") + "&key=" + key + "&service=" + serv + "&type=&callback=socialinviter.socialconnect.userinfoCallback" + reqParam;
                }
                else if (product == "socialpost") {
                    if (socialinviter.getConfig().servicepanel.showmodal == false && (product == "socialpost" || product == "socialconnect")) {
                        //No modal window
                    }
                    else {
                        socialinviter.modalSI.load({ "title": convertName(serv), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + socialinviter.getConfig().servicepanel.content.messages.postingtowall + "</span></div>" }, "show");
                        $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                    }
                    var spValues = socialinviter.socialpost.getPostValues();
                    reqParam += "&title=" + spValues.title + "&link=" + spValues.link + "&picture=" + spValues.picture + "&description=" + spValues.description + "&comment=" + spValues.comment;
                    grabAPI = endpoint + "?id=" + id + "&did=" + did + "&product=" + getFromStore("product") + "&key=" + key + "&service=" + serv + "&type=&callback=socialinviter.socialpost.postCallback" + reqParam;
                }
                else {
                    grabAPI = endpoint + "?id=" + id + "&did=" + did + "&product=" + getFromStore("product") + "&key=" + key + "&service=" + serv + "&type=&callback=socialinviter.contactimporter.contactsCallback" + reqParam;
                }
                if (socialinviter.whichVersion() == "pro") {
                    var consumerkey = socialinviter.getServiceConfiguration(serv).consumerKey;
                    var consumerSecret = socialinviter.getServiceConfiguration(serv).consumerSecret;
                    if (product == "socialconnect") {
                        grabAPI = endpoint + "?type=profile&service=" + serv + "&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + getFromStore("product") + "&callback=socialinviter.socialconnect.userinfoCallback" + reqParam;
                    }
                    else if (product == "socialpost") {
                        grabAPI = endpoint + "?type=post&service=" + serv + "&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + getFromStore("product") + "&callback=socialinviter.socialpost.postCallback" + reqParam;
                    }
                    else if (product == "friendsinviter") {
                        grabAPI = endpoint + "?type=friends&service=" + serv + "&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + getFromStore("product") + "&callback=socialinviter.contactimporter.contactsCallback" + reqParam;
                    }
                    else {
                        grabAPI = endpoint + "?type=contacts&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + getFromStore("product") + "&service=" + serv + "&callback=socialinviter.contactimporter.contactsCallback" + reqParam;
                    }
                }

                if (grabAPI.indexOf("redirecturl") == -1) {
                    var oauthpagefullurl = encodeURIComponent(encodeURIComponent(encodeURIComponent(socialinviter.getConfig().servicepanel.path.oauth)));
                    grabAPI += "&redirecturl=" + oauthpagefullurl;
                }
                makecall(grabAPI);
            }
            else {
                socialinviter.modalSI.showErrorMessage("Invalid request: something went wrong.");
            }
        }

        var processLock = function (lck) {
            if (lck == "release")
                window.authLock = 0;
            else
                window.authLock = 1;
            return window.authLock;
        }
        var auth = function (service, product, force, ishubspot) {
            if (!product) {
                product = "contactimporter";
            }
            thiselectedpdt = product;
            socialinviter.popuperror = "";
            //if (iconclick) {
            addressbookData = {};
            selectedAddressbookData = { "addressbook": [], "friends": [], "service": service };
            addedrecipient = [];
            //}
            selectedMailService = service;
            putInToStore("product", product);
            putInToStore("service", service);
            putInToStore("toredirect", "");
            socialinviter.contactimporter.processLock("lock");
            try { window.clearInterval(window.gmailwin); } catch (e) { }
            try { window.clearInterval(window.pollTimer); } catch (e) { }
            if (hadProductLicense(product) == false && socialinviter.whichVersion() != "pro") {
                var errorStatDom = "<div class=\"error-stat\"><div class=\"model-err-msg\">Invalid license key</div></div>";
                socialinviter.modalSI.load({ "title": convertName(service), "icon": icons[service], "body": "<div class='CI-loading'>License key might have expired or invalid." + errorStatDom + "</div>" }, "show");
                $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                return true;
            }
            var authmsg = socialinviter.getConfig().servicepanel.content.messages.authprogress;
            if (authmsg.indexOf("{0}") != -1) {
                authmsg = authmsg.replace("{0}", convertName(service));
            }
            if (service == "csv") {
                socialinviter.modalSI.load({ "title": convertName(service), "icon": icons[service], "body": "<div class='CI-loading'>Please authenticate your " + convertName(service) + " account, make sure the authenticating window is not blocked by popup blocker.</div>" }, "show");
                $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                scrollToWindow();
                showcsvupload();
            }
            else if (service == "facebook" && product == "friendsinviter") {
                var FBAPIkey = "";
                if (socialinviter.whichVersion() == "pro") {
                    FBAPIkey = socialinviter.getServiceConfiguration(service).consumerKey;
                }
                else {
                    FBAPIkey = socialinviter.getKeys("friendsinviter").fbkey;
                }
                if (FBAPIkey && FBAPIkey != "" && FBAPIkey != "undefined") {
                    $("#fb-root").html(" ");
                    FB = undefined;
                    delete FB;
                    socialinviter.modalSI.load({ "title": convertName(service), "icon": icons[service], "body": "<div class=\"fbHolder hide\"><div id=\"fb-root\"></div></div><div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + authmsg + "</span></div>" }, "show");
                    fbinitilize(FBAPIkey);
                }
                else {
                    var errorStatDom = "<div class=\"error-stat\"><div class=\"model-err-msg\">Facebook API key is missing, please add it</div></div>";
                    var authmsg = socialinviter.getConfig().servicepanel.content.messages.authenticationfailed;
                    var linkmsg = socialinviter.getConfig().servicepanel.content.messages.tryagain;
                    socialinviter.modalSI.load({ "title": convertName(service), "icon": icons[service], "body": "<div class='CI-loading'><span class='messagingicon'><img clear='imgloading' src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + authmsg + " <a href=\"javascript:;\" onclick=\"socialinviter.contactimporter.reFetchFBkey();\">" + linkmsg + "</a></span>" + errorStatDom + "</div>" }, "show");
                }
                $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                scrollToWindow();
            }
            else if (service == "email") {
                socialinviter.modalSI.load({ "title": convertName(service), "icon": icons[service], "body": "<div class='CI-loading'><span class='messagingicon'><img src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + authmsg + "</span></div>" }, "show");
                $(".CI-loading").hide();
                scrollToWindow();
                socialinviter.contactimporter.showStep2("email");
                if ($(".mailing-step-count").length > 0) {
                    var stp1 = socialinviter.getConfig().servicepanel.content.navigation.replace("{0}", "1").replace("{1}", "1");
                    $(".mailing-step-count").html(stp1);
                }
                $(".mailing-footer-back").hide();
                $(".modal-SI-CI").find(".toaddresserror").hide();
                $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
            }
            else {
                if (socialinviter.getConfig().servicepanel.showmodal == false && (product == "socialpost" || product == "socialconnect")) {
                    //No modal window
                }
                else {
                    socialinviter.modalSI.load({ "title": socialinviter.getConfig().servicepanel.content.messages.authenticating, "icon": icons[service], "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/loadingwhite.gif'></span><span>" + authmsg + "</span></div>" }, "show");
                    $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                    scrollToWindow();
                }
                var srcUrl = document.getElementById("apiscript").src;
                var id = getQueryString("id", srcUrl);
                var key = getQueryString("key", srcUrl);
                var did = getQueryString("did", srcUrl);
                if (id == "" && did == "") {
                    var data = socialinviter.getKeys(product);
                    if (data) {
                        id = data.userid;
                        did = data.domid;
                        key = data.licensekey;
                    }
                    else {
                        socialinviter.modalSI.load({ "title": convertName(service), "icon": icons[service], "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>Unable to find " + product + " license key, please make sure you have added the license to script reference.</span></div>" }, "show");
                        //<div class='licensescripthighlighter'> &lt;script type=\"text/javascript\" id=\"apiscript\" src=\"all.js?keys=<span class='yourlic'>your license key here</span>\"&gt;&lt;/script&gt;</div>
                        $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                        return true;
                    }
                }
                socialinviter.resize();
                putInToStore("id", data.userid);
                putInToStore("domid", data.domid);
                putInToStore("csspath", socialinviter.getConfig().servicepanel.path.css);
                putInToStore("jspath", socialinviter.getConfig().servicepanel.path.js);
                var authNow = 1;
                if (socialinviter.getFromStore(service + "session") && force != true) {
                    var rawData = socialinviter.getFromStore(service + "session");
                    var userSession = eval("(" + decodeURIComponent(decodeURIComponent(rawData)) + ")");
                    putInToStore("authData", rawData);
                    if (userSession.data.token && userSession.data.token != "") {
                        authNow = 0;
                        socialinviter.contactimporter.startgrabbing(userSession.data);
                    }
                }
                if (authNow == 1) {
                    var authPOP = socialinviter.getConfig().servicepanel.authpopup;
                    if ((service == "hubspot" && !ishubspot) || service == "onepage" || service == "contactually" || service == "karma" || service == "pipedrive" || service == "zoho") {
                        $(".CI-loading").hide();
                        $(".title-modal-text").html("Login")
                        if ($(".directlogin").length == 0) {
                            var loginDom = "<div class='directlogin'><table align='center'>";
                            if (service == "hubspot") {
                                loginDom += "<tr><td class='dirlbl'>Portal id</td><td><input type='text' placeholder='Enter your portal id' id='txtloginportal'/><div class='dirloginerror txtloginportalerr'>Enter your portal ID</div></td></tr>";
                            }
                            else {
                                loginDom += "<tr><td class='dirlbl'>Email</td><td><input type='text' placeholder='Enter email' id='txtloginemail'/><div class='dirloginerror txtloginemailerr'>Enter login email</div></td></tr>";
                            }
                            if (service != "hubspot") {
                                loginDom += "<tr><td class='dirlbl'>Password</td><td><input type='password' placeholder='Enter password' id='txtloginpass'/><div class='dirloginerror txtloginpasserr'>Enter login password</div></td></tr>";
                            }
                            loginDom += "<tr><td class='dirlbl'></td><td><input type='button' id='btndirectlogin' value='Login'/><div class='dirloginnote'>Note: We don't store your login information.</div></td></tr>";
                            loginDom += "</table></div>";
                            $(".modal-SI-body").append(loginDom);
                        }
                        else {
                            $(".directlogin").show();
                        }
                        $('#txtloginemail,#txtloginportal,#txtloginpass').keyup(function (e) {
                            if (e.keyCode == 13) {
                                if (socialinviter.getService() == "hubspot") {
                                    if ($.trim($(this).val()) != "") {
                                        $("#btndirectlogin").click();
                                    }
                                }
                                else {
                                    if ($.trim($("#txtloginemail").val()) != "" && $.trim($("#txtloginpass").val()) != "") {
                                        $("#btndirectlogin").click();
                                    }
                                }
                            }
                        });
                        $("#btndirectlogin").unbind("click").click(function () {
                            var endpoint = "";
                            var product = getFromStore("product");
                            if (product == "contactimporter") {
                                endpoint = socialinviter.endpoints.contacts;
                            }
                            else if (product == "friendsinviter") {
                                endpoint = socialinviter.endpoints.friends;
                            }
                            else if (product == "socialconnect") {
                                endpoint = socialinviter.endpoints.connect;
                            }
                            else if (product == "crmcontacts") {
                                endpoint = socialinviter.endpoints.crmcontacts;
                            }
                            $(".txtloginemailerr,.txtloginpasserr,.txtloginportalerr").hide();
                            if (getFromStore("service") == "hubspot") {
                                if ($.trim($("#txtloginportal").val()) != "") {
                                    putInToStore("portal", $("#txtloginportal").val());
                                    socialinviter.contactimporter.auth('hubspot', "crmcontacts", undefined, true)
                                }
                                else {
                                    $(".txtloginportalerr").show().html("Enter your portal ID.");
                                }
                            }
                            else {
                                var dlflg = 0;
                                if ($.trim($("#txtloginemail").val()) == "") {
                                    $(".txtloginemailerr").show();
                                    dlflg = 1;
                                }
                                if ($.trim($("#txtloginpass").val()) == "") {
                                    $(".txtloginpasserr").show();
                                    dlflg = 1;
                                }
                                if (dlflg == 0) {
                                    $(".CI-loading").show().find("span[class!='messagingicon']").html("Logging in to your account");
                                    $(".directlogin").hide();
                                    var getLoginUrl = "";
                                    if (socialinviter.whichVersion() == "pro") {
                                        var consumerkey = socialinviter.getServiceConfiguration(authData.service).consumerKey;
                                        getLoginUrl = endpoint + "?type=login&service=" + authData.service + "&consumerkey=" + consumerkey + "&product=" + getFromStore("product") + "&email=" + $.trim($("#txtloginemail").val()) + "&password=" + $.trim($("#txtloginpass").val());
                                    }
                                    else {
                                        getLoginUrl = endpoint + "?id=" + id + "&did=" + did + "&key=" + key + "&email=" + $.trim($("#txtloginemail").val()) + "&password=" + $.trim($("#txtloginpass").val()) + "&service=" + getFromStore("service") + "&product=" + getFromStore("product");
                                    }
                                    getLoginUrl += "&callback=socialinviter.accessCallback";
                                    if (getLoginUrl.indexOf("redirecturl") == -1) {
                                        var oauthpagefullurl = encodeURIComponent(encodeURIComponent(encodeURIComponent(socialinviter.getConfig().servicepanel.path.oauth)));
                                        getLoginUrl += "&redirecturl=" + oauthpagefullurl;
                                    }
                                    makecall(getLoginUrl);

                                }
                            }
                        });
                    }
                    else if (authPOP == false || (authPOP != false && $(window).width() < 760)) {
                        var homeurl = window.location.href.toString().replace("&authprocess=done", "").replace("&authprocess=error", "");
                        homeurl = homeurl.replace("?authprocess=done", "").replace("?authprocess=error", "");
                        putInToStore("homeurl", homeurl);
                        var portal = "";
                        if (service == "hubspot") {
                            portal = "&portal=" + $("#txtloginportal").value;
                        }
                        window.location.href = socialinviter.getConfig().servicepanel.path.oauth + "?key=" + key + "&id=" + id + "&did=" + did + "&service=" + service + "&product=" + product + portal
                    }
                    else {
                        var portal = "";
                        if (service == "hubspot") {
                            portal = "&portal=" + socialinviter.getFromStore("portal");
                        }
                        var w_  = 700;
                        var h_ = 600;
                        var left_ = (window.screen.width / 2) - ((w_ / 2) + 10);
                        var top_ = (window.screen.height / 2) - ((h_ / 2) + 50);
                        window.poptracker = window.open(socialinviter.getConfig().servicepanel.path.oauth + "?key=" + key + "&id=" + id + "&did=" + did + "&service=" + service + "&product=" + product + portal, "", "width=700, height=600,left="+ left_ + ",top=" + top_ + ",screenX=" + left_ + ",screenY="+ top_);
                        window.clearInterval(window.pollTimer);
                        window.pollTimer = window.setInterval(function () {
                            if (window.poptracker == undefined) {
                                window.clearInterval(window.pollTimer);
                                socialinviter.modalSI.load({ "title": convertName(socialinviter.contactimporter.getService()), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/alertmsg.png'></span><span>" + socialinviter.getConfig().servicepanel.content.messages.popupblock + "</span></div>" }, "show", "fast");
                                $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                            }
                            else if (window.poptracker.closed !== false) { // !== is required for compatibility with Opera
                                window.clearInterval(window.pollTimer);
                                if (window.authLock == 1) {
                                    var errorStatDom = "";
                                    if (socialinviter.popuperror != "")
                                        errorStatDom = "<div class=\"error-stat\"><div class=\"model-err-msg\">" + decodeURIComponent(socialinviter.popuperror) + "</div></div>";
                                    var authfunction = "socialinviter.contactimporter.auth";
                                    var thisService = socialinviter.getFromStore("service");
                                    var myproduct = socialinviter.getFromStore("product");
                                    if (myproduct == "friendsinviter") {
                                        authfunction = "socialinviter.friendsinviter.auth";
                                    }
                                    else if (myproduct == "contactimporter") {
                                        authfunction = "socialinviter.contactimporter.auth";
                                    }
                                    else if (myproduct == "crmcontacts") {
                                        authfunction = "socialinviter.crmcontacts.auth";
                                    }
                                    else if (myproduct == "socialconnect" && thisService != "csv" && thisService != "email" && thisService != "xing" && thisService != "skyrock" && thisService != "gmail") {
                                        authfunction = "socialinviter.socialconnect.auth";
                                    }
                                    else if (myproduct == "socialpost") {
                                        authfunction = "socialinviter.socialpost.auth";
                                    }
                                    var authmsg = socialinviter.getConfig().servicepanel.content.messages.authenticationfailed;
                                    var linkmsg = socialinviter.getConfig().servicepanel.content.messages.tryagain;
                                    if (socialinviter.getConfig().servicepanel.showmodal == false && (myproduct == "socialpost" || myproduct == "socialconnect")) {
                                        //No modal window
                                    }
                                    else {
                                        var portal_;
                                        if (socialinviter.getFromStore("service") == "hubspot") {
                                            socialinviter.modalSI.load({ "title": convertName(socialinviter.contactimporter.getService()), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + authmsg + " <a href=\"javascript:;\" onclick=\"" + authfunction + "('" + socialinviter.contactimporter.getService() + "','" + myproduct + "')\">" + linkmsg + "</a></span>" + errorStatDom + "</div>" }, "show");
                                        }
                                        else {
                                            socialinviter.modalSI.load({ "title": convertName(socialinviter.contactimporter.getService()), "body": "<div class='CI-loading'><span class='messagingicon'><img class='imgloading' src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + authmsg + " <a href=\"javascript:;\" onclick=\"" + authfunction + "('" + socialinviter.contactimporter.getService() + "','" + myproduct + "',true)\">" + linkmsg + "</a></span>" + errorStatDom + "</div>" }, "show");
                                        }
                                        $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                                    }
                                    socialinviter.contactimporter.processLock("release");
                                }
                            }
                        }, 200);
                    }
                }
            }
        }
        var FBCallback = function (data) {
            if (data.responseStatus.type != "error") {
                putInToStore("fbAPIkey", data.data.fbkey);
                socialinviter.friendsinviter.auth('facebook');
            }
        }
        var reFetchFBkey = function () {
            var srcUrl = document.getElementById("apiscript").src;
            var key = getQueryString("keys", srcUrl);
            makecall(socialinviter.endpoints.connect + "?keys=" + key + "&callback=socialinviter.FBCallback");
        }
        var fbinitilize = function (appid) {
            /*window.fbAsyncInit = function() {
        FB.init({
        appId      : appid,
        xfbml      : true,
        version    : 'v2.5'
        });
        };

        (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        */
            window.fbAsyncInit = function () {
                FB.init({
                    appId: appid,
                    status: true,
                    cookie: true,
                    xfbml: true
                });
            };
            (function () {
                var ef = document.createElement('script'); ef.async = true;
                ef.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
                document.getElementById('fb-root').appendChild(ef);
            } ());
            window.setTimeout(function () {
                if (typeof FB != "undefined") {
                    loginfbuser();
                }
                else {
                    window.setTimeout(function () {
                        if (typeof FB != "undefined") {
                            loginfbuser();
                        }
                        else {
                            window.setTimeout(function () {
                                loginfbuser();
                            }, 1000);
                        }
                    }, 1000);
                }
            }, 1000);
        }
        var loadFBMessage = function () {
            $(".CI-loading").hide();
            var tgturl = "//socialinviter.com/";
            if ($(".FI-SI-FB-loading-holder").length == 0) {
                var cls = "", clsfb = "";
                if ($(".modal-SI-FI:visible").length > 0 && $(".modal-SI-FI:visible").css("z-index") != "0") {
                    //popup
                    cls = "FI-SI-FB-popup";
                    clsfb = "FI-SI-FB-loadingpopup";
                }
                var fbHei = $(window).height() - 295;
                //fbHei = 230;
                var heiStyle = 'style="height:' + fbHei + 'px;"';
                if ($(".inModal:visible").length == 0) {
                    heiStyle = "";
                }
                $(".modal-SI-CI").find(".modal-SI-body").prepend('<div class="FI-SI-FB-loading-holder ' + cls + '"><div ' + heiStyle + ' class="FI-SI-FB-loading ' + clsfb + ' posabs"><span>Loading</span><img src=\"' + tgturl + 'assets/img/icons/processing.gif\" /></div></div>');
            }
            $(".fbHolder").show().removeClass("hide");
            $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
            $(".fb_dialog:gt(0)").remove();
            var fblink = "https://socialinviter.com/", fbpic = "";
            if (socialinviter.getConfig().servicepanel.facebooklink) {
                fblink = socialinviter.getConfig().servicepanel.facebooklink;
            }
            var description = "";
            var title = "";

            FB.ui({
                    method: 'send',
                    link: fblink
                },
                function (response) {
                    window.clearInterval(fbloop);
                    if (response) {
                        if (socialinviter.getConfig().callbacks) {
                            if (socialinviter.getConfig().callbacks.send) {
                                socialinviter.getConfig().callbacks.send(undefined, socialinviter.getFromStore("service"), undefined, {
                                    data: {
                                        status: "success"
                                    }
                                }, socialinviter.getProduct());
                            }
                        }
                    }
                    FB = undefined;
                    $(".fbHolder").hide();
                    window.setTimeout(function () {
                        $(".modal-SI-close").click();
                    }, 1200);
                });
            $(".fb_dialog:gt(0)").remove();
            window.fbloop = window.setInterval(checkForDuplicateFBView, 10);
            socialinviter.resize();
        }
        var checkForDuplicateFBView = function () {
            if ($(".fb_dialog").length > 0) {
                $(".fb_dialog:gt(0)").remove();
                $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
                $(".fb_dialog").find(".FB_UI_Dialog").load(function () {
                    $(".FI-SI-FB-loading-holder").remove();
                    $(this).unbind("load");
                    window.clearInterval(window.fbloop);
                });
            }
        }
        var loginfbuser = function () {
            try {
                if (FB.getAccessToken()) {
                    socialinviter.contactimporter.loadFBMessage();
                }
                else {
                    FB.login(function (response) {
                        if (response.status == "connected") {
                            socialinviter.contactimporter.loadFBMessage();
                        }
                        else {
                            var authmsg = socialinviter.getConfig().servicepanel.content.messages.authenticationfailed;
                            var linkmsg = socialinviter.getConfig().servicepanel.content.messages.tryagain;
                            socialinviter.modalSI.load({ "title": convertName(socialinviter.getFromStore("service")), "body": "<div class='CI-loading'><span class='messagingicon'><img src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + authmsg + " <a href=\"javascript:;\" onclick=\"socialinviter.friendsinviter.auth('facebook')\">" + linkmsg + "</a></span></div>" }, "show");
                            $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                        }
                    });
                }
            }
            catch (e) {
                socialinviter.contactimporter.loadFBMessage();
            }
        }
        var getService = function () {
            return selectedMailService;
        }
        var getAllContacts = function () {
            var evalData = "";
            var ciholder = $(".modal-SI-CI");
            if (allImportedContacts == "") {
                allImportedContacts = eval("(" + decodeURIComponent(decodeURIComponent($(".grabbedcicontacts").attr("contacts"))) + ")");
                if (allImportedContacts) {
                    allImportedContacts = allImportedContacts.data;
                }
                $(".grabbedcicontacts").attr("contacts", "");
            }
            return allImportedContacts;
        }
        var getSelectedContacts = function (thisproduct) {
            var len = 0, SelCont = [];
            if (socialinviter.getFromStore("product") == "friendsinviter" && thisproduct) {
                if (selectedAddressbookData.friends) {
                    len = selectedAddressbookData.friends.length;
                    for (var i = 0; i < len; i++) {
                        if (selectedAddressbookData.friends[i])
                            SelCont.push(selectedAddressbookData.friends[i]);
                    }
                }
                return { "friends": SelCont };
            }
            else {
                if (selectedAddressbookData.addressbook) {
                    len = selectedAddressbookData.addressbook.length;
                    for (var i = 0; i < len; i++) {
                        if (selectedAddressbookData.addressbook[i])
                            SelCont.push(selectedAddressbookData.addressbook[i]);
                    }
                }
                return { "addressbook": SelCont };
            }


        }
        var selectContact = function (index) {
            var ciholder = $(".modal-SI-CI");
            var contactlen = 0;
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                if (!selectedAddressbookData.friends) {
                    selectedAddressbookData.friends = {};
                }
                if (!selectedAddressbookData.friends.length || selectedAddressbookData.friends.length == 0) {
                    selectedAddressbookData.friends = [];
                }
                selectedAddressbookData.friends[index] = (socialinviter.contactimporter.getAllContacts().friends[index]);
                contactlen = socialinviter.contactimporter.getSelectedContacts(true).friends.length;
            }
            else {
                if (!selectedAddressbookData.addressbook) {
                    selectedAddressbookData.addressbook = {};
                }
                if (!selectedAddressbookData.addressbook.length || selectedAddressbookData.addressbook.length == 0) {
                    selectedAddressbookData.addressbook = [];
                }
                selectedAddressbookData.addressbook[index] = (socialinviter.contactimporter.getAllContacts().addressbook[index]);
                contactlen = socialinviter.contactimporter.getSelectedContacts().addressbook.length;
            }
            if (contactlen == 0) {
                ciholder.find(".step1-proceed").addClass("steptwodisable");
            }
            else {
                ciholder.find(".step1-proceed").removeClass("steptwodisable");
            }
        }
        var deSelectContact = function (index) {
            var ciholder = $(".modal-SI-CI");
            var contactlen = 0;
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                selectedAddressbookData.friends[index] = undefined;
                contactlen = socialinviter.contactimporter.getSelectedContacts(true).friends.length;
            }
            else {
                selectedAddressbookData.addressbook[index] = undefined;
                contactlen = socialinviter.contactimporter.getSelectedContacts().addressbook.length;
            }
            if (contactlen == 0) {
                ciholder.find(".step1-proceed").addClass("steptwodisable");
            }
            else {
                ciholder.find(".step1-proceed").removeClass("steptwodisable");
            }
        }
        var selectAllContacts = function () {
            var ciholder = $(".modal-SI-CI");
            ciholder.find(".selectcontact").prop("checked", true);
            ciholder.find(".step1-proceed").removeClass("steptwodisable");
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                selectedAddressbookData.friends = addressbookData.friends;
                $(".CI-Contact-count").html(socialinviter.contactimporter.getSelectedContacts(true).friends.length + " Selected");
            }
            else {
                selectedAddressbookData.addressbook = addressbookData.addressbook;
                $(".CI-Contact-count").html(socialinviter.contactimporter.getSelectedContacts().addressbook.length + " Selected");
            }

        }
        var deSelectAllContacts = function () {
            var ciholder = $(".modal-SI-CI");
            selectedAddressbookData = { "addressbook": [], "friends": [], "service": selectedAddressbookData.service };
            ciholder.find(".selectcontact").prop("checked", false);
            ciholder.find(".step1-proceed").addClass("steptwodisable");
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                $(".CI-Contact-count").html(socialinviter.contactimporter.getSelectedContacts(true).friends.length + " Selected");
            }
            else {
                $(".CI-Contact-count").html(socialinviter.contactimporter.getSelectedContacts().addressbook.length + " Selected");
            }
        }
        var setData = function (data) {

            selectedAddressbookData = data;
        }
        var showcsvupload = function () {
            var ciholder = $(".modal-SI-CI");
            var tgturl = "//socialinviter.com/";
            var csvFront = "<div class=\"file-SI-upload-front\"><div class='csvtoplbl'>Below are the csv supported services from where you can import contacts.</div>";
            csvFront += "<ul class=\"supp-SI-list\">";
            csvFront += "<li class='CI-SI-outlook'><img src=\"" + tgturl + "assets/img/pluginimg/outlook_icon.png\" /><div>Outlook</div></li>";
            csvFront += "<li class='CI-SI-gmail'><img src=\"" + tgturl + "assets/img/pluginimg/gmail_icon.png\" /><div>Gmail</div></li>";
            csvFront += "<li class='CI-SI-thunderbird'><img src=\"" + tgturl + "assets/img/pluginimg/thunderbird_icon.png\" /><div>Thunderbird</div></li>";
            csvFront += "<li class='CI-SI-yahoo'><img src=\"" + tgturl + "assets/img/pluginimg/yahoo_icon.png\" /><div>Yahoo</div></li>";
            csvFront += "<li class='CI-SI-linkedin'><img src=\"" + tgturl + "assets/img/pluginimg/linkedin_icon.png\" /><div>Linkedin</div></li>";
            csvFront += "<li class='CI-SI-csv'><img src=\"" + tgturl + "assets/img/pluginimg/csv_icon.png\" /><div>Other</div></li>";
            csvFront += "</ul>";
            csvFront += "</div>";
            var csvStr = csvFront + "<div class=\"file-SI-upload\">";



            csvStr += "<div class=\"file-SI-upload-left fl break\">";
            csvStr += "<div><iframe src=\"\" id=\"fuploadframe\" name=\"fuploadframe\" height=\"0px\" width=\"0px\" frameborder=\"0\" scrolling=\"no\"></iframe></div>";
            csvStr += "<form action=\"" + socialinviter.endpoints.upoader + "\" id=\"fuploadform\" method=\"post\" target=\"fuploadframe\" onsubmit=\"javascript:return socialinviter.contactimporter.submitUploading()\" enctype=\"multipart/form-data\">";
            csvStr += "<div><div><div class=\"fl\"><label for=\"fupload\" class=\"upload-SI-label\">" + socialinviter.getConfig().servicepanel.content.csv.label + "</label></div>";
            csvStr += "<div class=\"upload-SI-control\"><input type=\"file\" name=\"fupload\" id=\"fupload\"/><input type=\"hidden\" id=\"pluginloc\" name=\"pluginloc\" /></div></div>";
            csvStr += "<div class='fl'><div class='file-upload-label'></div><div class=\"upload-SI-button-holder fl\">";
            csvStr += "<button type=\"submit\" class=\"upload-SI-button\">" + socialinviter.getConfig().servicepanel.content.csv.button.upload + "</button>";
            csvStr += "<div class=\"upload-SI-loading fl\"><img src=\"" + tgturl + "assets/img/icons/processing.gif\" /></div></div></div>";
            csvStr += "</div></form></div>";

            csvStr += "<div class=\"break upload-SI-error-panel\">";
            csvStr += "<div class=\"error-stat\"><div class=\"model-err-msg\"></div></div>";
            csvStr += "</div>";
            //        csvStr += "<ul class=\"supp-SI-list\"><li><img src=\"" + tgturl + "assets/img/icons/outlook-icon.png\" /></li><li><img src=\"" + tgturl + "assets/img/icons/thunderbird-icon.png\" /></li>";
            //        csvStr += "<li><img src=\"" + tgturl + "assets/img/icons/gmail-icon.png\" /></li><li><img src=\"" + tgturl + "assets/img/icons/yahoo-icon.png\" /></li>";
            //        csvStr += "<li><img src=\"" + tgturl + "assets/img/icons/hotmail-icon.png\" /></li><li><img src=\"" + tgturl + "assets/img/icons/linkedin-icon.png\" /></li>";
            //        csvStr += "</ul>";
            csvStr += "</div></div></div>";
            if (addressbookData.addressbook) {
                csvStr += "<div class=\"CI-list-container-footer CI-footer-back-list\">";
                csvStr += "<div class=\"CI-contact-refresh-holder\">";
                var stp1backtolist = socialinviter.getConfig().servicepanel.content.csv.link.backtolist
                csvStr += "<a href=\"javascript:;\" class=\"CI-contact-refresh backtolist-CI\">" + stp1backtolist + "</a>";
                csvStr += "</div></div>";
            }
            $(".modal-SI-CI").find(".modal-SI-body").html(csvStr);
            $(".supp-SI-list").find("li").click(function () {
                $(".file-SI-upload-front").hide();
                $(".file-SI-upload").show();

            });
            $("#fupload").change(function () {
                $(".upload-SI-button").focus();
                socialinviter.contactimporter.submitUploading(true);
            });
            ciholder.find(".backtolist-CI").unbind("click").click(function () {
                $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
                socialinviter.contactimporter.showStep1();
            });
        }
        var showStep1 = function (contactsData) {

            $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
            socialinviter.resize();
            var isSelectAll = socialinviter.getConfig().servicepanel.selectall;
            var ciholder = $(".modal-SI-CI");
            if (contactsData) {
                addressbookData = contactsData;
                if (isSelectAll) {
                    setData(addressbookData);
                }
            }
            else {
                contactsData = addressbookData;
            }
            var len = 0, thispdt = "contactimporter";
            if (contactsData.addressbook) {
                len = contactsData.addressbook.length;
                thispdt = "contactimporter";
            }
            else {
                if (contactsData.friends)
                    len = contactsData.friends.length;
                else
                    len = 0;
                thispdt = "friendsinviter";
            }

            var contactsDom = "<div class=\"CI-list-container step1\" style=\"opacity:0\">";
            contactsDom += "<div class=\"CI-list-container-header\">";
            var stp1title = socialinviter.getConfig().servicepanel.content.step1.title;
            contactsDom += "<div class=\"CI-list-container-header-title\">" + stp1title.replace("{0}", convertName(contactsData.service)) + "</div>";
            var stpnavig = socialinviter.getConfig().servicepanel.content.navigation.replace("{0}", "1");
            if (socialinviter.getConfig().servicepanel.showform == false)
                contactsDom += "<div class=\"fr CI-list-header-step\">" + stpnavig.replace("{1}", "1") + "</div>";
            else
                contactsDom += "<div class=\"fr CI-list-header-step\">" + stpnavig.replace("{1}", "2") + "</div>";
            contactsDom += "</div>";
            contactsDom += "<div class=\"CI-list-container-status\">";
            var stp1desc = socialinviter.getConfig().servicepanel.content.step1.description;
            contactsDom += stp1desc.replace("{0}", len);
            contactsDom += "</div>";
            contactsDom += "<div class=\"CI-contact-Panel " + ((len == 0) ? "hide" : "") + "\">";
            contactsDom += "<div class=\"CI-contact-Panel-header\">";
            contactsDom += "<div class=\"fl CI-contact-selectall\">";
            contactsDom += "<div class=\"CI-chkselall " + ((contactsData.service == "twitter") ? "hide" : "") + "\">";

            contactsDom += "<input type=\"checkbox\" id=\"chkselall\" " + ((isSelectAll) ? "checked=\"checked\"" : '') + "></div>";
            contactsDom += "<div class=\"CI-chkselall-label " + ((contactsData.service == "twitter") ? "hide" : "") + "\">";
            var stp1selectall = socialinviter.getConfig().servicepanel.content.step1.selectall;
            contactsDom += "<label for=\"chkselall\">" + stp1selectall + "</label>";
            contactsDom += "</div></div>";
            contactsDom += "<div class=\"fr CI-Contact-count\">";
            var stp1selected = socialinviter.getConfig().servicepanel.content.step1.selected.replace("{0}", len);
            contactsDom += stp1selected;
            contactsDom += "</div>";
            if (socialinviter.getConfig().servicepanel.showsearch != false)
                contactsDom += "<div class=\"fr CI-Contact-search\"><input id=\"txtsearchname\" type=\"text\" value=\"Search...\"></div>";
            contactsDom += "</div>";
            contactsDom += "<div class=\"CI-contact-Panel-body\">";
            contactsDom += "<ul class=\"CI-contact-ul-list\">";
            for (var i = 0; i < len; i++) {
                contactsDom += "<li class=\"CI-contact-ul-li-list CI-contacts-def\" contactindex=\"" + i + "\"><div class=\"fl CI-li-holdr\">";
                contactsDom += "<div class=\"CI-contact-selectbox\">";
                contactsDom += "<input type=\"checkbox\" " + ((isSelectAll) ? "checked=\"checked\"" : '') + " class=\"selectcontact hand\">";
                contactsDom += "</div>";
                contactsDom += "<div class=\"fl CI-contact-photo-holder\">";


                var imgURL = "//socialinviter.com/assets/img/sicon/nopic_m.jpg";
                if (thispdt == "contactimporter") {
                    imgURL = ((contactsData.addressbook[i].imageurl == "") ? "//socialinviter.com/assets/img/sicon/nopic_m.jpg" : contactsData.addressbook[i].imageurl);
                }
                else {
                    imgURL = ((contactsData.friends[i].imageurl == "") ? "//socialinviter.com/assets/img/sicon/nopic_m.jpg" : contactsData.friends[i].imageurl);
                }
                if (contactsData.service == "gmail" || contactsData.service == "google") {
                    contactsDom += "<img class=\"CI-contact-photo\" src=\"//socialinviter.com/assets/img/sicon/nopic_m.jpg\"";
                }
                else {
                    contactsDom += "<img class=\"CI-contact-photo\" src=\"" + imgURL + "\"";
                }
                contactsDom += " originalsrc=\"" + imgURL + "\" style=\"border-radius:500px\">";
                if (thispdt == "contactimporter") {
                    contactsDom += "<div class=\"more-holder\"><div class=\"CI-contact-more " + ((socialinviter.getConfig().servicepanel.showmore == false) ? "hide" : "") + " \">";
                }
                else {
                    contactsDom += "<div class=\"more-holder\"><div class=\"CI-contact-more hide \">";
                }
                contactsDom += "<img src=\"//socialinviter.com/assets/img/icons/moredetails.png\"/>";
                contactsDom += "<div class=\"CI-contact-more-details\">loading...</div></div></div>";
                contactsDom += "</div>";
                contactsDom += "<div class=\"CI-contact-namesection\">";
                contactsDom += "<div class=\"CI-contactPanel-title b\" "
                var nme = "";
                if (thispdt == "contactimporter") {
                    try {
                        nme = (decodeURIComponent(contactsData.addressbook[i].name.first_name) == "null") ? "" : decodeURIComponent(contactsData.addressbook[i].name.first_name);
                        nme += " ";
                        nme += (decodeURIComponent(contactsData.addressbook[i].name.last_name) == "null") ? "" : decodeURIComponent(contactsData.addressbook[i].name.last_name);
                    }
                    catch (e) {
                        nme = (unescape(contactsData.addressbook[i].name.first_name) == "null") ? "" : unescape(contactsData.addressbook[i].name.first_name);
                        nme += " ";
                        nme += (unescape(contactsData.addressbook[i].name.last_name) == "null") ? "" : unescape(contactsData.addressbook[i].name.last_name);
                    }

                }
                else {
                    try {
                        nme = (decodeURIComponent(contactsData.friends[i].name.first_name) == "null") ? "" : decodeURIComponent(contactsData.friends[i].name.first_name);
                        nme += " ";
                        nme += (decodeURIComponent(contactsData.friends[i].name.last_name) == "null") ? "" : decodeURIComponent(contactsData.friends[i].name.last_name);
                    }
                    catch (e) {
                        nme = (unescape(contactsData.friends[i].name.first_name) == "null") ? "" : unescape(contactsData.friends[i].name.first_name);
                        nme += " ";
                        nme += (unescape(contactsData.friends[i].name.last_name) == "null") ? "" : unescape(contactsData.friends[i].name.last_name);
                    }
                }

                contactsDom += " title=\"" + nme.trim() + "\">" + $.trim(nme) + "</div>";

                if (thispdt == "friendsinviter") {
                    contactsDom += "<div class=\"FI-contactPanel-email\" title=\"" + decodeURIComponent(contactsData.friends[i].location) + "\">" + decodeURIComponent(contactsData.friends[i].location) + "</div>";
                }
                else {
                    contactsDom += "<div class=\"CI-contactPanel-email\">" + contactsData.addressbook[i].email[0] + "</div>";
                }
                contactsDom += "</div></div>";
                contactsDom += "</li>";
            }
            contactsDom += "</ul>";
            contactsDom += "</div></div>";
            contactsDom += "<div class=\"CI-list-container-footer\">";
            contactsDom += "<div class=\"CI-contact-refresh-holder\">";
            var stp1refresh = socialinviter.getConfig().servicepanel.content.step1.button.refresh;
            var stp1back = socialinviter.getConfig().servicepanel.content.csv.link.back;
            contactsDom += "<a href=\"javascript:;\" onclick=\"" + getAuthFunction() + "('" + contactsData.service + "','" + thispdt + "',true)\" class=\"CI-contact-refresh\">" + ((contactsData.service == "csv") ? stp1back : stp1refresh) + "</a>";
            contactsDom += "</div>";
            var stp1proceed = socialinviter.getConfig().servicepanel.content.step1.button.proceed;
            contactsDom += "<div class=\"CI-list-container-proceed step1-proceed " + ((isSelectAll) ? '' : 'steptwodisable ') + ((len == 0) ? "hide" : "") + "\">" + stp1proceed + "</div>";
            contactsDom += "</div></div>";

            $(".modal-SI-CI").find(".modal-SI-body").html(contactsDom);
            if ($(".modal-SI-CI").find(".modal-SI-body").find(".modal-message-holder").length == 0) {
                $(".modal-SI-CI").find(".modal-SI-body").prepend("<div class='modal-message-holder'><div class='modal-message'></div></div>"); ;
            }

            if (contactsData.service == "gmail" || contactsData.service == "google") {
                gmailImageProcessor();
            }
            if (socialinviter.getConfig().servicepanel.showsearch != false) {
                ciholder.find("#txtsearchname").off("click").on("click", function () {
                    var me = $(this);
                    if ($.trim(me.val()) == "Search...") {
                        me.val("");
                    }
                    else if (me.val().length > 1) {
                        socialinviter.contactimporter.autoSuggest(me.val());
                    }
                }).off("blur").on("blur", function () {
                    var ciholder = $(".modal-SI-CI");
                    var me = $(this);
                    if ($.trim(me.val()) == "") {
                        me.val("Search...");
                    }
                    window.setTimeout(function () {
                        ciholder.find("#autosuggestholder").hide();
                    }, 500);
                }).off("keyup").on("keyup", function () {
                    var me = $(this);
                    if (me.val().length > 1) {
                        if (me.val().indexOf("Search...") != -1)
                            me.val(me.val().replace("Search...", ""));
                        socialinviter.contactimporter.autoSuggest(me.val());
                    }

                });
            }
            ciholder.find(".step1").animate({
                opacity: 1.0
            })
            ciholder.find(".step1-proceed").unbind("click").click(function (event) {
                socialinviter.resize();
                var ciholder = $(".modal-SI-CI");
                if ($(this).hasClass("steptwodisable")) {
                    socialinviter.modalSI.showErrorMessage(socialinviter.getConfig().servicepanel.content.step1.validation.selectcontact);
                }
                else {
                    if (socialinviter.getConfig().servicepanel.showform == false) {
                        if (socialinviter.getConfig().callbacks) {
                            if (socialinviter.getConfig().callbacks.proceed) {
                                var ret = socialinviter.getConfig().callbacks.proceed(event, socialinviter.contactimporter.getService(), socialinviter.getProduct());
                                if (ret == false) {
                                    return;
                                }
                            }
                        }
                    }
                    else {

                        if (socialinviter.getConfig().callbacks) {
                            if (socialinviter.getConfig().callbacks.proceed) {
                                var ret = socialinviter.getConfig().callbacks.proceed(event, socialinviter.contactimporter.getService(), socialinviter.getProduct());
                                if (ret == false) {
                                    return;
                                }
                            }
                        }
                        socialinviter.contactimporter.showStep2();
                        $(".mailing-message,.mailing-subject").keyup();
                        $(".messageerror,.subjecterror").hide();
                        socialinviter.resize();
                        //ciholder.find(".proceed-send").removeClass("steptwodisable");
                    }
                }
            });
            ciholder.find("#chkselall").unbind("change").change(function () {
                if ($(this).prop("checked") == true) {
                    socialinviter.contactimporter.selectAllContacts()
                }
                else {
                    socialinviter.contactimporter.deSelectAllContacts();
                }
            });
            ciholder.find(".CI-contact-more").unbind("click").click(function () {
                var ciholder = $(".modal-SI-CI");
                var me = $(this);
                me.find("img").hide();
                me.find(".more-text").hide();
                var liObj = me.closest(".CI-contact-ul-li-list");
                liObj.removeClass("CI-contacts-def").addClass("CI-contacts-moredet");
                liObj.find(".CI-li-holdr").addClass("CI-li-moredet");
                $(this).closest(".CI-contact-ul-li-list").unbind("mouseenter").unbind("mouseleave").mouseenter(function () {
                    var thisObj = $(this).find(".CI-contact-more-details");
                    var tgt = thisObj.parent();
                    if (thisObj.is(":visible"))
                        tgt.find("img").hide();
                    else
                        tgt.find("img").show();
                    tgt.find(".more-text").hide();
                    if (thisObj.find(".details-CI-panel").length == 0) {
                        var index = tgt.closest(".CI-contact-ul-li-list").attr("contactindex");
                        var data = (socialinviter.contactimporter.getAllContacts().addressbook[index]);
                        socialinviter.contactimporter.loadContactDetails(thisObj, data);
                    }
                    else
                        thisObj.find(".details-CI-panel").show();

                }).mouseleave(function () {
                    var ciholder = $(".modal-SI-CI");
                    var meObj = $(this).find(".CI-contact-more-details");
                    meObj.parent().find("img").css({ "margin-left": "0px" }).show();
                    meObj.hide();
                    var liObj = $(this);
                    liObj.removeClass("CI-contacts-moredet").addClass("CI-contacts-def");
                    liObj.find(".CI-li-holdr").removeClass("CI-li-moredet");
                }).find(".CI-contact-more-details").show().css({ "border": "2px solid #C5CCDF", "border-top": "none" });
                var tgt = me.parent();
                if (tgt.find(".details-CI-panel").length == 0) {
                    var index = tgt.closest(".CI-contact-ul-li-list").attr("contactindex");
                    var data = (socialinviter.contactimporter.getAllContacts().addressbook[index]);
                    socialinviter.contactimporter.loadContactDetails(tgt.find(".CI-contact-more-details"), data);
                }
                var bdyObj = ciholder.find(".CI-contact-Panel-body");
                var sTop = bdyObj.scrollTop() + me.closest(".CI-contact-ul-li-list").position().top - bdyObj.height() + 34;
                bdyObj.animate({
                    scrollTop: sTop
                });
            }).mouseenter(function () {
                var thisObj = $(this);
                var tgt = thisObj.parent();
                if (thisObj.find(".details-CI-panel").length == 0) {
                    var index = tgt.closest(".CI-contact-ul-li-list").attr("contactindex");
                    var data = (socialinviter.contactimporter.getAllContacts().addressbook[index]);
                    socialinviter.contactimporter.loadContactDetails(thisObj.find(".details-CI-panel"), data);
                }
            })
            ciholder.find(".selectcontact").unbind("change").change(function () {
                var ciholder = $(".modal-SI-CI");
                var contactlen = 0;

                if ($(this).prop("checked") == true) {
                    socialinviter.contactimporter.selectContact($(this).closest("li").attr("contactindex"));

                    var allLen = 0;
                    if (socialinviter.getFromStore("product") == "friendsinviter") {
                        allLen = socialinviter.contactimporter.getAllContacts().friends.length;
                        contactlen = socialinviter.contactimporter.getSelectedContacts(true).friends.length;
                    }
                    else {
                        allLen = socialinviter.contactimporter.getAllContacts().addressbook.length;
                        contactlen = socialinviter.contactimporter.getSelectedContacts().addressbook.length;
                    }

                    if (allLen == contactlen)
                        ciholder.find("#chkselall").prop("checked", true);
                    else
                        ciholder.find("#chkselall").prop("checked", false);
                    if ($(".CI-Contact-count").length > 0) {
                        $(".CI-Contact-count").html(contactlen + " Selected");
                    }
                }
                else {
                    socialinviter.contactimporter.deSelectContact($(this).closest("li").attr("contactindex"));
                    if ($(".CI-Contact-count").length > 0) {
                        if (socialinviter.getFromStore("product") == "friendsinviter") {
                            contactlen = socialinviter.contactimporter.getSelectedContacts(true).friends.length;
                        }
                        else {
                            contactlen = socialinviter.contactimporter.getSelectedContacts().addressbook.length;
                        }
                        $(".CI-Contact-count").html(contactlen + " Selected");
                    }
                    ciholder.find("#chkselall").prop("checked", false);
                }
            });
            socialinviter.resize();
            if (socialinviter.getConfig().callbacks) {
                if (socialinviter.getConfig().callbacks.loaded) {
                    if (socialinviter.getProduct() == "friendsinviter") {
                        socialinviter.getConfig().callbacks.loaded(contactsData.service, contactsData.friends, socialinviter.getProduct());
                    }
                    else {
                        socialinviter.getConfig().callbacks.loaded(contactsData.service, contactsData.addressbook, socialinviter.getProduct());
                    }
                }
            }
        }
        var autoSuggest = function (val) {
            var ciholder = $(".modal-SI-CI");
            var list;
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                list = socialinviter.contactimporter.getAllContacts().friends;
            }
            else {
                list = socialinviter.contactimporter.getAllContacts().addressbook;
            }
            var len = list.length;
            var pattern = new RegExp(val, "gi");
            var matchedArr = [];
            for (var i = 0; i < len; i++) {
                var name = "";
                if ((list[i].name.first_name != null) && (list[i].name.last_name != null)) {
                    try {
                        name = decodeURIComponent(list[i].name.first_name + " " + list[i].name.last_name);
                    }
                    catch (e) { name = unescape(list[i].name.first_name + " " + list[i].name.last_name); }
                    if (name.match(pattern)) {
                        matchedArr.push({ index: i, name: name, nameDetails: { first_name: list[i].name.first_name, last_name: list[i].name.last_name} });
                    }

                }
                else if ((list[i].name.first_name != null) && (list[i].name.last_name == null)) {
                    try { name = decodeURIComponent(list[i].name.first_name); } catch (e) { name = unescape(list[i].name.first_name); }
                    if (name.match(pattern)) {
                        matchedArr.push({ index: i, name: name, nameDetails: { first_name: list[i].name.first_name, last_name: list[i].name.last_name} });
                    }
                }
                else if ((list[i].name.first_name == null) && (list[i].name.last_name != null)) {
                    try { name = decodeURIComponent(list[i].name.last_name); } catch (e) { name = unescape(list[i].name.last_name); }
                    if (name.match(pattern)) {
                        matchedArr.push({ index: i, name: name, nameDetails: { first_name: list[i].name.first_name, last_name: list[i].name.last_name} });
                    }
                }
            }
            ciholder.find("#autosuggestholder").remove();
            var matchlen = matchedArr.length;
            if (matchlen > 0) {
                var suggestDom = "<div id=\"autosuggestholder\"><ul id=\"autosuggestname\">";
                for (var i = 0; i < matchlen; i++) {
                    suggestDom += "<li index=\"" + matchedArr[i].index + "\">" + decodeURIComponent(matchedArr[i].name) + "</li>";
                }
                suggestDom += "</ul></div>";
                ciholder.find("#txtsearchname").closest("div").append(suggestDom);
                ciholder.find("#autosuggestname").find("li").off("click").on("click", function () {
                    var me = $(this);
                    var ciholder = $(".modal-SI-CI");
                    ciholder.find("#txtsearchname").val(me.text());
                    ciholder.find(".highlightmyselect").removeClass("highlightmyselect");
                    var pickedCont = ciholder.find(".CI-contact-ul-li-list[contactindex='" + me.attr("index") + "']");
                    pickedCont.addClass("highlightmyselect");
                    ciholder.find("#autosuggestholder").hide();
                    var bdyObj = ciholder.find(".CI-contact-Panel-body");
                    var sTop = bdyObj.scrollTop() + pickedCont.position().top - bdyObj.height() + 26;
                    bdyObj.animate({
                        scrollTop: sTop
                    });
                });
            }
            else {
                if (ciholder.find("#autosuggestholder").length == 0) {
                    ciholder.find("#txtsearchname").closest("div").append("<div id=\"autosuggestholder\" class=\"autosuggest-nores\">No result found.</div>");
                }
            }
            return matchedArr;
        }
        var resizeStep1 = function () {
            var ciholder = $(".modal-SI-CI");
            // if (ciholder.find(".CI-list-container-header").is(":visible") == true) {
            //     $(".modal-SI-CI").find(".modal-SI-holder").height($(".step1").height() + 85-$(".charcountholder").height());
            // }
            // else {
            //     $(".modal-SI-CI").find(".modal-SI-holder").height($(".step1").height() + 65 - $(".charcountholder").height());
            // }

            var contactlen = 0;
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                contactlen = socialinviter.contactimporter.getSelectedContacts(true).friends.length;
            }
            else {
                contactlen = socialinviter.contactimporter.getSelectedContacts().addressbook.length;
            }
            var contLen = contactlen;
            if (contLen == 0)
                ciholder.find(".step1-proceed").addClass("steptwodisable");
            else
                ciholder.find(".step1-proceed").removeClass("steptwodisable");
        }
        var loadContactDetails = function (dom, data) {
            var domHTML = "<div class=\"details-CI-panel\"><ul>";
            domHTML += "<li>";
            domHTML += "<div class=\"leftpnl\"><i class=\"addr_i_CI CI-i\"></i><span>Address: </span></div>";
            domHTML += "<div class=\"rightpnl\">";
            var addrLen = data.address.length;
            var checklen = 0;
            for (var i = 0; i < addrLen; i++) {
                if ($.trim(decodeURIComponent(data.address[i].formattedaddress)) != "") {
                    checklen = 1;
                    domHTML += "<div class=\"fl break\">" + decodeURIComponent(data.address[i].formattedaddress) + "</div>";
                }
            }
            if (checklen == 0) {
                domHTML += "<div class=\"fl break na\">Not available</div>";
            }
            domHTML += "</div>";
            domHTML += "</li>";
            domHTML += "<li>";
            domHTML += "<div class=\"leftpnl\"><i class=\"email_i_CI CI-i\"></i><span>Email: </span></div>";
            domHTML += "<div class=\"rightpnl\">";
            var emailLen = data.email.length;
            if (emailLen == 0) {
                domHTML += "<div class=\"fl break na\">Not available</div>";
            }
            else {
                for (var i = 0; i < emailLen; i++) {
                    domHTML += "<div class=\"fl break\">" + decodeURIComponent(data.email[i]) + "</div>";
                }
            }
            domHTML += "</div>";
            domHTML += "</li>";
            domHTML += "<li>";
            domHTML += "<div class=\"leftpnl\"><i class=\"phone_i_CI CI-i\"></i><span>Phone: </span></div>";
            domHTML += "<div class=\"rightpnl\">";
            var phoneLen = data.phone.length;
            if (phoneLen == 0) {
                domHTML += "<div class=\"fl break na\">Not available</div>";
            }
            else {
                for (var i = 0; i < phoneLen; i++) {
                    domHTML += "<div class=\"fl break\">" + decodeURIComponent(data.phone[i]) + "</div>";
                }
            }
            domHTML += "</div>";
            domHTML += "</li>";
            domHTML += "<li>";
            domHTML += "<div class=\"leftpnl\"><i class=\"birthday_i_CI CI-i\"></i><span>Birthday: </span></div>";
            domHTML += "<div class=\"rightpnl\">";
            var bday = [];
            if ((data.birthday.month != "0") && (data.birthday.month != null))
                bday.push(data.birthday.month);
            if ((data.birthday.day != "0") && (data.birthday.day != null))
                bday.push(data.birthday.day);
            if ((data.birthday.year != "00") && (data.birthday.year != null))
                bday.push(data.birthday.year);
            if (bday.length != 0) {
                domHTML += "<div class=\"fl break\">" + bday.join("-") + "</div>";
            }
            else {
                domHTML += "<div class=\"fl break na\">Not available</div>";
            }
            domHTML += "</div>";
            domHTML += "</li>";
            domHTML += "<li>";
            domHTML += "<div class=\"leftpnl\"><i class=\"website_i_CI CI-i\"></i><span>Website: </span></div>";
            domHTML += "<div class=\"rightpnl\">";
            var websiteLen = data.website.length;
            if (websiteLen == 0) {
                domHTML += "<div class=\"fl break na\">Not available</div>";
            }
            else {
                for (var i = 0; i < websiteLen; i++) {
                    domHTML += "<div class=\"fl break\">" + decodeURIComponent(data.website[i]) + "</div>";
                }
            }
            domHTML += "</div>";
            domHTML += "</li>";
            domHTML += "<li>";
            domHTML += "<div class=\"leftpnl\"><i class=\"notes_i_CI CI-i\"></i><span>Notes: </span></div>";
            domHTML += "<div class=\"rightpnl\">";
            if ($.trim(decodeURIComponent(data.notes)) == "") {
                domHTML += "<div class=\"fl break na\">Not available</div>";
            }
            else {
                domHTML += "<div class=\"fl break\">" + decodeURIComponent(data.notes) + "</div>";
            }
            domHTML += "</div>";
            domHTML += "</li>";
            domHTML += "</ul></div>";
            dom.html(domHTML);
        }
        var gmailImageProcessor = function () {
            var ciholder = $(".modal-SI-CI");
            gmailPicArray = ciholder.find(".CI-contact-photo");
            window.gmailwin = window.setInterval(function () {
                for (var i = 0; i < 10; i++) {
                    if (gmailPicArray.length > 0) {
                        var tgt = $(gmailPicArray.splice(0, 1));
                        tgt.attr("src", tgt.attr("originalsrc"));
                    }
                    else {
                        window.clearInterval(window.gmailwin);
                        break;
                    }
                }
            }, 1000);
        }
        var showStep2 = function (stepType) {
            socialinviter.resize();
            var step2Dom = "";
            var ciholder = $(".modal-SI-CI");
            if (ciholder.find(".mailing-step2").length != 0) {
                step2Dom = "";
                var abookContacts;
                if (socialinviter.getFromStore("product") == "friendsinviter") {
                    abookContacts = selectedAddressbookData.friends;
                }
                else {
                    abookContacts = selectedAddressbookData.addressbook;
                }
                if (addedrecipient.length > 0) {
                    abookContacts = abookContacts.concat(addedrecipient);
                }
                if (abookContacts) {
                    var len = abookContacts.length;
                    var addedemailindex = 0;
                    for (var i = 0; i < len; i++) {
                        if (abookContacts[i]) {
                            step2Dom += "<li class=\"to-contacts-ul-li\">";

                            var name = "", contactid = i;
                            if (abookContacts[i].email || socialinviter.getFromStore("product") == "friendsinviter") {
                                name = ((abookContacts[i].name.first_name != null) ? abookContacts[i].name.first_name : "");
                                name += ((abookContacts[i].name.last_name != null) ? " " + abookContacts[i].name.last_name : "");
                            }
                            else {
                                name = abookContacts[i];
                                contactid = "-" + addedemailindex;
                                addedemailindex++;
                            }
                            name = $.trim(name);
                            if (socialinviter.getFromStore("product") == "friendsinviter") {
                                step2Dom += "<div class=\"selected-email\" title=\"" + ((name != "") ? name : abookContacts[i].email[0]) + "\">";
                                step2Dom += "<div class=\"text-email\">" + unescape((name != "") ? name : abookContacts[i].email[0]) + "</div>";
                            }
                            else {
                                step2Dom += "<div class=\"selected-email\" title=\"" + ((abookContacts[i].email) ? abookContacts[i].email[0] : abookContacts[i]) + "\">";
                                step2Dom += "<div class=\"text-email\">" + unescape((name != "") ? name : abookContacts[i].email[0]) + "</div>";
                            }
                            step2Dom += "<div class=\"remove-email\" index=\"" + contactid + "\">X</div>";
                            step2Dom += "</div>";
                            step2Dom += "</li>";
                        }
                    }
                }
                ciholder.find(".mailing-step2").show();
                ciholder.find(".to-contacts-ul").html(step2Dom);
            }
            else {
                step2Dom = "<div class=\"mailing-wrapper step2 mailing-step2\">";
                step2Dom += "<div class=\"mailing-wrapper-header\">";
                step2Dom += "<div class=\"fl mailing-header-title\">";
                step2Dom += socialinviter.getConfig().servicepanel.content.step2.title;
                step2Dom += "</div>";
                step2Dom += "<div class=\"fr mailing-step-count\">";
                var stpnavig = socialinviter.getConfig().servicepanel.content.navigation.replace("{0}", "2");
                step2Dom += stpnavig.replace("{1}", "2");
                step2Dom += "</div></div>";
                step2Dom += "<div class=\"torow mailing-row\">";
                var stp2to = socialinviter.getConfig().servicepanel.content.step2.to;
                step2Dom += "<div class=\"mailing-label\">" + stp2to + "</div>";
                step2Dom += "<div class=\"fl  mailing-box-holder\">";

                if (stepType) {
                    step2Dom += "<div class=\"to-contacts\">";
                    var stp2note = socialinviter.getConfig().servicepanel.content.step2.note;
                    step2Dom += "</div><div class='posrel fr'><div class=\"CI-email-note\">" + stp2note + "</div></div>";
                }
                else {
                    step2Dom += "<div class=\"to-contacts\">";
                    step2Dom += "<ul class=\"to-contacts-ul\">";
                    var abookContacts;
                    if (socialinviter.getFromStore("product") == "friendsinviter") {
                        abookContacts = selectedAddressbookData.friends;
                    }
                    else {
                        abookContacts = selectedAddressbookData.addressbook;
                    }
                    if (abookContacts) {
                        var len = abookContacts.length;
                        var addedemailindex = 0;
                        for (var i = 0; i < len; i++) {
                            if (abookContacts[i]) {
                                step2Dom += "<li class=\"to-contacts-ul-li\">";

                                var name = "", contactid = i;
                                if (abookContacts[i].email || socialinviter.getFromStore("product") == "friendsinviter") {
                                    name = ((abookContacts[i].name.first_name != null) ? abookContacts[i].name.first_name : "");
                                    name += ((abookContacts[i].name.last_name != null) ? " " + abookContacts[i].name.last_name : "");
                                }
                                else {
                                    name = abookContacts[i];
                                    contactid = "-" + addedemailindex;
                                    addedemailindex++;
                                }
                                name = $.trim(name);
                                if (socialinviter.getFromStore("product") == "friendsinviter") {
                                    step2Dom += "<div class=\"selected-email\" title=\"" + ((name != "") ? name : abookContacts[i].email[0]) + "\">";
                                    step2Dom += "<div class=\"text-email\">" + unescape((name != "") ? name : abookContacts[i].email[0]) + "</div>";
                                }
                                else {
                                    step2Dom += "<div class=\"selected-email\" title=\"" + ((abookContacts[i].email) ? abookContacts[i].email[0] : abookContacts[i]) + "\">";
                                    step2Dom += "<div class=\"text-email\">" + unescape((name != "") ? name : abookContacts[i].email[0]) + "</div>";
                                }
                                step2Dom += "<div class=\"remove-email\" index=\"" + contactid + "\">X</div>";
                                step2Dom += "</div>";
                                step2Dom += "</li>";
                            }
                        }
                    }
                    step2Dom += "</ul></div>";
                }
                var hideSub = "";
                var currentservice = socialinviter.getFromStore("service");
                if (currentservice == "twitter") {
                    hideSub = "hide";
                }
                var stp2validto = socialinviter.getConfig().servicepanel.content.step2.validation.to;
                step2Dom += "<div class=\"error-form toaddresserror\">" + stp2validto + "</div>";
                step2Dom += "</div></div><div class=\"subjectrow mailing-row " + hideSub + "\">";
                var stp2subject = socialinviter.getConfig().servicepanel.content.step2.subject;
                step2Dom += "<div class=\"mailing-label\">" + stp2subject + "</div>";
                step2Dom += "<div class=\"fl mailing-box-holder\">";
                var pluginsub = "", pluginmsg = "";
                if (typeof socialinviter.getConfig().servicepanel.subject == "object") {
                    if (socialinviter.getConfig().servicepanel.subject[currentservice]) {
                        pluginsub = decodeURIComponent(socialinviter.getConfig().servicepanel.subject[currentservice]);
                    }
                }
                else if (typeof socialinviter.getConfig().servicepanel.subject == "string") {
                    if (socialinviter.getConfig().servicepanel.subject) {
                        pluginsub = decodeURIComponent(socialinviter.getConfig().servicepanel.subject);
                    }
                }

                if (typeof socialinviter.getConfig().servicepanel.message == "string") {
                    pluginmsg = decodeURIComponent(socialinviter.getConfig().servicepanel.message);
                }
                else if (typeof socialinviter.getConfig().servicepanel.message == "object") {
                    if (socialinviter.getConfig().servicepanel.message[socialinviter.contactimporter.getService()])
                        pluginmsg = socialinviter.getConfig().servicepanel.message[socialinviter.contactimporter.getService()];
                }
                step2Dom += "<input type=\"text\" class=\"mailing-subject txtbx\" value=\"" + pluginsub + "\">";
                var stp2validsubject = socialinviter.getConfig().servicepanel.content.step2.validation.subject;
                step2Dom += "<div class=\"error-form subjecterror\">" + stp2validsubject + "</div>";
                step2Dom += "</div></div><div class=\"messagerow mailing-row\">";
                var stp2message = socialinviter.getConfig().servicepanel.content.step2.message;
                step2Dom += "<div class=\"mailing-label\">" + stp2message + "</div>";
                step2Dom += "<div class=\"fl mailing-box-holder\">";
                step2Dom += "<textarea class=\"mailing-message txtarea\">" + pluginmsg + "</textarea>";
                step2Dom += "<div class=\"fr break charcountholder\"><span>Character count:</span> <span class='charCount'>" + pluginmsg.length + "</span></div>";
                var stp2validmessage = socialinviter.getConfig().servicepanel.content.step2.validation.message;
                step2Dom += "<div class=\"error-form messageerror\">" + stp2validmessage + "</div>";
                step2Dom += "</div></div>";
                step2Dom += "<div class=\"mailing-footer-holder\" >";
                step2Dom += "<div class=\"mailing-footer\" style=\"border:\">";
                step2Dom += "<div class=\"fl mailing-footer-back\" >";
                var stp2back = socialinviter.getConfig().servicepanel.content.step2.button.back;
                var stp2send = socialinviter.getConfig().servicepanel.content.step2.button.send;
                step2Dom += "<div class=\"CI-list-container-back step2-back\">" + stp2back + "</div></div>";
                step2Dom += "<div class=\"fr\" >";
                step2Dom += "<div class=\"CI-list-container-proceed proceed-send\">" + stp2send + "</div>";
                step2Dom += "<div class=\"fr sendloading\" ><img src='//socialinviter.com/assets/img/icons/processing.gif'/></div>";
                step2Dom += "</div></div></div></div>";
                if (ciholder.find(".step2").length == 0) {
                    $(".modal-SI-CI").find(".modal-SI-body").append(step2Dom);
                    if ($(".modal-SI-CI").find(".modal-SI-body").find(".modal-message-holder").length == 0) {
                        $(".modal-SI-CI").find(".modal-SI-body").prepend("<div class='modal-message-holder'><div class='modal-message'></div></div>"); ;
                    }
                }
                else {
                    $(".modal-SI-CI").find(".modal-SI-body").html(step2Dom).prepend("<div class='modal-message-holder'><div class='modal-message'></div></div>");
                }
                if (ciholder.find(".mailing-subject") == "" || ciholder.find(".mailing-message") == "" || $(".to-contacts").text() == "") {
                    $(".proceed-send").addClass("steptwodisable");
                }
                ciholder.find(".mailing-subject").keyup(function () {
                    var ciholder = $(".modal-SI-CI");
                    if ($.trim($(this).val()) == "") {
                        ciholder.find(".subjecterror").show();
                    }
                    else
                        ciholder.find(".subjecterror").hide();

                    if (socialinviter.contactimporter.getRecipients().length > 0 && $.trim(ciholder.find(".mailing-subject").val()) != "" && $.trim(ciholder.find(".mailing-message").val()) != "") {
                        ciholder.find(".proceed-send").removeClass("steptwodisable");
                    }
                    else {
                        if (socialinviter.getFromStore("service") != "twitter") {
                            ciholder.find(".proceed-send").addClass("steptwodisable");
                        }
                    }
                    socialinviter.resize();
                });
                ciholder.find(".mailing-message").keyup(function () {
                    var ciholder = $(".modal-SI-CI");
                    if ($.trim($(this).val()) == "") {
                        ciholder.find(".messageerror").show();
                    }
                    else
                        ciholder.find(".messageerror").hide();

                    if (socialinviter.getFromStore("service") != "twitter" && (socialinviter.contactimporter.getRecipients().length > 0 && $.trim(ciholder.find(".mailing-subject").val()) != "" && $.trim(ciholder.find(".mailing-message").val()) != "")) {
                        ciholder.find(".proceed-send").removeClass("steptwodisable");
                    }
                    else if (socialinviter.getFromStore("service") == "twitter" && ($.trim($(this).val()) != "")) {
                        ciholder.find(".proceed-send").removeClass("steptwodisable");
                    }
                    else
                        ciholder.find(".proceed-send").addClass("steptwodisable");
                    //$(".modal-SI-CI").find(".modal-SI-holder").height($(".step2").height() + 80-$(".charcountholder").height());
                    $(".charCount").html($(this).val().length);
                    socialinviter.resize();
                });
            }

            ciholder.find(".proceed-send").unbind("click").click(function (event) {
                var flgfrm = 0;
                var ciholder = $(".modal-SI-CI");
                ciholder.find("#txtrecipients").val(ciholder.find("#txtrecipients").val() + ";");
                addEmail(ciholder.find("#txtrecipients"));
                if (socialinviter.contactimporter.getRecipients().length == 0) {
                    flgfrm = 1;
                    ciholder.find(".toaddresserror").show();
                }
                else
                    ciholder.find(".toaddresserror").hide();
                socialinviter.resize();
                var selectedService = socialinviter.getFromStore("service");
                var userSubject = $.trim(ciholder.find(".mailing-subject").val());
                if (selectedService != "twitter") {
                    if (userSubject == "") {
                        flgfrm = 1;
                        ciholder.find(".subjecterror").show();
                    }
                    else {
                        ciholder.find(".subjecterror").hide();
                    }
                }
                else {
                    ciholder.find(".subjecterror").hide();
                }
                var userMessage = $.trim(ciholder.find(".mailing-message").val());
                if (userMessage == "") {
                    flgfrm = 1;
                    ciholder.find(".messageerror").show();
                }
                else
                    ciholder.find(".messageerror").hide();
                if (flgfrm == 0) {
                    var selectedProduct = socialinviter.getFromStore("product");
                    if (selectedProduct == "contactimporter" || selectedProduct == "crmcontacts") {
                        var selectedRecipients = {}, posturl = "";
                        if (selectedProduct == "contactimporter") {
                            selectedRecipients = socialinviter.contactimporter.getRecipients()
                            posturl = socialinviter.endpoints.contacts;
                        }
                        else {
                            selectedRecipients = socialinviter.crmcontacts.getRecipients();
                            posturl = socialinviter.endpoints.crmcontacts;
                        }
                        if ($(".modal-SI-CI").find(".modal-SI-body").find(".sendemailHolder").length == 0) {
                            $(".modal-SI-CI").find(".modal-SI-body").append("<div class='sendemailHolder'></div>");
                        }
                        var csvStr = "";
                        var sendpostUrl = socialinviter.getConfig().servicepanel.path.send;
                        if (sendpostUrl && sendpostUrl != "") {
                            var data = socialinviter.getKeys(selectedProduct)
                            var id = data.userid;
                            var did = data.domid;
                            var key = data.licensekey;
                            csvStr += "<div><iframe src=\"\" id=\"sendemailframe\" name=\"sendemailframe\" height=\"0px\" width=\"0px\" frameborder=\"0\" scrolling=\"no\"></iframe></div>";
                            csvStr += "<form action=\"" + posturl + "\" id=\"sendemailform\" method=\"post\" target=\"sendemailframe\">";
                            csvStr += "<input type=\"hidden\" name=\"selectedrecipients\" value=\"" + escape(JSON.stringify(selectedRecipients)) + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"service\" value=\"" + selectedService + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"subject\" value=\"" + userSubject + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"message\" value=\"" + userMessage + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"id\" value=\"" + id + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"did\" value=\"" + did + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"key\" value=\"" + key + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"type\" value=\"message\" />";
                            csvStr += "<input type=\"hidden\" name=\"urltopostemailrequest\" value=\"" + sendpostUrl + "\" />";
                            csvStr += "<input type=\"hidden\" name=\"currentpage\" value=\"" + socialinviter.getConfig().servicepanel.path.oauth + "\" />";
                            csvStr += "</form></div>";
                            $(".modal-SI-CI").find(".modal-SI-body").find(".sendemailHolder").html(csvStr);
                            $("#sendemailform").submit();
                        }
                        else {
                            sendemail(event);
                        }
                    }
                    else {
                        window.psend = $(this);
                        sendMessage();
                    }
                }
                socialinviter.resize();
            });
            ciholder.find(".step1").hide();
            ciholder.find(".step2-back").unbind("click").click(function (event) {

                var ciholder = $(".modal-SI-CI");
                var rDom = ciholder.find("#txtrecipients");
                if (validateEmail(rDom.val())) {
                    rDom.val(rDom.val() + ";");
                    addEmail(rDom);
                    rDom.val("");
                }

                if (socialinviter.getConfig().callbacks) {
                    if (socialinviter.getConfig().callbacks.back) {
                        var ret = socialinviter.getConfig().callbacks.back(event, socialinviter.contactimporter.getService(), socialinviter.getProduct());
                        if (ret == false) {
                            return
                        }
                        ciholder.find(".step2").hide();
                        ciholder.find(".step1").show();
                    }
                    else {
                        ciholder.find(".step2").hide();
                        ciholder.find(".step1").show();
                    }
                }
                else {
                    ciholder.find(".step2").hide();
                    ciholder.find(".step1").show();
                }
                socialinviter.resize();
            }).unbind("mouseenter").mouseenter(function () {

            });
            // if (ciholder.find(".mailing-wrapper-header").is(":visible") == true) {
            //     $(".modal-SI-CI").find(".modal-SI-holder").height($(".step2").height() + 80-$(".charcountholder").height());
            // }
            // else {
            //     $(".modal-SI-CI").find(".modal-SI-holder").height($(".step2").height() + 65-$(".charcountholder").height());
            // }
            removeContact();
            var receipDom = ciholder.find("#txtrecipients");
            if (receipDom.length == 0) {
                if (socialinviter.getFromStore("product") == "contactimporter" || socialinviter.getFromStore("product") == "crmcontacts") {
                    ciholder.find(".to-contacts").append("<input type='text' id='txtrecipients' onkeydown='javascript:return socialinviter.contactimporter.watchkeystroke(event)' onblur='javascript:return socialinviter.contactimporter.addtheEmailid(event)'/>");
                }
            }
            else {
                receipDom.val("");
            }
            receipDom.keyup(function () {
                addEmail($(this));
            }).focusout(function () {
                var rDm = $(this);
                if (validateEmail(rDm.val())) {
                    rDm.val(rDm.val() + ";");
                    addEmail(rDm);
                }
            });
            ciholder.find(".toaddresserror").hide();
            window.setTimeout(function () {
                var ciholder = $(".modal-SI-CI");
                ciholder.find(".toaddresserror").hide();
                //ciholder.find("#txtrecipients").focus();
                socialinviter.resize();
            }, 200);
            attachFocusEvent();
        }
        var messageCallback = function (data) {
            var dataStr = data;
            $(".modal-SI-CI").find(".proceed-send").removeClass("steptwodisable");
            try {
                data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
                if (socialinviter.getConfig().callbacks) {
                    if (socialinviter.getConfig().callbacks.send) {
                        if (socialinviter.getProduct() == "friendsinviter") {
                            socialinviter.getConfig().callbacks.send(window.psend, socialinviter.getFromStore("service"), socialinviter.friendsinviter.getSelectedContacts("friendsinviter").friends, data, socialinviter.getProduct(), $(".mailing-subject"), $(".mailing-message"));
                        }
                        else if (socialinviter.getProduct() == "crmcontacts") {
                            socialinviter.getConfig().callbacks.send(window.psend, socialinviter.getFromStore("service"), socialinviter.crmcontacts.getSelectedContacts(true).addressbook, data, socialinviter.getProduct(), $(".mailing-subject"), $(".mailing-message"));
                        }
                        else {
                            socialinviter.getConfig().callbacks.send(window.psend, socialinviter.getFromStore("service"), socialinviter.contactimporter.getSelectedContacts(true).addressbook, data, socialinviter.getProduct(), $(".mailing-subject"), $(".mailing-message"));
                        }

                    }
                }
            }
            catch (e) {
                data = { responseStatus: { type: "error", message: "Something went wrong, please try again" }, data: { service: socialinviter.getFromStore("service")} };
            }
            $(".sendloading").hide();
        }
        var sendMessage = function () {
            $(".sendloading").show();
            var srcUrl = document.getElementById("apiscript").src;
            var id = getQueryString("id", srcUrl);
            var key = getQueryString("key", srcUrl);
            var did = getQueryString("did", srcUrl);
            var product = getFromStore("product");
            if (id == "" && did == "") {
                var data = socialinviter.getKeys(product)
                id = data.userid;
                did = data.domid;
                key = data.licensekey;
            }
            var authData = socialinviter.getFromStore("authData");
            authData = eval("(" + decodeURIComponent(decodeURIComponent(authData)) + ")").data;
            var serv = socialinviter.getFromStore("service");
            var friends = socialinviter.contactimporter.getSelectedContacts(true).friends;
            var len = friends.length;
            var friendsids = [];
            for (var i = 0; i < len; i++) {
                friendsids.push(friends[i].id);
            }


            var endpoint = "";

            if (product == "contactimporter") {
                endpoint = socialinviter.endpoints.contacts;
            }
            else if (product == "friendsinviter") {
                endpoint = socialinviter.endpoints.friends;
            }
            else if (product == "socialconnect") {
                endpoint = socialinviter.endpoints.connect;
            }
            else if (product == "crmcontacts") {
                endpoint = socialinviter.endpoints.crmcontacts;
            }
            if (socialinviter.getConfig().callbacks) {
                if (socialinviter.getConfig().callbacks.beforeSend) {
                    var retBol = true;
                    if (socialinviter.getProduct() == "friendsinviter") {
                        retBol = socialinviter.getConfig().callbacks.beforeSend(convertName(socialinviter.getFromStore("service")), socialinviter.getProduct(), socialinviter.friendsinviter.getSelectedContacts("friendsinviter").friends, $(".mailing-subject"), $(".mailing-message"));
                    }
                    else if (socialinviter.getProduct() == "contactimporter" || socialinviter.getProduct() == "crmcontacts") {
                        retBol = socialinviter.getConfig().callbacks.beforeSend(convertName(socialinviter.getFromStore("service")), socialinviter.getProduct(), socialinviter.friendsinviter.getSelectedContacts(true).addressbook, $(".mailing-subject"), $(".mailing-message"));
                    }
                    if (retBol == false) {
                        $(".sendloading").hide();
                        return true;
                    }
                }
            }
            if (!authData || !authData.token) {
                var authData = socialinviter.getFromStore("authData");
                if (authData != "") {
                    authData = eval("(" + decodeURIComponent(decodeURIComponent(authData)) + ")");
                }
            }
            var reqParam = "&token=" + authData.token + "&tokensecret=" + authData.tokensecret + "&tokenverifier=" + authData.tokenverifier + "&userid=" + authData.userid;
            reqParam += "&message=" + encodeURIComponent(encodeURIComponent(encodeURIComponent($(".mailing-message").val()))) + "&subject=" + ((serv == "twitter") ? '' : encodeURIComponent(encodeURIComponent(encodeURIComponent($(".mailing-subject").val())))) + "&friendsids=" + friendsids.join(",");
            var sendapi = endpoint + "?id=" + id + "&did=" + did + "&product=" + getFromStore("product") + "&key=" + key + "&service=" + serv + "&callback=socialinviter.contactimporter.messageCallback" + reqParam;
            if (socialinviter.whichVersion() == "pro") {
                var consumerkey = socialinviter.getServiceConfiguration(serv).consumerKey;
                var consumerSecret = socialinviter.getServiceConfiguration(serv).consumerSecret;
                sendapi = endpoint + "?type=message&service=" + serv + "&consumerkey=" + consumerkey + "&consumersecret=" + consumerSecret + "&product=" + getFromStore("product") + "&callback=socialinviter.contactimporter.messageCallback" + reqParam;
            }
            if (sendapi.indexOf("redirecturl") == -1) {
                var oauthpagefullurl = encodeURIComponent(encodeURIComponent(encodeURIComponent(socialinviter.getConfig().servicepanel.path.oauth)));
                sendapi += "&redirecturl=" + oauthpagefullurl;
            }
            makecall(sendapi, true);
        }
        var getRecipients = function () {
            var reciplen = addedrecipient.length;
            var retary;
            if (socialinviter.getFromStore("product") == "friendsinviter") {
                retary = socialinviter.contactimporter.getSelectedContacts(true).friends;
            }
            else {
                retary = socialinviter.contactimporter.getSelectedContacts().addressbook;
            }
            for (var i = 0; i < reciplen; i++) {
                if (addedrecipient[i])
                    retary.push(addedrecipient[i]);
            }
            return retary;
        }
        var validateEmail = function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        var addtheEmailid = function () {
            var ciholder = $(".modal-SI-CI");
            var tgt = ciholder.find("#txtrecipients");
            if (validateEmail(tgt.val())) {
                tgt.val(tgt.val() + ";");
                addEmail(tgt);
            }
        }
        var watchkeystroke = function (e) {
            var ciholder = $(".modal-SI-CI");
            var code;
            if (!e) var e = window.event;
            if (e.keyCode) code = e.keyCode;
            else if (e.which) code = e.which;
            if (code == 8) {
                var remstatus = removeLastEmail();
                if (socialinviter.contactimporter.getRecipients().length == 0) {
                    ciholder.find(".toaddresserror").show();
                }
                else
                    ciholder.find(".toaddresserror").hide();

                if (socialinviter.contactimporter.getRecipients().length > 0 && $.trim($(".mailing-subject").val()) != "" && $.trim($(".mailing-message").val()) != "") {
                    ciholder.find(".proceed-send").removeClass("steptwodisable");
                }
                else
                    ciholder.find(".proceed-send").addClass("steptwodisable");
                socialinviter.resize();
                return remstatus;
            }
            else if (code == 13) {

                var tgt = ciholder.find("#txtrecipients");
                if (validateEmail(tgt.val())) {
                    tgt.val(tgt.val() + ";");
                    addEmail(tgt);
                }
                return false;
            }
        }
        var addEmail = function (me) {
            var ciholder = $(".modal-SI-CI");
            var val = me.val();
            if (val != "" && socialinviter.getFromStore("product") != "friendsinviter") {
                if ((val.indexOf(";") != -1) || (val.indexOf(",") != -1)) {
                    var recipArry = [];
                    if (val.indexOf(";") != -1)
                        recipArry = val.split(";");
                    if (val.indexOf(",") != -1)
                        recipArry = val.split(",");
                    var len = recipArry.length;
                    for (var i = 0; i < len; i++) {
                        var recipval = recipArry[i];
                        if (validateEmail(recipval)) {
                            var tgt = ciholder.find(".to-contacts");
                            if (tgt.find(".to-contacts-ul").length == 0) {
                                var appendtext = '<ul class="to-contacts-ul">';
                                appendtext += '<li class="to-contacts-ul-li"><div class="selected-email" title="' + recipval + '"><div class="text-email">' + decodeURIComponent(recipval) + '</div><div class="remove-email" index="-' + addedrecipient.length + '">X</div></div></li>';
                                appendtext += '</ul>';
                                ciholder.find(".to-contacts").prepend(appendtext);
                                addedrecipient.push(recipval);

                            }
                            else {
                                //var index = $(".to-contacts-ul").find(".to-contacts-ul-li").length + 1;
                                var index = addedrecipient.length;
                                var appendtext = '<li class="to-contacts-ul-li"><div class="selected-email" title="' + recipval + '"><div class="text-email">' + decodeURIComponent(recipval) + '</div><div class="remove-email" index="-' + index + '">X</div></div></li>';
                                ciholder.find(".to-contacts-ul").append(appendtext);
                                addedrecipient.push(recipval);
                            }
                            ciholder.find(".to-contacts").scrollTop($(".to-contacts").height());
                        }
                    }
                    me.val("");
                }

            }
            if (socialinviter.contactimporter.getRecipients().length == 0) {
                $(".toaddresserror").show();
            }
            else
                $(".toaddresserror").hide();

            if (socialinviter.contactimporter.getRecipients().length > 0 && $.trim($(".mailing-subject").val()) != "" && $.trim($(".mailing-message").val()) != "") {
                $(".proceed-send").removeClass("steptwodisable");
            }
            else
                $(".proceed-send").addClass("steptwodisable");
            socialinviter.resize();
            removeContact();
        }
        var attachFocusEvent = function () {
            $(".modal-SI-CI").find(".to-contacts").unbind("click").click(function (e) {
                var cName = "";
                if (e) {
                    if (e.target) {
                        if (e.target.className) {
                            cName = e.target.className;
                        }
                    }
                }
                if (cName != "text-email" && cName != "remove-email" && cName != "selected-email" && cName != "to-contacts-ul-li") {
                    window.setTimeout(function () {
                        $(".modal-SI-CI").find("#txtrecipients").focus();
                    }, 10);
                }
            });
        }
        var removeLastEmail = function () {
            var ciholder = $(".modal-SI-CI");
            if (ciholder.find("#txtrecipients").val() == "") {
                var index = ciholder.find(".to-contacts-ul").find(".to-contacts-ul-li").length;
                if (index != 0) {
                    index--;
                    var tgt = ciholder.find(".to-contacts-ul").find(".to-contacts-ul-li").eq(index);
                    var remEm = tgt.find(".remove-email");
                    if (remEm.attr("index").indexOf("-") == -1)
                        remEm.click();
                    else {
                        addedrecipient[remEm.attr("index").replace("-", "")] = undefined;
                        tgt.remove();
                    }
                    return false;
                }
                else
                    return true;
            }
            else
                return true;
        }
        var removeContact = function () {
            var ciholder = $(".modal-SI-CI");
            ciholder.find(".remove-email").unbind("click").click(function () {
                var ciholder = $(".modal-SI-CI");
                var tgtindx = $(this).attr("index");
                var product = socialinviter.getFromStore("product");
                if (tgtindx.indexOf("-") == -1) {
                    var index = parseInt($(this).attr("index"));
                    if (product == "friendsinviter") {
                        selectedAddressbookData.friends[index] = undefined;
                    }
                    else {
                        selectedAddressbookData.addressbook[index] = undefined;
                    }
                    $(".CI-contact-ul-li-list").eq(index).find("input").prop("checked", false);
                    var ciholder = $(".modal-SI-CI");
                    ciholder.find("#chkselall").prop("checked", false);
                    $(this).closest("li").remove();
                    var contLen = 0;
                    if (product == "friendsinviter") {
                        contLen = socialinviter.contactimporter.getSelectedContacts("friendsinviter").friends.length;
                    }
                    else {
                        contLen = socialinviter.contactimporter.getSelectedContacts().addressbook.length;
                    }
                    if (contLen == 0) {
                        ciholder.find(".proceed-send").addClass("steptwodisable");
                        if (product == "friendsinviter") {
                            $(".step1-proceed").addClass("steptwodisable");
                            $(".step2-back").click();
                        }
                    }
                    else
                        ciholder.find(".proceed-send").removeClass("steptwodisable");
                    $(".CI-Contact-count").html(contLen + " Selected");
                }
                else {
                    addedrecipient[tgtindx.replace("-", "")] = undefined;
                    $(this).closest(".to-contacts-ul-li").remove();
                }
                if (socialinviter.contactimporter.getRecipients().length == 0) {
                    ciholder.find(".toaddresserror").show();
                }
                else
                    ciholder.find(".toaddresserror").hide();

                if (socialinviter.contactimporter.getRecipients().length > 0 && $.trim($(".mailing-subject").val()) != "" && $.trim($(".mailing-message").val()) != "") {
                    ciholder.find(".proceed-send").removeClass("steptwodisable");
                }
                else
                    ciholder.find(".proceed-send").addClass("steptwodisable");
                socialinviter.resize();
                //ciholder.find("#txtrecipients").focus();
            });
        }
        var sendemail = function (event) {
            if (socialinviter.getConfig().callbacks) {
                if (socialinviter.getConfig().callbacks.send) {
                    socialinviter.getConfig().callbacks.send(event, socialinviter.contactimporter.getService(), socialinviter.contactimporter.getRecipients(), socialinviter.getProduct(), $(".mailing-subject"), $(".mailing-message"));
                }
            }
        }
        var closeimporter = function () {
            socialinviter.modalSI.hide();
        }
        var getFromStore = function (val) {
            return socialinviter.getFromStore(val);
        }
        var removeFromStore = function (val) {
            return socialinviter.removeFromStore(val);
        }
        var makecall = function (val, noescape) {
            socialinviter.makecall(val, noescape);
        }
        var getService = function () {
            return socialinviter.getService();
        }
        return {
            getFromStore: getFromStore,
            authCallback: authCallback,
            accessCallback: accessCallback,
            contactsCallback: contactsCallback,
            updateUser: updateUser,
            close: closeimporter,
            uploadCallback: uploadCallback,
            startgrabbing: startgrabbing,
            getAllContacts: getAllContacts,
            getSelectedContacts: getSelectedContacts,
            selectContact: selectContact,
            deSelectContact: deSelectContact,
            removeFromStore: removeFromStore,
            deSelectAllContacts: deSelectAllContacts,
            selectAllContacts: selectAllContacts,
            showStep1: showStep1,
            showStep2: showStep2,
            auth: auth,
            processLock: processLock,
            getService: getService,
            setPopupError: setPopupError,
            makecall: makecall,
            submitUploading: submitUploading,
            loadContactDetails: loadContactDetails,
            autoSuggest: autoSuggest,
            watchkeystroke: watchkeystroke,
            addtheEmailid: addtheEmailid,
            getRecipients: getRecipients,
            messageCallback: messageCallback,
            loadFBMessage: loadFBMessage,
            reFetchFBkey: reFetchFBkey,
            FBCallback: FBCallback
        }
    })();
    var crmcontacts = (function () {
        var auth = function (service, product, force) {
            socialinviter.contactimporter.auth(service, "crmcontacts", force);
        }
        var close = function () {
            socialinviter.modalSI.hide();
        }
        var getAllContacts = function () {
            return socialinviter.contactimporter.getAllContacts();
        }
        var getSelectedContacts = function () {
            var selectedFnds = socialinviter.contactimporter.getSelectedContacts(true);
            if (selectedFnds) {
                if (selectedFnds.friends == undefined) {
                    selectedFnds = { friends: [] };
                }
            }
            return selectedFnds;
        }
        var getRecipients = function () {
            return socialinviter.contactimporter.getRecipients();
        }
        var getService = function () {
            return socialinviter.getService();
        }
        return {
            //        getFromStore: socialinviter.contactimporter.getFromStore,
            //        authCallback: socialinviter.contactimporter.authCallback,
            getService: getService,
            //        accessCallback: socialinviter.contactimporter.accessCallback,
            //        contactsCallback: socialinviter.contactimporter.contactsCallback,
            //        updateUser: socialinviter.contactimporter.updateUser,
            close: close,
            //        uploadCallback: socialinviter.contactimporter.uploadCallback,
            //        startgrabbing: socialinviter.contactimporter.startgrabbing,
            getAllContacts: getAllContacts,
            getSelectedContacts: getSelectedContacts,
            getRecipients: getRecipients,
            //        selectContact: socialinviter.contactimporter.selectContact,
            //        deSelectContact: socialinviter.contactimporter.deSelectContact,
            //        removeFromStore: socialinviter.contactimporter.removeFromStore,
            //        deSelectAllContacts: socialinviter.contactimporter.deSelectAllContacts,
            //        selectAllContacts: socialinviter.contactimporter.selectAllContacts,
            //        showStep1: socialinviter.contactimporter.showStep1,
            //        showStep2: socialinviter.contactimporter.showStep2,
            auth: auth
            //        processLock: socialinviter.contactimporter.processLock,
            //        getService: socialinviter.contactimporter.getService,
            //        setPopupError: socialinviter.contactimporter.setPopupError,
            //        makecall: socialinviter.contactimporter.makecall,
            //        submitUploading: socialinviter.contactimporter.submitUploading,
            //        loadContactDetails: socialinviter.contactimporter.loadContactDetails,
            //        autoSuggest: socialinviter.contactimporter.autoSuggest,
            //        watchkeystroke: socialinviter.contactimporter.watchkeystroke,
            //        addtheEmailid: socialinviter.contactimporter.addtheEmailid,
            //        getRecipients: socialinviter.contactimporter.getRecipients,
            //        messageCallback: socialinviter.contactimporter.messageCallback
        }
    })();
    var friendsinviter = (function () {
        var auth = function (service, product, force) {
            socialinviter.contactimporter.auth(service, "friendsinviter", force);
        }
        var close = function () {
            socialinviter.contactimporter.close();
        }
        var getAllContacts = function () {
            return socialinviter.contactimporter.getAllContacts();
        }
        var getSelectedContacts = function () {
            var selectedFnds = socialinviter.contactimporter.getSelectedContacts(true);
            if (selectedFnds) {
                if (selectedFnds.friends == undefined) {
                    selectedFnds = { friends: [] };
                }
            }
            return selectedFnds;
        }
        var getService = function () {
            return socialinviter.getService();
        }
        return {
            auth: auth,
            close: close,
            getAllContacts: getAllContacts,
            getSelectedContacts: getSelectedContacts,
            getService: getService
        }
    })();
    var socialconnect = (function () {
        var userinformationdata;
        var auth = function (service, product, force) {
            socialinviter.contactimporter.auth(service, "socialconnect", force);
        }
        var getProfile = function () {
            var retObj = userinformationdata;
            if (userinformationdata) {
                if (userinformationdata.data) {
                    retObj = userinformationdata.data;
                }
                else {
                    retObj = { data: {} };
                }
            }
            else {
                retObj = { data: {} };
            }
            return retObj;
        }
        var userinfoCallback = function (data) {
            var dataStr = data;
            data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
            userinformationdata = data;
            userinformationdata.data.details.firstName = convertName(userinformationdata.data.details.firstName);
            userinformationdata.data.details.lastName = convertName(userinformationdata.data.details.lastName);
            userinformationdata.data.details.displayName = decodeURIComponent(userinformationdata.data.details.displayName);
            if (userinformationdata.data.details.displayName.indexOf(" ") != -1) {
                var dName = userinformationdata.data.details.displayName;
                var dNameAry = dName.split(' ');
                dNameAry[0] = convertName(dNameAry[0]);
                dNameAry[1] = convertName(dNameAry[1]);
                userinformationdata.data.details.displayName = dNameAry.join(" ");
            }
            else if (userinformationdata.data.details.displayName != "" && userinformationdata.data.details.displayName != "undefined") {
                userinformationdata.data.details.displayName = convertName(userinformationdata.data.details.displayName);
            }
            var serv = socialinviter.getFromStore("service");
            if (data.responseStatus.type == "error") {
                try {
                    socialinviter.modalSI.load({
                        "title": convertName(serv),
                        "icon": icons[serv],
                        "body": "<div class='CI-loading'><span class='messagingicon'><img src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + decodeURIComponent(data.responseStatus.message) + "</span></div>"
                    }, "show");
                }
                catch (e) { }
            }
            else {
                socialinviter.modalSI.hide();
                if (socialinviter.getConfig().callbacks.login) {
                    socialinviter.getConfig().callbacks.login(serv, data);
                }
            }

        }
        var close = function () {
            socialinviter.contactimporter.close();
        }
        var getService = function () {
            return socialinviter.getService();
        }
        return {
            auth: auth,
            userinfoCallback: userinfoCallback,
            getProfile: getProfile,
            close: close,
            getService: getService
        }
    })();
    var socialpost = (function () {
        var postdatavalues = { title: "", link: "", picture: "", description: "", comment: "" };
        var auth = function (service, product, force) {
            socialinviter.contactimporter.auth(service, "socialpost", force);
        }
        var postCallback = function (data) {
            var dataStr = data;
            data = eval("(" + decodeURIComponent(decodeURIComponent(data)) + ")");
            var serv = socialinviter.getFromStore("service");
            if (data.responseStatus.type == "error") {
                try {
                    socialinviter.modalSI.load({
                        "title": convertName(serv),
                        "icon": icons[serv],
                        "body": "<div class='CI-loading'><span class='messagingicon'><img src='//socialinviter.com/assets/img/icons/alert-icon.png'></span><span>" + decodeURIComponent(data.responseStatus.message) + "</span></div>"
                    }, "show");
                }
                catch (e) { }
            }
            else {
                socialinviter.modalSI.hide();
                if (socialinviter.getConfig().callbacks.post) {
                    socialinviter.getConfig().callbacks.post(serv, data);
                }
            }

        }
        var setPostValues = function (obj) {
            if (obj) {
                if (obj.title) {
                    postdatavalues.title = obj.title;
                }
                if (obj.link) {
                    postdatavalues.link = obj.link;
                }
                if (obj.picture) {
                    postdatavalues.picture = obj.picture;
                }
                if (obj.description) {
                    postdatavalues.description = obj.description;
                }
                if (obj.comment) {
                    postdatavalues.comment = obj.comment;
                }
            }
        }
        var getPostValues = function () {
            return postdatavalues;
        }
        var getService = function () {
            return socialinviter.getService();
        }
        var close = function () {
            socialinviter.contactimporter.close();
        }
        return {
            auth: auth,
            postCallback: postCallback,
            close: close,
            getService: getService,
            getPostValues: getPostValues,
            setPostValues: setPostValues
        }
    })();
    var modalSI = (function () {
        var init = function () {
            if ($(".modal-SI-CI-BG").length == 0) {
                var mdl = "<div class=\"modal-SI-CI-BG\"></div>";
                mdl += "<div class=\"modal-SI-CI\"><div class=\"modal-SI-holder\"><div class=\"modal-SI-header\">";
                mdl += "<div class=\"modal-SI-title\"><div class=\"fl\"><img class=\"modal-SI-title-icon\" src=\"\"/></div>";
                mdl += "<div class=\"title-modal-text\"></div></div><div class=\"modal-SI-close\">";
                if (window.location.href.indexOf("oauth") != -1) {
                    mdl += "<img src=\"\"/></div></div>";
                }
                else {
                    mdl += "<img src=\"//socialinviter.com/assets/img/icons/close-small.png\"/></div></div>";
                }
                mdl += "<div class=\"modal-SI-body\"><div class='modal-message-holder'><div class='modal-message'></div></div></div></div></div>";
                if ($("#socialinviter-template").length > 0) {
                    $("#socialinviter-template").append(mdl);
                    $(".modal-SI-CI").css({ "position": "relative", "float": "left" }).find(".modal-SI-close").hide();
                }
                else {
                    $("body").append(mdl);
                    attachModalEvents();
                }
            }
            //$(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
        }
        var attachModalEvents = function () {
            $(".modal-SI-CI").find(".modal-SI-close").unbind("click").click(function () {
                socialinviter.modalSI.hide();
            });
            $(document).keyup(function (e) {
                if (e.keyCode == 27) {
                    if ($("#socialinviter-template").length == 0)
                        $(".modal-SI-CI").find('.modal-SI-close').click();
                }   // esc
            });
        }
        var show = function (type) {
            $(document).ready(function () {
                if (socialinviter.getConfig().servicepanel.showmodal == false) {
                    $(".modal-SI-CI-BG").hide();
                    $(".modal-SI-CI").css({ "z-index": 0 }).find(".modal-SI-close").hide();
                    $(".modal-SI-CI").find(".modal-SI-holder").removeClass("inModal");
                }
                else {
                    $(".modal-SI-CI-BG").fadeIn("slow");
                    $(".modal-SI-CI").css({
                        position: "fixed",
                        left: 0
                    }).find(".modal-SI-close").show();
                    $(".modal-SI-CI").find(".modal-SI-holder").addClass("inModal");
                }
                attachModalEvents();
                $(".modal-SI-CI").fadeIn("slow");
                if (type == "large") {
                    $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
                } else {
                    $(".modal-SI-CI").find(".modal-SI-holder").addClass("modal-SI-small");
                }
            });
            window.modelHidden = false;
        }
        var hide = function () {
            $(".modal-SI-CI-BG").fadeOut("slow");
            $(".modal-SI-CI").fadeOut("slow");
            window.modelHidden = true;
        }
        var load = function (obj, type) {
            if (socialinviter.getConfig().servicepanel.showmodal == false) {
                if ($("#socialinviter-template").length == 0) {
                    $(".modal-SI-CI-BG").fadeIn("slow");
                    $("#socialinviter-template").find(".modal-SI-CI").css({ "z-index": 999 });
                    if (socialinviter.getFromStore("product") != "socialconnect" && socialinviter.getFromStore("product") != "socialpost") {
                        socialinviter.setModalConfig(true);
                    }
                }
                else if ($("#socialinviter-template").html() == "") {
                    $("#socialinviter-template").html($(".modal-SI-CI").remove());
                    $("#socialinviter-template").find(".modal-SI-CI").css({ "position": "relative", "z-index": 0, "float": "left" });
                }
            }
            if (socialinviter.getConfig().servicepanel.style) {
                if (socialinviter.getConfig().servicepanel.style.header) {
                    if (socialinviter.getConfig().servicepanel.style.header["background-color"]) {
                        var bgcolor = socialinviter.getConfig().servicepanel.style.header["background-color"];
                        $(".modal-SI-header").css({ "background-color": bgcolor });
                    }
                    if (socialinviter.getConfig().servicepanel.style.header["color"]) {
                        var color = socialinviter.getConfig().servicepanel.style.header["color"];
                        $(".modal-SI-header").find(".title-modal-text").css("color", color);
                    }
                }
            }


            $(".modal-SI-header").css({ "background-color": bgcolor }).find(".title-modal-text").css("color", color);
            if (obj) {
                if (obj.title)
                    $(".modal-SI-CI").find(".title-modal-text").html(obj.title);
                if (obj.icon)
                    $(".modal-SI-CI").find(".modal-SI-title-icon").attr("src", obj.icon);
                if (obj.body)
                    $(".modal-SI-CI").find(".modal-SI-body").html(obj.body).prepend("<div class='modal-message-holder'><div class='modal-message'></div></div>"); ; ;

                $(".modal-SI-CI").find(".modal-SI-holder").removeClass("modal-SI-small");
            }
            if (type == "show")
                show();
        }
        var showErrorMessage = function (errmsg) {
            $(".modal-SI-CI").find(".modal-SI-body").find(".modal-message").addClass("modal-message-error").html(errmsg).fadeIn(500, function () {
                window.setTimeout(function () {
                    $(".modal-SI-CI").find(".modal-SI-body").find(".modal-message").html("").fadeOut(500).removeClass("modal-message-error");
                }, 3000);
            });
        }
        var showInfoMessage = function (errmsg) {
            $(".modal-SI-CI").find(".modal-SI-body").find(".modal-message").addClass("modal-message-info").html(errmsg).fadeIn(500, function () {
                window.setTimeout(function () {
                    $(".modal-SI-CI").find(".modal-SI-body").find(".modal-message").html("").fadeOut(500).removeClass("modal-message-info");
                }, 3000);
            });
        }
        var showSuccessMessage = function (succmsg) {
            $(".modal-SI-CI").find(".modal-SI-body").find(".modal-message").addClass("modal-message-success").html(succmsg).fadeIn(500, function () {
                window.setTimeout(function () {
                    $(".modal-SI-CI").find(".modal-SI-body").find(".modal-message").html("").fadeOut(500).removeClass("modal-message-success");
                }, 3000);
            });
        }
        return {
            init: init,
            load: load,
            show: show,
            hide: hide,
            showErrorMessage: showErrorMessage,
            showSuccessMessage: showSuccessMessage,
            showInfoMessage: showInfoMessage
        }
    })();
    var toredirect_ = getQueryString("toredirect", window.location.href);
    if (toredirect_ != "") {
        putInToStore("oauthpage", "oauth.html");
    }
    if (getQueryString("oauthpage", window.location.href) != "" && getQueryString("isMobile", window.location.href) != "") {
        //Mobile
        if (!getFromStore("csspath")) {
            putInToStore("csspath", "//socialinviter.com/");
        }
        var did = getQueryString("did", window.location.href);
        var uid = getQueryString("id", window.location.href);
        var serv = getQueryString("service", window.location.href);
        var lic = getQueryString("key", window.location.href);
        var uIdentity = "{ \"data\": [{ \"domid\": \"" + did + "\", \"userid\": \"" + uid + "\", \"licensekey\": \"" + lic + "\", \"services\": { \"" + convertName(serv) + "\": true }, \"product\": \"contactimporter\", \"fbkey\": \"\"}] }";
        putInToStore("userIdentity", uIdentity);
        putInToStore("oauthpage", getQueryString("oauthpage", window.location.href));
        putInToStore("isMobile", "yes");
        includeStyle(getFromStore("csspath"));
        window.setTimeout(function () {
            initAuth();
        }, 100);
    }
    else if (getQueryString("mobilelicense", window.location.href) != "") {
        //Mobile
        window.setTimeout(function () {
            socialinviter.initsignaturecall(getQueryString("mobilelicense", window.location.href))
        }, 100);

    }
    if (window.location.href.indexOf(getFromStore("oauthpage")) != -1 || toredirect_ != "") {
        if (!getFromStore("csspath")) {
            putInToStore("csspath", "//socialinviter.com/");
        }
        includeStyle(getFromStore("csspath"));
        window.setTimeout(function () {
            initAuth();
        }, 100);
    }

//Show loading icon..
    if ($(".socialinviterloading").length == 0) {
        $("head").append("<style type='text/css'>.socialinviterloading{background-image: url(//socialinviter.com/assets/img/icons/loading.gif); background-repeat: no-repeat;display: table;background-position: center;min-height: 50px;width: 100%;}</style>");
        $(".socialinviter:visible").addClass("socialinviterloading");
    }
//$(".socialinviter").eq(3).parent().prop("tagName")
// var allSI = $(".socialinviter:visible");
// var alllen = allSI.length;
// for(var i=0;i<alllen;i++){
//     var par = $(".socialinviter").eq(3).parent();
//     if(par.prop("tagName").toLowerCase()=="PRE"){

//     }
// }
    var close = function () {
        socialinviter.modalSI.hide();
    }
    return {
        init: init,
        initialize: setConfig,
        initsignaturecall: initsignaturecall,
        load: load,
        loadsignatures: loadsignatures,
        destroy: destroy,
        contactimporter: contactimporter,
        crmcontacts: crmcontacts,
        socialconnect: socialconnect,
        socialpost: socialpost,
        friendsinviter: friendsinviter,
        authCallback: authCallback,
        modalSI: modalSI,
        whichVersion: whichVersion,
        oauthpage: oauthpage,
        resize: resize,
        makecall: makecall,
        close: close,
        accessCallback: accessCallback,
        removeFromStore: removeFromStore,
        updateUser: updateUser,
        popuperror: popuperror,
        endpoints: endpoints,
        setPopupError: setPopupError,
        setModalConfig: setModalConfig,
        putInToStore: putInToStore,
        getService: getService,
        getProduct: getProduct,
        getConfig: getConfig,
        getFromStore: getFromStore,
        getKeys: getKeys,
        getServiceConfiguration: getServiceConfiguration
    }
})();


