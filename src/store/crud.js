const crud = {
    namespaced: true,
    state: {
        posts: [
        
        ],
        currentEdit: null,
    },
    mutations: {
        createNewPost(state, post) {
            state.posts.push(post);
        },
        deletePost(state, i) {
            state.posts.splice(i, 1);
        },
        editPost(state, i) {
            state.currentEdit = i;
        },
        updatePost(state,post) {
            
// Using the current edit index
// Go into the posts 
// And make the new updates 
// with new object 

            state.posts[state.currentEdit] = post;


        }
    },
    actions: {
        CREATE_NEW_POST({commit}, post) {
            commit("createNewPost", post)
        },
        DELETE_POST({commit}, i) {
            commit("deletePost", i)
        },
        EDIT_POST({commit}, i) {
            commit("editPost", i)
        },
        UPDATE_POST({commit}, post) {
            commit("updatePost", post)
        }
    },
    getters: {
        posts(state) {
            return state.posts
        },
        currentEdit(state) {
            return state.currentEdit
        }
    }
}

export default crud;