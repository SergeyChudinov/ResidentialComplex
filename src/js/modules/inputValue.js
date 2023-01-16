const inputValue = () => {
    const sliders = document.querySelectorAll('.styled-slider');
    const inputs = document.querySelectorAll('.mortgage_input');


    const sliderValue = (slider) => {
        let value;
        if (slider.value.toString().length < 3) {
            value = (Math.round(slider.value)).toString();
        } else {
            value = (Math.round(slider.value/1000)).toString();
        }
        

        if (value.length == 3) {
            finalValue = `${value[0]}${value[1]}${value[2]} 000 ₽`;
        } else if (value.length == 4) {
           finalValue = `${value[0]} ${value[1]}${value[2]}${value[3]} 000 ₽`;
        } else if ((value.length == 5)) {
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


    let finalValue
    sliders.forEach(slider => {
        sliderValue(slider);
    })

    sliders.forEach(slider => {
        slider.addEventListener('input', () => {
            sliderValue(slider);
        })
    })
}
export default inputValue;