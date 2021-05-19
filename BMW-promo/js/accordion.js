document.addEventListener("DOMContentLoaded", () =>{

    const featureLinkElements = document.querySelectorAll('.feature__link');
    const featureSubElements = document.querySelectorAll('.feature-sub');


    for (let i = 0; i < featureLinkElements.length; i ++){
        featureLinkElements[i].addEventListener('click', () =>{
            for( let j = 0 ; j <featureLinkElements.length; j++){
                if (j == i){
                    featureLinkElements[j].classList.toggle('feature__link_active')
                    featureSubElements[j].classList.toggle('hidden');
                }else{
                    featureLinkElements[j].classList.remove('feature__link_active')
                    featureSubElements[j].classList.add('hidden');
                }
            }
        })
    }
});