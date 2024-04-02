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