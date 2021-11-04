let btn = document.getElementsByClassName("btn")[0];
let toastDiv = document.getElementsByClassName("toastDiv")[0]; 
let toastAlert = document.getElementsByClassName("toastAlert")[0];
let slider = document.getElementsByClassName('slider')[0];


btn.addEventListener('click', ()=>{
    
    let close = document.querySelector(".close");
    toastDiv.style.display = 'flex';
    toastAlert.style.bottom = `-${toastDiv.offsetHeight}px`;
    setTimeout(() => {
        toastAlert.style.bottom = 0;
    }, 100);
    setTimeout(() => {
        toastAlert.style.bottom = `-${toastDiv.offsetHeight}px`;
    }, 4000);
    close.addEventListener('click', ()=> {
        toastAlert.style.bottom = `-${toastDiv.offsetHeight}px`;
    });
    let totalWidth = parseInt(toastAlert.offsetWidth);
    slider.style.width = 0;
    setTimeout(() => {
      slider.style.width = toastAlert.offsetWidth + 'px';
    }, 100);
    let inter = setInterval(() => {
        totalWidth -= 6;
        slider.style.width = totalWidth + "px";
    }, 95);
    setTimeout(() => {
        slider.style.width = 0 + "px";
      clearInterval(inter);
    }, 4000);
    
});
