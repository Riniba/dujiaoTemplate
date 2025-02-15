  /*!
 * aksVideoPlayer v1.0.0
 * Video Player
 * (c) 2021 Ahmet Aksungur
 * MIT License
 * https://github.com/Ahmetaksungur
 */

(function ($) {
    "use strict";
    $.fn.aksVideoPlayer = function (options) {
      const aks = $(this);
      var settings = $.extend(
        {
          file: "" | [],
          poster: "",
          width: 640,
          height: 360,
          rewind: true,
          rewindValue: 10,
          forward: false,
          forwardValue: 10,
          preview: true,
          previewWidth: 140,
          previewHeight: 95,
          controller: true,
          autoplay: false,
          muted: true,
          volume: 1,
          loop: false,
          playbackRateLabel: "Playing Speed",
          playbackRate: ["0.25", "0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"],
          captionsLabel: "Subtitles",
          captions: [],
          sourcesLabel: "Quality",
          playLabel: "Play",
          pauseLabel: "Pause",
          rewindLabel: "Rewind %s Seconds",
          forwardLabel: "Forward %s Seconds",
          settingsLabel: "Settings",
          fullScreenLabel: "Fullscreen",
          exitFullScreenLabel: "Exit Fullscreen",
          ads: [],
          adsSkipLabel: "Skip Ad",
          closeLabel: "Close",
          pictureinpicture: true,
          pictureinpictureLabel: "Picture in Picture",
          contextMenu: []
        },
        options
      );
      return this.each(function (i) {
        var video = "";
        if (settings.file.length) {
          video = settings.file[0].file;
        } else {
          video = settings.file;
        }
  
        var html =
          '<div class="aks-video-player" style="width:' +
          settings.width +
          "px;height:" +
          settings.height +
          'px;">';
        html += '<div class="aks-vp-container">';
  
        if (settings.poster) {
          html +=
            '<div class="aks-vp-poster" style="background-image: url(' +
            settings.poster +
            ');"></div>';
        } else {
          html += '<div class="aks-vp-poster"></div>';
        }
  
        html +=
          '<div class="aks-vp-start"><svg width="50" height="50"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg></div>';
        html +=
          '<div class="aks-vp-loading"><div class="aks-vp-loading-spinner"></div></div>';
        html += '<div class="aks-vp-top"></div>';
        html += "</div>";
        if (settings.controller === true) {
          html += '<div class="aks-vp-controls">';
  
          html +=
            '<div class="aks-vp-slider-container"><div class="aks-vp-slider"><div class="aks-vp-range-rail"><div class="aks-vp-range-loading"></div><div class="aks-vp-range-buffer"></div><div tabindex="-1" class="aks-vp-range-handler"></div></div><div class="aks-vp-slider-timer-tooltip"><span>00:00</span></div>';
  
          if (settings.preview === true) {
            html +=
              '<div class="aks-vp-slider-image-tooltip" style="width: ' +
              settings.previewWidth +
              ";height:" +
              settings.previewHeight +
              ';"></div>';
          }
          html += "</div></div>";
  
          html += '<div class="aks-vp-row"><div class="aks-vp-wrap">';
  
          html +=
            '<button class="aks-vp-btn aks-vp-control" aks-tooltip="' +
            settings.playLabel +
            '" flow="up"><svg class="aks-vp-control-play" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon></svg><svg class="aks-vp-control-pause" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision"><rect x="6" y="4" width="4" height="16" fill="currentColor"></rect><rect x="14" y="4" width="4" height="16" fill="currentColor"></rect></svg></button>';
          if (settings.rewind === true) {
            html +=
              '<button class="aks-vp-btn aks-vp-rewind" aks-tooltip="' +
              settings.rewindLabel.replace("%s", settings.rewindValue) +
              '" flow="up"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 52 58"><g fill="currentColor" fill-rule="nonzero"><path d="M28.283 6.106L31.3 3.519A2 2 0 0028.7.481l-7 6a2 2 0 000 3.038l7 6a2 2 0 102.6-3.038l-2.711-2.323c11.732 1.39 20.272 11.8 19.343 23.577s-10.995 20.72-22.8 20.253C13.327 53.522 3.997 43.814 4 32a21.771 21.771 0 014.731-13.632 2 2 0 10-3.138-2.48A25.733 25.733 0 000 32c-.003 14.063 11.177 25.58 25.234 25.994 14.058.414 25.896-10.424 26.721-24.463.825-14.04-9.663-26.19-23.672-27.425z"><path d="M15.7 15.519a2 2 0 102.6-3.038L13.073 8 18.3 3.519A2 2 0 0015.7.481l-7 6a2 2 0 000 3.038z"></g></svg><span>' +
              settings.rewindValue +
              "</span></button>";
          }
          if (settings.forward === true) {
            html +=
              '<button class="aks-vp-btn aks-vp-forward" aks-tooltip="' +
              settings.forwardLabel.replace("%s", settings.forwardValue) +
              '" flow="up"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 52 58"><g fill="currentColor" fill-rule="nonzero"><path d="M46.407 15.888a2 2 0 00-3.138 2.48A21.771 21.771 0 0148 32c.003 11.814-9.326 21.521-21.131 21.988-11.805.466-21.871-8.474-22.8-20.252-.93-11.777 7.608-22.187 19.34-23.578L20.7 12.481a2 2 0 002.6 3.038l7-6a2 2 0 000-3.038l-7-6a2 2 0 10-2.6 3.038l3.019 2.587C9.709 7.34-.779 19.49.045 33.529s12.662 24.88 26.72 24.465C40.823 57.581 52.003 46.064 52 32a25.733 25.733 0 00-5.593-16.112z"><path d="M33.481 15.3a2 2 0 002.821.217l7-6a2 2 0 000-3.038l-7-6a2 2 0 10-2.6 3.038L38.927 8 33.7 12.481a2 2 0 00-.219 2.819z"></g></svg><span>' +
              settings.forwardValue +
              "</span></button>";
          }
          html +=
            '<div class="aks-vp-voice"><button class="aks-vp-btn aks-vp-voice-btn"><svg class="aks-vp-voice-on" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>  <svg class="aks-vp-voice-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false" width="24" height="24" fill="currentColor"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg></button> <div class="aks-vp-voice-slider-rail" role="slider"> <div class="aks-vp-voice-slider-buffer"></div><input class="aks-vp-voice-slider-range" type="range" min="0" max="1" value="' +
            settings.volume +
            '" step="0.01"></div></div>';
  
          html +=
            '<div class="aks-vp-count"><span class="aks-vp-count-elapsed">00:00</span><span class="aks-vp-divider">/</span><span class="aks-vp-count-countdown">00:00</span></div>';
  
          html += '</div><div class="aks-vp-wrap">';
          html += '<div class="aks-vp-settings-box">';
          html +=
            '<button class="aks-vp-btn aks-vp-settings" aks-tooltip="' +
            settings.settingsLabel +
            '" flow="up"><svg fill="currentColor" width="21" viewBox="0 0 426.667 426.667"><path d="M416.8 269.44l-45.013-35.307c.853-6.827 1.493-13.76 1.493-20.8s-.64-13.973-1.493-20.8l45.12-35.307c4.053-3.2 5.227-8.96 2.56-13.653L376.8 69.653c-2.667-4.587-8.213-6.507-13.013-4.587l-53.12 21.44c-10.987-8.427-23.04-15.573-36.053-21.013l-8-56.533C265.653 3.947 261.28 0 255.947 0h-85.333c-5.333 0-9.707 3.947-10.56 8.96l-8 56.533c-13.013 5.44-25.067 12.48-36.053 21.013l-53.12-21.44c-4.8-1.813-10.347 0-13.013 4.587L7.2 143.573c-2.667 4.587-1.493 10.347 2.56 13.653l45.013 35.307c-.853 6.827-1.493 13.76-1.493 20.8s.64 13.973 1.493 20.8L9.76 269.44c-4.053 3.2-5.227 8.96-2.56 13.653l42.667 73.92c2.667 4.587 8.213 6.507 13.013 4.587L116 340.16c10.987 8.427 23.04 15.573 36.053 21.013l8 56.533c.853 5.013 5.227 8.96 10.56 8.96h85.333c5.333 0 9.707-3.947 10.56-8.96l8-56.533c13.013-5.44 25.067-12.48 36.053-21.013l53.12 21.44c4.8 1.813 10.347 0 13.013-4.587l42.667-73.92c2.668-4.586 1.494-10.346-2.559-13.653zM213.28 288c-41.28 0-74.667-33.387-74.667-74.667S172 138.667 213.28 138.667s74.667 33.387 74.667 74.667S254.56 288 213.28 288z"></svg></button>';
          html += '<div class="aks-vp-settings-menu">';
  
          if (settings.playbackRate.length) {
            html += '<div class="aks-vp-settings-menu-items">';
            html +=
              '<div class="aks-vp-settings-menu-item" data-menu="#aks-playback-rate">';
            html += "<span>" + settings.playbackRateLabel + "</span>";
            html +=
              '<span><svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 20 20"><path d="M9 18l6-6-6-6"></path></svg></span>';
            html += "</div>";
          }
          if (settings.captions.length) {
            html +=
              '<div class="aks-vp-settings-menu-item" data-menu="#aks-subtitles">';
            html += "<span>" + settings.captionsLabel + "</span>";
            html +=
              '<span><svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 20 20"><path d="M9 18l6-6-6-6"></path></svg></span>';
            html += "</div>";
          }
          if (settings.file.length) {
            html +=
              '<div class="aks-vp-settings-menu-item" data-menu="#aks-sources">';
            html += "<span>" + settings.sourcesLabel + "</span>";
            html +=
              '<span><svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 20 20"><path d="M9 18l6-6-6-6"></path></svg></span>';
            html += "</div>";
          }
  
          html += "</div>";
  
          if (settings.playbackRate.length) {
            html +=
              '<div id="aks-playback-rate" class="aks-vp-settings-menu-contents">';
            html +=
              '<div class="aks-vp-settings-menu-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"></svg> ' +
              settings.playbackRateLabel +
              "</div>";
            $.each(settings.playbackRate, function (i, l) {
              html +=
                '<div class="aks-vp-settings-menu-item" data-playback-rate="' +
                l +
                '">';
              html += "<span>" + l + "</span>";
              html += '<span class="aks-vp-settings-menu-icons"></span>';
              html += "</div>";
            });
  
            html += "</div>";
          }
          if (settings.captions.length) {
            html +=
              '<div id="aks-subtitles" class="aks-vp-settings-menu-contents">';
            html +=
              '<div class="aks-vp-settings-menu-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"></svg> ' +
              settings.captionsLabel +
              "</div>";
            $.each(settings.captions, function (i, l) {
              html +=
                '<div class="aks-vp-settings-menu-item" data-subtitles="' +
                l.label +
                '">';
              html += "<span>" + l.label + "</span>";
              html += '<span class="aks-vp-settings-menu-icons"></span>';
              html += "</div>";
            });
            html +=
              '<div class="aks-vp-settings-menu-item aks-subtitles-close aks-active" data-subtitles="close">';
            html += "<span>" + settings.closeLabel + "</span>";
            html += '<span class="aks-vp-settings-menu-icons"></span>';
            html += "</div>";
  
            html += "</div>";
          }
          if (settings.file.length) {
            html +=
              '<div id="aks-sources" class="aks-vp-settings-menu-contents">';
            html +=
              '<div class="aks-vp-settings-menu-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"></svg> ' +
              settings.sourcesLabel +
              "</div>";
            $.each(settings.file, function (i, l) {
              html +=
                '<div class="aks-vp-settings-menu-item" data-sources="' +
                l.label +
                '">';
              html += "<span>" + l.label + "</span>";
              html += '<span class="aks-vp-settings-menu-icons"></span>';
              html += "</div>";
            });
            html += "</div>";
          }
  
          html += "</div>";
  
          html += "</div>";
  
          if (settings.pictureinpicture === true) {
            html +=
              '<button class="aks-vp-btn aks-vp-picturein" aks-tooltip="' +
              settings.pictureinpictureLabel +
              '" flow="up"><svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"><path d="M0 0h48v48H0V0z" fill="none"></svg></button>';
          }
  
          html +=
            '<button class="aks-vp-btn aks-vp-full-screen" aks-tooltip="' +
            settings.fullScreenLabel +
            '" flow="up"><svg class="aks-vp-full-screen-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false" width="24" height="24" fill="currentColor"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg><svg class="aks-vp-full-screen-exit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false" width="24" height="24" fill="currentColor"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg></button>';
  
          html += "</div></div>";
  
          html += "</div>";
        }
        if (settings.captions.length) {
          html +=
            '<div class="aks-vp-cue"><div class="aks-vp-cue-text"></div></div>';
        }
        if (settings.ads.length) {
          html += '<div class="aks-vp-ad-container">';
          $.each(settings.ads, function (i, l) {
            if (l.type === "google") {
              html += '<div id="aks-vp-ad-container"></div>';
            } else {
              html += '<div class="aks-vp-ads-' + l.type + '"></div>';
            }
          });
          html += "</div>";
        }
        html += '<div class="aks-video">';
  
        html +=
          '<video id="aks-video" class="aks-video" tabindex="-1" disableremoteplayback="" webkit-playsinline="" playsinline="" preload="metadata" src="' +
          video +
          '"></video>';
  
        html += "</div>";
  
        html += '<div class="aks-vp-gradient-bottom"></div>';
  
        if (settings.contextMenu.length) {
          html += '<div class="aks-vp-contextmenu">';
          html += '<div class="aks-vp-contextmenu-items">';
          $.each(settings.contextMenu, function (i, l) {
            html +=
              '<div class="aks-vp-contextmenu-item" data-contextmenu="' +
              l.label +
              '">' +
              l.label +
              "</div>";
          });
          html += "</div>";
          html += '<div class="aks-vp-contextmenu-contents">';
          $.each(settings.contextMenu, function (i, l) {
            html +=
              '<div class="aks-vp-contextmenu-content" data-contextmenu-content="' +
              l.label +
              '">';
            if (l.type === "urlCopy") {
              html +=
                '<div class="aks-vp-contextmenu-title">' +
                l.label +
                '</div><div class="aks-vp-contextmenu-copy"><span>' +
                l.url +
                '</span><button data-copy-url="' +
                l.url +
                '" class="aks-vp-contextmenu-copy-btn"><svg width="24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M8 17.93H6c-1.1 0-2-.91-2-2.04V5.04C4 3.9 4.9 3 6 3h8c1.1 0 2 .91 2 2.04V6.9m-6 .17h8c1.1 0 2 .91 2 2.04v10.85c0 1.13-.9 2.04-2 2.04h-8c-1.1 0-2-.91-2-2.04V9.11c0-1.13.9-2.04 2-2.04z"></svg></button></div>';
            } else if (l.type === "socialmedia") {
              html +=
                '<div class="aks-vp-contextmenu-title">' + l.label + "</div>";
              html += '<div class="aks-vp-contextmenu-socials">';
              $.each(settings.contextMenu[i].socials, function (i, l) {
                html +=
                  '<a href="' +
                  l.url +
                  '" class="aks-vp-contextmenu-socials-btn" style="background:' +
                  l.colorBg +
                  ";color:" +
                  l.color +
                  ';">' +
                  l.icon +
                  "</a>";
              });
              html += "</div>";
            } else if (l.type === "iframe") {
              html +=
                '<div class="aks-vp-contextmenu-title">' +
                l.label +
                '</div><div class="aks-vp-contextmenu-copy"><span>' +
                l.iframe +
                '</span><button data-copy-url="' +
                l.iframe +
                '" class="aks-vp-contextmenu-copy-btn"><svg width="24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M8 17.93H6c-1.1 0-2-.91-2-2.04V5.04C4 3.9 4.9 3 6 3h8c1.1 0 2 .91 2 2.04V6.9m-6 .17h8c1.1 0 2 .91 2 2.04v10.85c0 1.13-.9 2.04-2 2.04h-8c-1.1 0-2-.91-2-2.04V9.11c0-1.13.9-2.04 2-2.04z"></svg></button></div>';
            }
            html += "</div>";
          });
          html +=
            '<div class="aks-vp-contextmenu-close"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style=""><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></div>';
          html += "</div>";
          html += "</div>";
        }
  
        html +=
          '<video class="aks-video-2" tabindex="-1" disableremoteplayback="" webkit-playsinline="" playsinline="" preload="metadata" src="' +
          video +
          '" muted hidden></video></div>';
        $(aks).append(html);
        const aksVideo = aks.find("#aks-video").get(0);
        if (settings.autoplay === true) {
          aksVideo.autoplay = true;
        }
        const aksVideo2 = aks.find(".aks-video-2").get(0);
        aksVideo.load();
        aksVideo2.load();
        aksVideo.controls = false;
        aksVideo2.controls = false;
        const slider = aks.find(".aks-vp-slider");
        const rail = aks.find(".aks-vp-range-rail");
        const buffer = aks.find(".aks-vp-range-buffer");
        const handler = aks.find(".aks-vp-range-handler");
        function play() {
          aksVideo.play();
          aksVideo2.play();
          aks.find(".aks-vp-control").attr("aks-tooltip", settings.pauseLabel);
          aks.find(".aks-vp-control-play").hide();
          aks.find(".aks-vp-control-pause").show();
        }
        function pause() {
          aksVideo.pause();
          aks.find(".aks-vp-control").attr("aks-tooltip", settings.playLabel);
          aks.find(".aks-vp-control-play").show();
          aks.find(".aks-vp-control-pause").hide();
        }
        function isVideo() {
          if (aksVideo.paused) {
            return false;
          } else {
            return true;
          }
        }
        function loading() {
          $(aksVideo).on("progress", function (e) {
            if (aksVideo.readyState === 4) {
              aks.find(".aks-vp-loading").hide();
            } else {
              aks.find(".aks-vp-loading").show();
            }
            for (var i = 0; i < aksVideo.buffered.length; i++) {
              if (
                aksVideo.buffered.start(aksVideo.buffered.length - 1 - i) <
                aksVideo.currentTime
              ) {
                aks
                  .find(".aks-vp-range-loading")
                  .css(
                    "width",
                    (aksVideo.buffered.end(aksVideo.buffered.length - 1 - i) /
                      aksVideo.duration) *
                      90 +
                      "%"
                  );
                break;
              }
            }
          });
        }
        function voiceOn() {
          aksVideo.muted = true;
          aks.find(".aks-vp-voice-on").hide();
          aks.find(".aks-vp-voice-off").show();
        }
        function voiceOff() {
          aksVideo.muted = false;
          aks.find(".aks-vp-voice-on").show();
          aks.find(".aks-vp-voice-off").hide();
        }
        if (settings.muted === false) {
          voiceOff();
        }
        if (settings.loop === true) {
          aksVideo.loop = true;
        } else {
          $(aksVideo).on("ended", function () {
            pause();
          });
        }
        function Fullscreen(element) {
          if (element.requestFullscreen) element.requestFullscreen();
          else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
          else if (element.webkitRequestFullscreen)
            element.webkitRequestFullscreen();
          else if (element.msRequestFullscreen) element.msRequestFullscreen();
          aks.find(".aks-vp-full-screen-open").hide();
          aks.find(".aks-vp-full-screen-exit").show();
          aks
            .find(".aks-vp-full-screen")
            .attr("aks-tooltip", settings.exitFullScreenLabel);
          aks.find(".aks-video-player").addClass("aks-full-screen");
        }
        function exitFullscreen() {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
          else if (document.msExitFullscreen) document.msExitFullscreen();
          aks.find(".aks-vp-full-screen-open").show();
          aks.find(".aks-vp-full-screen-exit").hide();
          aks.find(".aks-video-player").removeClass("aks-full-screen");
          aks
            .find(".aks-vp-full-screen")
            .attr("aks-tooltip", settings.fullScreenLabel);
        }
        function IsFullScreen() {
          var full_screen_element =
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement ||
            null;
  
          if (full_screen_element === null) return false;
          else return true;
        }
        function getPoster() {
          var w = settings.previewWidth;
          var h = settings.previewHeight;
          var canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(aksVideo2, 0, 0, w, h);
          aks.find(".aks-vp-slider-image-tooltip").html(canvas);
        }
        function moveTo(event) {
          const { left, right } = slider[0].getBoundingClientRect();
          const { clientX } = event;
          if (clientX > left && clientX < right) {
            $(buffer).css("width", clientX - left + 5);
            $(handler).css("left", clientX - left);
          }
        }
        function upRange() {
          $(slider).off("mousemove");
          $(slider).unbind("mousemove");
          $(slider).off("mouseup");
          $(slider).unbind("mouseup");
          $(slider).off("touchend");
          $(slider).unbind("touchend");
          $(slider).off("touchstart");
          $(slider).unbind("touchstart");
        }
        function moveRange(e) {
          $(slider).on("mouseup touchend", function () {
            upRange();
          });
          $(slider).on("mousemove touchstart", function (event) {
            moveTo(event);
            skip();
          });
        }
        function setPosition(position) {
          $(buffer).css("width", position + "%");
          $(handler).css("left", position + "%");
        }
        function updateplayer() {
          var percentage = (aksVideo.currentTime / aksVideo.duration) * 100;
          setPosition(percentage);
          aks.find(".aks-vp-count-elapsed").text(getFormatedTime());
          aks.find(".aks-vp-count-countdown").text(getFormatedFullTime());
          loading();
        }
        function getTimeState() {
          var mouseX = event.pageX - slider.offset().left,
            width = slider.outerWidth();
          var currentSeconeds = Math.round((mouseX / width) * aksVideo.duration);
          var currentMinutes = Math.floor(currentSeconeds / 60);
          if (currentMinutes > 0) {
            currentSeconeds -= currentMinutes * 60;
          }
          if (currentSeconeds.toString().length === 1) {
            currentSeconeds = "0" + currentSeconeds;
          }
          if (currentMinutes.toString().length === 1) {
            currentMinutes = "0" + currentMinutes;
          }
          return currentMinutes + ":" + currentSeconeds;
        }
        function skip() {
          var mouseX = event.pageX - slider.offset().left,
            width = slider.outerWidth();
          aksVideo.currentTime = (mouseX / width) * aksVideo.duration;
          updateplayer();
        }
        function getFormatedFullTime() {
          var totalSeconeds = "00";
          var totalMinutes = "00";
          totalSeconeds = Math.round(aksVideo.duration);
          totalMinutes = Math.floor(totalSeconeds / 60);
          if (totalMinutes > 0) {
            totalSeconeds -= totalMinutes * 60;
          }
          if (totalSeconeds.toString().length === 1) {
            totalSeconeds = "0" + totalSeconeds;
          }
          if (totalMinutes.toString().length === 1) {
            totalMinutes = "0" + totalMinutes;
          }
          var videotime = totalMinutes + ":" + totalSeconeds;
          if (videotime === "NaN:NaN") {
            return "00:00";
          } else {
            return videotime;
          }
        }
        function getFormatedTime() {
          var seconeds = Math.round(aksVideo.currentTime);
          var minutes = Math.floor(seconeds / 60);
          if (minutes > 0) {
            seconeds -= minutes * 60;
          }
          if (seconeds.toString().length === 1) {
            seconeds = "0" + seconeds;
          }
          if (minutes.toString().length === 1) {
            minutes = "0" + minutes;
          }
          var videotime = minutes + ":" + seconeds;
          if (videotime === "NaN:NaN") {
            return "00:00";
          } else {
            return videotime;
          }
        }
        function getPlayerWidth() {
          return aks.find(".aks-video-player").width();
        }
        function getPlayerHeight() {
          return aks.find(".aks-video-player").height();
        }
        function pictureInPicture(videoSrc) {
          var html = "";
          html += '<div class="aks-vp-picture-in-picture draggable">';
          html +=
            '<div class="aks-vp-picture-in-video"><video disableremoteplayback="" webkit-playsinline="" playsinline="" preload="metadata" class="aks-vp-picture-video" muted src="' +
            videoSrc +
            '"></video></div>';
          html += '<div class="aks-vp-picture-in-video-controls">';
          html +=
            '<button class="aks-vp-btn aks-vp-control-picture-in" aks-tooltip="' +
            settings.playLabel +
            '" flow="up"><svg class="aks-vp-control-play" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon></svg><svg class="aks-vp-control-pause" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision"><rect x="6" y="4" width="4" height="16" fill="currentColor"></rect><rect x="14" y="4" width="4" height="16" fill="currentColor"></rect></svg></button>';
          html +=
            '<button class="aks-vp-btn aks-vp-picture-out" aks-tooltip="' +
            settings.closeLabel +
            '" flow="up"><svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><path d="M8.414 7l5.293-5.293A.999.999 0 1012.293.293L7 5.586 1.707.293A.999.999 0 10.293 1.707L5.586 7 .293 12.293a.999.999 0 101.414 1.414L7 8.414l5.293 5.293a.997.997 0 001.414 0 .999.999 0 000-1.414L8.414 7z" fill-rule="evenodd"></svg></button>';
          html += "</div>";
          html += "</div>";
          return html;
        }
        function CopyToClipboard(value) {
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(value).select();
          document.execCommand("copy");
          $temp.remove();
        }
        function parse_timestamp(s) {
          var match = s.match(
            /^(?:([0-9]+):)?([0-5][0-9]):([0-5][0-9](?:[.,][0-9]{0,3})?)/
          );
          if (match == null) {
            throw "Invalid timestamp format: " + s;
          }
          var hours = parseInt(match[1] || "0", 10);
          var minutes = parseInt(match[2], 10);
          var seconds = parseFloat(match[3].replace(",", "."));
          return seconds + 60 * minutes + 60 * 60 * hours;
        }
        function quick_and_dirty_vtt_or_srt_parser(vtt) {
          var lines = vtt
            .trim()
            .replace("\r\n", "\n")
            .split(/[\r\n]/)
            .map(function (line) {
              return line.trim();
            });
          var cues = [];
          var start = null;
          var end = null;
          var payload = null;
          for (var i = 0; i < lines.length; i++) {
            if (lines[i].indexOf("-->") >= 0) {
              var splitted = lines[i].split(/[ \t]+-->[ \t]+/);
              if (splitted.length != 2) {
                throw 'Error when splitting "-->": ' + lines[i];
              }
              start = parse_timestamp(splitted[0]);
              end = parse_timestamp(splitted[1]);
            } else if (lines[i] == "") {
              if (start && end) {
                var cue = new VTTCue(start, end, payload);
                cues.push(cue);
                start = null;
                end = null;
                payload = null;
              }
            } else if (start && end) {
              if (payload == null) {
                payload = lines[i];
              } else {
                payload += "\n" + lines[i];
              }
            }
          }
          if (start && end) {
            var cue = new VTTCue(start, end, payload);
            cues.push(cue);
          }
  
          return cues;
        }
        updateplayer();
        $(handler).on("mousedown touchstart", function (event) {
          moveRange(event);
        });
        $(rail).on("click", function (event) {
          skip();
        });
        $(slider).on("click", function (event) {
          skip();
        });
        aks.find(".aks-vp-count-countdown").text(getFormatedFullTime());
        $(aksVideo).on("timeupdate", function () {
          updateplayer();
        });
        aks.find(".aks-vp-start").click(function () {
          aks.find(".aks-vp-start").hide();
          aks.find(".aks-vp-poster").hide();
          aks.find(".aks-vp-top").show();
          aks.find(".aks-vp-controls").css("display", "flex");
          play();
        });
        aks.find(".aks-vp-top").click(function () {
          if (aksVideo.paused) {
            play();
          } else {
            pause();
          }
          return false;
        });
        aks.find(".aks-vp-control").click(function () {
          if (aksVideo.paused) {
            play();
          } else {
            pause();
          }
          return false;
        });
        aks.find(".aks-vp-voice-btn").click(function () {
          if (aksVideo.muted === false) {
            voiceOn();
          } else {
            voiceOff();
          }
        });
        aks.find(".aks-vp-full-screen").click(function () {
          if (IsFullScreen()) {
            exitFullscreen();
          } else {
            Fullscreen(aks.find(".aks-video-player")[0]);
          }
        });
        aks.find(".aks-vp-container").dblclick(function () {
          if (IsFullScreen()) exitFullscreen();
          else Fullscreen(aks.find(".aks-video-player")[0]);
        });
        aks.find(".aks-vp-slider-container").mousemove(function (event) {
          var left = event.pageX - slider.offset().left;
          var width = slider.outerWidth();
          if (settings.preview === true) {
            aksVideo2.currentTime = (left / width) * aksVideo.duration;
            getPoster();
            aks.find(".aks-vp-slider-image-tooltip").css({ left: left }).show();
            aks
              .find(".aks-vp-slider-image-tooltip")
              .css({ width: settings.previewWidth })
              .show();
            aks
              .find(".aks-vp-slider-image-tooltip")
              .css({ height: settings.previewHeight })
              .show();
          }
  
          var currentSeconeds = Math.round((left / width) * aksVideo.duration);
          var currentMinutes = Math.floor(currentSeconeds / 60);
          if (currentMinutes > 0) {
            currentSeconeds -= currentMinutes * 60;
          }
          if (currentSeconeds.toString().length === 1) {
            currentSeconeds = "0" + currentSeconeds;
          }
          if (currentMinutes.toString().length === 1) {
            currentMinutes = "0" + currentMinutes;
          }
          aks
            .find(".aks-vp-slider-timer-tooltip span")
            .text(currentMinutes + ":" + currentSeconeds);
          aks.find(".aks-vp-slider-timer-tooltip").css({ left: left }).show();
        });
        aks
          .find(".aks-vp-slider-container, .aks-video-player")
          .mouseleave(function (event) {
            aks.find(".aks-vp-slider-timer-tooltip").hide();
            if (settings.preview === true) {
              aks.find(".aks-vp-slider-image-tooltip").hide();
            }
          });
        aks.find(".aks-vp-voice-slider-range").on("input change", function () {
          var range = (localStorage[this.id] = $(this).val());
          aks.find(".aks-vp-voice-slider-buffer").css("width", range * 100 + "%");
          aksVideo.volume = range;
          aks.find(".aks-vp-voice-slider-range").attr("value", range);
          if (range == 0) {
            voiceOn();
          } else {
            voiceOff();
          }
        });
        aks.find(".aks-vp-voice-slider-range").each(function () {
          if (typeof localStorage[this.id] !== "undefined") {
            $(this).val(localStorage[this.id]);
          }
        });
        aks
          .find(".aks-vp-voice-slider-range")
          .keyup(function () {
            var range = (localStorage[this.id] = $(this).val());
            aks
              .find(".aks-vp-voice-slider-buffer")
              .css("width", range * 100 + "%");
            aksVideo.volume = range;
            aks.find(".aks-vp-voice-slider-range").attr("value", range);
            if (range == 0) {
              voiceOn();
            } else {
              voiceOff();
            }
          })
          .keyup();
        if (IsFullScreen()) {
          $(document).on("keydown", this, function (e) {
            var keycode =
              typeof e.keyCode != "undefined" && e.keyCode ? e.keyCode : e.which;
            if (keycode === 27) {
              exitFullscreen();
            }
          });
        }
        if (settings.forward === true) {
          aks.find(".aks-vp-forward").click(function () {
            aksVideo.currentTime += settings.forwardValue;
          });
          $(document).on("keydown", this, function (e) {
            var keycode =
              typeof e.keyCode != "undefined" && e.keyCode ? e.keyCode : e.which;
            if (keycode === 39) {
              aksVideo.currentTime += settings.forwardValue;
            }
          });
        }
        if (settings.rewind === true) {
          aks.find(".aks-vp-rewind").click(function () {
            aksVideo.currentTime -= settings.rewindValue;
          });
          $(document).on("keydown", this, function (e) {
            var keycode =
              typeof e.keyCode != "undefined" && e.keyCode ? e.keyCode : e.which;
            if (keycode === 37) {
              aksVideo.currentTime -= settings.rewindValue;
            }
          });
        }
        aks.find("[data-menu]").click(function () {
          var menu = $(this).attr("data-menu");
          aks.find(menu).addClass("aks-opened");
          aks.find(".aks-vp-settings-menu-items").toggleClass("aks-hide");
          aks.find("[data-playback-rate]").each(function (i, l) {
            if ($(l).hasClass("aks-active")) {
              $(l)[0].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "center"
              });
            }
          });
        });
        aks.find(".aks-vp-settings-menu-back").click(function () {
          $(this).parent().toggleClass("aks-opened");
          aks.find(".aks-vp-settings-menu-items").removeClass("aks-hide");
        });
        aks.find(".aks-vp-settings").click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          aks.find(".aks-vp-settings-menu").toggleClass("aks-opened");
          $(this).toggleClass("aks-active");
        });
        aks.find(".aks-vp-settings-menu").click(function (e) {
          e.stopPropagation();
        });
        $("body").click(function () {
          aks.find(".aks-vp-settings-menu").removeClass("aks-opened");
          aks.find(".aks-vp-settings").removeClass("aks-active");
        });
        aks.click(function () {
          aks.find(".aks-vp-settings-menu").removeClass("aks-opened");
        });
        aks.find("[data-playback-rate]").click(function (e) {
          var rate = $(this).attr("data-playback-rate");
          localStorage.setItem("aks-playback-rate", rate);
          aksVideo.playbackRate = rate;
          $(this).addClass("aks-active");
          $(this).siblings().removeClass("aks-active");
        });
        if (localStorage.getItem("aks-playback-rate")) {
          var getRate = localStorage.getItem("aks-playback-rate");
          aksVideo.playbackRate = getRate;
          aks
            .find('[data-playback-rate="' + getRate + '"]')
            .addClass("aks-active");
        } else {
          aks.find('[data-playback-rate="1"]').addClass("aks-active");
        }
        aks.find("[data-subtitles]").click(function (e) {
          var subtitles = $(this).attr("data-subtitles");
          $(this).addClass("aks-active");
          $(this).siblings().removeClass("aks-active");
          if (subtitles === "close") {
            aks.find(".aks-vp-cue").removeClass("aks-active");
          } else {
            aks.find(".aks-vp-cue").addClass("aks-active");
            var currentSubtitles = settings.captions.filter(function (subtitle) {
              return subtitles.indexOf(subtitle.label) > -1;
            });
            $.get(currentSubtitles[0].file, function (data) {
              $(aksVideo).on("timeupdate", function () {
                var ct = aksVideo.currentTime;
                var activeCues = quick_and_dirty_vtt_or_srt_parser(data).filter(
                  function (cues) {
                    return cues.startTime <= ct && cues.endTime >= ct;
                  }
                );
                if (activeCues.length > 0) {
                  aks
                    .find(".aks-vp-cue-text")
                    .html("<span>" + activeCues[0].text + "</span>");
                } else {
                  aks.find(".aks-vp-cue-text").html("");
                }
              });
            });
          }
        });
        aks.find("[data-sources]").click(function (e) {
          var sources = $(this).attr("data-sources");
          localStorage.setItem("aks-sources", sources);
          $(this).addClass("aks-active");
          $(this).siblings().removeClass("aks-active");
          var currentSources = settings.file.filter(function (source) {
            return sources.indexOf(source.label) > -1;
          });
          var curtime = aksVideo.currentTime;
          $(aksVideo).attr("src", currentSources[0].file);
          aksVideo.load();
          aksVideo.currentTime = curtime;
          $(aksVideo2).attr("src", currentSources[0].file);
          aksVideo2.load();
          aksVideo2.currentTime = curtime;
          play();
        });
        if (localStorage.getItem("aks-sources")) {
          var getSources = localStorage.getItem("aks-sources");
          var currentSources = settings.file.filter(function (source) {
            return getSources.indexOf(source.label) > -1;
          });
          $(aksVideo).attr("src", currentSources[0].file);
          $(aksVideo2).attr("src", currentSources[0].file);
          aks.find('[data-sources="' + getSources + '"]').addClass("aks-active");
        } else {
          aks
            .find('[data-sources="' + settings.file[0].label + '"]')
            .addClass("aks-active");
        }
        var timeout = null;
        aks.find(".aks-video-player").on("mousemove", function () {
          if (timeout !== null) {
            aks.find(".aks-video-player").removeClass("aks-mouse");
            clearTimeout(timeout);
          }
  
          timeout = setTimeout(function () {
            aks.find(".aks-video-player").addClass("aks-mouse");
          }, 4000);
        });
        if (settings.ads.length) {
          $.each(settings.ads, function (i, l) {
            if (l.type === "google") {
              var adsManager;
              var adsLoader;
              var adDisplayContainer;
              var playButton;
              var videoContent = aksVideo;
              function createAdDisplayContainer() {
                adDisplayContainer = new google.ima.AdDisplayContainer(
                  document.getElementById("aks-vp-ad-container"),
                  videoContent
                );
              }
              function requestAds() {
                google.ima.settings.setPlayerType("google/aks-video-player");
                google.ima.settings.setPlayerVersion("1.0.0");
                createAdDisplayContainer();
                adDisplayContainer.initialize();
                videoContent.load();
                adsLoader = new google.ima.AdsLoader(adDisplayContainer);
                adsLoader.getSettings().setAutoPlayAdBreaks(false);
                adsLoader.addEventListener(
                  google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                  onAdsManagerLoaded,
                  false
                );
                adsLoader.addEventListener(
                  google.ima.AdErrorEvent.Type.AD_ERROR,
                  onAdError,
                  false
                );
                var adsRequest = new google.ima.AdsRequest();
                adsRequest.adTagUrl = settings.ads[0].url;
                adsRequest.linearAdSlotWidth = 640;
                adsRequest.linearAdSlotHeight = 400;
                adsRequest.nonLinearAdSlotWidth = 640;
                adsRequest.nonLinearAdSlotHeight = 150;
                adsLoader.requestAds(adsRequest);
              }
              function onAdsManagerLoaded(adsManagerLoadedEvent) {
                var adsRenderingSettings = new google.ima.AdsRenderingSettings();
                adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
                adsManager = adsManagerLoadedEvent.getAdsManager(
                  videoContent,
                  adsRenderingSettings
                );
                adsManager.addEventListener(
                  google.ima.AdErrorEvent.Type.AD_ERROR,
                  onAdError
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
                  onContentPauseRequested
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
                  onContentResumeRequested
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
                  onAdEvent
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.LOADED,
                  onAdEvent
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.STARTED,
                  onAdEvent
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.COMPLETE,
                  onAdEvent
                );
                adsManager.addEventListener(
                  google.ima.AdEvent.Type.AD_BREAK_READY,
                  adBreakReadyHandler
                );
  
                try {
                  adsManager.init(
                    getPlayerWidth(),
                    getPlayerHeight(),
                    google.ima.ViewMode.NORMAL
                  );
                  adsManager.start();
                } catch (adError) {
                  aks.find(".aks-video-player").removeClass("aks-ads-play");
                  play();
                }
              }
              function onAdEvent(adEvent) {
                var ad = adEvent.getAd();
                switch (adEvent.type) {
                  case google.ima.AdEvent.Type.LOADED:
                    if (!ad.isLinear()) {
                      aks.find(".aks-video-player").removeClass("aks-ads-play");
                      play();
                    }
                    break;
                }
              }
              function onAdError(adErrorEvent) {
                console.log(adErrorEvent.getError());
                adsManager.destroy();
              }
              function onContentPauseRequested() {
                pause();
                aks.find(".aks-video-player").addClass("aks-ads-play");
              }
              function onContentResumeRequested() {
                play();
                aks.find(".aks-video-player").removeClass("aks-ads-play");
              }
              function adBreakReadyHandler(adEvent) {
                console.log(adEvent.getAdData());
                adsManager.start();
              }
              function contentEnded() {
                adsLoader.contentComplete();
              }
              $(aksVideo).on("ended", function () {
                contentEnded();
              });
              aks.find(".aks-vp-start").on("click", function () {
                requestAds();
              });
            } else {
              $(aksVideo).on("timeupdate", function () {
                var seconeds = Math.round(aksVideo.currentTime);
                var minutes = Math.floor(seconeds / 60);
                if (minutes > 0) {
                  seconeds -= minutes * 60;
                }
                if (seconeds.toString().length === 1) {
                  seconeds = "0" + seconeds;
                }
                if (minutes.toString().length === 1) {
                  minutes = "0" + minutes;
                }
                var time = minutes + ":" + seconeds;
                var activeCues = settings.ads.filter(function (cues) {
                  return cues.time === time;
                });
                if (activeCues.length > 0) {
                  aks.find(".aks-vp-ad-container").css("opacity", "1");
                  aks.find(".aks-vp-ad-container").css("visibility", "visible");
                  if (activeCues[0].type === "image") {
                    aks.find(".aks-vp-ads-image").css("display", "flex");
                    aks
                      .find(".aks-vp-ads-image")
                      .html(
                        '<div class="aks-vp-ads-box" style="width:' +
                          activeCues[0].width +
                          "px;height:" +
                          activeCues[0].height +
                          'px;"><a target="_blank" href="' +
                          activeCues[0].link +
                          '"><img src="' +
                          activeCues[0].src +
                          '"></a><div class="aks-vp-ads-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><path d="M8.414 7l5.293-5.293A.999.999 0 1012.293.293L7 5.586 1.707.293A.999.999 0 10.293 1.707L5.586 7 .293 12.293a.999.999 0 101.414 1.414L7 8.414l5.293 5.293a.997.997 0 001.414 0 .999.999 0 000-1.414L8.414 7z" fill-rule="evenodd"></svg></div></div>'
                      );
                    aks.find(".aks-vp-ads-close").click(function () {
                      aks.find(".aks-vp-ads-image").html("");
                      aks.find(".aks-vp-ads-image").css("display", "none");
                    });
                  } else if (activeCues[0].type === "video") {
                    pause();
                    aks.find(".aks-video-player").addClass("aks-ads-play");
                    aks.find(".aks-vp-ads-video").show();
                    function skipAd() {
                      return (
                        settings.adsSkipLabel +
                        ' <svg width="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17"><defs><path d="M1.573.183l10 7a1 1 0 010 1.638l-10 7A1 1 0 010 15.001v-14A1 1 0 011.573.184zM15 .002a1 1 0 011 1v14a1 1 0 11-2 0v-14a1 1 0 011-1zM2 2.922v10.16l7.256-5.08L2 2.922z" fill-rule="evenodd"></svg>'
                      );
                    }
                    aks
                      .find(".aks-vp-ads-video")
                      .html(
                        '<div tabindex="-1" class="aks-vp-ads-box"><a target="_blank" href="' +
                          activeCues[0].link +
                          '"><video class="aks-video-ads" autoplay="" src="' +
                          activeCues[0].src +
                          '" ></video></a><div tabindex="-1" class="aks-vp-ads-skip">' +
                          activeCues[0].adstimer +
                          "</div></div>"
                      );
                    aks.find(".aks-video-ads").on("ended", function () {
                      aks.find(".aks-vp-ads-video").html("");
                      aks.find(".aks-vp-ads-video").hide();
                      aks.find(".aks-video-player").removeClass("aks-ads-play");
                      var curtime = aksVideo.currentTime;
                      aksVideo.currentTime = curtime + 0.195;
                      play();
                    });
                    var timer = activeCues[0].adstimer;
                    var adsTimer = setInterval(function () {
                      if (timer <= 0) {
                        clearInterval(adsTimer);
                        aks
                          .find(".aks-vp-ads-video .aks-vp-ads-skip")
                          .html(skipAd());
                        aks
                          .find(".aks-vp-ads-video .aks-vp-ads-skip")
                          .click(function () {
                            aks.find(".aks-vp-ads-video").html("");
                            aks.find(".aks-vp-ads-video").hide();
                            aks
                              .find(".aks-video-player")
                              .removeClass("aks-ads-play");
                            var curtime = aksVideo.currentTime;
                            aksVideo.currentTime = curtime + 0.195;
                            play();
                          });
                      } else {
                        aks
                          .find(".aks-vp-ads-video .aks-vp-ads-skip")
                          .html(timer);
                      }
                      timer -= 1;
                    }, 1000);
                  } else if (activeCues[0].type === "html") {
                    aks.find(".aks-vp-ads-html").css("display", "flex");
                    aks
                      .find(".aks-vp-ads-html")
                      .html(
                        '<div class="aks-vp-ads-box">' +
                          activeCues[0].html +
                          '<div class="aks-vp-ads-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><path d="M8.414 7l5.293-5.293A.999.999 0 1012.293.293L7 5.586 1.707.293A.999.999 0 10.293 1.707L5.586 7 .293 12.293a.999.999 0 101.414 1.414L7 8.414l5.293 5.293a.997.997 0 001.414 0 .999.999 0 000-1.414L8.414 7z" fill-rule="evenodd"></svg></div></div>'
                      );
                    aks.find(".aks-vp-ads-close").click(function () {
                      aks.find(".aks-vp-ads-html").html("");
                      aks.find(".aks-vp-ads-html").css("display", "none");
                    });
                  } else {
                  }
                } else {
                }
              });
            }
          });
        }
        aks.find(".aks-vp-picturein").click(function (ev) {
          $(this).toggleClass("aks-active");
          if ($(this).hasClass("aks-active")) {
            var pictureVideo = $(aksVideo).attr("src");
            $("body").append(pictureInPicture(pictureVideo));
            $(".aks-vp-picture-video").get(0).muted = false;
            $(".aks-vp-picture-video").get(0).volume = 0;
            $(aksVideo).on("timeupdate", function () {
              $(".aks-vp-control-picture-in .aks-vp-control-play").hide();
              $(".aks-vp-control-picture-in .aks-vp-control-pause").show();
              if (aksVideo.paused) {
                $(".aks-vp-picture-video").get(0).pause();
                $(".aks-vp-control-picture-in .aks-vp-control-play").show();
                $(".aks-vp-control-picture-in .aks-vp-control-pause").hide();
                $(".aks-vp-control-picture-in").attr(
                  "aks-tooltip",
                  settings.playLabel
                );
              } else {
                $(".aks-vp-picture-video").get(0).play();
                $(".aks-vp-control-picture-in .aks-vp-control-play").hide();
                $(".aks-vp-control-picture-in .aks-vp-control-pause").show();
                $(".aks-vp-control-picture-in").attr(
                  "aks-tooltip",
                  settings.pauseLabel
                );
              }
              $(".aks-vp-picture-video").get(0).currentTime =
                aksVideo.currentTime;
            });
            $(".aks-vp-control-picture-in").on("click", function () {
              if (aksVideo.paused) {
                $(".aks-vp-picture-video").get(0).play();
                $(this).find(".aks-vp-control-play").hide();
                $(this).find(".aks-vp-control-pause").show();
                play();
              } else {
                $(".aks-vp-picture-video").get(0).pause();
                $(this).find(".aks-vp-control-play").show();
                $(this).find(".aks-vp-control-pause").hide();
                pause();
              }
            });
            $(".aks-vp-picture-out").on("click", function () {
              $(".aks-vp-picture-in-picture").remove();
              $(".aks-vp-picture-in-picture").html("");
              aks.find(".aks-vp-picturein").removeClass("aks-active");
            });
          } else {
            $(".aks-vp-picture-in-picture").remove();
          }
        });
  
        if (settings.contextMenu.length) {
          aks.find(".aks-video-player").on("contextmenu", function (e) {
            aks.find(".aks-vp-contextmenu").show();
            aks.find(".aks-vp-contextmenu-items").css({
              display: "block",
              left: e.pageX,
              top: e.pageY
            });
            return false;
          });
          aks.find("[data-contextmenu]").on("click", function (e) {
            aks.find(".aks-vp-contextmenu-contents").addClass("aks-active");
            var menu = $(this).attr("data-contextmenu");
            $('[data-contextmenu-content="' + menu + '"]').addClass("aks-active");
            $('[data-contextmenu-content="' + menu + '"]')
              .siblings()
              .removeClass("aks-active");
            aks.find(".aks-vp-contextmenu-items").addClass("aks-hide");
            aks.find(".aks-video-player").addClass("aks-ads-play");
          });
          aks.find(".aks-vp-contextmenu-close").on("click", function () {
            $(".aks-vp-contextmenu-contents").removeClass("aks-active");
            aks.find(".aks-vp-contextmenu-items").removeClass("aks-hide");
            aks.find(".aks-video-player").removeClass("aks-ads-play");
          });
          $("html").click(function () {
            aks.find(".aks-vp-contextmenu-items").hide();
          });
          aks.find("[data-copy-url]").click(function () {
            var copy = $(this).attr("data-copy-url");
            CopyToClipboard(copy);
          });
        }
      });
    };
  })(jQuery);