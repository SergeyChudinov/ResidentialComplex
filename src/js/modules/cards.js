const apartmentCards = [
    {
        title: 'Студия',
        area: '57,4',
        img: './assets/img/studio_flat_1.png',
        className: 'studio'
    },
    {
        title: 'Студия',
        area: '57,4',
        img: './assets/img/studio_flat_2.png',
        className: 'studio'
    },
    {
        title: 'Студия',
        area: '57,4',
        img: './assets/img/studio_flat_3.png',
        className: 'studio'
    },
    {
        title: 'Однокомнатная',
        area: '57,4',
        img: '../assets/img/one_room_flat_1.png',
        className: 'one_rorm_flat'
    },
    {
        title: 'Однокомнатная',
        area: '57,4',
        img: './assets/img/one_room_flat_2.png',
        className: 'one_rorm_flat'
    },
    {
        title: 'Двухкомнатная',
        area: '57,4',
        img: './assets/img/two_roomed_flat_1.png',
        className: 'two_rorm_flat'
    },
    {
        title: 'Двухкомнатная',
        area: '57,4',
        img: './assets/img/two_roomed_flat_2.png',
        className: 'two_rorm_flat'
    },
    {
        title: 'Трехкомнатная',
        area: '57,4',
        img: './assets/img/three_room_flat_1.png',
        className: 'three_rorm_flat'
    },
    {
        title: 'Трехкомнатная',
        area: '57,4',
        img: './assets/img/three_room_flat_2.png',
        className: 'three_rorm_flat'
    },
    {
        title: 'Трехкомнатная',
        area: '57,4',
        img: './assets/img/three_room_flat_3.png',
        className: 'three_rorm_flat'
    }

]


function cards() {
    const parent = document.querySelector('.apartment_selection_container');


    const render = (title, area, img, className) => {
        const element = document.createElement('div');
        element.classList.add(`apartment_block`);
        element.classList.add(`all`);
        element.classList.add(`${className}`);

        element.innerHTML = `
            <img class="apartment_img" src="${img}" alt="apartment">
            <h1 class="apartment_title">${title}</h1>
            <p class="apartment_text">Площадь — ${area} м²</p>
        `;
        parent.append(element);
    }


    apartmentCards.map(({title, area, img, className}) => {
        render(title, area, img, className)
    })

}
export default cards;