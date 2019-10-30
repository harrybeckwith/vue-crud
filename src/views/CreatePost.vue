<template>
  <div class="create-post">
    <p>Create posts</p>
    <main class="main container">
      <form  @submit.prevent="createPost">
        <div class="control">
          <label for="title">Title</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div class="control">
          <label for="body">Body</label>
          <textarea id="body" type="text" v-model="desc"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
  name: "CreatePosts",
  data() {
    return {
      title: "",
      desc: ""
    };
  },
  methods: {
    ...mapActions("crud", ['CREATE_NEW_POST']),
    createPost(event) {
      
      const post = {
        title: this.title,
        desc: this.desc,
      }

      event.target.reset();
      this.CREATE_NEW_POST(post);

      this.$router.push({
        path: '/'
      })

    }
  }
};
</script>