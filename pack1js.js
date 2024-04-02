
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

document.querySelectorAll(".circle").forEach(e=>{
            
    e.addEventListener("mouseover",()=>[
        
        e.classList.add("active"),
        e.previousElementSibling.classList.add("clap"),
        e.nextElementSibling.style.color="rgb(117, 160, 0)",
        e.nextElementSibling.classList.add("shad")
        
        
        
        
        
    ]);
    e.addEventListener("mouseout",()=>[
        
        e.classList.remove("active"),
        e.previousElementSibling.classList.remove("clap"),
        e.nextElementSibling.style.color="black",
        e.nextElementSibling.classList.remove("shad")
    ]);
    
});