const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch")

const localStorageKey = 'mode';

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
