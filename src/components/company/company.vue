<style src="./company.css"></style>

<template>
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
            <a><router-link to="/payment"><i class="pe-7s-cash"></i>Payment</router-link></a>
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
    <!-- End navigation-->


    <!-- Main content-->
    <section class="content">
      <div class="container-fluid" style="opacity: 1;">

        <div class="row">
          <div class="col-lg-12">
            <div class="view-header">
              <div class="header-icon">
                <i class="pe page-header-icon pe-7s-flag"></i>
              </div>
              <div class="header-title">
                <h3 class="m-b-xs">{{company.brand_name}}</h3>
                <small>
                                      Modify your company information.
                                  </small>
              </div>
            </div>
            <hr>
          </div>
        </div>

        <div class="row form-add-ad">

          <div class="col-md-12">
            <div class="panel panel-filled">
              <div class="panel-heading p-h">
                Edit Company
              </div>
              <div class="panel-body">
                <form v-on:submit.prevent="updateCompany">
                  <!-- Photo Company -->
                  <p v-model="errorhandle" class="errorhandle">{{errorhandle}}</p>

                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputBrandName">Brand name   </label>
                    <span v-show="errors.has('Brand name')" class="text-danger">{{ errors.first('Brand name') }}</span>
                    <input type="text" name="Brand name" v-validate="'required'"  v-model="company.brand_name"  class="form-control" id="exampleInputBrandName" placeholder="Brand Name">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputIndustry">Industry</label>
                    <span v-show="errors.has('Industry')" class="text-danger">{{ errors.first('Industry') }}</span>
                    <input type="text" v-model="company.inudustry" name="Industry" v-validate="'required'"  class="form-control" id="exampleInputIndustry" placeholder="Industry">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputEmail">Email address</label>
                    <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                    <input  name="email"  v-validate="'required|email'" v-model="company.email"   class="form-control" id="exampleInputEmail" placeholder="Email">
                  </div>



                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputWebsite">Website</label>
                    <span v-show="errors.has('Website')" class="text-danger">{{ errors.first('Website') }}</span>
                    <input type="text" name="Website"  v-validate="'url'" v-model="company.website"  class="form-control" id="exampleInputWebsite" placeholder="Website">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputPhone">Phone</label>
                    <span v-show="errors.has('Phone')" class="text-danger">{{ errors.first('Phone') }}</span>
                    <input type="text" name="Phone" v-validate="'numeric'" v-model="company.phone"  class="form-control" id="exampleInputPhone" placeholder="Phone">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputAddress">Address</label>
                    <input type="text"  v-model="company.address"  class="form-control" id="exampleInputAddress" placeholder="Address">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputCity">City</label>
                    <input type="text"  v-model="company.city"  class="form-control" id="exampleInputCity" placeholder="City">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputCountry">Country</label>
                    <select  v-model="company.country"  class="form-control" id="exampleInputCountry">
                                              <option selected disabled>Country</option>
                                              <option>Egypt</option>
                                              <option>Egypt</option>
                                              <option>Egypt</option>
                                              <option>Egypt</option>
                                          </select>
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputState">State</label>
                    <input type="text"  v-model="company.state"  class="form-control" id="exampleInputState" placeholder="State">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputZipCode">Zip code</label>
                    <span v-show="errors.has('Zip code')" class="text-danger">{{ errors.first('Zip code') }}</span>

                    <input type="text" name="Zip code" v-model="company.zip" v-validate="'numeric'"  class="form-control" id="exampleInputZipCode" placeholder="Zip Code">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputEstablishedDate">Established date</label>
                    <span v-show="errors.has('Date')" class="text-danger">{{ errors.first('Date') }}</span>
                    <input type="text"  name="Date" v-validate="'date_format:YYYY-MM-DD'" v-model="company.established_date"  class="form-control" id="exampleInputEstablishedDate" placeholder="Established Date">
                  </div>
                  <div class="form-group col-sm-12 col-md-6">
                    <label for="exampleInputEstablishedDate">About Company</label>
                    <textarea rows="2"  v-model="company.about_company"  class="form-control" placeholder="About Company"></textarea>
                  </div>
                  <div class="col-xs-12">
                    <button type="submit"  class="btn btn-default">UPDATE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="panel panel-filled">
              <div class="panel-heading p-h">
                Edit Social Links
              </div>
              <div class="panel-body">
                <form class="row" v-on:submit.prevent="updateCompany">
                  <div class="form-group col-md-6 col-sm-12">
                    <label for="exampleInputLinkedin">Linkedin</label>
                    <input type="text"  v-model="company.linkedIn"  class="form-control" id="exampleInputLinkedin" placeholder="Linkedin">
                  </div>
                  <div class="form-group col-md-6 col-sm-12">
                    <label for="exampleInputLFacebook">Facebook</label>
                    <input type="text"  v-model="company.facebook"  class="form-control" id="exampleInputLFacebook" placeholder="Facebook">
                  </div>
                  <div class="form-group col-md-6 col-sm-12">
                    <label for="exampleInputTwitter">Twitter</label>
                    <input type="text"  v-model="company.twitter"  class="form-control" id="exampleInputTwitter" placeholder="Twitter">
                  </div>
                  <div class="form-group col-md-6 col-sm-12">
                    <label for="exampleInputInstagram">Instagram</label>
                    <input type="text"  v-model="company.instagram"  class="form-control" id="exampleInputInstagram" placeholder="Instagram">
                  </div>
                  <div class="col-xs-12">
                    <button type="submit"  class="btn btn-default">UPDATE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-xs-12 form-add-ad-group clearfix">
            <div class="panel panel-filled col-xs-12">
              <div class="panel-heading p-h col-xs-12">
                Account Founder
              </div>
              <div class="panel-body col-md-6">
                <!-- Form Account Founder -->
                <form class=" form-associates" v-on:submit.prevent="updateFounder">
                  <div class="associates-group">
                    <div class="form-group">
                      <label for="exampleInputNameAssociates">Name</label>
                      <input v-model="founder.name" type="text" class="form-control" value="Company Name" id="exampleInputNameAssociates" placeholder="Name">
                      <label for="exampleInputPositionCompany" class="mt-2">Position at Company</label>
                      <input v-model="founder.position" type="text" value="Position Company" class="form-control" id="exampleInputPositionCompany" placeholder="Position at Company">
                      <label for="exampleInputEmailCompany" class="mt-2">Email address</label>
                      <input v-model="founder.email" type="email" class="form-control" value="Example@example.com" id="exampleInputEmailCompany" placeholder="Email">
                      <button type="submit" class="btn btn-default mt-2 mb-2">UPDATE</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-6 video-company-block">
                <button type="button" class="btn-edit-video btn" data-toggle="tooltip" data-placement="top" title="Remove Video"><i class="fa fa-trash" aria-hidden="true"></i></button>
                <div id="video-company" class="video-company video-reo">
                  <div id="player_placeholder"></div>

                </div>
                <form class="form-associates" v-on:submit.prevent="updatevideo">
                  <ziggeo ziggeo-input_bind='videotoken' ziggeo-width=320 ziggeo-height=180></ziggeo>
                  <button type="submit" class="btn btn-default mt-2 mb-2">UPDATE</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xs-12 form-add-ad-group">
            <div class="panel panel-filled col-xs-12">
              <div class="panel-heading p-h col-xs-12">
                Add Associates
              </div>
              <div class="panel-body w-100">
                <!-- Form Add Associates -->
                <form class=" form-associates w-100">
                  <div class="associates-group col-md-6">
                    <div class="form-group">
                      <label for="exampleInputNameAssociates">Name</label>
                      <input type="text" class="form-control" id="exampleInputNameAssociates" placeholder="Name">
                      <label for="exampleInputPositionCompany" class="mt-2">Position at Company</label>
                      <input type="text" class="form-control" id="exampleInputPositionCompany" placeholder="Position at Company">
                      <label for="exampleInputEmailCompany" class="mt-2">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmailCompany" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group associates-new col-md-6 text-center">
                    <p class="upload-video-icon"><i class="pe-7s-video"></i></p>
                    <label class="btn btn-accent" for="file-selector2">
                                              <input id="file-selector2" type="file" style="display:none;"
                                                     onchange="$('#upload-file-info2').html($(this).val());">
                                              <span id="upload-file-info2">Upload Video</span>
                                          </label>
                  </div>
                  <div class="col-xs-12 text-center">
                    <button type="submit" class="btn btn-default mb-1 mt-2">send invitation</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
          <button type="button" class="add-associates btn btn-default" data-toggle="tooltip" data-placement="top" title="Add Associates">
                          <i class="fa fa-plus"></i>
                      </button>

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

</template>

<script src="./company.js"></script>
