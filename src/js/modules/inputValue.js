const inputValue = (inputRange, calc) => {
    const sliders = document.querySelectorAll('.styled-slider');
    const inputs = document.querySelectorAll('.mortgage_input.price, .mortgage_input.fee');
    const inputsCT = document.querySelector('.mortgage_input.term');

    const sliderValue = (slider) => {
        let value
        if (slider.value >= 31) {
            slider.value = ((Math.round(slider.value / 1000)) * 1000)
            value = ((Math.round(slider.value / 1000)) * 1000).toString();
        } else {
            value = (Math.round(slider.value)).toString();
        }

        if (value.length == 6) {
            finalValue = `${value[0]}${value[1]}${value[2]} 000 ₽`;
        } else if (value.length == 7) {
            finalValue = `${value[0]} ${value[1]}${value[2]}${value[3]} 000 ₽`;
        } else if ((value.length == 8)) {
            finalValue = `${value[0]}${value[1]} ${value[2]}${value[3]}${value[4]} 000 ₽`;
        } else {
            if (value == 1) {
                finalValue = `${value} год`;
            } else if (value > 1 && value < 5) {
                finalValue = `${value} года`;
            } else {
                finalValue = `${value} лет`;
            }

        }
        slider.previousElementSibling.value = finalValue;
    }

    const inputsValue = (input) => {
        let valueS;
        const valueArr = input.value.match(/\d/ig);
        let value = +valueArr.join('')
        if (value >= 31) {
            value = ((Math.floor(value / 1000)) * 1000);
            valueS = value.toString();
        } else {
            valueS = value.toString();
        }

        if (valueS.length == 6) {
            input.value = `${valueS[0]}${valueS[1]}${valueS[2]} 000 ₽`;
        } else if (valueS.length == 7) {
            input.value = `${valueS[0]} ${valueS[1]}${valueS[2]}${valueS[3]} 000 ₽`;
        } else if ((valueS.length == 8)) {
            input.value = `${valueS[0]}${valueS[1]} ${valueS[2]}${valueS[3]}${valueS[4]} 000 ₽`;
        } else {
            const min = input.nextElementSibling.getAttribute('min');
            if (min == 100000) {
                input.value = `100 000 ₽`;
                value = min
            } else {
                input.value = `1 000 000 ₽`;
                value = min
            }
        }
        input.nextElementSibling.value = value;
        inputRange()
        console.log(input.nextElementSibling.value)
    }

    const inputsCTValue = (input) => {
        let value;
        const valueArr = input.value.match(/\d/ig);
        if (!valueArr) {
            value = 1;
            input.value = `1 год`;
        } else {
            value = +valueArr.join('');
            let valueS = value.toString();
            if (valueS == 1) {
                input.value = `${valueS} год`;
            } else if (valueS > 1 && value < 5) {
                input.value = `${valueS} года`;
            } else {
                input.value = `${valueS} лет`;
            }
        }
        input.nextElementSibling.value = value;
        inputRange()
    }

    let finalValue
    sliders.forEach(slider => {
        sliderValue(slider);
    })
    sliders.forEach(slider => {
        slider.addEventListener('input', () => {
            sliderValue(slider);
        })
    })

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            inputsValue(input);
            calc();
        })
    })
    inputsCT.addEventListener('change', () => {
        inputsCTValue(inputsCT);
        calc();
    })
}
export default inputValue;
