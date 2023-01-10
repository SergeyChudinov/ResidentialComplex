const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Мы с вами саяжемся!',
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            
            const formData = new FormData(item);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));



            postData('https://formspree.io/f/xyyaylkr', json)
                .then(data => {
                    statusMessage.textContent = message.success;
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                }).finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                    setTimeout(() => {
                        const windows = document.querySelectorAll('[data-modal]');
                        windows.forEach(item => {
                            item.style.display = 'none';
                        });
                        document.body.style.overflow = '';
                        document.body.style.marginRight = `0px`;
                    }, 8000);
                })
        });
    });
};
export default forms;


// const forms = (state) => {
//     const form = document.querySelectorAll('form');
//     const inputs = document.querySelectorAll('input');
    
//     checkNumInputs('input[name="user_phone"]');

//     const message = {
//         loading: 'Загрузка',
//         success: 'Спасибо! Мы с вами саяжемся!',
//         failure: 'Что-то пошло не так...'
//     }

//     const postData = async (url, data) => {
//         document.querySelector('.status').textContent = message.loading;
//         let res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         });
//         // return await res.text();
//         return await res.json();
//     };
//     const clearInputs = () => {
//         inputs.forEach(item => {
//             item.value = '';
//         });
//     };
//     form.forEach(item => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();
            
//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             item.appendChild(statusMessage);

//             const formData = new FormData(item);
//             if (item.getAttribute('data-calc') === 'end') {
//                 for(let key in state) {
//                     formData.append(key, state[key])
//                 }
//             }

//             console.log(formData);
//             console.log(12345);
//             const json = JSON.stringify(Object.fromEntries(formData.entries()));
//             console.log(json);

//             postData('http://localhost:3000/requests', json)
//                 .then(data => {
//                     console.log(data);
//                     statusMessage.textContent = message.success;
//                 }).catch(() => {
//                     statusMessage.textContent = message.failure;
//                 }).finally(() => {
//                     clearInputs();
//                     setTimeout(() => {
//                         statusMessage.remove();
//                     }, 5000);
//                     setTimeout(() => {
//                         const windows = document.querySelectorAll('[data-modal]');
//                         windows.forEach(item => {
//                             item.style.display = 'none';
//                         });
//                         document.body.style.overflow = '';
//                     }, 8000);
//                 })
//         });
//     });
// };
// export default forms;