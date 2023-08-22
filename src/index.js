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

//resimlerin üzerine mouse ile geldiğinde gri olmasını istiyoruz
//bunu  .filter= grayscale(x%)  ile yapıyoruz.
const imges = document.querySelectorAll("img");
imges.forEach((s) => {
  s.addEventListener("mouseover", (event) => {
    s.style.filter = "grayscale(100%)";
  });
  //click yaptığımızda normal rengine dönsün
  s.addEventListener("mouseleave", (event) => {
    s.style.filter = null; //null yerine "unset" ' de yazabiliriz
  });
});

//focus input için tıkladığımızda borderı kırmızı olsun istiyoruz

let input = document.getElementById("input");
input.addEventListener("focus", (e) => {
  e.target.style.border = "5px solid blue";
  // sadece e.style verseydik bize event objesini(bir sürü özelliği var)veriyor verirdi e. target(sadece kendisini veriyor) ile bize sadece focus olan elementi alıyoruz
});
input.addEventListener("blur", (e) => {
  e.target.style.border = null;
});

//window a blur ekle
//blur başka sayfalara geçiş yapıldığında kullanılır online eğitimde başka bir sayfaya geçiş yapıldığında kullanılabilir

window.addEventListener("blur", (e) => {
  document.querySelector("body").style.backgroundColor = "red";
});

window.addEventListener("focus", () => {
  document.querySelector("body").style.backgroundColor = "white";
});
//resize kullanıcaz resize ın genişliğini input içerisine yazdırıcaz burda

window.addEventListener("resize", () => {
  input.value = `${window.innerWidth} x ${window.innerHeight}`;
  if (window.innerWidth < 650) {
    document.querySelector("body").style.backgroundColor = "red";
  } else {
    document.querySelector("body").style.backgroundColor = null;
  }
});

input.addEventListener("keypress", (s) => {
  // console.log(s.key);
  // console.log(s.code);
  if (s.key == 1) {
    input.style.border = "10px solid yellow";
  }
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
