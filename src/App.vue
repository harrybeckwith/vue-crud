<template>
  <div id="app">
    {{getCount}}
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'app',
computed: {
    ...mapGetters("crud",["getCount"])
}
}
</script>

<style>

</style>
