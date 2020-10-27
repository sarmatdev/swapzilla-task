import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import 'vuetify/src/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'

const options = {
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#2A6591',
        info: '#54B2C8',
        warning: '#EEA53A',
        dark: '#3C484C',
        secondary: '#dedede',
        light: '#F6F6F6',
        label: '#9AA2A8',
        error: '#EF6D3A',
        accent: '#19587F',
        alpha: '#C4C4C4',
        border: '#F0F0F0',
        white: '#FFFFFF'
      }
    },
    options: {
      customProperties: true
    }
  },
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
}

Vue.use(Vuetify, options)

export default new Vuetify(options)
