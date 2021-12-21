let popupLauncher = document.querySelector(".popup-launcher");
let popupDeactivate = document.querySelector(".popup-deactivate");
let popup = document.querySelector(".popup");

popupLauncher.addEventListener('click',(e)=>{

    e.preventDefault();

    popup.classList.toggle('popup-active');

});

popupDeactivate.addEventListener('click',(e)=>{

    e.preventDefault();

    popup.classList.toggle('popup-active');

});