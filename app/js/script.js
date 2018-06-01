"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });

    checkScroll();

    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();

      $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $('.Form__check__input--custom').on('change', function () {
      var allRadios = $('input[name="type"]'),
          allIcons = allRadios.next().find('i[class^="icon-"]');

      removeClassIconsRadios(allIcons);

      var selectRadio = $('input[name="type"]:checked'),
          icon = selectRadio.next().find('i[class^="icon-"]'),
          iconClass = icon.attr('class');

      icon.removeClass(iconClass).addClass(iconClass + '-select').data('select', true);
    });

    $('#picture').on('change', fileValidation);

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  var checkScroll = function checkScroll() {
    var arrow = $('.ArrowTop');

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };

  var removeClassIconsRadios = function removeClassIconsRadios(icons) {
    icons.each(function (index, el) {
      var icon = $(this),
          iconClass = icon.attr('class');

      if (icon.data('select')) {
        icon.data('select', false);

        icon.removeClass(iconClass).addClass(iconClass.slice(0, -7));
      }
    });
  };

  var fileValidation = function fileValidation() {
    var fileInput = document.getElementById('picture'),
        filePath = fileInput.value,
        allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
      document.getElementById('imagePreview').innerHTML = '';

      alert('Cargue el archivo con extensiones .jpeg/.jpg/.png/.gif.');
      fileInput.value = '';
      return false;
    } else {
      //Image preview
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '" class="img-fluid" />';
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  };
})(jQuery);
//# sourceMappingURL=script.js.map
