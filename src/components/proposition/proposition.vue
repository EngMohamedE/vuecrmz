<style src="./proposition.css"></style>

<template>
  <div class="wrapper">

 <!-- Start  Header-->
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
 <!-- End Header -->

 <!-- Start Aside -->
 <aside class="navigation navigation-nav">
   <nav>ss
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
 </aside>
 <!-- End Aside-->


 <!-- Main content-->
 <section class="content">
   <div class="container-fluid" style="opacity: 1;">
     <!-- Title Top -->
     <div class="row">
       <div class="col-lg-12">
         <div class="view-header">
           <div class="header-icon">
             <i class="pe page-header-icon pe-7s-diamond"></i>
           </div>
           <div class="header-title">
             <h3 class="m-b-xs">Proposition</h3>
             <small>
                                 Proposition content appears on top of the brand page.
                             </small>
           </div>
         </div>
         <hr>
       </div>
     </div>
     <!-- Content Body -->
     <div class="row">
       <div class="col-md-12">
         <div class="panel panel-filled">
           <div class="panel-body mt-2 pro-p">
             <p>
               Encourage your followers to record a video review about their experience with your brand or service,
             </p>
             <p class="mb-2">
               you can offer free products, discounts or event tickets of upcoming events, whatever promotion you may see fit to generate buzz on your page.<br>
             </p>
           </div>
         </div>
       </div>
       <div class="col-md-12 ">
         <div class="panel panel-filled">
           <div class="panel-heading p-h">
             Proposition
           </div>
           <div class="panel-body">
             <form class="social-form" v-on:submit.prevent="save">
               <p v-if="errorhandle" class="errorhandle">Updated Sucessfuly</p>
               <ul class="list-proposition">
                 <li class="list-prep">
                   <div class="form-group">
                     <label>Proposition</label>
                     <span v-show="errors.has('proposition')" class="text-danger">{{ errors.first('proposition') }}</span>

                     <textarea rows="6" name="proposition" v-validate="'min:100'"   v-model="proposition.proposition1"  class="form-control textarea-message"  placeholder="Proposition"></textarea>
                   </div>
                 </li>

                 <li class="list-prep" >
                   <div class="form-group">
                     <label>Proposition</label>
                     <span v-show="errors.has('proposition 2')" class="text-danger">{{ errors.first('proposition 2') }}</span>
                     <textarea rows="6" name="proposition 2" v-validate="'min:100'" v-model="proposition.proposition2"  class="form-control textarea-message" placeholder="Proposition"></textarea>
                   </div>
                 </li>

                 <li class="list-prep" >
                   <div class="form-group">
                     <label>Proposition</label>
                     <span v-show="errors.has('proposition 3')" class="text-danger">{{ errors.first('proposition 3') }}</span>

                     <textarea rows="6" name="proposition 3" v-validate="'min:100'" v-model="proposition.proposition3"  class="form-control textarea-message" placeholder="Proposition"></textarea>
                   </div>
                 </li>

               </ul>

               <div class="col-xs-12 text-center">
                 <button type="submit"  class="btn btn-default">save</button>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- End main content-->

 <!-- Start Modal Form chat -->
 <div class="formdevchat">
   <form id="formchat" cf-form cf-prevent-autofocus method="post">

     <fieldset>
       <input type="text" name="name" cf-questions="Hi there! May I get your name please?" required>
     </fieldset>

     <fieldset>
       <input type="email" name="email" pattern=".+\@.+\..+" cf-error="E-mail not correct" cf-questions="Great to meet you, {previous-answer}! What's your email?" required>
     </fieldset>

     <fieldset>
       <input type="tel" name="phone" pattern="(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$" cf-error="Phone Number not correct. Phone Number in the format of: +12345678901"
         cf-questions="Sweet! Give me your phone number too" required>
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


 <!-- Modal Upload Profile Photo & Company Photo -->
 <div id="popup" class="popup" style="display: none;">
   <div class="popup__body">
     <div class="js-img"></div>
   </div>
   <div style="margin: 0 0 5px; text-align: center;">
     <div class="js-upload btn btn_browse btn_browse_small">Upload</div>
   </div>
 </div>

 </div>

</template>

<script src="./proposition.js"></script>
