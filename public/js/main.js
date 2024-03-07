window.addEventListener('load', () => {

    /* ----- Navbar -----  */
    const openNavbar = document.getElementById("openNavbar");
    const btnError = document.getElementById("closeError")

    const navbar = document.getElementsByClassName("navbar")
    const error = document.getElementsByClassName('error')


    openNavbar.addEventListener('click', () => {
        navbar[0].classList.toggle('show')
        openNavbar.classList.toggle('fa-bars')
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
    const formDelete = document.getElementById('formDelete')
    formDelete.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('borrado');
    })
})
