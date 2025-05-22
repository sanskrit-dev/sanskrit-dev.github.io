<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
      <div>
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h1>
        <p class="mt-2 text-center text-sm text-gray-600">
          Join the Sanskrit.dev community
        </p>
      </div>
      
      <div v-if="error" class="rounded-md bg-red-50 p-4">
        <div class="text-sm text-red-700">{{ error }}</div>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="register">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              type="email"
              v-model="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              type="password"
              v-model="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Lock icon -->
              <svg class="h-5 w-5 text-amber-500 group-hover:text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            {{ loading ? 'Creating account...' : 'Sign up' }}
          </button>
        </div>
      </form>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div>
        <button
          type="button"
          @click="signInWithGoogle"
          class="w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5" />
          Continue with Google
        </button>
      </div>

      <div class="text-center">
        <router-link to="/login" class="font-medium text-amber-600 hover:text-amber-500">
          Already have an account? Sign in
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()

const register = async () => {
    error.value = ''
    loading.value = true
    
    try {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        router.push('/explore')
    } catch (err) {
        switch (err.code) {
            case 'auth/network-request-failed':
                error.value = 'Network error. Please check your internet connection.'
                break
            case 'auth/email-already-in-use':
                error.value = 'This email is already registered.'
                break
            case 'auth/weak-password':
                error.value = 'Password should be at least 6 characters.'
                break
            default:
                error.value = 'Failed to create account. Please try again.'
        }
    } finally {
        loading.value = false
    }
}

const signInWithGoogle = async () => {
    error.value = ''
    loading.value = true
    
    try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
        router.push('/explore')
    } catch (err) {
        switch (err.code) {
            case 'auth/popup-closed-by-user':
                error.value = 'Sign-in cancelled.'
                break
            case 'auth/network-request-failed':
                error.value = 'Network error. Please check your internet connection.'
                break
            default:
                error.value = 'Failed to sign in with Google. Please try again.'
        }
    } finally {
        loading.value = false
    }
}
</script>