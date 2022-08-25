let hideTextbtn = document.getElementById('hideTextbtn');

let hideText = document.getElementById('hideText');

hideTextbtn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideTextbtn.innerHTML= 'Leer Menos';
    }
    else {
        hideTextbtn.innerHTML = 'Leer Mas';
    }
}