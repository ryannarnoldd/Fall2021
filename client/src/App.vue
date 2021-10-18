<template>
  <div class="container">
    <div class="columns">
      <div class="column">
      </div>
    </div>
    <Nav />
    <messages />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script> 
import Messages from './components/Messages.vue';
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
    Messages
  }
} 
</script>