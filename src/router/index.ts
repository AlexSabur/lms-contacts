import { createRouter, createWebHashHistory } from 'vue-router'
import SettingsView from '@/views/SettingsView.vue'
import ContactListView from '@/views/ContactListView.vue'
import ContactCreateView from '@/views/ContactCreateView.vue'
import ContactEditView from '@/views/ContactEditView.vue'
import { validate } from 'uuid';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/contacts',
      name: 'home',
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactListView
    },
    {
      path: '/contacts/create',
      name: 'contact-create',
      component: ContactCreateView
    },
    {
      path: '/contacts/:id',
      name: 'contact-edit',
      // beforeEnter: (to, from, next) => {
      //   const { id = '' } = to.params;

      //   console.log(id)

      //   if (validate(id as string)) {
      //     next(to)
      //   } else {
      //     next({ path: '/' });
      //   }
      // },
      component: ContactEditView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
  ]
})

export default router
