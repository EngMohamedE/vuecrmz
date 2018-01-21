<style src="./settings.css"></style>
<template>
<!-- Wrapper-->
<div class="wrapper">

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


  <!-- Navigation-->
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
  </aside>
  <!-- End navigation-->


  <!-- Main content-->
  <section class="content">
    <div class="container-fluid" style="opacity: 1;">

      <div class="row">
        <div class="col-lg-12">
          <div class="view-header">
            <div class="header-icon">
              <i class="pe page-header-icon pe-7s-config"></i>
            </div>
            <div class="header-title">
              <h3 class="m-b-xs">Settings</h3>
              <small>
                                  Data Settings/Payment Settings/Social Integration
                              </small>
            </div>
          </div>
          <hr>
        </div>
      </div>

      <div class="row form-add-ad">
        <div class="col-md-12">
          <div class="panel panel-filled">
            <div class="panel-body mt-2 pro-p">
              <p class="mb-2">
                Please select which information you would like to collect from your costumers
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="panel panel-filled">
            <div class="panel-heading p-h">
              Data Settings
            </div>
            <div class="panel-body">
              <form class="p-3">
                <fieldset>
                  <div class="checkbox">
                    <input id="checkbox1" disabled class="styled" type="checkbox" checked="">
                    <label for="checkbox1">
                                              Name
                                          </label>
                  </div>
                  <div class="checkbox checkbox-primary">
                    <input id="checkbox2" disabled class="styled" type="checkbox" checked="">
                    <label for="checkbox2">
                                              Email
                                          </label>
                  </div>
                  <div class="checkbox checkbox-success">
                    <input id="checkbox3" class="styled" type="checkbox" checked="">
                    <label for="checkbox3">
                                              Phone
                                          </label>
                  </div>
                  <div class="checkbox checkbox-info">
                    <input id="checkbox4" class="styled" type="checkbox" checked="">
                    <label for="checkbox4">
                                              Picture
                                          </label>
                  </div>
                  <div class="checkbox checkbox-warning">
                    <input id="checkbox5" type="checkbox" class="styled" checked="">
                    <label for="checkbox5">
                                              Video
                                          </label>
                  </div>
                  <div class="checkbox checkbox-danger">
                    <input id="checkbox6" type="checkbox" class="styled" checked="">
                    <label for="checkbox6">
                                              Gender/Birthday/Social
                                          </label>
                  </div>

                </fieldset>

                <div class="clearfix"></div>
                <button type="submit" class="btn btn-default btn-check mt-3">Save</button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="panel panel-filled">
            <div class="panel-heading p-h">
              Payment Settings
            </div>
            <div class="panel-body">
              <form class="p-3">
                <fieldset class="mt-2">
                  <div class="form-group">
                    <label for="exampleInputUnpublished">Stripe unpublished key</label>
                    <input type="text" class="form-control" id="exampleInputUnpublished" placeholder="Unpublished key">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputSecret">Stripe secret key</label>
                    <input type="text" class="form-control" id="exampleInputSecret" placeholder="Secret key">
                  </div>
                </fieldset>
                <div class="clearfix"></div>
                <button type="submit" class="btn btn-default btn-check mt-3">Save</button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="panel panel-filled">
            <div class="panel-heading p-h">
              Sales force Settings
            </div>
            <div class="panel-body">
              <form class="p-3">
                <fieldset class="mt-2">
                  <div class="form-group">
                    <label for="exampleInputUnpublished">unpublished key</label>
                    <input type="text" class="form-control" id="exampleInputUnpublished" placeholder="Unpublished key">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputSecret">secret key</label>
                    <input type="text" class="form-control" id="exampleInputSecret" placeholder="Secret key">
                  </div>
                </fieldset>
                <div class="clearfix"></div>
                <button type="submit" class="btn btn-default btn-check mt-3">Save</button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-12">

          <div class="panel panel-filled">
            <div class="panel-heading p-h">
              Social Integration
            </div>
            <div class="panel-body">
              <div class="form-group text-center clearfix">
                <h3 class="mt-3 title-social" style="line-height: 1.6;">Connect CRMzz to your social links,<br> Send marketing  campaign  across all channels at once.</h3>
                <div class=" social-blast">
                  <div>
                    <button type="button" class="btn-connection clearfix"><i class="pe-7s-refresh-2"></i></button>
                  </div>
                  <img src="static/images/social-media/facebook.png" width="55" height="55">
                </div>
                <div class="social-blast">
                  <div>
                    <button type="button" class="btn-connection clearfix"><i class="pe-7s-refresh-2"></i></button>
                  </div>
                  <img src="static/images/social-media/linkedin.png" width="55" height="55">
                </div>
                <div class=" social-blast ">
                  <div>
                    <button type="button" class="btn-connection clearfix"><i class="pe-7s-refresh-2"></i></button>
                  </div>
                  <img src="static/images/social-media/twitter.png" width="55" height="55">
                </div>
                <div class=" social-blast ">
                  <div>
                    <button type="button" class="btn-connection clearfix"><i class="pe-7s-refresh-2"></i></button>
                  </div>
                  <img src="static/images/social-media/google-plus.png" width="55" height="55">
                </div>

              </div>
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
<script src="./settings.js"></script>
