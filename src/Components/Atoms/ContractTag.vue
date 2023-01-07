<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div
    class="bg-buttonSuccess font-semibold text-xs text-buttonText px-5 rounded-xl py-1"
  >
    {{ title }}
  </div>
</template>
