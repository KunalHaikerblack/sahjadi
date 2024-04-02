document.querySelector(".heart").addEventListener("click",()=>{
    if(!document.querySelector(".heart").classList.contains("connect1")){
        document.querySelector(".heart").classList.add("connect1");
        document.querySelector(".heart").classList.remove("connect2");
        document.querySelector(".running").classList.add("joint1");
        document.querySelector(".running").classList.remove("joint2");

        document.querySelector(".container").classList.add("billo1");
        document.querySelector(".container").classList.remove("billo2");
        
    }
    else if(document.querySelector(".heart").classList.contains("connect1")){
        document.querySelector(".heart").classList.remove("connect1");
        document.querySelector(".heart").classList.add("connect2");
        document.querySelector(".running").classList.remove("joint1");
        document.querySelector(".running").classList.add("joint2");

        document.querySelector(".container").classList.remove("billo1");
        document.querySelector(".container").classList.add("billo2");
    }
    

})
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