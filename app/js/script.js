"use strict";

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });

    $window.on('resize', function () {
      scrollToBottom();
    });

    checkScroll();
    scrollToBottom();
    showLinks();

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

    $('.js-move-scroll').on('click', function (event) {
      event.preventDefault();
      var $this = $(this),
          dest = $this.attr('href');

      $('html, body').stop().animate({
        scrollTop: $(dest).offset().top
      }, 1000);
    });

    $('.menu-toggle').on('click', function () {
      var sidebar = $('.Sidebar');

      if (sidebar.hasClass('active')) {
        sidebar.removeClass('active');
      } else {
        sidebar.addClass('active');
      }
    });
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

  var showLinks = function showLinks() {
    var links = $('#showLinks');

    if (links.length) {
      setTimeout(function () {
        links.removeClass('d-none');
      }, 11000);
    }
  };

  var scrollToBottom = function scrollToBottom() {
    if (typeof scrollBottom === 'undefined' || !scrollBottom) {
      return false;
    }

    if (window.matchMedia("(min-width: 992px)").matches) {
      return false;
    }

    $('html, body').stop().animate({
      scrollTop: $('#content').offset().top
    }, 1000);
  };
})(jQuery);
//# sourceMappingURL=script.js.map
