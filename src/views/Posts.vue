<template>
  <div class="posts">
   <p> {{posts.length}} Posts </p>

   <Post :posts="posts"/>
  </div>
</template>

<script>
import Post from "@/components/Post.vue"
import {mapGetters} from "vuex";
export default {
  name: 'posts',
  components: {
    Post,
  },
  computed: {
    ...mapGetters("crud", ["posts"])
  }

}
</script>
