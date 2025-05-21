<template>
  <footer class="bg-gray-800 text-white py-10">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold text-sanskrit">sanskrit<span class="text-white">.dev</span></h2>
          <p class="mt-2 text-gray-300">Your domain for Sanskrit-related projects</p>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-gray-300 hover:text-white">Home</router-link></li>
              <li><router-link to="/explore" class="text-gray-300 hover:text-white">Explore</router-link></li>
              <li><router-link to="/pricing" class="text-gray-300 hover:text-white">Pricing</router-link></li>
              <li><router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white">GitHub</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2025 sanskrit.dev. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
