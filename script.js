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

function calculaIdade(){
    const inputIdade = document.getElementById("input_idade");

    let numberIdade = Number(inputIdade.value);

    const spanIdade = document.getElementById("descIdade");
    
    if (numberIdade < 0) {
        spanIdade.innerHTML = `Essa idade é inválida, tente novamente!`
    } else if(numberIdade < 17){
        spanIdade.innerHTML = `Com ${numberIdade} significa que você é menor de idade`
    } else{
        spanIdade.innerHTML = `Com ${numberIdade} significa que você é maior de idade`
    }
}

function adicionar(){
    const item = document.getElementById("item");

    if(item.value != ""){
        // Criando o formulário
        const form = document.createElement("form");
        form.setAttribute("action", "#");
        form.classList.add("form-item"); //setando uma classe

        // Criando o elemento <input> e <label>
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        const label = document.createElement("label");
        label.setAttribute("for", "item");
        label.textContent = item.value;

        // Anexar o <input> e <label> ao <form>
        form.appendChild(checkbox);
        form.appendChild(label);

        // Encontrando o elemento onde irei adicionar o formulário
        const divItem = document.getElementById("div-item");

        // Adicionando o formulário ao elemento
        divItem.appendChild(form);

        // Ajustando minha tag main, de acordo com o tamanho da lista
        const section = document.querySelector("section");
        const sectionHeight = section.scrollHeight;
        section.style.height = sectionHeight + "px";

        // Limpa o conteúdo do input
        item.value = "";
    }
}

function permissaoVoto(){
    const inputIdade = document.getElementById("input_idade_voto");

    let numberIdade = Number(inputIdade.value);

    const spanIdade = document.getElementById("permIdade");
    
    if (numberIdade < 0) {
        spanIdade.innerHTML = `Essa idade é inválida, tente novamente!`
    } else if(numberIdade < 17){
        spanIdade.innerHTML = `Com ${numberIdade} significa que você <strong>não</strong> pode votar`
    } else{
        spanIdade.innerHTML = `Com ${numberIdade} significa que você <strong>pode</strong> votar`
    }
}

function verificaNumero(){
    const inputNumber = document.getElementById("input_number");

    let number = Number(inputNumber.value);

    const spanRes = document.getElementById("resNumber");
    
    if (number == 0) {
        spanRes.innerHTML = `O algarismo digitado é ${number}`
    } else if(number < 0){
        spanRes.innerHTML = `O algarismo ${number} digitado é negativo`
    } else {
        spanRes.innerHTML = `O algarismo ${number} digitado é positivo`
    }
}

function diaSemana(){
    const inputNumber = document.getElementById("input_number_semana");

    let numberSemana = Number(inputNumber.value);

    const spanRes = document.getElementById("resDia");

    switch (numberSemana) {
        case 1:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Domingo`
            break;
        case 2:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Segunda`
            break;
        case 3:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Terça`
            break;
        case 4:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Quarta`
            break;
        case 5:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Quinta`
            break;
        case 6:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Sexta`
            break;
        case 7:
            spanRes.innerHTML = `O dia  ${numberSemana} refere-se a Sábado`
            break;
        default:
            spanRes.innerHTML = `O dia  ${numberSemana} <strong>não</strong> refere-se a um dia da semana`
            break;
    }
}

// function exiba10(){
//     console.
// }