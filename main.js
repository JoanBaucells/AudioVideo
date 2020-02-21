
// SLIDER code

// other code
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

  request2.onload = function(){
    var noticies = request2.response;

    var ul = document.createElement("ul");
    ul.classList.add("slides");

    noticies.forEach(element => {
      var li = document.createElement("li");
      var h2 = document.createElement("h2");
      var image = document.createElement("img");
      
      image.src = element.imatge;
      h2.textContent = element.titol;
      h2.classList.add("flex-caption");
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



// <div class="new">
// 						<img src="resources/image/haaland.jpg" />
// 						<p>Image1</p>
// 					</div>