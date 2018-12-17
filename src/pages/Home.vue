<template>
  <main>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body body-container">
        <div class="container">
          <h1 class="title">
            Stack Snippets
          </h1>
          <h2 class="subtitle">
            Create Stackoverflow Snippets easily
          </h2>
        </div>
        <router-link to="/templates/create" class="button is-primary is-rounded is-medium is-outlined">Create</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .body-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
  }
</style>

