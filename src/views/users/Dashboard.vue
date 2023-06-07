<template>
    <div class="d-flex justify-content-between">
        <div><p class="fs-5">Prime</p></div>
        <div class="row">
            <p>&#9825;&#9993;</p>
        </div>
    </div>
    <div>
        <div class="container mt-4"  style="text-align: right">
            <button id="bttn" type="button" class="btn mr-2">All</button>
            <button id="bttn" type="button" class="btn mr-2" @click="artist">Music Artistes</button>
            <button id="bttn" type="button" class="btn mr-2">Bands</button>
            <button id="bttn" type="button" class="btn mr-2">Filter <i class="fa fa-list" style="color: #A10035;"></i></button>
        </div>
        <!-- Popular Musicians -->
        <div class="container">
            <div class="d-flex justify-content-between m-2">
                <p class="h2 text-center">Popular Musicians</p>
                <p style="color: #A10035;">View All</p>
            </div>
                <div class="row">
                    <div class="card col-sm-10 col-lg-3" v-for="artist in artists" :key="artist.artist_id" @click="user(artist.artist_id)">
                        <img :src="artist.cover_picture" class="card-img-top" alt="Cover Image"/>
                        <div class="card-body">
                            <h5 class="card-title">{{ artist.name }}</h5>
                            <p class="card-text">{{ artist.category }}</p>
                        </div>
                    </div>
                </div>
        </div>
        <!-- Recommendation -->
        <div class="container">
            <div class="d-flex justify-content-between m-2">
                <p class="h2">Recommended For You</p>
                <p style="color: #A10035;">View All</p>
            </div>
            <div class="row">
                <div class="card col-sm-10 col-lg-3" v-for="artist in artists" :key="artist.artist_id" @click="user(artist.artist_id)">
                    <img :src="artist.cover_picture" class="card-img-top" alt="Cover Image"/>
                    <div class="card-body">
                        <h5 class="card-title">{{ artist.name }}</h5>
                        <p class="card-text">{{ artist.category }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Not sure of what you want? -->
        <div class="text-center p-4 mt-5 " style="background-color: #FAD9D9;">
            <h5 class="fs-1">Not sure of what you want?</h5>
            <p class="fs-3">Finding the perfect musician has never been easier</p><br/>
            <button style="background-color: #A10035; border-color: #A10035;" class="btn text-light fs-3 px-3">Find musicians</button>
        </div>
        <!-- Categories -->
        <div class="mt-3">
            <h5 class="mb-3 ms-5 fs-2">Categories</h5>
                <div class="row" id="cat"> 
                    <div class="col-md-3">
                        <p>
                            <button id="categories" class="fs-3" @click="artist"><i class="fa fa-microphone p-5 "></i></button>
                            <br/>Artiste
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <button id="categories" class="fs-3 "><i class="fa fa-microphone p-5 "></i></button>
                            <br/>Band
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <button id="categories" class="fs-3 "><i class="fa fa-microphone  p-5 "></i></button>
                            <br/>DJ
                        </p>    
                    </div>   
                </div>
        </div>
        <!-- Wedding Types -->
        <div class="container-fluid mt-5">
            <h3 class="ml-5">Wedding Types</h3>
            <hr class="ml-5" style="width: 18%; background-color: #A10035;"/>
            <div class="row mt-4 text-center">
                <div class="col-md-3 ml-5">
                    <div class="card text-light">
                        <img src=""/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Wedding <br/> Reception</h5>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3">
                    <div class="card text-light">
                        <img src=""/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Traditional <br/> Reception</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-light">
                        <img src=""/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">After <br/> Party</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <hr/> -->
        <div>
            <nav >
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="fa fa-home"></i><br/>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-search"></i><br/>Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-book"></i><br/>Booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fa fa-bell"></i><br/>Notification</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <img src="" class="images"/><br/>Profile
                        </a>
                    </li>
                    </ul>
            </nav>
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
            },
            user(id){
                localStorage.id=id;
                this.$router.push('/profile');
            },
            artist(){
                let url = "http://127.0.0.1:8000/api/artist";
                let data = 1
                axios.get(url).then((response)=>{
                    if(response.data.category_id == "1"){
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
<style scoped>
    /* .btn{
        border-color: black;
        color: black;
        border-radius: 15px;
    }
    button:hover{
        color: white;
        border-color: #A10035;
        background-color: #A10035;
    } */
    #bttn{
        border-color: #A10035;
        color: black;
        border-radius: 15px;
    }
    #bttn:hover{
        color: white;
        background-color: #A10035;
    }
    #cat{
        justify-content: center;
        text-align: center;
    }
    #categories{
        /* width: 10%;
        height: 20vh; */
        border-style: none;
        background-color: #FAD9D9;
        border-radius: 50%;
    }
    
    #categories i{
        border-style: none;
        color: #A10035;
    }

    .images{
        border-radius: 50%;
        height: 10vh;
        width: 70%;
    }
</style>
