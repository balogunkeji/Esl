const but = document.querySelector('.mobile');
but.addEventListener('click',myButton);

function myButton(){
  const ul = document.querySelector('.ul')
  if(ul.style.display == 'block'){
    ul.style.display = "none"
  }else{
    ul.style.display = 'block'
  }
}

// let toggleMenu = document.querySelector('.mobile');
// let navElm = document.querySelector('ul');

// toggleMenu.addEventListener('click', function(){
//   navElm.classList.toggle('is-active');
// })