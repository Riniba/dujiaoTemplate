// Template Name: Striker
// Template URL: https://techpedia.co.uk/template/striker
// Description:  Striker - Sports Club Html Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.hamburgerMenu();
      Init.videoPlay();
      Init.countdownInit(".countdown", "2026/12/01");
      Init.initializeSlick();
      Init.formValidation();
      Init.contactForm();
      Init.jsSlider();
      Init.quantityHandle();
      Init.leadMore();
    },

    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },

    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },

    preloader: function () {
      setTimeout(function () {
        $("#preloader").fadeOut("slow");
      }, 100);
    },
      // Ham Burger Menu
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $('.hamburger-menu').on('click', function() {
          $('.bar').toggleClass('animate');
          $('.mobile-navar').toggleClass('active');
          return false;
        })
        $('.has-children').on ('click', function() {
          $(this).children('ul').slideToggle('slow', 'swing');
          $('.icon-arrow').toggleClass('open');
        });
      }
    },
    jsSlider: function () {
      if ($(".price-slider").length) {
        $(".price-slider").ionRangeSlider({
          skin: "big",
          type: "double",
          grid: false,
          min: 0,
          max: 999,
          from: 0,
          to: 999,
          // postfix: '$',
          hide_min_max: true,
          hide_from_to: false,
        });
      }
    },
    leadMore:function(){
      if ($(".more").length) {
        $('.more').on('click',function(){
          $('#more').slideToggle();
          // console.log($(this).text())
          if($(this).text() === 'Load More Reviews '){
            $(this).html('Hide More Reviews'+`<i class="far fa-chevron-up"></i>`)
          }else if($(this).text() === 'Hide More Reviews'){
            $(this).html('Load More Reviews '+`<i class="far fa-chevron-down"></i>`)
          }
        })
      }

    },
    quantityHandle: function () {
      $(".decrement").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        if (qtyVal > 0) {
          qtyInput.val(qtyVal - 1);
        }
      });
      $(".increment").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        qtyInput.val(parseInt(qtyVal + 1));
      });
    },



    videoPlay: function () {
      var $videoSrc;
      $('.play-button').click(function () {
        $videoSrc = $(this).data("src");
        $("#video").attr('src', $videoSrc);
      });
      $('.btn-close').click(function () {
        $("#video").attr('src',' ');
      });
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li>%d<small>d</small></li>\
              <li>%H<small>h</small></li>\
              <li>%M<small>m</small></li>\
              <li>%S<small>s</small></li>'
            )
          );
        });
      }
    },
    initializeSlick: function (e) {

      if ($(".review-slider").length) {
        $(".review-slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding:'0',
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              },
            }
          ],
        });
      }
      if ($(".brands-logo").length) {
        $(".brands-logo").slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 490,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
          ],
        });
      }


      if ($(".testimonials-slider").length) {
        $(".testimonials-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 2000,
          vertical: true,
          verticalSwiping: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                verticalSwiping: false,

              },
            },
          ],
        });
      }

    },

    formValidation: function () {
      if ($(".form-validator").length) {
        $(".form-validator").validate();
      }
    },

    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h5 class='text-success mt-3 mb-2'>Email Sent Successfully</h5>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h5 class='text-danger mt-3 mb-2'>There is an error</h5>";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },
  };
  Init.i();
})(window, document, jQuery);
