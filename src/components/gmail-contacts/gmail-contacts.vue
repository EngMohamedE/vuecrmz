<style src="./gmail-contacts.css"></style>
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
        <li>
          <router-link to="/company"><i class="pe-7s-flag"></i>Company</router-link>

        </li>
        <li >
          <router-link to="/proposition"><i class="pe-7s-diamond"></i>Proposition</router-link>
        </li>
        <li class="active">
           <router-link to="/import-contacts"><i class="pe-7s-id"></i>Import Contacts</router-link>

        </li>
        <li>
           <router-link to="/crm-video"><i class="pe-7s-note2"></i>CRM-Video</router-link>

        </li>
        <li>
          <a ><i class="pe-7s-menu"></i>Manage Lists</a>
        </li>
        <li>
          <a ><i class="pe-7s-speaker"></i>Send Blast</a>
        </li>
        <li>
          <a  data-toggle="collapse" aria-expanded="false">
                          <i class="pe-7s-cash"></i>Transactions<span class="sub-nav-icon"> <i class="stroke-arrow"></i> </span>
                      </a>
          <ul id="transactions" class="nav nav-second collapse">
            <li>
              <a ><i class="pe-7s-like"></i>Donations</a>
            </li>
            <li><a ><i class="pe-7s-cash"></i>Buy Credit </a></li>
          </ul>
        </li>
        <li>
          <a href="#Settings" data-toggle="collapse" aria-expanded="false">
                          <i class="pe-7s-config"></i>Settings<span class="sub-nav-icon"> <i class="stroke-arrow"></i> </span>
                      </a>
          <ul id="Settings" class="nav nav-second collapse">

             <router-link to="/settings"><i class="pe-7s-help1"></i>Default</router-link>

          </ul>
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
              <i class="pe page-header-icon pe-7s-id"></i>
            </div>
            <div class="header-title">
              <h3 class="m-b-xs">Import Contacts </h3>
              <small>
                             Sales Force Contacts
                         </small>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <!-- Content Body -->
      <div class="row">

          <button v-on:click="auth">GET CONTACTS FEED</button>

          <div class="col-md-12 ">
          <div class="panel panel-filled">
            <div class="panel-heading p-h">
              <i class="icon-su-title pe-7s-mail"></i>Sales Force Contacts
            </div>
            <div class="panel-body text-center ">
              <div class="table-responsive">
                <table class="table table-vertical-align-middle table-data">
                  <thead>
                    <tr>
                      <th>
                        Images
                      </th>
                      <th>
                        Name
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Phone
                      </th>
                      <th class="text-center">
                        Select
                      </th>
                    </tr>
                  </thead>
                    <tbody>
                  <tr v-for="item in contact">
                      <td class="text-left">
                        <img alt="image" class="img-rounded image-md" v-bind:src="item.image">

                    </td>
                      <td class="text-left">
                          {{ item.Name}}
                      </td>
                      <td class="text-left">
                          {{ item.email}}
                      </td>
                      <td class="text-left">
                          {{ item.phone}}
                      </td>

                      <td class="text-center">
                        <div class="checkbox checkbox-warning">
                          <input  :id="item.ID" :value="item.ID"   v-model="checkedNames"   type="checkbox" class="styled">
                          <label :for="item.ID">

                                                 </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class=" text-center">
                <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#myModal2">segment contacts</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End main content-->

  <!-- Start Modal select List -->
  <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title">Select List </h4>
        </div>
        <div class="modal-body">
          <form  v-on:submit.prevent="addlist">
            <div class="form-group form-select-list">
              <input type="text"  v-model="Namelist.listname" class="form-control"  placeholder="Create New List">
              <button type="submit"    class="btn btn-select-list btn-default"><span class="pe-7s-plus"></span></button>
              <div class="clearfix"></div>
            </div>
          </form>

          <ul class="list-li">
            <li v-for="list in groupdata" >
                <input  type="radio" v-bind:value="list.ID" v-model="selected" >
                <label>{{ list.Name}}</label>
            </li>

          </ul>
        </div>
        <div class="modal-footer">
          <button type="button"  class="btn-default" data-dismiss="modal">Close</button>
          <button type="button"  @click="addtolist" class="btn btn-accent ">Save changes</button>
        </div>
      </div>
    </div>
  </div>


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
<!-- End wrapper-->
</div>
</template>
<script src="./gmail-contacts.js"></script>
