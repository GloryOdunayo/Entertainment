<template>
        <div class="container " align="center" style="margin-top: 5em;  ">
        <div class="col-sm-5" style="border: 1px solid gray; border-style: none;">
        <h2 class=" text-center">Create an account</h2><br/>
        <form >
            <div class="form-group form-floating">
                <input type="text" class="form-control fa fa-user  border-right-0 shadow-none border-top-0 border-left-0 " id="fullname" placeholder="Fullname" name="Fullname">
                <label for="" >&#128113; Fullname</label>
              </div>
          <div class="form-group">
            <input type="email" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="email" placeholder="Enter email" name="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control border-right-0 shadow-none border-top-0 border-left-0" id="pwd" placeholder="Enter password" name="pwd">
          </div>
          <div class="mx-5">
          <button type="submit" id="continue" class="btn btn w-100 mt-2">Continue</button> <br/><br/>
          <p>--------- OR ---------</p>
          <button id="sign" class="btn btn "><i class="fa fa-google"></i>Sign up  with google</button> 

          <p class="mt-5">Have an account? <a href="#" style="color: #A10035;">Sign In</a></p>
          </div>
        </form>
      </div>
      </div>
</template>

<script>

export default {

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

a{
text-decoration: none;

}


</style>

