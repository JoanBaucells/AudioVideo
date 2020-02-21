
// SLIDER code

// other code
window.onload = function(){

  var videos =[
    {nom:'Bunny',arxiu:'bunny.mp4',imatge:'resources/image/haaland.jpg'},
    {nom:'Trailer',arxiu:'trailer.mp4',imatge:'resources/image/stadium.jpg'}
];
var requestURL = "resources/json/clubs.json";

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);

  request.responseType = 'json';
  request.send();

  request.onload = function(){
      var clubs = request.response;
  }

videos.forEach(element => {
  var li = this.document.createElement("li");
  var img = this.document.createElement("img");
  var h1 = this.document.createElement("h1");
  h1.classList.add("flex-caption");
  h1.textContent = element.nom;
  img.src = element.imatge;
  li.appendChild(img);
  li.appendChild(h1);
  this.document.querySelector(".slides").appendChild(li);
});

}