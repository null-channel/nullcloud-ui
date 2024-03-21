import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
  }),
  getters: {
    isNew(): boolean {
      const isNew = localStorage.getItem("isNewUser")
      return isNew ? JSON.parse(isNew) : false;
    },
    profile() {
      const profile = localStorage.getItem("profile")
      return profile ? JSON.parse(profile) : null;
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
              localStorage.setItem('isNewUser', JSON.stringify(true))
              return true
            }
            throw new Error('unauthorized')
          }
        )
    }
  },
});
export default useUserStore;
