function operacoesMat(){
    const firstInput = document.getElementById("pri_input");
    const secondInput = document.getElementById("sec_input");

    let numberPri = Number(firstInput.value);
    let numberSec = Number(secondInput.value);

    const spanAdicao = document.getElementById("adicao");
    const spanSubt = document.getElementById("subt");
    const spanMult = document.getElementById("mult");
    const spanDiv = document.getElementById("div");

    let somar = numberPri + numberSec;
    let subt = numberPri - numberSec;
    let multi = numberPri * numberSec;
    let div = numberPri / numberSec;

    spanAdicao.innerText = `${somar}`;
    spanSubt.innerText = `${subt}`;
    spanMult.innerText = `${multi}`;
    spanDiv.innerText = `${div}`;

    firstInput.value = "";
    secondInput.value = "";
}