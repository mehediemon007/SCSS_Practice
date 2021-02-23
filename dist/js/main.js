const menuBtn = document.querySelector('.menu_btn');
const burgerBtn = document.querySelector('.menu_btn_burger');
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu_nav");
const navItems = document.querySelectorAll(".menu_nav_item");

let isOpen = false;

// menuBtn.addEventListener('click',()=>{
//     burgerBtn.classList.toggle('open');
// })

menuBtn.addEventListener('click',()=>{
    if(!isOpen){
        burgerBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        isOpen=true;
    }else{
        burgerBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.add('open'));
        isOpen=false;
    }
})