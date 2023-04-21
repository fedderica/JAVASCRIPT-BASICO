<div id="app">
  <saludo></saludo>
</div>

<script>
Vue.component('saludo', {
  template: '<h1>Hola, ¡bienvenido a mi sitio web!</h1>'
})

new Vue({
  el: '#app'
})
</script>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
