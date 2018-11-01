<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-size: .28rem;
}
.router-fade-enter-active, .router-fade-leave-active{
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active{
  opacity: 0;
}
ul,li{
	list-style: none;
}
</style>
