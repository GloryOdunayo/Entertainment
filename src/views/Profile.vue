<template>
    <div class="d-flex justify-content-between">
        <div><p class="fs-5">Prime</p></div>
        <div class="row">
            <p>&#9825;&#9993;</p>
        </div>
    </div>
    <div>
        <div class="">
            <div class=" col-lg-9">
                    <div class="card">
                        <img src="../assets/group.jpg"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{artist.name}}</h5>
                        </div>
                    </div>
                    <div class="border border-warning">
                        <div class="d-flex justify-content-around">
                            <div class="col-md-2">
                                <button class="btn" style="color: #eee; background-color: #A10035;"><i class="fa fa-envelope"></i></button>
                            </div>
                            <div class="col-md-8">
                                <button class="btn" style="color: #eee; background-color: #A10035;">Check availability</button>
                            </div>
                        </div>
                        <nav>
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#photos">Photos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#videos">Video</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#song">Song List</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#genre">Genre
                                    </a>
                                </li>
                                </ul>
                        </nav>
                        <div class="" id="about">
                            <div class="d-flex justify-content-between">
                                <h4>About</h4>
                                <p class="">View More</p>
                            </div>
                            <div>{{artist.about}}</div>
                            <div class="nav-link" href="#"><i class="fa fa-category"></i>{{artist.category_id}}</div>
                            <div class="fa fa-location">Location: {{ artist.location }}</div>
                            <div class="fa fa-money"> From {{ artist.charge }}</div>
                        </div>
                        <div class="" id="photos">
                            <div class="d-flex justify-content-between">
                                <h4>Photos</h4>
                                <p class="">View More</p>
                            </div>
                            <div class="">

                            </div>
                        </div>
                        <div class="" id="videos">
                            <div class="d-flex justify-content-between">
                                <h4>Videos</h4>
                                <p class="">View More</p>
                            </div>
                            <div class="">
                                
                            </div>
                        </div>
                        <div class="" id="song">
                            <div class="d-flex justify-content-between">
                                <h4>Song List</h4>
                            </div>
                            <div class="">
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div>
            <nav>
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
                            <img src="../assets/group.jpg" class="images"/><br/>Profile
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
                artist:{},
            };
        },
        beforeMount(){
            if(localStorage.email){
                this.getUser();
            } else {
                this.$router.push('/login');
            }
        },
        methods: {
            getUser() { 
                let id =localStorage.id;      
                let url = `http://localhost:8000/api/artist/${id}`;
                axios.get(url).then((response)=>{
                    if(response.data){
                        this.artist = response.data;
                        console.log(this.artist)
                    } else {
                        this.$router.push('/login');
                    }
                }).catch(err=>console.log(err))
            },
        },
    }
</script>
<style>
    .images{
        border-radius: 50%;
        height: 30px;
        width: 60%;
    }
    .nav{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: scroll;
        /* gap: 1px; */
    }
    #song{
        height: 200px;
        overflow-y: scroll;
        background-color: #A10035;
    }
</style>
