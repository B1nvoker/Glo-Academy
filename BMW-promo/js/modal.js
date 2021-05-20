const moreElements = document.querySelectorAll('.more');
const modalElement = document.querySelector('.modal');

console.log(moreElements)

const openModal = () =>{
    modalElement.classList.remove('hidden');
}

const closeModal = ()=>{
    modalElement.classList.add('hidden');
}

moreElements.forEach(elem => {
    elem.addEventListener('click', openModal)
    }
)

modalElement.addEventListener('click', (e) =>{
    const target = e.target;

    if (target.classList.contains('overlay') ||
        target.classList.contains('modal__close')) {
        closeModal();
    }
})

