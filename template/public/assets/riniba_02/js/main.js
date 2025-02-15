(function ($) {
  "use strict";

  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    // ============== Mobile Menu Sidebar Js Start ========
    $(".toggle-mobileMenu").on("click", function () {
      $(".mobile-menu").addClass("active");
      $(".side-overlay").addClass("show");
      $("body").addClass("scroll-hide-sm");
    });

    $(".close-button, .side-overlay").on("click", function () {
      $(".mobile-menu").removeClass("active");
      $(".side-overlay").removeClass("show");
      $("body").removeClass("scroll-hide-sm");
    });
    // ============== Mobile Menu Sidebar Js End ========

    // ============== Mobile Nav Menu Dropdown Js Start =======================
    var windowWidth = $(window).width();

    $(".has-submenu").on("click", function () {
      var thisItem = $(this);

      if (windowWidth < 992) {
        if (thisItem.hasClass("active")) {
          thisItem.removeClass("active");
        } else {
          $(".has-submenu").removeClass("active");
          $(thisItem).addClass("active");
        }

        var submenu = thisItem.find(".nav-submenu");

        $(".nav-submenu").not(submenu).slideUp(300);
        submenu.slideToggle(300);
      }
    });
    // ============== Mobile Nav Menu Dropdown Js End =======================

    // ======================== Tooltip Js Start ====================
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    // ======================== Tooltip Js End ====================

    // ===================== Scroll Back to Top Js Start ======================
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
    // ===================== Scroll Back to Top Js End ======================

    // ========================== add active class to ul>li top Active current page Js Start =====================
    function dynamicActiveMenuClass(selector) {
      let FileName = window.location.pathname.split("/").reverse()[0];

      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") == FileName) {
          $(this).addClass("activePage");
        }
      });
      // if any li has activePage element add class
      selector.children("li").each(function () {
        if ($(this).find(".activePage").length) {
          $(this).addClass("activePage");
        }
      });
      // if no file name return
      if ("" == FileName) {
        selector.find("li").eq(0).addClass("activePage");
      }
    }
    if ($("ul").length) {
      dynamicActiveMenuClass($("ul"));
    }
    // ========================== add active class to ul>li top Active current page Js End =====================

    // ================================ Remove Sale Offer Js Start =============================
    $(".sale-offer__close").on("click", function () {
      $(this).closest(".sale-offer").addClass("d-none");
    });
    // ================================ Remove Sale Offer Js End =============================

    // ================================ CountDown Js Start =============================
    if (document.querySelector(".countdown")) {
      const myCountdown = new countdown({
        target: ".countdown",
        dayWord: " Days:",
        hourWord: " Hour: ",
        minWord: " Min:",
        secWord: " Sec:",
      });
    }
    // ================================ CountDown Js End =============================

    // ========================= popular Category Js Start ==============
    $(".popular-slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: false,
      pauseOnHover: true,
      arrows: true,
      draggable: true,
      speed: 900,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
    // ========================= popular Category Js End ===================

    // ========================= Wishlist Js Start ===================
    $(".product-card__wishlist").on("click", function () {
      $(this).toggleClass("active");
    });
    // ========================= Wishlist Js End ===================

    // ========================= Selling Product Js Start ==============
    $(".selling-product-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: true,
      pauseOnHover: true,
      arrows: true,
      draggable: true,
      speed: 900,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // ========================= Selling Product Js End ===================

    // ========================= Testimonial Slider Js Start ==============
    $(".testimonial-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: true,
      pauseOnHover: true,
      arrows: true,
      draggable: true,
      speed: 900,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // ========================= Testimonial Slider Js End ===================

    // ========================= Selling Product Js Start ==============
    $(".resource-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: true,
      pauseOnHover: true,
      arrows: true,
      draggable: true,
      speed: 900,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // ========================= Selling Product Js End ===================

    // ========================= Brand Slider Js Start ==============
    $(".brand-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      draggable: true,
      speed: 900,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
    // ========================= Brand Slider Js End ===================

    // ========================= Payment Method Slider Js Start ==============
    $(".payment-method__slider").slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: false,
      pauseOnHover: true,
      arrows: true,
      draggable: true,
      speed: 900,
      infinite: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
    // ========================= Payment Method Slider Js End ===================

    // ========================= Follow Button Js Start ==========================
    $(".follow-btn").on("click", function () {
      var buttonText = $(this).text();
      $(this).text(buttonText === "Follow" ? "Following" : "Follow");
      $(this).toggleClass("active");
    });
    // ========================= Follow Button Js End ==========================

    // ========================= Text Rotation Js Start ==========================
    const text = document.querySelector(".circle__text");

    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
        .join("");
    }

    // Text Two
    const textTwo = document.querySelector(".circle__desc");

    if (textTwo) {
      textTwo.innerHTML = textTwo.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
        .join("");
    }
    // ========================= Text Rotation Js End ==========================

    // ========================= Counter Up Js End ===================
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 3500,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    // Banner statistics Counter
    const statisticsCounter = document.querySelectorAll(".statistics__amount");
    if (statisticsCounter.length > 0) {
      statisticsCounter.forEach((counterNumber) => {
        IO.observe(counterNumber);
      });
    }

    // performance Count
    const performanceCount = document.querySelectorAll(
      ".performance-content__count"
    );
    if (performanceCount.length > 0) {
      performanceCount.forEach((counterNumber) => {
        IO.observe(counterNumber);
      });
    }
    // ========================= Counter Up Js End ===================

    // ========================= Filter Sidebar Js Start ===================
    $(".filter-sidebar__button").on("click", function () {
      $(this).toggleClass("active");
      $(this).siblings(".filter-sidebar__content").slideToggle();
    });
    // ========================= Filter Sidebar Js End ===================

    // ========================== Grid & List View Js Start =====================
    $(".list-button").on("click", function () {
      $("body").addClass("list-view");
      $(this).addClass("active");
      $(".grid-button").removeClass("active");
    });
    $(".grid-button").on("click", function () {
      $("body").removeClass("list-view");
      $(".list-button").removeClass("active");
      $(this).addClass("active");
    });
    // ========================== Grid & List View Js End =====================

    // ========================== Filter Form Show hide Js Start =====================
    $(".filter-tab__button").on("click", function () {
      $(".filter-form").slideToggle();
      $(this).toggleClass("active");
    });
    // ========================== Filter Form Show hide Js End =====================

    // ========================== Filter Sidebar Show hide Js Start =====================
    $(".sidebar-btn").on("click", function () {
      $(".filter-sidebar").addClass("show");
      $(".side-overlay").addClass("show");
      $("body").addClass("scroll-hide-sm");
    });
    $(".filter-sidebar__close, .side-overlay").on("click", function () {
      $(".filter-sidebar").removeClass("show");
      $(".side-overlay").removeClass("show");
      $("body").removeClass("scroll-hide-sm");
    });
    // ========================== Filter Sidebar Show hide Js End =====================

    // ========================= Social Share Js Start ===========================
    $(".social-share__button").on("click", function (event) {
      event.stopPropagation();
      $(".social-share__icons").toggleClass("show");
    });

    $("body").on("click", function (event) {
      $(".social-share__icons").removeClass("show");
    });

    // For device width size js start
    // let screenSize = screen.width
    // alert(' Your Screen Size is: ' + screenSize + 'pixel');
    // For device width size js start

    let socialShareBtn = $(".social-share");
    // Check if the element exists
    if (socialShareBtn.length > 0) {
      let leftDistance = socialShareBtn.offset().left;
      let rightDistance =
        $(window).width() - (leftDistance + socialShareBtn.outerWidth());

      if (leftDistance < rightDistance) {
        $(".social-share__icons").addClass("left");
      }
    }
    // ========================= Social Share Js End ===========================

    // ========================= License Dropdown Js Start ===========================
    $(".btn-has-dropdown").on("click", function (event) {
      event.stopPropagation();
      $(".license-dropdown").toggleClass("active");
    });

    $(".license-dropdown").on("click", function (event) {
      event.stopPropagation();
    });

    $("body").on("click", function () {
      $(".license-dropdown").removeClass("active");
    });
    // ========================= License Dropdown Js End ===========================

    // ========================== Increment & Decrement Js Start =====================
    $(function () {
      $("[data-decrease]").click(decrease);
      $("[data-increase]").click(increase);
      $("[data-value]").on("change input", valueChange);
    });

    function decrease() {
      var value = $(this).parent().find("[data-value]").val();
      if (value > 1) {
        value--;
        $(this).parent().find("[data-value]").val(value);
      }
    }

    function increase() {
      var value = $(this).parent().find("[data-value]").val();
      if (value < 100) {
        value++;
        $(this).parent().find("[data-value]").val(value);
      }
    }

    function valueChange() {
      var value = $(this).val();
      if (value == undefined || isNaN(value) == true || value <= 0) {
        $(this).val(1);
      } else if (value >= 101) {
        $(this).val(100);
      }
    }
    // ========================== Increment & Decrement Js End =====================

    // ========================== Cart Item Delete Js Start =====================
    $(".delete-btn").on("click", function () {
      $(this).closest("tr").addClass("d-none");
    });
    // ========================== Cart Item Delete Js End =====================

    // ========================== Password Show Hide Js Start =====================
    $(".toggle-password").on("click", function () {
      var input = $($(this).attr("id"));

      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });

    $(".toggle-password-two").on("click", function () {
      $(this).toggleClass(" la-eye-slash");
      var input = $($(this).attr("id"));

      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
    // ========================== Password Show Hide Js End =====================

    // ========================== Dashboard Sidebar Js Start =====================
    $(".bar-icon, .arrow-icon").on("click", function () {
      $(".dashboard").toggleClass("active");
    });

    $(".bar-icon").on("click", function () {
      $(".dashboard-sidebar").toggleClass("active");
      $(".side-overlay").toggleClass("show");
      $("body").toggleClass("scroll-hide-sm");
    });

    $(".side-overlay, .dashboard-sidebar__close").on("click", function () {
      $(".dashboard-sidebar").removeClass("active");
      $(".side-overlay").removeClass("show");
      $("body").removeClass("scroll-hide-sm");
    });
    // ========================== Dashboard Sidebar Js End =====================

    // ==================== Dashboard User Profile Dropdown Start ==================
    $(".user-profile__button").on("click", function (event) {
      event.stopPropagation();
      $(".user-profile-dropdown").toggleClass("show");
    });

    $(".user-profile-dropdown").on("click", function (event) {
      event.stopPropagation();
      $(".user-profile-dropdown").addClass("show");
    });

    $("body").on("click", function () {
      $(".user-profile-dropdown").removeClass("show");
    });
    // ==================== Dashboard User Profile Dropdown End ==================

    // ========================== Image Upload Js Start =====================
    function readURL(input, previewId) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $(previewId).css("background-image", "url(" + e.target.result + ")");
          $(previewId).hide();
          $(previewId).fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#imageUpload").on("change", function () {
      readURL(this, "#imagePreview");
    });

    $("#imageUploadTwo").on("change", function () {
      readURL(this, "#imagePreviewTwo");
    });
    // ========================== Image Upload Js End =====================

    // ========================== Magnific Popup Js Start =====================
    $(".screenshot-btn").on("click", function () {
      var images = JSON.parse($(this).attr("data-images"));
      var items = [];

      for (var i = 0; i < images.length; i++) {
        items.push({
          src: images[i],
          type: "image",
        });
      }

      $.magnificPopup.open({
        items: items,
        gallery: {
          enabled: true,
        },
        type: "image",
      });
    });


  
    $(".gooddescription img").on("click", function() {
      // 获取当前点击的图片的 src 属性
      var imgSrc = $(this).attr('src');

      // 创建 Magnific Popup 所需的 items 数组
      var items = [{
          src: imgSrc,
          type: 'image' // 指定内容类型为图片
      }];

      // 使用 Magnific Popup 打开图片查看框
      $.magnificPopup.open({
          items: items,
          gallery: {
              enabled: true // 启用画廊模式，允许在图片之间切换
          },
          type: 'image' // 设置内容类型为图片
      });
  });




    // ========================== Magnific Popup Js End =====================

    // ========================== ScrollSpy Js End =====================

    // ========================= Scroll Spy Js Start ===========================
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#sidebar-scroll-spy",
    });
    // ========================= Scroll Spy Js End ===========================

    // ========================== Apex Chart Js Start =====================
    var chartElement = document.querySelector("#chart");
    if (chartElement) {
      // Chart options
      var options = {
        series: [
          {
            name: "Earning: $200",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "Downloads: 52",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        chart: {
          height: 486,
          type: "area",
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      };

      // Create the chart
      var chart = new ApexCharts(chartElement, options);
      chart.render();
    }
    // ========================== Apex Chart Js End =====================

    let lineChart = document.querySelector("#earningChart");
    if (lineChart) {
      var options = {
        series: [
          {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
        ],
        chart: {
          height: 350,
          type: "line",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      };

      var earingChart = new ApexCharts(lineChart, options);
      earingChart.render();
    }
  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".loader-mask").fadeOut();
  });
  // ========================= Preloader Js End=====================

  // ========================= Header Sticky Js Start ==============
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });
  // ========================= Header Sticky Js End===================
})(jQuery);
