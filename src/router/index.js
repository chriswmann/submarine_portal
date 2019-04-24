import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import StatusPage from '@/components/pages/StatusPage'
import ProgrammePage from '@/components/pages/ProgrammePage'
import ContactsPage from '@/components/pages/ContactsPage'
import HelpPage from '@/components/pages/HelpPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      title: 'Submarine Portal',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/status',
      title: 'Fleet Status',
      name: 'StatusPage',
      component: StatusPage
    },
    {
      path: '/programme',
      title: 'Fleet Programme',
      name: 'ProgrammePage',
      component: ProgrammePage
    },
    {
      path: '/contacts',
      title: 'Enterprise Contacts',
      name: 'ContactsPage',
      component: ContactsPage
    },
    {
      path: '/help',
      title: 'Portal Help',
      name: 'HelpPage',
      component: HelpPage
    }
  ]
})
