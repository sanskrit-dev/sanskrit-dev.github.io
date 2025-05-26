<template>
  <nav class="bg-white shadow-md py-4">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <span class="text-2xl font-bold text-sanskrit">sanskrit<span class="text-gray-800">.dev</span></span>
      </router-link>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200">Home</router-link>
        <router-link to="/explore" class="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200">Explore</router-link>
        <router-link to="/pricing" class="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200">Pricing</router-link>
        <router-link to="/contact" class="text-gray-800 hover:text-amber-500 font-medium transition-colors duration-200">Contact</router-link>
      </div>

      <!-- Desktop Auth Buttons -->
      <div class="hidden md:flex items-center space-x-4">
        <template v-if="user">
          <span class="text-gray-700">{{ user.displayName || user.email }}</span>
          <button @click="handleLogout" class="bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition duration-300 cursor-pointer">
            Logout
          </button>
        </template>
        <template v-else>
          <!-- <router-link to="/register" class="text-sanskrit hover:text-amber-600 font-medium">
            Register
          </router-link> -->
          <router-link to="/login" class="bg-sanskrit text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-600 transition duration-300">
            Login
          </router-link>
        </template>
      </div>

      <!-- Mobile Hamburger Button -->
      <button @click="toggleMobileMenu" class="md:hidden hamburger-button cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 mobile-sidebar">
        <div class="p-6">
          <div class="flex justify-end">
            <button @click="toggleMobileMenu" class="text-gray-500 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-8 flex flex-col space-y-4">
            <template v-if="user">
              <span class="text-gray-700 font-medium">{{ user.displayName || user.email }}</span>
            </template>
            <router-link @click="toggleMobileMenu" to="/" class="text-gray-800 hover:text-amber-500 font-medium">Home</router-link>
            <router-link @click="toggleMobileMenu" to="/explore" class="text-gray-800 hover:text-amber-500 font-medium">Explore</router-link>
            <router-link @click="toggleMobileMenu" to="/pricing" class="text-gray-800 hover:text-amber-500 font-medium">Pricing</router-link>
            <router-link @click="toggleMobileMenu" to="/contact" class="text-gray-800 hover:text-amber-500 font-medium">Contact</router-link>
            
            <template v-if="user">
              <button @click="handleLogout" class="bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition duration-300 cursor-pointer">
                Logout
              </button>
            </template>
            <template v-else>
              <router-link to="/register" @click="toggleMobileMenu" class="text-sanskrit hover:text-amber-600 font-medium">
                Register
              </router-link>
              <router-link to="/login" @click="toggleMobileMenu" class="bg-sanskrit text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-600 transition duration-300">
                Login
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { user, logout } = useAuth();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleLogout = async () => {
  await logout();
  isMobileMenuOpen.value = false;
  router.push('/');
};

const handleClickOutside = (event) => {
  const sidebar = document.querySelector('.mobile-sidebar');
  const hamburger = document.querySelector('.hamburger-button');
  if (
    isMobileMenuOpen.value &&
    !(sidebar && sidebar.contains(event.target)) &&
    !(hamburger && hamburger.contains(event.target))
  ) {
    isMobileMenuOpen.value = false;
  }
};

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// Clean up event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
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
