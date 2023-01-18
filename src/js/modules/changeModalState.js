const changeModalState = (state, calcState) => {
    const apartments = document.querySelectorAll('.checkbox_apartment');
    const areaFrom = document.querySelectorAll('.input_area_from');
    const areaTo = document.querySelectorAll('.input_area_to');
    const finishing = document.querySelectorAll('.checkbox_finishing');

    const bank = document.querySelectorAll('#bank');
    const realEstateValue = document.querySelectorAll('#real_estate_value');
    const anInitialFee = document.querySelectorAll('#an_initial_fee');
    const creditTerm = document.querySelectorAll('#credit_term');

    const price = document.querySelectorAll('.price');
    const fee = document.querySelectorAll('.fee');
    const term = document.querySelectorAll('.term');
  
    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'INPUT':
                        if (item.getAttribute('name') === 'checkbox') {
                            i === 0 ? state[prop] = 'Черновая' :
                                i === 1 ? state[prop] = 'Предчистовая' :
                                state[prop] = 'Чистовая';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Студия' :
                                i === 1 ? state[prop] = 'Однокомнатная' :
                                i == 2 ? state[prop] = 'Двухкомнатная' :
                                i == 3 ? state[prop] = 'Трехкомнатная' :
                                state[prop] = 'Больше трех комнат';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            if (item.classList.contains('styled-slider') ||
                            item.classList.contains('mortgage_input')) {
                                calcState[prop] = item.value;
                            } else {
                                state[prop] = item.value;
                            } 
                        }
                        break;
                    case 'SELECT':
                        calcState[prop] = item.value;
                        break;
                }
                console.log(state);
                console.log(calcState);
            });
        });
    }
    bindActionToElems('change', apartments, 'тип квартиры');
    bindActionToElems('change', areaFrom, 'площадь от');
    bindActionToElems('change', areaTo, 'площадь до');
    bindActionToElems('change', finishing, 'вариант отделки');

    bindActionToElems('change', bank, 'банк');
    bindActionToElems('change', realEstateValue, 'cтоимость недвижимости');
    bindActionToElems('change', anInitialFee, 'первоначальный взнос');
    bindActionToElems('change', creditTerm, 'срок кредита');

    bindActionToElems('change', price, 'Стоимость недвижимости');
    bindActionToElems('change', fee, 'Первоначальный взнос');
    bindActionToElems('change', term, 'Срок кредита');
}
export default changeModalState;