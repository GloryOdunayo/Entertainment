<template>
    <div class="container" align="center" style="margin-top: 5em">
      <div class="col-sm-5" style="border: 1px solid gray; border-style: none">
        <h2 class="text-center">Reset Password</h2>
        <br />
        <div class="form-group form-floating">
          <input
            type="password"
            class="form-control fa fa-user border-right-0 shadow-none border-top-0 border-left-0"
            id="pwd"
            placeholder="Enter New password"
            name="pwd"
            v-model="password"
          />
          <label for="">Password</label>
        </div>
        <div class="mx-5">
          <button
            type="submit"
            id="continue"
            class="btn btn w-100 mt-2"
            v-on:click="update"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script>
    import axios from "axios";
    export default {
        data() {
        return {
            password: "",
        };
        },
        methods: {
            update() {
                let url = "http://127.0.0.1:8000/api/password/reset";
                let user = { password: this.password };
                console.log(user);
                axios.post(url, user).then((response) => {
                    if (response.data.status == true) {
                        console.log(response);
                    } else {
                        console.log("There's an error");
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
  