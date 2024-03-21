import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    isNew: false,
  }),
  getters: {
    profile() {
      return localStorage.getItem("profile")
    },
    user() {
      const user = localStorage.getItem("session");
      return user ? JSON.parse(user) : null;
    },
  },
  actions: {
    async checkNewUser() {
      return window.$axios.get("users")
        .then(
          (res) => {
            // update the profile
            localStorage.setItem('profile', res.data)
            return false
          }
        )
        .catch(
          (err) => {
            if (err.response.status) {
              console.info("✨ welcome a New user has joined")
              this.isNew = true
              return true
            }
            throw new Error('unauthorized')
          }
        )
    }
  },
});
export default useUserStore;
