var n=document.querySelector(".nav__button"),s=document.querySelector(".nav");s.classList.remove("nav--no-js");n.addEventListener("click",()=>{s.classList.contains("nav--open")?(s.classList.remove("nav--open"),s.classList.add("nav--close")):(s.classList.remove("nav--close"),s.classList.add("nav--open"))});