const borgarIcon = document.querySelector('.borgarIcon')
const holdLinks = document.querySelector('.navbar .links')
const body = document.querySelector('body')


body.addEventListener('click',(e)=>{
    holdLinks.classList.remove('translate-x-0');
})

borgarIcon.addEventListener('click',(e)=>{
    e.stopPropagation()
    holdLinks.classList.toggle('translate-x-0');
})
holdLinks.addEventListener('click',(e)=>{
    e.stopPropagation()

})
document.addEventListener('keyup',(e)=>{
    console.log(e);
    if (e.key == "Escape"){
        holdLinks.classList.toggle('translate-x-0');
    } 
})
