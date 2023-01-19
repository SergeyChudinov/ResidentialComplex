const calc = (state, banks, inputRange) => {
    const bankBlock = document.querySelector('#bank');
    const realEstateValueBlock = document.querySelector('#real_estate_value');
    const anInitialFeeBlock = document.querySelector('#an_initial_fee');
    const creditTermBlock = document.querySelector('#credit_term');

    let amountOfCreditBlock = document.querySelector('.credit_container .bank');
    let selectedBankBlock = document.querySelector
        ('.credit_container .real_estate_value');
    let monthlyPaymentBlock = document.querySelector('.credit_container .an_initial_fee');
    let interestRateBlock = document.querySelector('.credit_container .credit_term');

    let realEstateValue = null;   //Стоимость недвижимости
    let anInitialFee = null;   //Первоначальный взнос
    let creditTerm = null;   //Срок кредита

    const calcFunc = () => {
        const attention = document.querySelector('.attention');

        // selectedBankBlock.textContent = bankBlock.value; // банк

        realEstateValue = realEstateValueBlock.value;
        anInitialFee = anInitialFeeBlock.value;

        const aOCB = (realEstateValue - anInitialFee).toString();
        if (aOCB.length <= 5) { // Сумма кредита
            amountOfCreditBlock.classList.add('status');
            amountOfCreditBlock.textContent = `сумма слишком низкая`;
        } else if (aOCB.length === 6) {
            amountOfCreditBlock.textContent = `${aOCB[0]}${aOCB[1]}${aOCB[2]} 000 ₽` ;
            amountOfCreditBlock.classList.remove('status');
        } else if (aOCB.length === 7) { 
            amountOfCreditBlock.textContent = `${aOCB[0]} ${aOCB[1]}${aOCB[2]}${aOCB[3]} 000 ₽`;
            amountOfCreditBlock.classList.remove('status'); 
        } else {
            amountOfCreditBlock.textContent = `${aOCB[0]}${aOCB[1]} ${aOCB[2]}${aOCB[3]}${aOCB[4]} 000 ₽`;
            amountOfCreditBlock.classList.remove('status'); 
        }


        // const bankObj = banks.find(bank => bank.name == bankBlock.value);
        // interestRateBlock.textContent = bankObj.interestRate + ' %'; // % ставка

        const s = realEstateValue - anInitialFee;  //1000000
        // const p = (bankObj.interestRate / 1200);  // 0.005583333333333333
        const p = (0.7 / 1200);
        creditTerm = creditTermBlock.value;  // 12
        const m = (creditTerm * 12);
        const stavka = Math.pow((1 + p), m) ;
        const sum = Math.round((s * p * stavka) / (stavka - 1));
        const sumStr = sum.toString();
        if (sumStr.length <= 3) { // Ежемесячный платеж
            monthlyPaymentBlock.classList.add('status');
            monthlyPaymentBlock.textContent = `сумма слишком низкая`;
        } else if (sumStr.length === 4) {
            monthlyPaymentBlock.textContent = `${sumStr[0]} ${sumStr[1]}${sumStr[2]}${sumStr[3]} ₽`;
            monthlyPaymentBlock.classList.remove('status');
        } else if (sumStr.length === 5) {
            monthlyPaymentBlock.textContent = `${sumStr[0]}${sumStr[1]} ${sumStr[2]}${sumStr[3]}${sumStr[4]} ₽`;
            monthlyPaymentBlock.classList.remove('status');
        } else {
            monthlyPaymentBlock.textContent = `${sumStr[0]}${sumStr[1]}${sumStr[2]} ${sumStr[3]}${sumStr[4]}${sumStr[5]} ₽`;
            monthlyPaymentBlock.classList.remove('status');
        }

        if (+aOCB <= 0) {
            amountOfCreditBlock.classList.add('status');
            amountOfCreditBlock.textContent = `некорректное значение`;
            monthlyPaymentBlock.classList.add('status');
            monthlyPaymentBlock.textContent = `некорректное значение`;

            attention.classList.add('error');
            attention.textContent = 'Первоначальный взнос должен быть меньше стоимость недвижимости';
        } else {
            attention.textContent = '';
        }

        state['Ежемесячный платеж'] = sum;
    };

    // bankBlock.addEventListener('change', (e) => {
    //     calcFunc();
    // });
    realEstateValueBlock.addEventListener('input', (e) => {
        calcFunc();
    });
    anInitialFeeBlock.addEventListener('input', (e) => {
        calcFunc();
    });
    creditTermBlock.addEventListener('input', (e) => {
        calcFunc();
    });

    calcFunc();

    document.querySelector('.credit').style.display = 'none';
   
};
export default calc;