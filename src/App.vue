<template>
  <div id="app">
    <mainAPP />
  </div>
</template>

<script>
import mainAPP from './components/mainAPP.vue'

export default {
  name: 'app',
  components: {
    mainAPP
  }
}
</script>

<style>
#app{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
