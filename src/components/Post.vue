<template>
  <div>
    <ul class="post" v-if="posts.length >=1">
      <li 
      class="post__item"
      v-for="(item, i) in posts" 
      :key="i">
          <p>Title:{{ item.title }}</p>
           <p>Description:{{ item.desc }}</p>
           <button  class="post__btn" @click="editPost(i)">Edit post</button>
           <button class="post__btn" @click="deletePost(i)">Delete post</button>
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
ul {
    margin: 0;
    padding: 0;
}
.post {
    max-width: 700px;
    justify-content: center;
    display:flex;
    flex-wrap: wrap;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    padding-top:20px;
    padding-bottom: 20px;
}
    .post__item {
        background-color:#f9f9f9;
        padding-top: 10px;
        padding-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
        list-style: none;
        margin: 5px;
        display:flex;
        flex-direction: column;
        width: 31%;
    }

    .post__btn {
        margin-top: 5px;
    }
    
</style>