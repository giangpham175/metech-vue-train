<template>
  <div class="form">
    <input type="text" placeholder="name" v-model="name" />
    <input type="text" placeholder="referral" v-model="referral" />
    <input type="text" placeholder="username" v-model="username" />
    <input type="password" placeholder="password" v-model="password" />
    <input type="password" placeholder="repeat password" v-model="rpassword" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      password: "",
      rpassword: "",
      referral: "",
      username: ""
    };
  },
  methods: {
    register() {
      if (this.rpassword !== this.password) {
        this.$swal("Mistyped repeatpassword!");
      } else {
        this.$store
          .dispatch("register", {
            name: this.username,
            password: this.password,
            referral: this.referral,
            username: this.username
          })
          .then(res => {
            this.$toastr.s(res.data.message);
            this.$router.push("login");
          })
          .catch(error => {
            // window.console.log(error.response)
            var err = error.response.data.error;
            this.$swal(
              err.username
                ? err.username.toString()
                : "" + err.password
                ? err.password.toString()
                : ""
            );
          });
      }
    }
  }
};
</script>