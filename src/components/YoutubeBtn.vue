<script setup>
const props = defineProps({
  href: String
})

</script>


<template>
  <a :href="href" target="_blank" class="px-3 py-2 rounded-md bg-red-500 text-white font-medium">Youtube</a>
</template>
