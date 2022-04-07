/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 


// estos son objetos simulando backend
const validCredentials ={
    username: 'marcelazciro@gmail.com',
    password: 'bit.2022'
 };
 
 
 
 
 // paso 1 crear variables de datos
 
 
 const username = document.getElementById('inUsername')
 const password = document.getElementById('inPassword')
 const submit = document.getElementById('submitBtn')
 const private = document.getElementById('private')
 const modal = document.getElementById('modal')
 const success = document.getElementById('success')
 const error = document.getElementById('error')
 const close = document.getElementById('closeBtn')
 const eye = document.getElementById('eye')
 
 const myCredentials = {
     username:null,
     password:null
 };
 
 
 // paso 3 crear las funciones
                         // event es un objeto
                                        // paso 4 capturar el evento
 const handleUsername = (event)=>{
      console.log('inUsername',event.target.value);
 
 myCredentials.username = event.target.value;  
     console.log(myCredentials)
 };  
 
 
 const handlePassword =(event)=>{
     console.log('password')
 myCredentials.password = event.target.value;
     console.log(myCredentials)
 };
 const handleEye =(event)=>{
     if(password.type == "password"){
         password.type = "text"
         eye.style.opacity=0.8;
     }else{
         password.type="password"
         eye.style.opacity =0.2;
     }
 
 }
 const handleSubmit =(e)=>{
     e.preventDefault()
     // al enviar validar si las credenciales son correctas
 const username = myCredentials.username === validCredentials.username
   console.log(username)
 const password = myCredentials.password === validCredentials.password
   console.log(password)
 
 if (username && password){
      console.log('permitir acceso');
    
 
 private.classList.remove('disabled');
  console.log(private);
   //console.log(modal)
 
 success.classList.remove('d-none');
 setTimeout(() => {
 success.classList.add('d-none');
 close.click();
  }, 3000);
 
 } else{
     console.log('denegar acceso');
 error.classList.remove('d-none');
     // luego, ocultar mensaje de error
 setTimeout(() => {
 error.classList.add('d-none');
     }, 3000);
   }
 
 
 }
 
 // paso 2 crear eventos
 
 document.addEventListener('DOMContentLoaded', ()=>{
 //    console.log('listos')         esta es una funcion toca crearla
 username.addEventListener('input', handleUsername);
                                     // esta es una funcion toca crearla
 password.addEventListener('input', handlePassword);
                                 //  esta funcion toca crearla 
         // como es boton no es un evento input, es el evento click       
 submit.addEventListener('click',handleSubmit);
 
 eye.addEventListener('click',handleEye);
 });

 
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


