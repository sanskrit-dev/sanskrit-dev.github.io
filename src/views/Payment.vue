<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div v-if="!loading" class="w-full max-w-md">
        <div v-if="user" class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Scan to Pay</h2>
        <img 
            :src="`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=example@upi&pn=Example%20Name&am=100`"
            alt="UPI QR Code"
            class="mx-auto mb-6"
        />
          <p class="text-gray-600 text-center mb-6">Scan this QR code with your UPI app to make a payment.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { useAuth } from '../composables/useAuth.js'
  import { watchEffect } from 'vue'
  
  const router = useRouter()
  const { user, loading } = useAuth()
  
  watchEffect(() => {
    if (!loading.value && !user.value) {
      router.replace({ path: '/login', query: { to: '/payment' } })
    }
  })
  </script>