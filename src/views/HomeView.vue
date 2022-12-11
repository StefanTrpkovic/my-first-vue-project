<script setup>
//import { ref, watch } from "vue";
import { useStorage } from "@/composables/useStorage.js";

let food = useStorage("food");

// const food = ref(localStorage.getItem("food"));
// const age = ref(localStorage.getItem("age"));

// const write = (name, value) => {
//   localStorage.setItem(name, value);
// };

// watch(food, (val) => {
//   write("food", val);
// });

// watch(age, (val) => {
//   write("age", val);
// });
</script>
<template>
  food: {{food}}
  <main>
    <p>
      What is your favorite food?
      <input type="text" v-model="food" />
    </p>
  </main>
</template>
