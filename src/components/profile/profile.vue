<style src="./profile.css"></style>
<template>

<div class="wrapper">
<!-- Navigation-->
<!-- Header-->
<nav class="header-topbar">
    <div class="container">
        <a class="topbar-logo" href="index.html">
            <span>CRMzz</span>
        </a>
        <ul class="topbar-links list-inline pull-left">
           <li class="list-item">
               <div class="left-nav-toggle">
                    <a href="">
                        <i class="stroke-hamburgermenu"></i>
                    </a>
                </div>
           </li>
            <li class="list-item">
                <a class="list-link" href="#"><i class="material-icons">home</i> Home</a>
            </li>
            <li class="list-item">
                <a class="list-link" href="#"><i class="material-icons">notifications</i> Notifications</a>
            </li>
            <li class="list-item">
                <a class="list-link" href="#chat" data-lity><i class="material-icons">chat</i> Chat</a>
            </li>
        </ul>
        <ul class="topbar-links list-inline pull-right">
            <li class="list-item">
                <a class="list-link topbar-search" href="#"><i class="material-icons">search</i> Search</a>
            </li>
            <li class="list-item dropdown">
                <a class="list-link dropdown-toggle" href="#" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <img class="topbar-avatar" src="static/images/user-icon.png" alt="">
                </a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                      <li><router-link to="/profile"><strong>Guilherme Sousa</strong><small>View profile</small></router-link></li>
                    <li role="separator" class="divider"></li>
                    <li><router-link to="/logout">Logout</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>

<aside class="navigation navigation-nav">
    <nav>
        <ul class="nav luna-nav">
            <li class="clearfix">
                <div class="form-group col-xs-12 ">
                    <div class="example">
                        <div class="example__left">
                            <div id="companypic" class="userpic" style="background-image: url(static/images/avatar.jpg);">
                                <div class="js-preview userpic__preview"></div>
                                <div class="btn js-fileapi-wrapper">
                                    <div class="js-browse">
                                        <span class="btn-txt"><i class="pe-7s-photo"></i></span>
                                        <input type="file" name="filedata" />
                                    </div>
                                    <div class="js-upload" style="display: none;">
                                        <div class="progress progress-success">
                                            <div class="js-progress bar"></div>
                                        </div>
                                        <span class="btn-txt">Uploading</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <router-link to="/profile"><i class="pe-7s-user"></i>Profile</router-link>

            </li>
            <li class="active">
                <router-link to="/company"><i class="pe-7s-flag"></i>Company</router-link>

            </li>
            <li >
                <router-link to="/proposition"><i class="pe-7s-diamond"></i>Proposition</router-link>
            </li>
            <li>
                <router-link to="/import-contacts"><i class="pe-7s-id"></i>Import Contacts</router-link>

            </li>
            <li>
                <router-link to="/gmail-contacts"><i class="pe-7s-id"></i> Contacts</router-link>

            </li>
            <li>
                <router-link to="/crm-video"><i class="pe-7s-note2"></i>CRM-Video</router-link>

            </li>
            <li>
                <router-link to="/Manage-list"><i class="pe-7s-menu"></i>Manage Lists</router-link>

            </li>
            <li>
                <router-link to="/blast"><i class="pe-7s-speaker"></i>Send Blast</router-link>
            </li>
            <li>
                <router-link to="/payment"><i class="pe-7s-cash"></i>Payment</router-link>
            </li>
            <li>
                <router-link to="/settings"><i class="pe-7s-help1"></i>Default</router-link>
            </li>
        </ul>
    </nav>
    </nav>
</aside>
<!-- End navigation-->


<!-- Main content-->
<section class="content">
    <div class="container-fluid" style="opacity: 1;">

        <div class="row">
            <div class="col-lg-12">
                <div class="view-header">
                    <div class="header-icon">
                        <i class="pe page-header-icon pe-7s-user"></i>
                    </div>
                    <div class="header-title">
                        <h3 class="m-b-xs">Profile</h3>
                        <small>
                            Modify your Profile information.
                        </small>
                    </div>
                </div>
                <hr>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <div class="example">
                    <div class="example__left" text-left>
                        <div id="userpic" class="userpic" style="background-image: url(static/images/user-icon.png);">
                            <div class="js-preview userpic__preview"></div>
                            <div class="btn js-fileapi-wrapper">
                                <div class="js-browse">
                                    <span class="btn-txt"><i class="pe-7s-photo"></i></span>
                                    <input type="file" name="filedata" />
                                </div>
                                <div class="js-upload" style="display: none;">
                                    <div class="progress progress-success">
                                        <div class="js-progress bar"></div>
                                    </div>
                                    <span class="btn-txt">Uploading</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-filled">
                    <div class="panel-heading p-h">
                        Edit Profile
                    </div>
                    <div class="panel-body">
                        <form  v-on:submit.prevent="updateProfile">
                            <p v-model="errorhandle" class="errorhandle">{{errorhandle}}</p>

                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <p>
                                <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>

                                <input  name="name"   v-validate="'required'" v-model="founder.name" type="text" class="form-control" id="name" placeholder="Full Name">
                                </p>
                            </div>
                              <div class="form-group"><label for="exampleInputEmail1">Email address</label>
                                  <p :class="{ 'control': true }">
                                      <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>

                                      <input    v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"  name="email"  v-model="founder.email"  class="form-control" id="exampleInputEmail1" placeholder="Email">
                                  </p>
                              </div>
                              <div class="form-group">
                                  <label for="exampleInputPosition">Position</label>
                                 <p>
                                  <span v-show="errors.has('position')" class="text-danger">{{ errors.first('position') }}</span>
                                  <input v-validate="'required'" name="position" v-model="founder.position" type="text" class="form-control" id="exampleInputPosition" placeholder="position">
                                 </p>
                              </div>
                            <button type="submit" class="btn btn-default">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-filled">
                    <div class="panel-heading p-h">
                        Edit Password
                    </div>
                    <div class="panel-body">
                        <form v-on:submit.prevent="updatePassword">
                            <div class="form-group"><label for="exampleInputPassword1">Old Password</label> <input v-model="password.old" type="password" class="form-control" id="exampleInputPassword1" placeholder="Old Password"></div>
                            <div class="form-group"><label for="exampleInputPassword2">New Password</label> <input v-model="password.newPassword" type="password" class="form-control" id="exampleInputPassword2" placeholder="New Password"></div>
                            <div class="form-group"><label for="exampleInputPassword3">Re-Password</label> <input v-model="password.rePassword" type="password" class="form-control" id="exampleInputPassword3" placeholder="Re-Password"></div>
                            <button type="submit" class="btn btn-default">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<!-- End main content-->


   <div class="formdevchat">
    <form id="formchat" cf-form cf-prevent-autofocus method="post">

        <fieldset>
            <input type="text" name="name" cf-questions="Hi there! May I get your name please?" required>
        </fieldset>

        <fieldset>
            <input type="email" name="email" pattern=".+\@.+\..+" cf-error="E-mail not correct" cf-questions="Great to meet you, {previous-answer}! What's your email?" required>
        </fieldset>

        <fieldset>
            <input type="tel" name="phone" pattern="(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$" cf-error="Phone Number not correct. Phone Number in the format of: +12345678901" cf-questions="Sweet! Give me your phone number too" required>
        </fieldset>

        <fieldset>
            <div class="radio">
            <label>
                <input cf-questions="Are you Male or Female?" type="radio" name="gender" value="male">
                Male
            </label>
            </div>
            <div class="radio">
            <label>
                <input type="radio" name="gender" value="female">
                Female
            </label>
            </div>
        </fieldset>

        <fieldset>
            <input type="file" name="fileupload" value="fileupload" cf-error="Are you satisfied with the video that you recorded?" cf-questions="Record one minute video tell us about your brand" id="videoupload" accept="video/*" required cf-max-size="10000000000000000">
        </fieldset>

        <button type="submit" class="btn btn-default">Submit</button>
    </form>

</div>

<div id="chat" class="lity-hide">
    <div id="cf-context" cf-context></div>
</div>

<div id="popup" class="popup" style="display: none;">
    <div class="popup__body">
        <div class="js-img"></div>
    </div>
    <div style="margin: 0 0 5px; text-align: center;">
        <div class="js-upload btn btn_browse btn_browse_small">Upload</div>
    </div>
</div>

</div>
<!-- End wrapper-->
</template>
<script src="./profile.js"></script>
