const options = () => {
    const banks = [
        {name: 'Сбербанк'},
        {name: 'Дом.РФ'},
        {name: 'Абсолют банк'}
    ]


    const select = document.querySelector('#bank');

    const render = (name) => {
        const element = document.createElement('option');


        element.innerHTML = `
            ${name}
        `;
        select.append(element);
    }

    banks.map(({name}) => {
        render(name)
    })
}
export default options;