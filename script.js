'use strict';
//modal hidden element which we have to display
const modal=document.querySelector('.modal');
//for overlay
const overlay =document.querySelector('.overlay');
//store close button 
const btnCloseModal = document.querySelector('.close-modal');
//show button here querryselector will select first one only
//const btnsShowModal=document.querySelector('.show-modal');
const btnsShowModal=document.querySelectorAll('.show-modal');

//close function
const CloseModal=function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
}

//open function
const openModal=function(){
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}


for(let i=0; i< btnsShowModal.length ;i++)
{
btnsShowModal[i].addEventListener('click',openModal);
//this will also work but we have to write manually if hidden class has many code;
//modal.style.display="block";

btnCloseModal.addEventListener('click',CloseModal);
overlay.addEventListener('click',CloseModal); 
};
