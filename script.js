let searchBtn=documnet.queryselector('#search-btn');
let searchar=documnet.queryselector('#search-bar-container');
let formbtn=documnet.queryselector('#login-btn');
let loginForm=documnet.queryselector('#login-bar-container');
let formClose=documnet.queryselector('#form-close');



window.onscroll=()=>{
    //searchBtn.classlist.remove('fa-times');
    //searchBtn.classlist.remove('active');
}
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