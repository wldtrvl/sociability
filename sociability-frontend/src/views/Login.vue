<script setup>
import {inject, ref} from 'vue'
const axios = inject('axios');

let formData = ref({
  name: '',
  password: '',
  email: ''
})

function handleSubmitClick() {
  axios.post(`http://localhost:3001/user`, formData.value)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
  })
}
</script>

<template>
  <h1>Sign Up</h1>
    <input v-model="formData.name" placeholder="name">
    <input v-model="formData.email" placeholder="email">
    <input v-model="formData.password" placeholder="password">
    <button @click="handleSubmitClick">Sign Up</button>
</template>

<style scoped>
</style>
