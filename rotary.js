$(".select").click(function () {
  switch (true) {
    case $(this).hasClass("one"):
      $(".switch").css("-webkit-transform", "rotate(-50deg)");
      $(".one").addClass("selected");
      $(".two, .three").removeClass("selected");
      $("body").addClass(".mid-theme");
      $("html").attr("theme", "low");
      break;

    case $(this).hasClass("two"):
      $(".switch").css("-webkit-transform", "rotate(0deg)");
      $(".two").addClass("selected");
      $(".one, .three").removeClass("selected");
      $("body").removeClass(".mid-theme");
      $("html").attr("theme", "mid");
      break;

    case $(this).hasClass("three"):
      $(".switch").css("-webkit-transform", "rotate(50deg)");
      $(".three").addClass("selected");
      $(".one, .two").removeClass("selected");
      $("html").attr("theme", "high");
      break;

    default: //Do nothing.
      break;
  }
});
