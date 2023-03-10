'use strict';

/**
 * test
 */

function changeImg(img, hoverImgSrc) {
  // 创建一个新的Image对象，用于预加载hover图片
  var hoverImg = new Image();
  hoverImg.src = hoverImgSrc;
  
  // 渐变效果
  var fadeOut = setInterval(function() {
    if (img.style.opacity > 0) {
      img.style.opacity -= 0.1;
    } else {
      clearInterval(fadeOut);
      img.src = hoverImgSrc;
      var fadeIn = setInterval(function() {
        if (img.style.opacity < 1) {
          img.style.opacity = parseFloat(img.style.opacity) + 0.1;
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    }
  }, 50);
}


/**
var socialIcons = document.querySelectorAll('.social-icon');

for (var i = 0; i < socialIcons.length; i++) {
  socialIcons[i].addEventListener('mouseover', function() {
    var iconId = this.getAttribute('id');
    var secondImagePath = './assets/images/' + iconId + '-hover.png';
    setTimeout(function() {
      this.style.transition = 'opacity 0.3s ease-in-out';
      this.style.opacity = '0.5';
    }.bind(this), 100);
    this.setAttribute('src', secondImagePath);
  });

  socialIcons[i].addEventListener('mouseout', function() {
    var iconId = this.getAttribute('id');
    var firstImagePath = './assets/images/' + iconId + '.png';
    setTimeout(function() {
      this.style.transition = 'opacity 0.3s ease-in-out';
      this.style.opacity = '1';
    }.bind(this), 100);
    this.setAttribute('src', firstImagePath);
  });
}
*/


/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});