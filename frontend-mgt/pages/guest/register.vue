<script lang="ts" setup>
definePageMeta({
  middleware: 'guest-limit'
})
const formData = ref({
  name: 'User',
  email:'test1@example.com',
  password: 'password',
  password_confirmation: 'password'
})
const auth = useAuthStore()
async function handleFormSubmission(){
 await auth.register(formData.value)
}
</script>

<template>
  <div>
    <h2 class="title">Register</h2>
    <div class="login-form">
      <form @submit.prevent="handleFormSubmission">
      <div class="form-input">
        <label for="name">Names</label>
        <input type="text" v-model="formData.name" id="name">
      </div>
      <div class="form-input">
        <label for="email">Email</label>
        <input type="email" v-model="formData.email" id="email">
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input type="password" v-model="formData.password" id="password">
      </div>
      <div class="form-input">
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" v-model="formData.password_confirmation" id="password_confirmation">
      </div>
      <button class="form-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-form {
  @apply  bg-pink-100 w-full
}
.form-input{
  @apply my-2 mx-4 grid columns-2 gap-1
}
.form-input input{
  @apply mx-4 px-3 my-1 w-10/12 bg-amber-100 border border-spacing-1 border-amber-900 rounded-lg
}
.form-btn {
  @apply bg-green-500 text-slate-200  w-1/2 rounded-lg px-6 py-1 m-2 hover:border border-green-700 
}

</style>
