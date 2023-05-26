<template>
    <div class="col-md-6 mx-auto shadow-sm my-3 p-3">
        <h4 class="text-center text-uppercase fw-bold text-primary">Update Profile</h4>
        <div>
            <div class="form-floating mb-3">
                <input type="text"  v-model="artist_name" name="artist_name" class="form-control" id="floatingInput" placeholder="Name">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text"  v-model="artist_email" name="artist_email" class="form-control" id="floatingInput" placeholder="Email">
                <label for="floatingInput">E-mail Address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text"  v-model="phone_number" name="phone_number" class="form-control" id="floatingInput" placeholder="Phone Number">
                <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" v-model="details" name="details" placeholder="Details" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Description(About)</label>
            </div>
            
            <div class="form-floating mb-3">
                <select class="form-select" v-model="song_type" name="song_type" id="floatingSelect" aria-label="Floating label select example">
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">Onsite</option>  
                </select>
                <label for="floatingSelect">Song Type</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" v-model="location" name="location" class="form-control" id="floatingInput" placeholder="Artist Location">
                <label for="floatingInput">Artist Location</label>
            </div>
            <div class="form-floating mb-3">
                <input type="file" name="artist_charge" class="form-control" id="floatingInput" placeholder="Artist Charge">
                <label for="floatingInput">Profile Picture</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" v-model="artist_charge" name="artist_charge" class="form-control" id="floatingInput" placeholder="Artist Charge">
                <label for="floatingInput">Artist Location</label>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" v-on:click="send" class="btn btn-outline-primary px-4 fs-5">Post</button>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'; 
    export default {
    data() {
        return {
            user: {},
            artist_name: '',
            artist_email:'',
            message: "",
        }
    },
    beforeMount(){
        if(localStorage.email){
            this.getData();
        } else {
            this.$router.push('/signin');
        }
    },
    methods: {
        getData() {       
            let url = "http://127.0.0.1:8000/api/admin";
            let data = {email:localStorage.email};
            axios.post(url,data).then((response)=>{
                if(response.data){
                    this.user = response.data
                    this.artist_name = this.user.name;
                    this.artist_email = this.user.email;
                } else {
                    this.$router.push('/signin');
                }
            }).catch(err=>console.log(err))
        },
        send() {
            let url = 'http://localhost:8000/api/artist/{{ $user->artist_id }}';
            let data = {
                artist_name: this.artist_name,
            }
            axios.post(url, data).then((response) => {
                if (response.data.status == true) {
                    alert('Artist Updated Successfully');
                    this.$router.push({ name: 'artist' })
                } else {
                    alert('Something went wrong');
                }
            })
        }
    },
    }
    </script>
    
    <style>
    
    </style>