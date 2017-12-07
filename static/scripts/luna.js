/*
  LUNA - Responsive Admin Theme
*/

/* Start Plugin Plyr */
var plyr = plyr.setup();

$(document).ready(function () {
    
    'use strict';

    // Fixed Aside In Only Page Home
    if ($(".profile-sidebar").length) {
        $(window).scroll(function () {
            var STop = $(window).scrollTop();

            if (STop > 240 && $(window).width() > 991) {
                $(".profile-sidebar").addClass('fixed-top');
            } else {
                $(".profile-sidebar").removeClass('fixed-top');
            }
        });
    }


    // Handle minimalize left menu
    $('.left-nav-toggle a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    });


    // Hide all open sub nav menu list
    $('.nav-second').on('show.bs.collapse', function () {
        $('.nav-second.in').collapse('hide');
    });

    // Handle panel toggle
    $('.panel-toggle').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(event.target).closest('div.panel');
        var icon = $(event.target).closest('i');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

    // Handle panel close
    $('.panel-close').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(event.target).closest('div.panel');
        hpanel.remove();
    });


    /* Start tooltip*/
    $('[data-toggle="tooltip"]').tooltip();

    /* Start Popover */
    $('[data-toggle="popover"]').popover({
        trigger: 'hover'
    });

   
    
    /* Add A Question In Section FAQ */
    $(".add-faq").on('click', function () {
        $(".form-faq").prepend('<li class="form-group"><label for="exampleInputQuestion">Question</label><input type="text" class="form-control" id="exampleInputQuestion" placeholder="Question"><label for="exampleInputAnswer" class="mt-3">Answer</label><textarea rows="3" class="form-control" id="exampleInputAnswer" placeholder="Answer"></textarea><div class="row"><div class="col-md-4"><label for="exampleInputAnswera" class="mt-3">Choice A</label><input type="text" class="form-control" id="exampleInputAnswera" placeholder="Choice A"></div><div class="col-md-4"><label for="exampleInputAnswerb" class="mt-3">Choice B  </label><input type="text" class="form-control" id="exampleInputAnswerb" placeholder="Choice B "></div><div class="col-md-4"><label for="exampleInputAnswerC" class="mt-3">Choice C  </label><input type="text" class="form-control" id="exampleInputAnswerC" placeholder="Choice C "></div><div class="col-md-4"><label for="exampleInputAnswerc" class="mt-3">Action A</label><input type="text" class="form-control" id="exampleInputAnswerc" placeholder="Action A"></div><div class="col-md-4"><label for="exampleInputAnswerd" class="mt-3">Action B</label><input type="text" class="form-control" id="exampleInputAnswerd" placeholder="Action B"></div><div class="col-md-4"><label for="exampleInputAnswerE" class="mt-3">Action C</label><input type="text" class="form-control" id="exampleInputAnswerE" placeholder="Action C"></div></div></li>');
    });
    
    /* Add a proposition Section proposition */
    $(".add-proposition").on('click', function () {
        $(this).siblings(".list-proposition").prepend('<li class="list-prep"><div class="form-group"><label>Proposition</label><textarea  rows="6" class="form-control textarea-message"  placeholder="Proposition"></textarea></div></li>');
        if ($(".list-prep").length >= 3) {
            $(".add-proposition").hide();
        }
    });

    /* Add a Associates In Section Company */
    $(".add-associates").on('click', function () {
        $(this).parent(".form-add-ad").append('<div class="col-xs-12 form-add-ad-group"><div class="panel panel-filled col-xs-12"><div class="panel-heading p-h col-xs-12"><div class="panel-tools"></div>Add Associates</div><div class="panel-body w-100"><form class=" form-associates w-100"><div class="associates-group col-md-6"><div class="form-group"><label for="exampleInputNameAssociates">Name</label><input type="text" class="form-control" id="exampleInputNameAssociates" placeholder="Name"><label for="exampleInputPositionCompany" class="mt-2">Position at Company</label><input type="text" class="form-control" id="exampleInputPositionCompany" placeholder="Position at Company"><label for="exampleInputEmailCompany" class="mt-2">Email address</label><input type="email" class="form-control" id="exampleInputEmailCompany" placeholder="Email"></div></div><div class="form-group col-md-6 text-center"><p class="upload-video-icon"><i class="pe-7s-video"></i></p><label class="btn btn-accent" for="file-selector3"><input id="file-selector3" type="file" style="display:none;" onchange="$(\' #upload-file-info3 \').html($(this).val());"><span id="upload-file-info3">Upload Video</span></label></div><div class="col-xs-12 text-center"><button type="submit" class="btn btn-default mb-1 mt-2">send invitation</button></div></form></div></div></div>');
        $(".panel-close-two").on('click', function () {
            $(this).parentsUntil(".form-add-ad-group").remove();
        });
        if ($(".form-add-ad-group").length >= 4) {
            $(".add-associates").hide();
        }
    });

    /*  Remove Video Old And Show Upload New Video In Section Company  */
    $(".btn-edit-video").on('click', function () {
        $(".video-reo").remove();
        $(".upload-hidden-video").show();
    });

    // Nice Scroll Plugin In Page Home Section Video Brand & Comments
    if ($(".video-info").length) {
        $('.video-info').slimScroll({
            height: '450px'
        });
    }

    // Chat History Show And Hide Section CRM
    $(".btn-chat-history").on('click', function () {
        var thisSection = $(this).attr("data-chat");
        $("#" + thisSection).css({
            'transform': 'scaleX(1)'
        });

    });
    $(".btn-close-ch").on('click', function () {
        $(".his-chat").css({
            'transform': 'scaleX(0)'
        });

    });

    /* Start Slider Brand In Page Customer */
    if ($(".carousel-brands").length) {
        $('.carousel-brands').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }
    
    /* landing Page Show & Hide Chatbot Customer & Brand & Login */
    $(".select-account button.btn-brand").on('click', function () {
        $(".main-company").css({
            'transform': 'scaleX(1)'
        });
        $('.title-top').addClass('animation-title');
        $('.list-text').addClass('list-textAnimation');
    });
    $(".select-account button.btn-customer").on('click', function () {
        $(".main-customer").css({
            'transform': 'scaleX(1)'
        });
        $('.title-top').addClass('animation-title');
        $('.list-text').addClass('list-textAnimation');
    });

    $("button.btn-sign-up").on('click', function () {
        $(".main-loginCustomerBrand").css({
            'transform': 'scaleX(1)'
        });
        $('.title-top').addClass('animation-title');
        $('.list-text').addClass('list-textAnimation');
    });
    $(".btn-BackLandingPage").on('click', function () {
        $(".main-company, .main-customer, .main-loginCustomerBrand").css({
            'transform': 'scaleX(0)'
        });
        $('.title-top').removeClass('animation-title');
        $('.list-text').removeClass('list-textAnimation');
    });




});


/* Landing Page */

$(window).on('load', function () {
    /*$('.f-loader').slideUp(400); */
    
    /* Animation Page Sign Up Brand */
    if ($('.title-top').length) {
        $('.title-top').addClass('animation-title');
        $('.list-text').addClass('list-textAnimation');
    }
});


/* Photo Profile & Company Upload*/
if ($("#companypic").length || $("#userpic").length) {
    jQuery(function ($) {

        function _getCode(node, all) {
            var code = FileAPI.filter($(node).prop('innerHTML').split('\n'), function (str) {
                return !!str;
            });
            if (!all) {
                code = code.slice(1, -2);
            }

            var tabSize = (code[0].match(/^\t+/) || [''])[0].length;

            return $('<div/>')
                .text($.map(code, function (line) {
                    return line.substr(tabSize).replace(/\t/g, '   ');
                }).join('\n'))
                .prop('innerHTML')
                .replace(/ disabled=""/g, '')
                .replace(/&amp;lt;%/g, '<%')
                .replace(/%&amp;gt;/g, '%>');
        }


        // Init examples
        FileAPI.each(examples, function (fn) {
            fn();
        });
    });

    var examples = [];
    /* Start Company Photo*/
    examples.push(function () {
        $('#companypic').fileapi({
            url: 'http://rubaxa.org/FileAPI/server/ctrl.php',
            accept: 'image/*',
            imageSize: {
                minWidth: 140,
                minHeight: 140
            },
            elements: {
                active: {
                    show: '.js-upload',
                    hide: '.js-browse'
                },
                preview: {
                    el: '.js-preview',
                    width: 140,
                    height: 140
                },
                progress: '.js-progress'
            },
            onSelect: function (evt, ui) {
                var file = ui.files[0];

                if (!FileAPI.support.transform) {
                    alert('Your browser does not support Flash :(');
                } else if (file) {
                    $('#popup').modal({
                        closeOnEsc: true,
                        closeOnOverlayClick: false,
                        onOpen: function (overlay) {
                            $(overlay).on('click', '.js-upload', function () {
                                $.modal().close();
                                $('#companypic').fileapi('upload');
                            });

                            $('.js-img', overlay).cropper({
                                file: file,
                                bgColor: '#fff',
                                maxSize: [$(window).width() - 100, $(window).height() - 100],
                                minSize: [140, 140],
                                selection: '90%',
                                onSelect: function (coords) {
                                    $('#companypic').fileapi('crop', file, coords);
                                }
                            });
                        }
                    }).open();
                }
            }
        });
    });

    /* Start User Photo */
    examples.push(function () {
        $('#userpic').fileapi({
            url: 'http://rubaxa.org/FileAPI/server/ctrl.php',
            accept: 'image/*',
            imageSize: {
                minWidth: 140,
                minHeight: 140
            },
            elements: {
                active: {
                    show: '.js-upload',
                    hide: '.js-browse'
                },
                preview: {
                    el: '.js-preview',
                    width: 140,
                    height: 140
                },
                progress: '.js-progress'
            },
            onSelect: function (evt, ui) {
                var file = ui.files[0];

                if (!FileAPI.support.transform) {
                    alert('Your browser does not support Flash :(');
                } else if (file) {
                    $('#popup').modal({
                        closeOnEsc: true,
                        closeOnOverlayClick: false,
                        onOpen: function (overlay) {
                            $(overlay).on('click', '.js-upload', function () {
                                $.modal().close();
                                $('#userpic').fileapi('upload');
                            });

                            $('.js-img', overlay).cropper({
                                file: file,
                                bgColor: '#fff',
                                maxSize: [$(window).width() - 100, $(window).height() - 100],
                                minSize: [140, 140],
                                selection: '90%',
                                onSelect: function (coords) {
                                    $('#userpic').fileapi('crop', file, coords);
                                }
                            });
                        }
                    }).open();
                }
            }
        });
    });
}


