const server = "https://jsonplaceholder.typicode.com/posts"

const sendData = (data, callback, falsecallback) =>{

    const request = new XMLHttpRequest();

    request.open('POST', server);

    request.addEventListener('readystatechange', ()=>{
        if (request.readyState !== 4) return;
        
        if(request.status === 200 || request.status === 201){
            const response = JSON.parse(request.responseText);
            callback(response.id);
        } else {
            falsecallback(request.status);
            throw new Error(request.status);
        }
    })
    request.send(data);
}

const formElements = document.querySelectorAll('.form');

const formHandler = (form) => {
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const data = {};

        for(const {name, value} of form.elements){
            if (name){
                data[name] = value;
            }
        }

        const smallElement = document.createElement('small');

        sendData(JSON.stringify(data), 
        (id)=>{ 
            smallElement.innerHTML = "Ваша заявка номер:" + id + 
            "!<br> В ближайшее время с вами свяжуться";
            smallElement.style.color = "green";
            form.append(smallElement);
        }, 
        (err)=>{
            smallElement.textContent = " К сожалению тех неполадки попробуйте позже"
            smallElement.style.color = "red";
            form.append(smallElement);;
        }
        
    );
    form.reset();
    })
};

formElements.forEach(formHandler);



// const dataTest = {
//     name: "Vadim",
//     age: 22
// }

// sendData(JSON.stringify(dataTest), 
//     (id)=>{
//         alert(id);
//         console.log(id);
//     }, 
//     (err)=>{
//         alert(err);
//     }
// );