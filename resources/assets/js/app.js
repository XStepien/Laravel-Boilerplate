import Vue from 'vue'
import datatable from 'components/dataTable/DataTable.vue'

// var metas = document.getElementsByTagName('meta')
//
// for (var i = 0; i < metas.length; i++) {
//   if (metas[i].getAttribute('name') === 'csrf-token') {
//     var Laravel = JSON.stringify(metas[i].getAttribute('content'))
//   }
// }

// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken)
//   next()
// })

new Vue({
  el: '#app',
  components: {
    datatable
  }
})
