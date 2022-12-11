<script setup>
import { useFlash } from "@/composables/useFlash.js";

let { flash } = useFlash();
</script>

<template>
  <main>
    <p>
      <button @click="flash('Test', 'home page')">Click me</button>
    </p>
  </main>
</template>
