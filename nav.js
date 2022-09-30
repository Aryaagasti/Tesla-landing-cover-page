const openMenu =() => {
    document.querySelector('.backdrop').className = 'backdrop active';
    console.log(querySelector);
    document.querySelector('aside').className = 'active';
    console.log(querySelector);

}
function closeMenu() {
    document.querySelector('.backdrop').className = 'backdrop ';
    console.log(querySelector);
    document.querySelector('aside').className = '';
    console.log(querySelector);


    
}
document.getElementById('menuBtn').onclick = e => {
    console.log(getElementById);
    e.preventDefault();
    openMenu();


}
document.querySelector('aside button.close').onclick = e =>{
    console.log(querySelector);
    function closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
    console.log(querySelector);
    function closeMenu();
}
document.querySelector('.backdrop').onclick = e =>{
    console.log(querySelector);
    function closeMenu();
}