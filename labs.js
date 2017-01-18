// JavaScript Document
$(document).ready(function() {
      
      $(window).scroll(function () {
          console.log($(window).scrollTop())
        if ($(window).scrollTop() > 350) {
          $('#NavBar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 351) {
          $('#NavBar').removeClass('navbar-fixed');
        }
      });
    });

