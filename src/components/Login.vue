<template>
  <div class="form">
    <input type="text" placeholder="username" v-model="username" />
    <input type="password" placeholder="password" v-model="password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          this.$store.commit("login", res.data.data);
          window.localStorage.setItem("token", res.data.token);
          this.$router.push("member");
          this.$toastr.s("login success");
          this.$store.dispatch("getJobs");
        })
        .catch(res => {
          this.$swal(res.message);
        });
    }
  }
};
</script>