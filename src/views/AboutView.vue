<script setup>
import { useFlash } from "@/composables/useFlash.js";

let { flash } = useFlash();
</script>

<template>
  <div>
    <button @click="flash('Yay', 'About page', 'info')">Click me</button>
  </div>
</template>
