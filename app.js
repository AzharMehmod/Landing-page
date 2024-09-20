const navBtn = document.querySelector("#menu")
const menuBar = document.querySelector('[role="menubar"]')
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")
const line=document.querySelectorAll("#line")
navBtn.addEventListener("click", ()=>{
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded' , !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    line.classList.toggle("bg-white")
  })
})