// Map

function initMap() {
  const address = { lat: 59.9387192, lng: 30.3208587 }; //Записываем нужный адрес

  const map = new google.maps.Map(document.querySelector(".map-google"), {
    center: address,
    zoom: 17,
  });
  // Содержание информационного окна
  const contentString =
    "<h1>Cat Energe</h1>" +
    "<div>" +
    "<p>г. Санкт-Петербург ул. Большая Конюшенная д. 19/8, офис 101</p>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  // Создаем свой маркер на карте
  const marker = new google.maps.Marker({
    position: address,
    map: map,
    title: "Cat Energy",
    icon: {
      url: "../img/map-pin.png",
      scaledSize: new google.maps.Size(113, 106)
    }
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

// Menu

const nav = document.querySelector(".nav");
const navBtn = nav.querySelector(".nav__button");

// Menu no JS
nav.classList.remove("nav--no-js");

// Menu tooggle
navBtn.onclick = function () {
  nav.classList.toggle("nav--close");
  nav.classList.toggle("nav--open");
}
