window.addEventListener('load', ()=>{

/* ----- Navbar -----  */
const openNavbar = document.getElementById("openNavbar");
const openLogin = document.getElementById("openLogin");
const btnSubmit = document.getElementById("btnSubmit");
const btnError = document.getElementById("closeError")

const navbar = document.getElementsByClassName("navbar")
const login = document.getElementsByClassName('login')
const error = document.getElementsByClassName('error')

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
})
/* ----- ERROR -----  */
btnError.addEventListener('click', () =>{
    error[0].classList.toggle('errorHide')
})
})
