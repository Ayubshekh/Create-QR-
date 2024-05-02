
let imgbox=document.querySelector("#imgbox")
let qrimg=document.querySelector("#qrimg")
let inp=document.querySelector("input")

function Getqr(){
    if(inp.value.length>0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inp.value;
        imgbox.classList.add("show-img")
    }
   else{
    inp.classList.add("error")
    setTimeout(()=>{ 
        inp.classList.remove("error")
    },1000)
   

   }
  
}