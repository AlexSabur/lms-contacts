import { createRouter, createWebHashHistory } from 'vue-router'
import SettingsView from '@/views/SettingsView.vue'
import ContactListView from '@/views/ContactListView.vue'
import ContactCreateView from '@/views/ContactCreateView.vue'
import ContactEditView from '@/views/ContactEditView.vue'
import ContactEmptyView from '@/views/ContactEmptyView.vue'

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
      component: ContactListView,
      children: [
        {
          path: '/contacts',
          name: 'contact-none',
          component: ContactEmptyView
        },
        {
          path: '/contacts/create',
          name: 'contact-create',
          component: ContactCreateView
        },
        {
          path: '/contacts/:id',
          name: 'contact-edit',
          component: ContactEditView
        },
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
  ]
})

export default router
