// vueform.config.(js|ts)

import ru from '@vueform/vueform/locales/ru'
import tailwind from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'

export default defineConfig({
    theme: tailwind,
    locales: { ru },
    locale: 'ru',
})
