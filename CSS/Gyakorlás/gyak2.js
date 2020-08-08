let pelda=document.createElement("h1");
pelda.innerText="Ez egy példa";
document.body.appendChild(pelda);

let pelda2=document.createElement("div");
pelda2.id="pelda2";
document.body.appendChild(pelda2);

let pelda3=document.createElement("ul");
pelda3.id="pelda3";
document.querySelector("#pelda2").appendChild(pelda3);

let pelda4=document.createElement("il");
pelda4.innerText="Ez egy másik példa";
document.querySelector("#pelda3").appendChild(pelda4);

pelda4.style.color="red";
pelda.style.backgroundColor="lightgreen";


