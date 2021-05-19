const smoothScrollElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

console.log(smoothScrollElements);

for(let i = 0;i<smoothScrollElements.length;i++){
    smoothScrollElements[i].addEventListener('click',(e)=>{
        e.preventDefault();
        const id = smoothScrollElements[i].getAttribute('href').substring(1);
        console.log(id);
        document.getElementById(id).scrollIntoView({
            behavior:"smooth"
        })
    })
}