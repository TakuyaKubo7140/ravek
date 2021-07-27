$(function () {
  $("#js-buttonHamburger").click(function () {
    $("body").toggleClass("is-drawerActive");

    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", true);
      $(".button__text").css("display", "none");
      $(".drawer").addClass("active");
    } else {
      $(this).attr("aria-expanded", false);
      $(".button__text").css("display", "block");
      $(".drawer").removeClass("active");
    }
  });
});

$(function () {
  if (window.innerWidth >= 768) {
    $('a[href^="#"]').click(function () {
      let speed = 500;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("html,body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  }
});
