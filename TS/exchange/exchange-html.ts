let title = document.querySelector('#title');

if(title !== null ){
  title.innerHTML = 'hello';
}

if(title instanceof Element){
  title.innerHTML = 'hello';
}

let title2 = document.querySelector('#title') as Element;
title2.innerHTML = 'hello';

if(title?.innerHTML !== undefined){
  title.innerHTML = 'hello';
}

let link = document.querySelector('.link');

if(link instanceof HTMLAnchorElement){
  link.href = 'https://kakao.com';
}

let button = document.querySelector('#button');
button?.addEventListener('click',function(){

})

