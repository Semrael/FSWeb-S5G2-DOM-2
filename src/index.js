import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

//load sayfa yüklendiğinde renk değiştir
const body = document.querySelector("body");
window.addEventListener("load", (e) => {
  body.style.background = "red";
});

//resimlere geldiğinde gri olmasını istiyoruz
const imges = document.querySelector("img");
images.forEach((s) => {
  s.addEventListener("mouseover", (event) => {
    s.style.filter = "grayscale(100%)";
  });
  //resimleri click ettiğimizde grayscale 0 olsun
  //   s.addEventListener("mouseleave", (event) => {
  //     s.style.filter = "unset";
  //   });
});

//focus input için tıkladığımızda borderı kırmızı olsun istiyoruz

let input = document.getElementById("input");
input.addEventListener("focus", (e) => {
  e.target.style.border = "1px solid red";
});

// h1 için
// document
//   .querySelector(".logo-heading")
//   .addEventListener("mouseover", mouseOver);
// function mouseOver() {
//   document.querySelectorAll("logo-heading").style.color = "yellow";
// }

//nav ler için  mouseover

// const navLink = document.querySelectorAll(".nav-Link");
// navLink.addEventListener("mouseover", (event) => {
//   event.style.color = "green";
// });

//drag and drop 3 tane fonksiyon yazmamız gerekiyor
