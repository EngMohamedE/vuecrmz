<style src="./login.css"></style>

<template>
    <section id="landing-page">
        <!-- Master Demo -->
        <div class="container">
            <header>
                <div class="logo pull-left">
                    <img src="static/images/logo.png" class="img-responsive" alt="crmzz" draggable="false">
                </div>
                <nav class=" navbar pull-right">
                    <ul class="nav navbar ">
                        <li>
                            <button type="button" class="btn btn-help">Help</button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-sign-up">Login</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="clearfix"></div>

            <div class="select-account text-center">
                <h1>Create Account</h1>
                <p class="lead">
                    , making it look like readable English. Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search for
                </p>
                <button v-on:click="goToSignUp" type="button" class="btn btn-brand">brand</button>
            </div>
        </div>


        <!-- Start  Login Customer And Brand  -->
        <div class="main-loginCustomerBrand">
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
                    <li>Generate buzz around your brand.</li>
                    <li>View video feedback reviews from customers.</li>
                    <li>Send marketing campaigns instantly.</li>
                    <li>Get your own A.l. chatbot for your brand</li>
                </ul>
            </section>
            <!-- End  Section Left -->


            <!-- Start Section Right Forms -->
            <section id="conversational-form-all">
                <div id="chat" class="lity-hide">
                    <div id="cf-context"></div>
                </div>

                <div class="formdevchat  w-100 ">
                    <form id="login-form" v-on:submit.prevent="loginSubmit">

                        <fieldset robot-image="https://cf-4053.kxcdn.com/conversational-form/human.png">
                            <input id="name" type="name" cf-questions="Hello,may I get your's name please !!!"
                                   cf-error="Please enter a name" required>
                        </fieldset>

                        <fieldset cf-questions="{previous-answer}!  are you a member ?">
                            <input type="radio" name="cfc-member" id="intro-yes" value="yes">
                            <label for="intro-yes">Yes</label>

                            <input type="radio" name="cfc-member" id="intro-no" value="no">
                            <label for="intro-no">No</label>

                        </fieldset>
                        
                        <fieldset cf-questions="How would you like to sign up ?">
                            <input type="radio" name="cfc-intro" id="intro-f" value="facebook">
                            <label for="intro-f">Facebook</label>
                            <input type="radio" name="cfc-intro" id="intro-g" value="mail">
                            <label for="intro-g">Google+</label>
                            <input type="radio" name="cfc-intro" id="intro-l" value="linkedin">
                            <label for="intro-l">Linkedin</label>
                            <input type="radio" name="cfc-intro" id="intro-t" value="twitter">
                            <label for="intro-t">Twitter</label>

                            
                        </fieldset>


                    </form>

                </div>

            </section>

        </div>
        <!-- End Login Customer And Brand   -->


    </section>

</template>
<script src="./login.js"></script>
