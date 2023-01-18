const options = (banks) => {
    // const banks = [{
    //         name: 'Сбербанк',
    //         interestRate: 6.7
    //     },
    //     {
    //         name: 'Дом.РФ',
    //         interestRate: 6.8
    //     },
    //     {
    //         name: 'Абсолют банк',
    //         interestRate: 6.5
    //     }
    // ]


    const select = document.querySelector('#bank');

    const render = (name, interestRate) => {
        const element = document.createElement('option');
        element.setAttribute('data-rate', interestRate)

        element.innerHTML = `
            ${name}
        `;
        select.append(element);
    }

    banks.map(({
        name, interestRate
    }) => {
        render(name, interestRate)
    })
}
export default options;