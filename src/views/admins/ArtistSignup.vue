<template>
    <Nav></Nav>
          <div class="container " align="center" style="margin-top: 5em;">
            <div class="col-sm-5" style="border: 1px solid gray; border-style: none;">
            <h2 class=" text-center">Create an account for Admin</h2><br/>
                <p v-if="message" class="text-danger">{{ this.message }}</p>
                <div class="form-group form-floating">
                    <input type="text" class="form-control border-right-0 shadow-none border-top-0 border-left-0 " id="fname" name="name" placeholder="Fullname" v-model="name">
                    <label for="fname">&#128113; Full Name</label>
                    </div>
                <div class="form-group form-floating">
                    <input type="email" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="mail" name="email" placeholder="Enter email" v-model="email">
                    <label for="mail">&#64; E-mail</label>
                </div>
                <div class="form-group form-floating">
                    <input type="password" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="pwd" name="password" placeholder="Enter password" v-model="password">
                    <label for="pwd">&#42;&#42;&#42; Password</label>
                </div>
                <div class="mx-5">
                <button id="continue" class="btn btn w-100 mt-2" v-on:click="addUser">Continue</button> <br/><br/>
                <p>--------- OR ---------</p>
                <button id="sign" class="btn btn "><i class="fa fa-google"></i>Sign up  with google</button> 

                <p class="mt-5">Have an account? <a href="#" style="color: #A10035;">Sign In</a></p>
            </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default{
    data() {
        return {
            name: "",
            email: "",
            password: "",
            message: ""
        }
    },
    methods: {
        addUser(){
            let url = "http://127.0.0.1:8000/api/signup";
            let user = { 
                name: this.name, 
                email: this.email, 
                password: this.password 
            };
            axios.post(url, user).then((response)=>{
                if(response.data.success == true){
                    this.$router.push({name: 'signin'});
                } else {
                    this.message = "Email already exist";
                }       
            })
        },
    }
}
</script>

<style scoped>
    #continue{
        background-color: #A10035;
        color: white;
    }
    
    #sign{
        background-color: #FEDCDC;
        color: black;
        border-style:none;
        background-size: 100%;
        width: 100%;
    }
</style>
