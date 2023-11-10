let bar=document.querySelector("#bar");
let bar1=document.querySelector("#bar1")
bar.onclick=()=>{
    let menu=document.querySelector(".nav-bar");
    bar1.style.display='block'
    menu.style.left='0';
    bar.style.display="none"
   

   
}

bar1.onclick=()=>{
    let menu=document.querySelector(".nav-bar");
    bar1.style.display='none'
    menu.style.left='-100%';
    bar.style.display="block"
   

   
}
let sectioncounter=document.querySelector(".grids")
let valueDisplays=document.querySelectorAll(".valuecount");
let interval=4000;

valueDisplays.forEach((valueDisplay) => {
    let startvalue=0;
    let endvalue=parseInt(valueDisplay.getAttribute("data-val"));
    console.log(endvalue)
    let duration=Math.floor(interval/endvalue);
     let counter=setInterval(function(){
         startvalue+=1;
         valueDisplay.textContent=startvalue;
         if(startvalue==endvalue){
             clearInterval(counter)
         }
     }, duration);


    
});
let counter=new IntersectionObserver((entries,observer)=>{
    let [entry]=entries;
    if (entry.isIntersecting)return; 
 console.log(entry);
        
    
},{
    root:null,
    threshold:0.4,
});
counter.observe(sectioncounter);