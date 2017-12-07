<style src="./signup.css"></style>

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
              <div id="cf-context" ></div>
          </div>

          <div class="formdevchat  w-100 ">
              <form id="signup-form" >
                <fieldset>
                    <input type="email" name="email" cf-error="E-mail not correct" cf-questions=" What's your email?" required>
                </fieldset>

                  <fieldset>
                      <input min="5" type="password" id="gr8" name="password" cf-error="Password length must be greater than 5 characters. please re-enter your password?" cf-questions="Please enter your password?"  required />
                      <input min="5" type="password" id="gr8" name="password" cf-error="Your password and confirmation do not match" cf-questions="Please confirm your password"  required />
                  </fieldset>

              </form>


          </div>
      </section>
  </div>


</template>

<script src="./signup.js"></script>
