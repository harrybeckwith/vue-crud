<template>
  <div class="post">
    <p>post</p>
    <ul>
      <li v-for="(item, i) in posts" :key="i">
          <p>Title:{{ item.title }}</p>
           <p>Description:{{ item.desc }}</p>
           <button  @click="editPost(i)">Edit post</button>
           <button @click="deletePost(i)">Delete post</button>
          </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Post",
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
      ...mapActions('crud', ["DELETE_POST", "EDIT_POST"]),
      deletePost(i) {
          this.DELETE_POST(i);
      },
       editPost(i) {
           this.$router.push({
               path: '/edit-post'
           })
          this.EDIT_POST(i);
      }
  }
  
};
</script>

<style>
</style>