<!-- eslint-disable prettier/prettier -->
<script setup>
import TheWelcome from "@/components/TheWelcome.vue";

setTimeout(() => {
  message = "I have been changed"
}, 2000)

// eslint-disable-next-line no-undef
let message = $ref("Hello World");

const doSomething = () => {
  alert('do something')
}

</script>

<template>
  <main>
    <TheWelcome />
    {{ message }}
    <p>
      <input type="text" v-model="message" />
      <button v-on:click="doSomething">Click ME</button>
    </p>
  </main>
</template>
