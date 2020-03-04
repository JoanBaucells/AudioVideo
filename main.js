// S L I D E R  C O D E

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// O T H E R  C O D E

window.onload = function(){
  
  var URLClubs = "resources/json/clubs.json";
  var URLNoticies = "resources/json/noticies.json";

  var request = new XMLHttpRequest();
  request.open('GET', URLClubs);

  request.responseType = 'json';
  request.send();

  request.onload = function(){
      var clubs = request.response;

      clubs.forEach(element => {
        var image = document.createElement("img");
        image.src = element.escut;
        document.querySelector('.teams').appendChild(image);
      });
  }

  var request2 = new XMLHttpRequest();
  request2.open('GET', URLNoticies);

  request2.responseType = 'json';
  request2.send();

  let noticies;
  request2.onload = function(){
    noticies = request2.response;

    var ul = document.createElement("ul");
    ul.classList.add("slides");

    noticies.forEach(element => {
      var li = document.createElement("li");
      var h2 = document.createElement("h2");
      var image = document.createElement("img");
      
      image.src = element.imatge;
      h2.textContent = element.titol;
      h2.classList.add("flex-caption");
      li.addEventListener(
        'click',
        function(){

        }
      )

      li.appendChild(image);
      li.appendChild(h2);
      ul.appendChild(li);

      var div = document.createElement("div");
      var imatge = document.createElement("img");
      var p = document.createElement("p");

      div.classList.add("new");
      p.textContent = element.titol;
      imatge.src = element.imatge;

      div.appendChild(imatge);
      div.appendChild(p);

      document.querySelector(".news").appendChild(div);
    })
    document.querySelector(".flexslider").appendChild(ul);
  }

}
