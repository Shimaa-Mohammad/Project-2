let navbar=document.querySelector('#header nav ul');
let open_navbar=document.querySelector('#header .fa-bars');
let close_navbar=document.querySelector('#header .fa-times');

open_navbar.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    open_navbar.classList.toggle('fa-times')
    open_navbar.classList.toggle('active');
})