const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElements = document.querySelectorAll('[data-tabs-field]');
const designTitleElements = document.querySelectorAll('[data-tabs-title]');

console.log(designTitleElements)

tabsHandlerElements.forEach(element => {
    element.addEventListener('click', () =>{
        tabsHandlerElements.forEach(elem => {
            if (element === elem) {
                elem.classList.add('design-list__item_active');
            } else {
                elem.classList.remove('design-list__item_active');
            }
        })
        tabsFieldElements.forEach(elem => {
            if (elem.dataset.tabsField === element.dataset.tabsHandler){
                elem.classList.remove('hidden');
            } else {
                elem.classList.add('hidden');
            }
        })
        designTitleElements.forEach(item => {
            if (item.dataset.tabsTitle === element.dataset.tabsHandler) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })
    })
});