// S L I D E R  C O D E

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, ) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}
  
function openVideo(){
  document.querySelector("video").classList.add("video");
  document.querySelector("#close").classList.add("close");   
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
        image.id = element.id;
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

    noticies.forEach((element, i) => {
      var divU = document.createElement("div");
      var divD = document.createElement("div");
      var image = document.createElement("img");
      
      divU.id = element.id;
      divU.idNotici = element.idClub;
      image.src = element.imatge;
      image.style.width = "100%";
      if (i == 0){
        divU.style.display = "block";
      }
      divD.textContent = element.titol;
      divD.classList.add("text");
      divU.classList.add("mySlides");
      divU.classList.add("fade");
      divU.addEventListener(
        'click',
        function(e){
          document.querySelector("video").classList.add("video");
          document.querySelector("#close").classList.add("close");
          document.querySelector("video").src =  noticies[e.path[1].id -1].video;         
        }
      )
      
      divU.appendChild(divD);
      divU.appendChild(image);
      document.querySelector(".slideshow-container").appendChild(divU);
      

      var div = document.createElement("div");
      var imatge = document.createElement("img");
      var p = document.createElement("p");

      div.classList.add("new");
      div.id = element.id;
      p.textContent = element.titol;
      imatge.src = element.imatge;

      div.addEventListener(
        'click',
        function(e){
          document.querySelector("video").classList.add("video");
          document.querySelector("#close").classList.add("close");
          document.querySelector(".video").src =  noticies[e.path[1].id -1].video;
        }
      )

      div.appendChild(imatge);
      div.appendChild(p);

      document.querySelector(".news").appendChild(div);
    })
  }

  this.document.querySelector("#close").addEventListener(
    'click',
    function(e){
      document.querySelector("video").classList.remove("video");
      document.querySelector("#close").classList.remove("close");
      document.querySelector("video").src =  " ";
    }
  )

}

