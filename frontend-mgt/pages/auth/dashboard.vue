<script lang="ts" setup>
definePageMeta({
  middleware: 'auth-limit'
})
const auth = useAuthStore()
</script>
<template>
  <div>
    <h2 class="title">Dashboard</h2>
    <p class="text-md">User</p>
    <p class=" text-blue-800">{{ auth.user?.id }}</p>
    <p class=" text-blue-800">{{ auth.user?.name }}</p>
    <p class=" text-blue-800">{{ auth.user?.email }}</p>
  </div>
</template>

<style scoped></style>
