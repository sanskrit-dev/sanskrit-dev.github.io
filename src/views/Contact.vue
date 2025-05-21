<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-8">
            <div v-if="submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              <p>Your message has been sent successfully! We'll get back to you soon.</p>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"
                  >
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"
                >
              </div>
              
              <div>
                <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  required 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sanskrit focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="bg-sanskrit text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="bg-orange-100 inline-block p-4 rounded-full mb-6">
              <svg class="w-6 h-6 text-sanskrit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Email</h3>
            <p class="text-gray-600">contact@sanskrit.dev</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="bg-orange-100 inline-block p-4 rounded-full mb-6">
              <svg class="w-6 h-6 text-sanskrit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Discord</h3>
            <p class="text-gray-600">Join our community</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="bg-orange-100 inline-block p-4 rounded-full mb-6">
              <svg class="w-6 h-6 text-sanskrit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.776-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Documentation</h3>
            <p class="text-gray-600">Read our guides</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  // In a real implementation, this would send the form data to a server
  submitted.value = true
  
  // Reset form after submission
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    submitted.value = false
  }, 3000)
}
</script>