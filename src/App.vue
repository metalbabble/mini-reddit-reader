<template>
  <div id="app">
        <header>
        <h2>Simple Reddit Client</h2>
        <em>Powered by Vue.js ~ metalbabble.com</em>
    </header>

    <hr />
    <RedditComponent/>
  </div>
</template>

<script>
import RedditComponent from './components/RedditComponent.vue'

export default {
  name: 'app',
  components: {
    RedditComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
