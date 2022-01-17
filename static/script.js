var btn = document.querySelector("#img2");
var place = document.querySelector("#inputplace");
var body = document.querySelector("body");


btn.addEventListener("click", callme);
body.addEventListener("keypress", keypressed);

function keypressed(e){
    if(e.keyCode === 13 ){
        console.log('keypressed')
        callme();
    }
}


function callme(){
    var myplace = place.value; 
    getDetails(myplace);
   
}


 function getDetails(placeName){   

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//converting it into json file
    .then(res => console.log(res))

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(res => document.getElementById('name').innerHTML = res.name)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(res => document.getElementById('lat').innerHTML = res.weather)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(res => document.getElementById('lon').innerHTML = res.weather[0].description)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(res => document.getElementById('country').innerHTML = res.sys.country)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(res => document.getElementById('temp').innerHTML = parseInt(res.main.temp-273.15)+" °C")//[ParseInt - removes decimal no.]

 }


//  function invalidity(){
//      if(placeName == "undefined" ){
//          console.log("undef");
//         //  place.value ="Please Enter valid City name";
//      }
//  }

 

 // function getplace(){
//     console.log("pressed");
//     console.log(place.value);

  

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=736412f27570e2880986e590ae7278fc`)
//     .then(res => res.json())//converting it into json file
//     .then(res => console.log(res))

// }



//API link -
//http://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=736412f27570e2880986e590ae7278fc
