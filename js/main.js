// Slider 
var currentItem = 3;
showSlides(currentItem);
showSlides();

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	if(n > slides.length) {
		currentItem = 1;
	}
	if(n < 1) {
		currentItem = slides.length;
	}
	currentItem++;
	if(currentItem > slides.length) {
		currentItem = 1
	}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
	slides[currentItem-1].style.display = 'block';
	setTimeout(showSlides, 5000);
}