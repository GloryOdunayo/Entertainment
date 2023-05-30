<template>
    <div class="col-md-6 mx-auto shadow-sm my-3 p-3">
        <h4 class="text-center text-uppercase fw-bold text-primary">Post Your Song</h4>
        <div>
            <div class="form-floating mb-3">
                <input type="text"  v-model="song_title" name="song_title" class="form-control" id="floatingInput" placeholder="Artist Title">
                <label for="floatingInput">Song Title</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="song_genre" name="song_genre" placeholder="Song genre" id="floatingInput">
                <label for="floatingInput">Song Genre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="url" v-model="link" name="link" class="form-control" id="floatingInput" placeholder="Song Link">
                <label for="floatingInput">Song Link</label>
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
            song_title: '',
            song_genre: '',
            link: '',
        }
    },
    methods: {
        send() {
            let url = 'http://localhost:8000/api/artist/song';
            let data = {
                song_title: this.song_title,
                song_genre: this.song_genre,
                link: this.link,
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