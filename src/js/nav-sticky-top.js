$(document).ready(function () {
  /* hamburger icon switch */
  $(".splash-site-header .navbar-toggler").click(function () {
    var isCollapse = $("#navbarContent").css("display") === "block";
    $(".navbar-toggler-icon").removeClass(isCollapse ? "expanded-svg" : "collapse-svg");
    $(".navbar-toggler-icon").addClass(isCollapse ? "collapse-svg" : "expanded-svg");
  });

  /* home redirection on logo click */
  $(".splash-site-header .nav-logo").click(function() {
    window.open("/index.html", "_self");
  });
});
