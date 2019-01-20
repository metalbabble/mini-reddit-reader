<template>
  <div id="app">
    <header class="jumbotron container">
        <h1>Mini Reddit Client</h1>
        <em>~ metalbabble.com ~</em>
    </header>
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
