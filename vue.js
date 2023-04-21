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


<div id="app">
  {{ mensaje }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    mensaje: '¡Hola, mundo!'
  }
})
</script>


<div id="app">
  <ul>
    <li v-for="fruta in frutas">{{ fruta }}</li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    frutas: ['manzana', 'banana', 'cereza', 'uva']
  }
})
</script>


<div id="app">
  <button v-on:click="saludar">Saludar</button>
</div>

<script>
new Vue({
  el: '#app',
  methods: {
    saludar: function () {
      alert('¡Hola, amigo!')
    }
  }
})
</script>
