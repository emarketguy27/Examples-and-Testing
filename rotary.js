$(".select").click(function () {
  switch (true) {
    case $(this).hasClass("one"):
      $(".switch").css("-webkit-transform", "rotate(-50deg)");
      $(".one").addClass("selected");
      $(".two, .three, .off").removeClass("selected");
      $("body").addClass(".mid-theme");
      $("html").attr("theme", "low");
      break;

    case $(this).hasClass("two"):
      $(".switch").css("-webkit-transform", "rotate(0deg)");
      $(".two").addClass("selected");
      $(".one, .three, .off").removeClass("selected");
      $("body").removeClass(".mid-theme");
      $("html").attr("theme", "mid");
      break;

    case $(this).hasClass("three"):
      $(".switch").css("-webkit-transform", "rotate(50deg)");
      $(".three").addClass("selected");
      $(".one, .two, .off").removeClass("selected");
      $("html").attr("theme", "high");
      break;

    case $(this).hasClass("off"):
      $(".switch").css("-webkit-transform", "rotate(180deg)");
      $(".off").addClass("selected");
      $(".one, .two, .three").removeClass("selected");
      $("html").attr("theme", "");
      break;

    default: //Do nothing.
      break;
  }
});
