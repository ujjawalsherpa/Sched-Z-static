const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");
const logo = document.getElementById('logo');

const localStorageKey = 'mode';

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})


modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
        localStorage.setItem(localStorageKey, 'dark');
    }else{
        modeText.innerText = "Dark mode";
        localStorage.setItem(localStorageKey, 'light');
    }
    setLogoFilter();
});

// Set initial mode based on local storage
const savedMode = localStorage.getItem(localStorageKey);
if (savedMode === 'dark') {
    body.classList.add('dark');
    modeText.innerText = "Light mode";
} else {
    modeText.innerText = "Dark mode";
}

// Code for inverting Logo
function setLogoFilter() {
    if (body.classList.contains('dark')) {
        logo.style.filter = 'none';
        localStorage.setItem(localStorageKey, 'dark');
    } else {
        logo.style.filter = 'invert(100%)';
        localStorage.setItem(localStorageKey, 'light');
    }
}

// Call the setLogoFilter function on page load
setLogoFilter();

// Close the sidebar on mobile devices when clicked outside of the sidebar
document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && window.innerWidth <= 768) {
    sidebar.classList.add('close');
  }
});