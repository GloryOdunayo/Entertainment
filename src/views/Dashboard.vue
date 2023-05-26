<template>
    <div class="d-flex justify-content-between">
        <div><p class="fs-5">Prime</p></div>
        <div class="row">
            <p>&#9825;&#9993;</p>
        </div>
    </div>
    <div class="" style="text-align: right;">
        <button class="btn btn mr-2" v-on:click="getData">All</button>
        <button class="btn btn mr-2">Music</button>
        <button class="btn btn mr-2">Bands</button>
        <button class="btn btn mr-2">Filter</button>
    </div>
    <div class="container">
        <div id="divv">
            <p id="viewall" class="h2 text-center">Popular Musicians</p>
            <p id="viewall" style="color: #A10035;">View All</p>
        </div>
        <div class="card" style="width: 18rem;" v-for="artist in artists" :key="artist.artist_id">
            <img :src="artist.cover_picture" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ artist.name }}</h5>
                <p class="card-text">{{ artist.category }}</p>
            </div>
            </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                message: "",
                artists:[],
            };
        },
        beforeMount(){
            if(localStorage.email){
                this.getUser();
                this.getData();
            } else {
                this.$router.push('/login');
            }
        },
        methods: {
            getUser() {       
                let url = "http://127.0.0.1:8000/api/dashboard";
                let data = {email:localStorage.email};
                axios.post(url,data).then((response)=>{
                    if(response.data){
                        // console.log(response.data);
                    } else {
                        this.$router.push('/login');
                    }
                }).catch(err=>console.log(err))
            },
            getData(){
                let url = "http://127.0.0.1:8000/api/users";
                axios.get(url).then((response)=>{
                    if(response.data){
                        this.artists = response.data
                        console.log(this.artists);
                    } else {
                        console.log("No data");
                    }
                }).catch(err=>console.log(err))
            }
        },
    }
</script>
<style>
    .btn{
        border-color: black;
        color: black;
        border-radius: 15px;
    }
    button:hover{
        color: white;
        border-color: #A10035;
        background-color: #A10035;
    }
</style>
