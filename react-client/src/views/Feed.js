import Post from "../components/Post";
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
import { useEffect, useState } from "react";
// import PostEdit from "../components/Post-edit.vue";

const createPost = { src: "", alt: "", caption: "", isPublic: true };

const cardStyle = {
  'margin-bottom': '10px';
}

const VM = {
  data: () => ({
    posts: [],
    newPost: newPost(),
  }),
  async mounted() {
    this.posts = await GetFeed(session.user.handle);
  },
  methods: {
    async remove(post, i) {
      console.log({ post });
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
    async add() {
      const response = await Add(this.newPost);
      console.log({ response });
      if (response) {
        this.posts.unshift(this.newPost);
        this.newPost = newPost();
      }
    }
  },
};


export default function Feed() {
  return (

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(createPost());

    useEffect(() => {
      GetFeed(session.user.handle).then(setPosts);
    });

    <div class="section">
      <h1 class="title">Feed Page</h1>
      <div class="columns">

        <div class="column">
          <div class="card" style="cardStyle">
            <div class="card-content">
              {JSON.stringify(newPost)}
            </div>
          </div>
        </div>

        <div class="column is-one-half is-offset-one-half">
          <post-edit new-post="newPost" add="add()" />

          { posts.map((p, i) => {
              <div class="post" key={ p.src }>
                      <Post post={p} deletePost={()=> VM.methods.remove(p, i)} />
              </div>
          })}

      </div>

      <div class="column">
        <Post post={newPost}/>
      </div>
    </div>
  </div >
);
}
