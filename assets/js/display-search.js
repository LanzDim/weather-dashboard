var txtAlert = document.querySelector('#innercontaineer');

var savedList = [];
var savedListEl = document.querySelector("#savedCon")
var x = 40.7128;
var y = -74.0060;
txtAlert.style.display = "none";

function init(){
    var storedMaps = JSON.parse(localStorage.getItem('Savedlocation'))
    console.log(storedMaps)
    if( storedMaps !==null){
savedList = storedMaps;
    }
    renderSavedLoc()
    console.log(savedList);
}

  savedListEl.addEventListener('click',function(e){
    var btn = e.target.innerHTML
    console.log(btn)
    getLogLat(btn)
  })
  var getLogLat = function(location){
    var cordapi = "http://api.openweathermap.org/geo/1.0/direct?q="+ location +"&lon&limit=1&appid=9caf1333480d692c12783172b60d65b1"
    fetch(cordapi) .then(function (response) {
      if (response.ok) {
        console.log(response);
        console.log('hi'
        );
        response.json().then(function (data) {
          console.log(data);
          a = data
          b = data
         console.log(a[0].lat)
         console.log(b[0].lon)
         x = a[0].lat
         y = b[0].lon
         console.log(typeof x);
        
         
         initMap()
        });
      } else {
        // alert('Error: ' + response.statusText);
        var time = setInterval(function(){
          timercount --;
        console.log('word is here');
      if (timercount == 0) {
        txtAlert.style.display = "none";
        clearInterval(time)
        
      }
      },900)
      }
    })
    .catch(function (error) {
      var time = setInterval(function(){
        timercount --;
    if (timercount == 0) {
      txtAlert.style.display = "none";
      clearInterval(time)
      
    }
    },900)
    });
  }
  

function renderSavedLoc(){
     for (var i = 0; i < savedList.length; i++){
        var locationName = savedList[i];
        console.log(locationName)
        var div = document.createElement('button');
       div.innerHTML = savedList[i];
        savedListEl.appendChild(div)
    }

    
}
init()