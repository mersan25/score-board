let homeEl=document.getElementById("home-el")
let home = 18
let guestEl=document.getElementById("guest-el")
let guest = 16

function add1(){
  home += 1
  homeEl.innerText =home
}

function add2(){
  home += 2
  homeEl.innerText =home
}

function add3(){
  home += 3
  homeEl.innerText =home
}
function add4(){
  guest += 1
  guestEl.innerText =guest
}

function add5(){
  guest += 2
  guestEl.innerText =guest 
}

function add6(){
 guest += 3
  guestEl.innerText = guest
}
function reset(){
 guest = 0
 home =0
 guestEl.innerText = guest
 homeEl.innerText = home
}