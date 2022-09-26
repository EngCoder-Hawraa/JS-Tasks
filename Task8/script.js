const button = document.querySelector("button"),
    alert = document.querySelector(".container"),
    closeIcon = document.querySelector(".close"),
    progress = document.querySelector(".progress");


button.addEventListener("click", () => {
    alert.classList.add("active");
    progress.classList.add("active");
    setTimeout(() => {
        alert.classList.remove("active");
    }, 5000);
});

closeIcon.addEventListener("click", () => {
    alert.classList.remove("active");
    setTimeout(() => {
        progress.classList.remove("active");
    }, 6000);
});




// define click eventhandler
const calculateBtn = document.getElementById('value_calculate');

    calculateBtn.addEventListener('click', function(){
        // input Textbox
        const centimeterValue = parseFloat(document.getElementById("cm_value").value);
        // input radiobutton 
        const radioBtns = document.querySelector("input[name='convertBtn']:checked").value;
        // console.log(radioBtns);
        document.getElementById('alert_value').innerHTML = getCalculate(centimeterValue,radioBtns);
        // alert(getCalculate(centimeterValue,radioBtns));

    });

    // centemeter converter function
    function getCalculate(cm,up){
        if(up == 'Milimeter'){
            return cm * 10 + ' Milimeter';
        }
        if(up == 'Meter'){
            return cm * 0.01 + ' Meter';
        }
        if(up == 'Kilometer'){
            return cm * 0.00001 + ' Kilometer';
        }
    }

   