const filter = () => {
    const menu = document.querySelector('.apartment_filter_container');
    const items = menu.querySelectorAll('button');
    const wrapper = document.querySelector('.apartment_selection_container');
    
    menu.addEventListener('click', (e) => {
        const classList = e.target.classList;

        if (e.target.closest('button')) {
           
            for (const child of wrapper.children) {
                child.style.display = 'none';
            }
            for (const child of items) {
                child.classList.remove('active')
            }

            for (const child of wrapper.querySelectorAll(`.${classList}`)) {
                child.style.display = 'block';
            }
            menu.querySelector(`.${classList}`).classList.add('active');
        }
    });
}
export default filter;