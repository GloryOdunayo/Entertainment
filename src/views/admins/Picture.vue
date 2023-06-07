<template>
    <div class="col-md-6 mx-auto shadow-sm my-3 p-3">
        <h4 class="text-center text-uppercase fw-bold text-primary">Update Profile</h4>
        <div>
            <div class="form-floating mb-3">
                <input type="file" name="file" @change="onChangeFile" class="form-control" id="floatingInput" placeholder="Profile Picture">
                <label for="floatingInput">Profile Picture</label>
            </div>
            <!-- <div class="form-floating mb-3">
                <input type="file" ref="pictureInput" @change="onChangeFile" class="form-control" id="floatingInput" placeholder="Profile Picture">
                <label for="floatingInput">Profile Picture</label> -->
            <!-- </div> -->
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
            file: "",
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
                } else {
                    this.$router.push('/signin');
                }
            }).catch(err=>console.log(err))
        },
        onChangeFile(event){
            // console.log(this.$emit('update:modelValue', event.target.files[0]))
            this.file = event.target.files[0]
            // this.picture = this.$refs.pictureInput.files[0];
        },
        send() {
            let url = `http://localhost:8000/api/${this.user.artist_id}/upload`;
            const formData = new FormData();
            formData.append('file', this.file);
            axios.patch(url, formData).then((response) => {
                console.log(response);
                // if (response.data.status == true) {
                //     console.log('File uploaded successfully!');
                //     this.message = response.data.message
                //     this.$router.push({ name: 'admin' })
                // } else {
                //     console.log('Something went wrong');
                // }
            })
        }
    },
    }
    </script>
    
    <style>
    
    </style>