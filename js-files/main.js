//friends side bar
let body = document.getElementById("home-body");
let eleFriendsSideBar = document.createElement('aside');
body.appendChild(eleFriendsSideBar);
eleFriendsSideBar.setAttribute("class", "friends-sidebar");
let friendsSideBar = document.querySelector('.friends-sidebar');
friendsSideBar.style.cssText = "position: fixed;height: 100vh;top: 0;background: #03223f;transition: .3s ease-out;padding: 10px;z-index: 500;";

$('#move-aside-friends').click(function() {
  $('.friends-sidebar').removeClass('hidd-friends');
  $('.friends-sidebar').toggleClass("show-friends");
  $('#move-aside-friends').toggleClass('active');
});

let btnClothFriends = document.createElement('span');
btnClothFriends.innerHTML = "&times;";
friendsSideBar.appendChild(btnClothFriends);
btnClothFriends.setAttribute('class','cloth');
let btnCloth = document.querySelector('.cloth');
btnCloth.style.cssText = "color: white;display: block;background: linear-gradient(-320deg, rgb(239 206 88), #f76c64);font-size: 34px;width: 50px;height:50px;display: grid;place-items: center;position: absolute; right: 0;top: 0;cursor: pointer;";

$('.cloth').click(function() {
  $('.friends-sidebar').removeClass("show-friends");
  $('.friends-sidebar').toggleClass('hidd-friends');
  $('#move-aside-friends').removeClass('active');
});
//friends side bar
// btn-setting-home
$('#btn-setting-home').click(function() {
  $('#nav').toggleClass('scale-radius');
  $('.setting').toggleClass('land-down');
  $('#btn-setting-home').toggleClass('active');
});
// btn-setting-home
// scroll left and right
let currentScrollPosition = 0;
let scrollAmount = 320;
const sCont = document.querySelector('.storys-container');
const hScroll =  document.querySelector('.horizontal-scroll');
const btnScrollLeft = document.querySelector('#btn-scroll-left');
const btnScrollRight = document.querySelector('#btn-scroll-right');
btnScrollLeft.style.opacity = '0';
let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
function scrollHorizontally(val) {
  currentScrollPosition += (val * scrollAmount);
  if(currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = '0';
  }else {
    btnScrollLeft.style.opacity = '1';
  }
  if(currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = '0';
  }else {
    btnScrollRight.style.opacity = '1';
  }
  sCont.style.left = currentScrollPosition + "px";
}
// scroll left and right
// show most-popular img in popup
document.querySelectorAll('.account-img img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-img-most-popular').style.left = "0";
    document.querySelector('.popup-img-most-popular img').src = image.getAttribute('src');
  }
});
document.querySelector('.popup-img-most-popular span').onclick = () => {
  document.querySelector('.popup-img-most-popular').style.left = "-100%";
}
// show most-popular img in popup