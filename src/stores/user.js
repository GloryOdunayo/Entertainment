// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('counter', {
  state: () => {
    return { 
        count: 0,
        fullname: "",
        email: "",
        password: ""
     }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const userStore = defineStore('counter', () => {
//   const fullname = ref("");
//   const email = ref("");
//   const password = ref("");
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { fullname, email, password }
// })
