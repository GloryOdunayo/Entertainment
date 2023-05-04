<template>
    <div class="d-flex justify-content-between">
        <div><p class="fs-5">Prime</p></div>
        <div class="row">
            <p>&#9825;&#9993;</p>
        </div>
    </div>
    <div class="" style="text-align: right;">
        <button class="btn btn mr-2">All</button>
        <button class="btn btn mr-2">Music</button>
        <button class="btn btn mr-2">Bands</button>
        <button class="btn btn mr-2">Filter</button>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                message: "",
                user: {},
            };
        },
        beforeMount(){
            if(localStorage.email){
                this.getData();
            } else {
                this.$router.push('/login');
            }
        },
        methods: {
            getData() {       
                let url = "http://127.0.0.1:8000/api/dashboard";
                let data = {email:localStorage.email};
                axios.post(url,data).then((response)=>{
                    if(response.data){
                        this.user = response.data
                    } else {
                        this.$router.push('/login');
                    }
                }).catch(err=>console.log(err))
            },
        }
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
