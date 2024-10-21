// STICKY NAVBAR

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 300);
});

// DARK MODE

const modeIcons = document.querySelector(".mode_icons");
const sunIcon = document.querySelector(".fa-solid");
let darkMode = localStorage.getItem("darkMode");
const bgImage = document.querySelector("header");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "null");
};

modeIcons.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled" && sunIcon.classList[1] === "fa-moon") {
    enableDarkMode();
    sunIcon.classList.add("fa-sun");
    sunIcon.classList.remove("fa-moon");
    bgImage.style.backgroundImage = "url(images/coffee_dark.png)";
  } else {
    disableDarkMode();
    console.log(darkMode);
    sunIcon.classList.add("fa-moon");
    sunIcon.classList.remove("fa-sun");
    bgImage.style.backgroundImage = "url(images/coffee.png)";
  }
});

//MEDIA QUERY NAV

const menuIcons = document.querySelector(".menu_icons");
const menuList = document.querySelector(".nav_item");
const hamburgerIcon = document.querySelector(".fa-bars");
const container = document.querySelector(".container");

menuIcons.addEventListener("click", () => {
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
    menuList.style.display = "none";
  }
});

//BACK TO TOP BTN

const toTop = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//FORM VALID

const password = document.querySelector(".password");
const cnfrmPassword = document.querySelector(".cnfrm_password");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".submit");

const checkPassword = () => {
  console.log(password.value, cnfrmPassword.value);

  //VYPNUTÍ TLAČÍTKA PRO ODESLÁNÍ
  submitButton.disabled = true;

  //KONTROLA, JESTLI JE VYPLNĚNO
  if (password.value.length > 0) {
    //NESMÍ BÝT PRÁZDNE

    if (cnfrmPassword.value.length === 0) {
      message.textContent = "Zadejte heslo znovu pro jeho potvrzení";
      message.style.color = "orange";
    } else if (password.value.length >= 5) {
      //POROVNÁNÍ HESEL

      if (password.value === cnfrmPassword.value) {
        message.textContent = "Hesla se shodují";
        message.style.color = "green";
        submitButton.disabled = false;
      } else {
        message.textContent = "Hesla se neshodují";
        message.style.color = "red";
      }
    } else {
      message.textContent = "Heslo musí mít více než 5 znaků";
      message.style.color = "orange";
    }
  } else {
    message.textContent = "";
  }
};

//INSTANTNÍ POROVNÁNÍ BEZ NUTNOSTI ODESÍLAT FORMULÁŘ
password.addEventListener("keyup", checkPassword);
cnfrmPassword.addEventListener("keyup", checkPassword);
