const timer = document.querySelector('.timer');
setInterval(() => {
   let date = new Date(); 
    timer.innerText = date.toLocaleTimeString();
}, 1000);