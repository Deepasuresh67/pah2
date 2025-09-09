 
document.addEventListener("DOMContentLoaded",(event)=>{ 
     
    const btn1=document.getElementById("btn1"); 
    const btn2=document.getElementById("btn2"); 
    const btn3=document.getElementById("btn3"); 
    const img1=document.getElementById("img1"); 
    const img2=document.getElementById("img2"); 
    const img3=document.getElementById("img3"); 
 
    btn1.addEventListener("click",()=>{ 
      
        img1.style.zIndex=10; 
        img2.style.zIndex=1; 
        img3.style.zIndex=1; 
 
    }) 
 
    btn2.addEventListener("click",()=>{ 
      
        img1.style.zIndex=1; 
        img2.style.zIndex=10; 
        img3.style.zIndex=1; 
 
    }) 
 
    btn3.addEventListener("click",()=>{ 
      
        img1.style.zIndex=1; 
        img2.style.zIndex=1; 
        img3.style.zIndex=10; 
 
    }) 
 
 
})
