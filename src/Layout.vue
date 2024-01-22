<template>
  <div>
    <div id="routes">
      <RouterLink to="/example1">Example 1</RouterLink>
      <RouterLink to="/example2">Example 2</RouterLink>
      <RouterLink to="/example3">Example 3</RouterLink>
      <RouterLink to="/example4">Example 4</RouterLink>
      <RouterLink to="/example5">Example 5</RouterLink>
      <RouterLink to="/example6">Example 6</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#routes a {
 display: inline-block;
 margin: 12px;
 padding: 4px 8px;
 border-radius: 8px;
}

#routes a:hover {
  background: #f6f6f6
}
</style>