// Path: newuser.vue
<template>
  <div>
    <h1>New User</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
	<label for="name">Name</label>
	<input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="form-group">
	<label for="email">Email</label>
	<input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
	<label for="password">Password</label>
	<input type="password" class="form-control" id="password" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.name, this.email, this.password);
    },
  },
};
</script>

