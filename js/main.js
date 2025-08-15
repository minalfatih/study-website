let menuBtn = document.querySelector(".navbar-toggler");

menuBtn.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    document.querySelector("header svg").classList.add("active")
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    document.querySelector("header .navbar").classList.add("active");
    setTimeout(() => {
      document.querySelectorAll('header .collapse ul li a').forEach(el => {
        el.addEventListener('click', () => {
          menuBtn.classList.remove('active');
          overlay.remove();
          document.querySelector('.collapse').classList.remove('show');
          document.querySelector("header svg").classList.remove("active");
        })
      });
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("header .navbar").classList.remove("active");
      document.querySelector(".overlay").remove();
      document.querySelector("header svg").classList.remove("active")
    }, 500);
  }
};

let number = 2240;
document.getElementById("counter").textContent = number.toLocaleString();
let countup = setInterval(() => {
    number++;
    document.getElementById("counter").textContent = number.toLocaleString();
    if (number >= 2291) {
      clearInterval(countup);
    }
}, 100);

