<style src="./company-create.css"></style>

<template>
<!-- Start  Brand Sign Up Modale  -->
<div class="main-company">
  <!-- Start Section Left -->
  <section id="conversational-details">
    <button class="btn btn-BackLandingPage"><i class="fa fa-arrow-left"></i></button>
    <div class="text-center ">
      <div class="brand">
        <a href="#!"><img class="img-responsive" src="static/images/logo.png" alt="logo"></a>
      </div>
      <h2 class="title-top">Artificial Intelligence <br> for Brands</h2>
    </div>

    <ul class="list-unstyled list-text">
      <li>Collect customers contacts on location and online.</li>
      <li>Generate buzz around your brand. </li>
      <li>View video feedback reviews from customers. </li>
      <li>Send marketing campaigns instantly. </li>
      <li>Get your own A.l. chatbot for your brand </li>
    </ul>
  </section>
  <!-- End  Section Left -->

  <!-- Start Section Right Forms -->
  <section id="conversational-form-all">

    <div id="chat" class="lity-hide">
      <div id="cf-context"></div>
    </div>

    <div class="formdevchat  w-100 ">
      <form id="signup-form">
        <fieldset>
          <input type="text" name="brand_name" cf-questions=" What's your brand name?" required>
        </fieldset>

        <fieldset>
          <input type="file" name="logo" cf-questions="Select your brand logo" required>
        </fieldset>

        <fieldset>
          <input type="file"  @change="test" name="video" id="video" cf-questions="Upload a 1 minute video about your brand" required>
        </fieldset>
        <fieldset>
          <select cf-questions="Are you satisfied of the uploaded video?" name="satisfied" id="satisfied" class="form-control">
                          <option></option>
                          <option>Yes</option>
                          <option>No</option>
                      </select>
        </fieldset>
      </form>


    </div>
  </section>
</div>
</template>

<script src="./company-create.js"></script>
