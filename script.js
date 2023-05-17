let searchBtn=documnet.queryselector('#search-btn');
let searchar=documnet.queryselector('#search-bar-container');
let formbtn=documnet.queryselector('#login-btn');
let loginForm=documnet.queryselector('#login-bar-container');
let formClose=documnet.queryselector('#form-close');
let menu=document.queryselector('#menu-bar');
let navbar=document.querySelector('#.navbar')


window.onscroll=()=>{
    searchBtn.classlist.remove('fa-times');
    searchBar.classlist.remove('active');
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
    loginForm.classlist.remove('active');
}

menu.addEventListner('click',() =>{
menu.classlist.toggle('fa-times');
navbar.classlist.toggle('active');
});


searchBtn.addEventListner('click',()=>{
    searchBtn.classlist.toggle('fa-times');
    searchBtn.classlist.toggle('active');
});

formBtn.addEventListner('click',()=>{
    loginForm.classlist.add('active');
});

formClose.addEventListner('click',()=>{
    loginForm.classlist.remove('active');
});