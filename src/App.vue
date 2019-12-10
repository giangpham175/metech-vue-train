<template>
  <div id="app">
    <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/register" v-if="$store.state.username === null">Register</router-link>
      <router-link to="/login" v-if="$store.state.username === null">Login</router-link>
      <a v-else @click="logout">Logout</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },
  created() {
    if (
      this.$store.state.username === null &&
      this.$router.currentRoute.name === "username"
    )
      this.$router.push("login");
  }
};
</script>
