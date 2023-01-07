<script setup>
import ContractTag from "../Atoms/ContractTag.vue";
defineProps({
  title: String,
  company: String,
  location: String,
  date: String,
  contract: String,
});
</script>

<template>
  <div class="md:min-w-[604px] w-full md:max-w-[800px] flex flex-col gap-6">
    <div
      class="flex flex-col items-center md:flex-row gap-3 md:gap-0 md:justify-between"
    >
      <div class="flex flex-col gap-2">
        <h5 class="md:text-2xl text-xl text-center md:text-start">
          {{ title }}
        </h5>
        <div class="flex items-center md:justify-start justify-center gap-10">
          <div class="flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="{2}"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <p class="text-sm font-medium">{{ company }}</p>
          </div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="{2}"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p class="text-sm font-medium">{{ location }}</p>
          </div>
        </div>
      </div>
      <div class="flex md:flex-col gap-2 items-center md:items-end">
        <ContractTag :title="contract" />
        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="{2}"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p class="font-medium">{{ date }}</p>
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 dark:bg-darkContent bg-lightContent"></div>
  </div>
</template>
