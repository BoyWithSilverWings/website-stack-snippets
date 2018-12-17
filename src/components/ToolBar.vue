<template>
  <div class="container-cl">
    <a href="/" class="logo">
      <img src="../assets/logo.png" alt="" class="logo-image">
    </a>
    <div class="second-container">
      <h1 class="title">{{ title }}</h1>
      <p class="description bold">{{ description }}</p>
      <p class="sub">{{ tags.join(", ")}}</p>
      <p class="sub">Author: <span class="bold">{{ author }}</span></p>
      <p class="sub">Created: <span class="bold">{{created}}</span></p>
      <button v-on:click="$emit('edit')" class="btn btn-primary edit-btn">Edit</button>
    </div>
    <div class="action-buttons">
      <button v-on:click="$emit('save')" class="btn btn-success save-btn">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    tags: Array,
    author: String,
    created: String,
  }
}
</script>

<style scoped>
  .container-cl {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.4rem;
  }
  .second-container {
    padding: 2rem 0;
    border-top: 1px solid #f5f0f0;
    border-bottom: 1px solid #f5f0f0;
  }
  .title {
    font-weight: 600;
    font-size: 1rem;
  }
  .description {
    font-size: 0.9rem;
  }
  .bold {
    font-weight: 500;
  }
  .sub {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
  .logo {
    height: 4rem;
    width: 3rem;
    margin: 0 auto;
    display: block;
  }
  .logo-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .action-buttons {
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid #f5f0f0;
    border-bottom: 1px solid #f5f0f0;
  }
  .edit-btn {
    margin: 1rem auto;
    display: block;
  }
</style>

