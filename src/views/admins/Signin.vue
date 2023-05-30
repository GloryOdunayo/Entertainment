<script setup>
  import Nav from '../../components/Nav.vue'
</script>
<template>
  <Nav></Nav>
  <div class="container" align="center" style="margin-top: 5em">
    <div class="col-sm-5" style="border: 1px solid gray; border-style: none">
      <h2 class="text-center">Welcome Back Admin</h2>
      <br />
      <p v-if="message" class="text-danger">{{ this.message }}</p>
      <div class="form-group form-floating">
        <input
          type="email"
          class="form-control border-right-0 shadow-none border-top-0 border-left-0"
          id="email"
          placeholder="Enter email"
          name="email"
          v-model="email"
        />
        <label for="">&#64; E-mail</label>
      </div>
      <div class="form-group form-floating">
        <input
          type="password"
          class="form-control fa fa-user border-right-0 shadow-none border-top-0 border-left-0"
          id="pwd"
          placeholder="Enter password"
          name="pwd"
          v-model="password"
        />
        <label for="">Password</label>
      </div>
      <a href="#">Forgot Password</a>
      <div class="mx-5">
        <button
          type="submit"
          id="continue"
          class="btn btn w-100 mt-2"
          v-on:click="signin"
        >
          Continue
        </button>
        <br /><br />
        <p>--------- OR ---------</p>
        <button id="sign" class="btn btn">
          <i class="fa fa-google"></i>Sign In with google
        </button>

        <p class="mt-5">
          Don't have an account? <a href="#" style="color: #a10035">Sign In</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    signin() {
      let url = "http://127.0.0.1:8000/api/signin";
      let user = {
        email: this.email, 
        password: this.password 
      };
      axios.post(url, user).then((response) => {
        if (response.data.success == true) {
          localStorage.email=this.email
          this.$router.push({ name: 'admin' })
        } else {
          this.message = "Incorrect Credentials";
        }
        }).catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
#continue {
  background-color: #a10035;
  color: white;
}

#sign {
  background-color: #fedcdc;
  color: black;
  border-style: none;
  background-size: 100%;
  width: 100%;
}

a {
  text-decoration: none;
}
</style>
