const modals = () => {
    let modalTimerId;

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();
        trigger.forEach(item => item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault()
            }
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            clearTimeout(modalTimerId);
        }));
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none'; // нужно ли?
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
        modal.addEventListener('click', e => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        modalTimerId = setTimeout(function () {
            document.querySelector(selector).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }, time);
    }


    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.modal_btn', '.modal', '.close_modal');

    bindModal('.modal_calc_btn', '.modal_calc', '.modal_calc_close');
    bindModal('.modal_apartment_btn', '.modal_apartment', '.modal_apartment_close', false);
    bindModal('.modal_area_btn', '.modal_area', '.modal_area_close', false);
    bindModal('.modal_finishing_btn', '.modal_finishing', '.modal_finishing_close', false);
    bindModal('.modal_finish_btn', '.modal_finish', '.modal_finish_close', false);
    showModalByTime('.modal', 6000000000);
};
export default modals;