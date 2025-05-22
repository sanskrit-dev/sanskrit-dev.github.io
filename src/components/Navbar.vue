<template>
  <nav class="bg-white shadow-md py-4">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <span class="text-2xl font-bold text-sanskrit">sanskrit<span class="text-gray-800">.dev</span></span>
      </router-link>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="text-gray-800 hover:text-sanskrit font-medium">Home</router-link>
        <router-link to="/explore" class="text-gray-800 hover:text-sanskrit font-medium">Explore</router-link>
        <router-link to="/pricing" class="text-gray-800 hover:text-sanskrit font-medium">Pricing</router-link>
        <router-link to="/contact" class="text-gray-800 hover:text-sanskrit font-medium">Contact</router-link>
      </div>

      <!-- Desktop Login Button -->
      <div class="hidden md:block">
        <router-link to="/login" class="bg-sanskrit text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-600 transition duration-300">
          Login
        </router-link>
      </div>

      <!-- Mobile Hamburger Button -->
      <button @click="toggleMobileMenu" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300"
      >
        <div class="p-6">
          <div class="flex justify-end">
            <button @click="toggleMobileMenu" class="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-8 flex flex-col space-y-4">
            <router-link @click="toggleMobileMenu" to="/" class="text-gray-800 hover:text-sanskrit font-medium">Home</router-link>
            <router-link @click="toggleMobileMenu" to="/explore" class="text-gray-800 hover:text-sanskrit font-medium">Explore</router-link>
            <router-link @click="toggleMobileMenu" to="/pricing" class="text-gray-800 hover:text-sanskrit font-medium">Pricing</router-link>
            <router-link @click="toggleMobileMenu" to="/contact" class="text-gray-800 hover:text-sanskrit font-medium">Contact</router-link>
            <router-link to="/login" class="bg-sanskrit text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-600 transition duration-300 cursor-pointer">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

</script>

<style>
/* Add transition styles for the slide effect */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
