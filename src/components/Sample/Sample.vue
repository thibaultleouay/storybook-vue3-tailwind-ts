
<template>
  <div class="border-8 border-red-300">
    <h1>Example component with VUE 3 and TS AND TAILWIND</h1>
    <p class="text-3xl font-bold underline">
      someProp has value of {{ someProp }}
    </p>
    <p class="text-3xl font-bold underline">
      otherProp has value of {{ otherProp }}
    </p>
  </div>
</template>
 
<script lang="ts" setup>


defineProps({
    someProp: {
      type: String,
      default: "Something value",
    },
    otherProp: {
      type: Number,
      default: 33,
    },
  })
</script>

<style></style>