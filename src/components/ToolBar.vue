<template>
  <div class="container">
    <a href="/" class="logo">
      <img src="../assets/logo.png" alt="" class="logo-image">
    </a>
    <div class="action-buttons">
      <button class="btn btn-primary">Details</button>
      <button class="btn btn-success save-btn">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>

