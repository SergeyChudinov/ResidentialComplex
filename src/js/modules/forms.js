const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            // e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            
            statusMessage.textContent = 'Спасибо! Мы с вами саяжемся!';
            

            setTimeout(() => {
                clearInputs();
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
        });
    });
};
export default forms;