// Responsive navbar

const openNav = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.fa-bars');
const navBar = document.getElementById("myNav");

openNav.addEventListener('click', function(){
	navLinks.classList.toggle('showNav');
	if(navLinks.classList.contains('showNav')) {
		bars.classList.replace('fa-bars', 'fa-remove');
		navBar.style.background = 'black';
	} else {
		bars.classList.replace('fa-remove', 'fa-bars');
		navBar.style.background = 'rgba(0, 0, 0, 0)';
	}
});


// Navbar Scrolling Animation

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myNav").style.top = "-100px";
  } else {
    document.getElementById("myNav").style.top = "0";
    document.getElementById("myNav").style.background = 'rgba(0, 0, 0, 0)';
    document.getElementById("myNav").style.boxShadow = null;
    var link = document.querySelectorAll('.link-item');
    var brand = document.getElementById('brand');
    link.forEach(function(li, index){
	  li.style.color = 'white';
	});
	brand.style.color = 'white';
	openNav.style.color = 'white';
  }

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  	var topNav = document.getElementById("myNav");
  	var link = document.querySelectorAll('.link-item');
  	var brand = document.getElementById('brand');

	link.forEach(function(li, index){
	  li.style.color = 'black';
	});
  	topNav.style.top = "0";
  	topNav.style.background = 'white';
  	topNav.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
  	brand.style.color = 'black';
  	openNav.style.color = 'black';
  } else {
  	topNav.style.background = 'rgba(0, 0, 0, 0)';
  }
}

var link = document.querySelectorAll('.link-item');
console.log(link)