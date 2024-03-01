let pic = document.querySelector("img");

let btn = document.querySelector("#btn");
let res = document.querySelector("h5");


btn.addEventListener("click",function(){
  res.style.left ="50%"
  res.style.transform = "translate(-50%,-50%) scale(1)"
  
  setTimeout(function(){
   res.style.opacity = "0"
   pic.style.top = "30%"
   pic.style.left = "50%"
   pic.style.transform =  "translate(-50%,-50%) scale(1)"
  },3000)
})




