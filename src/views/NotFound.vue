<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-red-500">404</h1>
      <h2 class="text-4xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p class="text-gray-600 mt-4 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-sanskrit text-white rounded-lg transition-colors duration-300"
      >
        Return to Homepage
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>