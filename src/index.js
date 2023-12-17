import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

//Sayfa yüklendiğinde body nin arka planını kırmızı yap
// const body = document.querySelector("body");
// window.addEventListener("load", (e) => {
//   body.style.background = "red";
// });

//image larının üstğne geldiğimde gri olucak bunu filter la yaptık
const imgS = document.querySelectorAll("img");
imgS.forEach((s) => {
  s.addEventListener("mouseover", (e) => {
    s.style.filter = "grayscale(100%)";
  });
  s.addEventListener("mouseleave", (e) => {
    // s.style.filter = "grayscale(0)";burda yine filter yaptık değeri 0 olan aşağıdaki daha sağlıklı
    s.style.filter = "unset";
  });
});

//focus ve blur bir input ekledik buna focus olunduğunda border kırmızı olsun

let input = document.getElementById("input-1");
input.addEventListener("focus", (e) => {
  e.target.style.border = "11px solid red";
});
input.addEventListener("blur", (e) => {
  e.target.style.border = null;
});

// bu işlem sayfadan focusumuzu aldığımız zaman o sayfanın haberi oluyor
//online eğitimlerde sayfadan ayrılma işlemi olmaması için kullanılır
window.addEventListener("blur", (e) => {
  document.querySelector("body").style.backgroundColor = "grey";
});
window.addEventListener("focus", (e) => {
  document.querySelector("body").style.backgroundColor = "white";
});

// resize kullan window'un genişliğini input alanının içine yazdır innerWidth ve innerHeigth ile yapıyoruz

window.addEventListener("resize", () => {
  // input.value = innerWidth;
  input.value = `${window.innerWidth}X${window.innerHeight}`;
});

//genişlik 600 ün altına indiğinde

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    document.querySelector("body").style.backgroundColor = "red";
  } else {
    document.querySelector("body").style.backgroundColor = null;
  }
});

//input alanında 1 e tuşladığımızda body green olsun

input.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.code);
  if (e.key == 1) {
    input.style.border = "10px grey solid ";
  }
});

//drag % drop
// const img1 = document.getElementById("img1");
// img1.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("Text", e.target.src);
// });

// const img2 = document.getElementById("img2");
// img2.addEventListener("drop", (e) => {
//   var data = e.dataTransfer.getData("text");
//   e.target.src = data;
//   e.preventDefault();
// });

// img2.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

const img1 = document.getElementById("img1");
img1.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("Text", e.target.id);
});

const p = document.getElementById("p1");
p.addEventListener("drop", (e) => {
  var data = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(data));
  e.preventDefault();
});

p.addEventListener("dragover", (e) => {
  e.preventDefault();
});
