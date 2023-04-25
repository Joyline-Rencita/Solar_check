let slideIndex = 1;
let slides = document.getElementsByClassName("fact");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  a = slideIndex + n;
  if(a >slides.length-2){
    document.getElementById('next').style.visibility = "hidden";
    document.getElementById('previous').style.visibility = "visible";
  }
  else {
    document.getElementById('next').style.visibility = "visible";
    document.getElementById('previous').style.visibility = "visible";
    showSlides(slideIndex += n);
  }
}

function minusSlides(n) {
  a = slideIndex - n;
  if(a < 1){
    document.getElementById('previous').style.visibility = "hidden";
    document.getElementById('next').style.visibility = "visible";
  }
  else {
    document.getElementById('previous').style.visibility = "visible";
    document.getElementById('next').style.visibility = "visible";
    showSlides(slideIndex -= n);
  }
}

function showSlides(n) {
  let i;
  let cur, next, prev;
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  cur = slideIndex;
  prev = cur - 1;
  next = cur + 1;
  slides[prev].style.display = "block"; 
  slides[cur].style.display = "block";  
  slides[next].style.display = "block"; 
}

function display() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  text='';
  txtName = document.getElementById('name').value;
  text = document.getElementById('reviewData').value;
  divElement = document.createElement("div");
  divElement.innerHTML = "<p>"+txtName+"<p><p>"+`${day}-${month}-${year}`+"</p><br></p>"+text+"</p>";
  divElement.className = "rev";
  document.getElementById('revDiv').appendChild(divElement);
  document.getElementById('name').value = '';
  document.getElementById('reviewData').value = '';
}
