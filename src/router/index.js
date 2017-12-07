import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import company from '@/components/company/company.vue'
import proposition from '@/components/proposition/proposition.vue'
import ImportContacts from '@/components/import-contacts/import-contacts.vue'
import SalesForceContacts from '@/components/salesforce-contacts/salesforce-contacts.vue'
import GmailContacts from '@/components/gmail-contacts/gmail-contacts.vue'
import CrmVideo from '@/components/crm-video/crm-video.vue'
import Settings from '@/components/settings/settings.vue'
import signUp from '@/components/signup/signup.vue'
import companyCreate from '@/components/company-create/company-create.vue'
import Profile from '@/components/profile/profile.vue'
import Logout from '@/components/logout/logout.vue'
import VueLocalStorage from 'vue-ls';

var options = {
  namespace: 'vuejs__'
};

Vue.use(VueLocalStorage, options);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/company',
      name: 'company',
      component: company
    }, {
      path: '/proposition',
      name: 'proposition',
      component: proposition
    }, {
      path: '/import-contacts',
      name: 'import-contacts',
      component: ImportContacts
    }, {
      path: '/salesforce-contacts',
      name: 'salesforce-contacts',
      component: SalesForceContacts
    }, {
      path: '/gmail-contacts',
      name: 'gmail-contacts',
      component: GmailContacts
    }, {
      path: '/crm-video',
      name: 'crm-video',
      component: CrmVideo
    }, {
      path: '/settings',
      name: 'settings',
      component: Settings
    }, {
      path: '/signup',
      name: 'signup',
      component: signUp
    }, {
      path: '/add-company',
      name: 'company-create',
      component: companyCreate
    },{
      path: '/profile',
      name: 'profile',
      component: Profile
    },{
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ],
  mode: 'history'
})
