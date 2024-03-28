window.addEventListener('load', () => {

    /* ----- Navbar -----  */
    const openNavbar = document.getElementById("openNavbar");
    const btnError = document.getElementById("closeError")

    const navbar = document.getElementsByClassName("navbar")
    const error = document.getElementsByClassName('error')


    openNavbar.addEventListener('click', () => {
        navbar[0].classList.toggle('navbarHide')
        openNavbar.classList.toggle('fa-chevron')
        openNavbar.classList.toggle('fa-xmark')
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
    const btnCancelar = document.getElementById('btn-cancelar')
    const btnEliminar = document.getElementById('btn-eliminar')
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
