let marker = document.querySelector('#marker');
let list = document.querySelectorAll(' ul li');

function moveIndicator(e){
    marker.style.left = e.offsetLeft+ 'px';
    marker.style.width = e.offsetWidth+ 'px';
}

list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
    })
})

//add activa class in hover list item
function activeLink(){
    list.forEach((item) => list.classList.remove('active'));
    list.classList.add('active');
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));