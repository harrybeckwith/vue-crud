<template>
  <div class="edit-post">
    <p>edit posts</p>
    <main class="main container" v-if="currentEdit !== null">
      <form @submit.prevent="editPost">
        <div class="control">
          <label for="title">Title</label>
          <input id="title" type="text" v-model="posts[currentEdit].title" />
        </div>
        <div class="control">
          <label for="body">Body</label>
          <textarea id="body" type="text" v-model="posts[currentEdit].desc"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditPost",
  computed: {
    ...mapGetters("crud", ["currentEdit", "posts"])
  },
  methods: {
    ...mapActions("crud", ["UPDATE_POST"]),
    editPost() {
      const post = {
        title: this.posts[this.currentEdit].title,
        desc: this.posts[this.currentEdit].desc
      };
      console.log(post);

      event.target.reset();

      this.UPDATE_POST(post);

      this.$router.push({
        path: '/'
      })
    }
  }
};
</script>