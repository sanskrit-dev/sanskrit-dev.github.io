<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold mb-8">Explore Sanskrit Tools</h1>
      
      <div class="mb-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div class="relative md:w-1/2">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search tools..." 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"
          >
          <svg class="w-5 h-5 text-gray-400 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <div class="md:w-1/3">
          <select 
            v-model="selectedCategory" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent appearance-none"
          >
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
      
      <div v-if="filteredTools.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="tool in filteredTools" :key="tool.id" class="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
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
      
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-xl font-medium text-gray-500">No tools found matching your search</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const selectedCategory = ref('all');

const tools = ref([
  {
    id: 1,
    name: "Sanskrit Dictionary",
    description: "Comprehensive Sanskrit to English dictionary with etymological information",
    author: "Rahul Sharma",
    image: "/api/placeholder/400/250",
    url: "#",
    category: "dictionary"
  },
  {
    id: 2,
    name: "Sanskrit Grammar Tool",
    description: "Interactive tool for learning Sanskrit grammar and declensions",
    author: "Priya Patel",
    image: "/api/placeholder/400/250",
    url: "#",
    category: "education"
  },
  {
    id: 3,
    name: "Devanagari Typing App",
    description: "Type in Sanskrit with intelligent transliteration support",
    author: "Aarav Mishra",
    image: "/api/placeholder/400/250",
    url: "#",
    category: "tool"
  },
  {
    id: 4,
    name: "Sanskrit Texts Repository",
    description: "Digital library of ancient Sanskrit texts with translations",
    author: "Vikram Acharya",
    image: "/api/placeholder/400/250",
    url: "#",
    category: "library"
  },
  {
    id: 5,
    name: "Sanskrit Pronunciation Guide",
    description: "Learn proper Sanskrit pronunciation with audio examples",
    author: "Ananya Desai",
    image: "/api/placeholder/400/250",
    url: "#",
    category: "education"
  },
  {
    id: 6,
    name: "Sanskrit Meter Analyzer",
    description: "Analyze and identify metrical patterns in Sanskrit poetry",
    author: "Deepak Shastri",
    image: "/api/placeholder/400/250",
    url: "#",
    category: "tool"
  }
]);

const categories = ref([
  { id: 'all', name: 'All Categories' },
  { id: 'dictionary', name: 'Dictionaries' },
  { id: 'education', name: 'Educational' },
  { id: 'tool', name: 'Tools' },
  { id: 'library', name: 'Libraries' }
]);

const filteredTools = computed(() => {
  return tools.value.filter(tool => {
    const matchesQuery = tool.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                      tool.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === 'all' || tool.category === selectedCategory.value;
    return matchesQuery && matchesCategory;
  });
});
</script>
