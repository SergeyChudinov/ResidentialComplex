const scrolling = () => {   // 2
    // const upElem = document.querySelectorAll(upSelector);
    // if (upElem[0].classList.contains('pageup')) {
    //     let showScroll = false;
    //     upElem[0].classList.add('animated');
    //     window.addEventListener('scroll', () => {
    //         if (document.documentElement.scrollTop > 1650 && !showScroll) {
    //             showScroll = true;
    //             upElem[0].classList.add('fadeIn');
    //             upElem[0].classList.remove('fadeOut');
    //         } else if (document.documentElement.scrollTop < 1650 && showScroll) {
    //             showScroll = false;
    //             upElem[0].classList.add('fadeOut');
    //             upElem[0].classList.remove('fadeIn');
    //         }
    //     });
    // }

    // let links = document.querySelectorAll('[href^="#"]');
    // let speed = 0.2;

    // links.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();

    //         let elementTop = document.documentElement.scrollTop;
    //         let bodyTop = document.body.scrollTop;
    //         let widthTop = Math.round(elementTop || bodyTop); // сколько пролистали
    //         let hash = this.hash;
    //         let toBlock = document.querySelector(hash).getBoundingClientRect().top;  // к чему мы скролим, затем получим верх-ие коор-ы элим относительно экрана
    //         let start = null;

    //         requestAnimationFrame(step);

    //         function step(time) {
    //             if (start === null) {
    //                 start = time;
    //             }
    //             let progress = time - start;
    //             let r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));// кол-во пикселей прокутки
    //             document.documentElement.scrollTo(0, r);

    //             if (r != widthTop + toBlock) {
    //                 requestAnimationFrame(step);
    //             } else {
    //                 location.hash = hash;
    //             }
    //         }
    //     });
    // });
    console.log(123)
};
export default scrolling;