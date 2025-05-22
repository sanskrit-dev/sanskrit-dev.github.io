import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const useAuth = () => {
  const user = ref(null)
  const loading = ref(true)

  const logout = async () => {
    const auth = getAuth()
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  onMounted(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser
      loading.value = false
    })
  })

  return {
    user,
    loading,
    logout
  }
}