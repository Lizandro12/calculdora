const result = document.querySelector('#result');
const numberButtons = document.querySelectorAll('[data-input]');

//ESTE LOOP PERCORRE TODOS OS BOTÕES DENTRO DESTE ARRAY E ADICIONA UM EVENTO A CADA UM DOS DELES DE FORMAS A ESCREVER O SEU VALOR DENTRO DO INPUT
for (let i = 0; i < numberButtons.length; i++) {
    const element = numberButtons[i];
    element.onclick = function(){
        result.value = result.value + element.value;
    }; 
};

//ESTA VARIAVEL GARDA O BOTÃO QUE AO CLICAR APAGA TODO O VALOR NO INPUT
const clearValue = document.querySelector('.clear');
//ESTA FUNÇÃO QUANDO EXECUTADA APAGA TODO O VALOR DENTRO DO INPUT
clearValue.onclick = function(){
    result.value = '';

};

// ESTA VARIVEL GUARDA O BOTÃO QUE ELIMINA UM UNICO VALOR DE CADA VEZ
const backspace = document.querySelector('.delete');

//ESTA FUNÇÃO ADICIONA UM EVENTO PARA ELEIMINAR OS VALORES UM DE CADA VEZ ATRAVEZ DA OBTENÇÃO DE STRINGS PELO METODO SUBSTRING()
backspace.onclick = function(){
    if( result.value){
        result.value = result.value.substring(0, result.value.length - 1);
    };
};

//ESTA VARIAVEL ARMAZENA O BOTÃO IGUAL
const calculate = document.querySelector('.equal');

//ESTE ARRAY ARMAZENA AS OPERAÇÕES PARA PORTERIORMENTE SEREM USADAS NA FUNÇÃO QUE GERA O RESULTADO DAS OPERAÇÕES
const operations = ['+', '-', '*', '/'];


calculate.onclick = function(){

    let getValue= result.value || null;
    let number1;
    let number2;

    if(getValue){

        operations.some((operation)=>{
            const operationVerification = result.value.includes(operation);

            if(operationVerification === true){

                number1 = result.value.slice(0, result.value.indexOf(operation));
                number2 = result.value.slice(result.value.indexOf(operation) + 1);

                switch (operation){
                    case '+':
                        let sum = Number(number1) + Number(number2);
                        result.value = sum;
                        break
                    case '-':
                        let subtraction = Number(number1) - Number(number2);
                        result.value = subtraction;
                        break
                    case '*':
                        let multiplication = Number(number1) * Number(number2);
                        result.value = multiplication;
                        break
                    case '/':
                        let division = Number(number1) / Number(number2);
                        result.value = division;
                        break
                };
            };
        });
    };

    


}
