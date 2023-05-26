<template>
    <div class="col-md-6 mx-auto shadow-sm my-3 p-3">
        <h4 class="text-center text-uppercase fw-bold text-primary">Signup for Artist</h4>
        <div>
            <div class="form-floating mb-3">
                <input type="text"  v-model="artist_title" name="artist_title" class="form-control" id="floatingInput" placeholder="Artist Title">
                <label for="floatingInput">Artist Title</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" v-model="artist_desc" name="artist_desc" placeholder="Artist Description" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Artist Description</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" v-model="requirements" name="requirements" placeholder="Artist Requirement" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Artist Requirements</label>
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
            artist_name:'',
            artist_email:'',
            
        }
    },
    methods: {
        send() {
            let url = 'http://localhost:8000/api/artist';
            let data = {
                artist_name: this.artist_name,
                artist_desc: this.artist_desc,
                requirements: this.requirements,
                location: this.location,
                song_type: this.song_type,
                artist_charge: this.artist_charge,
            }
            axios.post(url, data).then((response) => {
                if (response.data.status == true) {
                    alert('Artist Posted Successfully');
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