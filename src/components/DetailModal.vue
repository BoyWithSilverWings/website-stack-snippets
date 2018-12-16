<template>
  <div class="section">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Title">
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Description of starter"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Tags</label>
      <div class="control">
        <input type="text" class="input" placeholder="Enter tags seperated by commas">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-modal',
}
</script>

