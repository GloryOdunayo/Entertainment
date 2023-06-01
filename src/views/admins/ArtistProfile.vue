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
            
            <!-- <div class="form-floating mb-3">
                <select class="form-select" v-model="song_type" name="song_type" id="floatingSelect" aria-label="Floating label select example">
                    <option value="1">{{ this.category.name }}</option>
                    <option value="2">Hybrid</option>
                    <option value="3">Onsite</option>  
                </select>
                <label for="floatingSelect">Category</label>
            </div> -->
            <div class="form-floating mb-3">              
                <p for="floatingInput" @click="getCat">Category &#8744;</p>
                <div class="" v-for="cat in category" :key="cat.id">
                    <div v-show="!song_type" class="px-3 pb-2" @click="val(cat.category_id)">{{ cat.name }}</div>
                    <div v-show="song_type == cat.category_id" class="px-3 pb-2" @click="val(cat.category_id)">{{ cat.name }}</div>
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="text" v-model="location" name="location" class="form-control" id="floatingInput" placeholder="Artist Location">
                <label for="floatingInput">Artist Location</label>
            </div>
            <div class="form-floating mb-3">
                <input type="file" name="file" @change="onChangeFile" class="form-control" id="floatingInput" placeholder="Profile Picture">
                <label for="floatingInput">Profile Picture</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" v-model="artist_charge" name="artist_charge" class="form-control" id="floatingInput" placeholder="Artist Charge">
                <label for="floatingInput">Artist Charge</label>
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
            phone_number: '',
            details: '',
            song_type: '',
            location: '',
            profile_picture: [],
            artist_charge: '',
            message: "",
            category:'',
            file: '',
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
        getCat(){
            let url = "http://127.0.0.1:8000/api/profile";
            axios.post(url).then((response)=>{
                console.log(response);
                this.category = response.data;
            })
        },
        getData() {       
            let url = "http://127.0.0.1:8000/api/admin";
            let data = {email:localStorage.email};
            axios.post(url,data).then((response)=>{
                if(response.data){
                    this.user = response.data
                    this.artist_name = this.user.name;
                    this.artist_email = this.user.email;
                    this.song_type = this.user.category_id;
                    this.phone_number = this.user.phone_number;
                    this.details = this.user.details;
                    this.location = this.user.location;
                    this.artist_charge = this.user.artist_charge;
                } else {
                    this.$router.push('/signin');
                }
            }).catch(err=>console.log(err))
        },
        val(e){
            console.log(e);
            this.song_type = e;
        },
        onChangeFile(event){
            // console.log(this.$emit('update:modelValue', event.target.files[0]))
            this.file = event.target.files[0];
        },
        send() {
            let url = `http://localhost:8000/api/artist/${this.user.artist_id}`;
            const fd = new FormData();
            let data = {
                artist_name: this.artist_name,
                artist_email: this.artist_email,
                phone_number: this.phone_number,
                details: this.details,
                song_type: this.song_type,
                location: this.location,
                profile_picture: this.file,
                artist_charge: this.artist_charge,
            }
            fd.append('artist_name', data.artist_name);
            fd.append('artist_email', data.artist_email);
            fd.append('phone_number', data.phone_number);
            fd.append('details', data.details);
            fd.append('song_type', data.song_type);
            fd.append('location', data.location);
            fd.append('artist_charge', data.artist_charge)
            fd.append('file', this.file);
            axios.patch(url,data).then((response) => {
                console.log(response);
                // if (response.data.status == true) {
                //     this.message = response.data.message
                //     this.$router.push({ name: 'admin' })
                // } else {
                //     alert('Something went wrong');
                // }
            })
            // formData.append('file', this.file);
            // axios.patch(url, formData).then((response) => {
            //     if (response.data.status == true) {
            //         console.log('File uploaded successfully!');
            //         this.message = response.data.message
            //         this.$router.push({ name: 'admin' })
            //     } else {
            //         console.log('Something went wrong');
            //     }
            // }).catch((err) => console.log(err));
        }
    },
    }
    </script>
    
    <style>
    
    </style>