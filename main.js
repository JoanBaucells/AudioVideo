var lasNoticies = [];
// S L I D E R  C O D E

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n ) {
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
        image.addEventListener(
          'click',
          function(e){
            document.querySelectorAll(".new").forEach(element => {
              id = element.id.split("_");
              if(id[1] != e.path[0].id){
                element.style.visibility = "hidden";
                element.style.position = "absolute";
              }else{
                element.style.visibility = "visible";
                element.style.position = "";
              }
            })
          }
        )
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
      
      divU.id = element.id + "_" + element.idClub;
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
          if(!document.querySelector("#video").classList.contains("video")){
            document.querySelector("#video").classList.add("video");
          }
          if(!document.querySelector("#close").classList.contains("close")){
            document.querySelector("#close").classList.add("close");
          }
          index = e.path[1].id.split("_");
          document.querySelector("video").src =  noticies[index[0] -1].video;       
          document.querySelector("video").style.visibility = "visible";  
          document.querySelector("#commutar").style.visibility = "visible";  
          document.querySelector("#parar").style.visibility = "visible";  
          document.querySelector("#barraTimer").style.visibility = "visible";  
          document.querySelector("#timer").style.visibility = "visible";  
          document.querySelector(".divInterior").style.visibility = "visible"; 
        }
      )
      
      divU.appendChild(divD);
      divU.appendChild(image);
      document.querySelector(".slideshow-container").appendChild(divU);
      

      var div = document.createElement("div");
      var imatge = document.createElement("img");
      var p = document.createElement("p");

      div.classList.add("new");
      div.id = element.id + "_" + element.idClub;
      p.textContent = element.titol;
      imatge.src = element.imatge;

      div.addEventListener(
        'click',
        function(e){
          if(!document.querySelector("#video").classList.contains("video")){
            document.querySelector("#video").classList.add("video");
          }
          if(!document.querySelector("#close").classList.contains("close")){
            document.querySelector("#close").classList.add("close");
          }
          index = e.path[1].id.split("_");
          document.querySelector("video").src =  noticies[index[0] -1].video;
          document.querySelector("video").style.visibility = "visible";
          document.querySelector("#commutar").style.visibility = "visible";  
          document.querySelector("#parar").style.visibility = "visible";  
          document.querySelector("#barraTimer").style.visibility = "visible";  
          document.querySelector("#timer").style.visibility = "visible";  
          document.querySelector(".divInterior").style.visibility = "visible"; 
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
      document.querySelector("#video").classList.remove("video");
      document.querySelector("#close").classList.remove("close");
      document.querySelector("video").src =  " ";
      document.querySelector("video").style.visibility = "hidden";
      document.querySelector("#commutar").style.visibility = "hidden";  
      document.querySelector("#parar").style.visibility = "hidden";  
      document.querySelector("#barraTimer").style.visibility = "hidden";  
      document.querySelector("#timer").style.visibility = "hidden"; 
      document.querySelector(".divInterior").style.visibility = "hidden"; 
      

      // if (localStorage.getItem('noticia'))
      //   noticia=JSON.parse(localStorage.getItem('noticia'));
      // localStorage.setItem('noticia', JSON.stringify(noticia));
    }
  )


  var audio=document.querySelector('video');
	
		document.getElementById('commutar').addEventListener('click', function () {
			if (audio.paused || audio.ended) { 
				this.innerHTML = '&#x2590;&#x2590;'; // símbol pausa
				audio.play();
			} else {
				this.innerHTML = '&#x25BA;'; // símbol play
				audio.pause();
			}
		}, false);
		document.getElementById('parar').addEventListener('click', function () {
			audio.currentTime = 0;
			document.getElementById('commutar').innerHTML = '&#x25BA;'; // símbol play
			audio.pause();
		}, false);
		audio.addEventListener('timeupdate', posicionarAudio);
		
		document.getElementById('barraTimer').addEventListener('click', function (event) {
			var durada=audio.duration;
			var dimBarra=this.max;
			var pos=event.offsetX/this.offsetWidth*dimBarra;
	//		this.value=pos;
			var posAudio=Math.ceil(pos*durada/dimBarra);
			audio.currentTime=posAudio;
		});
	
	function posicionarAudio() {
		var durada=audio.duration;
		var posicio=Math.ceil(audio.currentTime);
		document.getElementById('timer').innerHTML = posicio + "seg. / " + Math.round(durada) + "seg." ;
		var barra=document.getElementById('barraTimer');
		if (durada>0) barra.value=Math.ceil(posicio/durada*(barra.max));
	}

}
