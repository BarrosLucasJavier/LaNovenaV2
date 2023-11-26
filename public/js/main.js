window.addEventListener('load', ()=>{

/* ----- Navbar -----  */
const openNavbar = document.getElementById("openNavbar");
const openLogin = document.getElementById("openLogin");
const btnSubmit = document.getElementById("btnSubmit");

const navbar = document.getElementsByClassName("navbar")
const login = document.getElementsByClassName('login')

openNavbar.addEventListener('click', () =>{
    navbar[0].classList.toggle('show')
    openNavbar.classList.toggle('fa-bars')
    openNavbar.classList.toggle('fa-xmark')
})
openLogin.addEventListener('click', ()=>{
    login[0].classList.toggle('loginShow');
    openLogin.classList.toggle('fa-gear')
    openLogin.classList.toggle('fa-xmark')
})

btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    alert("cuidado")
})
/* -----  -----  */

})
