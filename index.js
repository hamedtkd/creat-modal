const modalBox = document.getElementById('modalbox')
const submit= document.getElementById('submit')
const closeBtn= document.getElementById('close')
const body = document.getElementById('body')
modalBox.style.right = "100%";
body.addEventListener('click' ,(e)=>{
    if(e.target === submit){
        modalBox.style.right = "10%" ;
        submit.style.right = "100%"
        
    }
    // console.log(!e.path.includes(modalBox));
    else if(e.target == closeBtn || !e.path.includes(modalBox)){
        modalBox.style.right = "100%" ;
        submit.style.right = "50%"
    }    
    
        
       
})    
