const button = document.querySelectorAll('.btn');
const body = document.body;

button.forEach( function (btn) {
    btn.addEventListener('click', function (e) {

    if(e.target.id === 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';

    }else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';

    } 
    
    }); 

});