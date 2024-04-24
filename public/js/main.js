window.addEventListener('load', () => {

    /* ----- Navbar -----  */
    const openNavbar = document.getElementById("openNavbar");
    const btnError = document.getElementById("closeError")
    const menuDescription = document.getElementById('menuDescription')

    const navbar = document.getElementsByClassName("navbarContainer")
    const error = document.getElementsByClassName('error')


    openNavbar.addEventListener('click', () => {
        navbar[0].classList.toggle('navbarShow')
        openNavbar.classList.toggle('fa-bars')
        openNavbar.classList.toggle('fa-xmark')
        if (openNavbar.classList.contains('fa-xmark')) {
            menuDescription.innerHTML='Cerrar'
        }else{
            menuDescription.innerHTML='Menu'
        }

    })

    /* ----- ERROR -----  */
    if (btnError) {
        btnError.addEventListener('click', () => {
            error[0].classList.toggle('errorHide')
        })
    }

    /* ----- Img Preview -----  */
    const img = document.getElementById('imageUrl')
    const imgContainer = document.getElementsByClassName('containerImg')

    if (img) {
        img.addEventListener('change', () => {
            const archivoImg = img.files[0];
            if (archivoImg) {
                imgContainer[0].style.backgroundImage = `url('${URL.createObjectURL(archivoImg)}')`
            }
        })
    }

    /* Delete product */
    const formDelete = document.querySelectorAll('#formDelete')
    const modal = document.getElementsByClassName('containerModal')
    const btnCancelar = document.getElementById('btn-cancel')
    const btnEliminar = document.getElementById('btn-delete')
    let productoEliminar = null

    formDelete.forEach((buton) =>{
        buton.addEventListener('submit',(e)=>{
            e.preventDefault();
            productoEliminar = buton;
            modal[0].classList.add('modalOpen');
        })
    })

    btnCancelar.addEventListener('click', ()=>{
        modal[0].classList.remove('modalOpen');
    })
    btnEliminar.addEventListener('click',()=>{
        productoEliminar.submit();
    })
})

/* Slider About us */
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const slides = document.querySelectorAll('.usersImages img');
let currentSlide = 0;

const showSlide = () =>{
    slides.forEach((slide,index) =>{
        slide.style.display = index === currentSlide ? 'block' : 'none'
    });
}

btnPrev.addEventListener('click',()=>{
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
})
btnNext.addEventListener('click',()=>{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
})
showSlide()