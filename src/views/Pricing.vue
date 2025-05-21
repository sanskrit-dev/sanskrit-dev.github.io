<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your needs. Free for hobbyists, affordable for developers.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(plan, index) in plans" :key="index" class="bg-white rounded-xl shadow-lg overflow-hidden relative">
          <div v-if="plan.popular" class="absolute top-0 right-0 bg-sanskrit text-white py-1 px-4 rounded-bl-lg font-medium">
            Popular
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold">{{ plan.price }}</span>
              <span v-if="plan.period" class="text-gray-500">{{ plan.period }}</span>
            </div>
            <p class="text-gray-600 mb-6">{{ plan.description }}</p>
            <ul class="mb-8 space-y-3">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <button 
              :class="[
                'w-full py-3 px-4 rounded-lg font-medium',
                plan.popular ? 'bg-sanskrit text-white hover:bg-orange-600' : 'border-2 border-sanskrit text-sanskrit hover:bg-orange-50'
              ]"
              class="transition duration-300"
            >
              {{ plan.cta }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-16 bg-white p-8 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">What's included in the free Hobbyist plan?</h3>
            <p class="text-gray-600">The Hobbyist plan includes a free subdomain (yourname.sanskrit.dev), CNAME record support, and personal webpage hosting. It's perfect for individuals who want to create a personal website or blog related to Sanskrit.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">What's the difference between personal webpage hosting and tool hosting?</h3>
            <p class="text-gray-600">Personal webpage hosting is suitable for static websites and blogs. Tool hosting provides server-side capabilities, allowing you to host interactive applications, APIs, and other dynamic content that requires backend processing.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan later?</h3>
            <p class="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Do you offer custom solutions?</h3>
            <p class="text-gray-600">Yes, our Enterprise plan offers custom hosting solutions for organizations with specific needs. Please contact us to discuss your requirements, and we'll tailor a solution for you.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([

            {
              name: "Hobbyist",
              price: "Free",
              description: "Perfect for personal projects and blogs",
              features: [
                "Free subdomain (yourname.sanskrit.dev)",
                "CNAME record support",
                "Personal webpage hosting",
                "Community support"
              ],
              cta: "Get Started",
              popular: false
            },
            {
              name: "Developer",
              price: "$9.99",
              period: "per month",
              description: "For developers building Sanskrit tools",
              features: [
                "Everything in Hobbyist",
                "Tool hosting",
                "API access",
                "1GB storage",
                "50GB bandwidth",
                "Email support"
              ],
              cta: "Start Developing",
              popular: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For organizations with specific needs",
              features: [
                "Everything in Developer",
                "Custom hosting solutions",
                "Unlimited storage",
                "Unlimited bandwidth",
                "Priority support",
                "Custom integrations"
              ],
              cta: "Contact Us",
              popular: false
            }])
</script>