var title = document.querySelector('#title');
if (title !== null) {
    title.innerHTML = 'hello';
}
if (title instanceof Element) {
    title.innerHTML = 'hello';
}
var title2 = document.querySelector('#title');
title2.innerHTML = 'hello';
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    title.innerHTML = 'hello';
}
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
var button = document.querySelector('#button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
});
