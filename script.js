let searchBtn=documnet.queryselector('#search-btn');
let searchar=documnet.queryselector('#search-bar-container');


window.onscroll=()=>{
    //searchBtn.classlist.remove('fa-times');
    //searchBtn.classlist.remove('active');
}
searchBtn.addEventListner('click',()=>{
    searchBtn.classlist.toggle('fa-times');
    searchBtn.classlist.toggle('active');
});