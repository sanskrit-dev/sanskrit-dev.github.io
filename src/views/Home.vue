<template>
  <div>
          <!-- Hero Section -->
          <section class="bg-gray-50 py-20">
            <div class="container mx-auto px-6 text-center">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">Make <span class="text-sanskrit">sanskrit.dev</span> yours</h1>
              <div class="text-xl md:text-2xl text-gray-600 h-12">
                <transition name="fade" mode="out-in">
                  <p :key="currentTextIndex">{{ texts[currentTextIndex] }}</p>
                </transition>
              </div>
                <div class="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center">
                <router-link to="/pricing" class="bg-sanskrit text-white py-3 px-8 rounded-lg font-medium text-lg hover:bg-amber-600 transition duration-300 block sm:inline-block w-full sm:w-auto text-center">
                  Get Started
                </router-link>
                <router-link to="/explore" class="border-2 border-sanskrit text-sanskrit py-3 px-8 rounded-lg font-medium text-lg hover:bg-amber-100 transition duration-300 block sm:inline-block w-full sm:w-auto text-center">
                  Explore Tools
                </router-link>
                </div>
            </div>
          </section>

          <!-- Features Section -->
          <section class="py-16">
            <div class="container mx-auto px-6">
              <h2 class="text-3xl font-bold text-center mb-12">Why Choose sanskrit.dev?</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div class="bg-amber-100 inline-block p-4 rounded-full mb-6">
                    <svg class="w-10 h-10 text-sanskrit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 16.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2zm6 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2zm-6-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2zm6 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3">Free Domain Hosting</h3>
                  <p class="text-gray-600">Get your own personalized subdomain on sanskrit.dev completely free for personal projects</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div class="bg-amber-100 inline-block p-4 rounded-full mb-6">
                    <svg class="w-10 h-10 text-sanskrit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6a3 3 0 100-6 3 3 0 000 6zm8 8a3 3 0 100-6 3 3 0 000 6zm-4-9a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100-2 1 1 0 000 2zm-8 8a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 100-2 1 1 0 000 2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3">Community</h3>
                  <p class="text-gray-600">Join a vibrant community of Sanskrit enthusiasts, developers, and scholars</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div class="bg-amber-100 inline-block p-4 rounded-full mb-6">
                    <svg class="w-10 h-10 text-sanskrit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3">Tool Hosting</h3>
                  <p class="text-gray-600">Host your Sanskrit-related tools with affordable plans and showcase them to a targeted audience</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Showcase Section -->
          <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-6">
              <div class="flex justify-between items-center mb-12">
                <h2 class="text-3xl font-bold">Featured Tools</h2>
                <router-link to="/explore" class="text-sanskrit hover:underline font-medium">View All →</router-link>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="tool in featuredTools" :key="tool.id" class="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img :src="tool.image" :alt="tool.name" class="w-full h-48 object-cover">
                  <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">{{ tool.name }}</h3>
                    <p class="text-gray-600 mb-4">{{ tool.description }}</p>
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-500">By {{ tool.author }}</span>
                      <a :href="tool.url" class="text-sanskrit hover:underline">Visit →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- CTA Section -->
          <section class="py-16 bg-sanskrit">
            <div class="container mx-auto px-6 text-center">
              <h2 class="text-3xl font-bold text-white mb-6">Ready to showcase your Sanskrit work?</h2>
              <p class="text-white opacity-90 text-lg max-w-2xl mx-auto mb-8">
                Join our growing community of Sanskrit enthusiasts and developers. Get your own dedicated space on sanskrit.dev today!
              </p>
              <router-link to="/pricing" class="bg-white py-3 px-8 rounded-lg font-medium text-lg hover:bg-gray-100 text-cyan-700 border-4 border-cyan-700 transition duration-300 inline-block">
                Get Started Now
              </router-link>
            </div>
          </section>
        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTextIndex = ref(0);
const texts = ref([
  "Have you built anything related to Sanskrit?",
  "Have you built a Sanskrit learning tool?",
  "Have you built a word game in Sanskrit?",
  "Do you have your Sanskrit blog?",
  "Do you wish to build your Sanskrit blog?",
  "Do you wish to host your Sanskrit tool?"
]);

const featuredTools = ref([
  {
    id: 1,
    name: "Sanskrit Dictionary",
    description: "Comprehensive Sanskrit to English dictionary with etymological information",
    author: "Rahul Sharma",
    image: "/api/placeholder/400/250",
    url: "#"
  },
  {
    id: 2,
    name: "Sanskrit Grammar Tool",
    description: "Interactive tool for learning Sanskrit grammar and declensions",
    author: "Priya Patel",
    image: "/api/placeholder/400/250",
    url: "#"
  },
  {
    id: 3,
    name: "Devanagari Typing App",
    description: "Type in Sanskrit with intelligent transliteration support",
    author: "Aarav Mishra",
    image: "/api/placeholder/400/250",
    url: "#"
  }
]);

onMounted(() => {
  startTextCycle();
});

const startTextCycle = () => {
  setInterval(() => {
    currentTextIndex.value = (currentTextIndex.value + 1) % texts.value.length;
  }, 3000);
};
</script>
