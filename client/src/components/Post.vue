<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="post.src" :alt="post.alt">
      <button class="delete is-small" @click="emit('remove')"></button>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="post.user.pic" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{post.user.firstName}} {{post.user.lastName}}</p>
        <p class="subtitle is-6">
          {{post.user.handle}}
                <time :datetime="post.time">{{prettyDate}}</time>

        </p>
      </div>
    </div>

    <div class="content">
      {{post.caption}}
    </div>
  </div>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
</div>
</template>

<script>
export default {
    props: {
        post: Object
    },
    computed: {
      prettyDate() {
        return this.post?.time?.toDateString();
      }
    }
}
</script>

<style>
  button.delete {
    position: absolute;
    top : 5px;
    right : 5px;
  }
</style>