
setTimeout(() => {
    document.querySelector(".block1").classList.add("connect");
}, 1000);
setTimeout(() => {
    document.querySelector(".block2").classList.add("connect");
}, 3000);
setTimeout(() => {
    document.querySelector(".block3").classList.add("connect");
}, 5000);
setInterval(() => {
    document.querySelector(".block1").classList.remove("connect");
    document.querySelector(".block2").classList.remove("connect");
    document.querySelector(".block3").classList.remove("connect");
    

setTimeout(() => {
    document.querySelector(".block1").classList.add("connect");
}, 1000);
setTimeout(() => {
    document.querySelector(".block2").classList.add("connect");
}, 3000);
setTimeout(() => {
    document.querySelector(".block3").classList.add("connect");
}, 5000);

}, 7000);