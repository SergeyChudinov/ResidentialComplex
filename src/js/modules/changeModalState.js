const changeModalState = (state) => {
    const apartments = document.querySelectorAll('.checkbox_apartment');
    const areaFrom = document.querySelectorAll('.input_area_from');
    const areaTo = document.querySelectorAll('.input_area_to');


    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
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
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT': 
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }
    bindActionToElems('change', apartments, 'apartmentType');
    bindActionToElems('change', areaFrom, 'area_from');
    bindActionToElems('change', areaTo, 'area_to');
}
export default changeModalState;


// if (elem.length > 1) {
//     state[prop] = i; 
// } else {
//     state[prop] = item.value;
// }
// console.log(state);