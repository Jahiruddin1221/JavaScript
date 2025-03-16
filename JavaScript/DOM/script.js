var a = document.querySelector("h1");

a.innerHTML = "Jahir";

a.style.color = "red";
a.style.backgroundColor = "Black";

a.addEventListener("click", function() {
    a.innerHTML = "Amar name Jahir"
    a.style.color = "yellow"
    a.style.backgroundColor = "red"
})



var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");


var flag = 0;

btn.addEventListener("click", function() {
    if(flag == 0) {
      bulb.style.backgroundColor = "yellow";
      console.log("Light On");
      flag = 1;
    } else {
      bulb.style.backgroundColor = "transparent";
      console.log("Light Off");
      flag = 0;

    }
})

