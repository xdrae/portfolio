window.addEventListener('load',(currentyear)=>{
    date = new Date();
    document.querySelector("#currentyear").textContent = date.getFullYear();
});
//Alternar modo oscuro/nocturno
document.querySelector('.sonar-effect').addEventListener('click', function() {
    document.body.classList.toggle('night-vision');
    // (Necesitarías definir la clase .night-vision en tu CSS)
});