let deposito = 0;
let saque = 0;
let extrato = "";
let numeroSaques = 0;
let limiteSaques = 3;
let excedeuLimite = 0;
let excedeuSaldo = 3;
let LimiteValor = 500;


while(true) {
    let menu = prompt(`
        ============================
        Selecione uma opção:
            [d] - Depósito
            [s] - Saque
            [e] - Extrato
            [q] - Sair
        ============================
    `);

     if (menu == "d"){
        let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
        if(valor > 0){
            saldo += valor;
            extrato = extrato + `Depósito de R$ ${valor} \n`;
        } else {
            alert("@@@ Operação Falhou! O valor informado foi inválido! @@@")

        }
     } else if(menu == "s") {
            let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
            let excedeusaque =  numeroSaques > limiteSaques
            let excedeuLimiteValor = valor > 500;
            let excedeuSaldo = valor > saldo;
            if(excedeuSaldo) {
                alert("@@@ Operação Falhou! Você não tem saldo suficiente! @@@");
            } else if(excedeusaque) {
                alert("@@@ Operação Falhou! O número máximo de saques foi excedido! @@@");
            } else if(excedeusaque) {
                alert("@@@ Operação Falhou! O valor do saque excede o limite! @@@");
            }else if(valor > 0){
                saldo -= valor;
                extrato = extrato + `Saque de R$ ${valor}  \n`;
                alert (`Saque de R$ ${valor} realizado com êxito \n`);
                numeroSaques++;
            } else {
                alert("@@@ Operação Falhou! O valor informado foi inválido! @@@");
            }
            // numero de saques > 3.
            // valor > 500.
            // não tiver saque.
     } else if(menu == "e") {
        let mensagem = extrato == "" ? "Não foram realizadas movimentações.":
        extrato;
        alert(`
        ==== EXTRATO ====
        ${mensagem}
        Saldo: R$ ${saldo.toFixed(2)}
        =================
        `);
     } else if(menu == "q") {
        alert("Obrigado pela preferência !!!");
        break
     } else {
        alert("@@@ Opção invalida, por favor selecione uma operação correta! @@@");
     }
        
} 





// Extrato
// Listar todas as movimentações (depósitos e saques) feitas.
// No final da listagem, mostrar o saldo atual.
// Formatar os valores no padrão brasileiro:   
// Ex: `R$ 1500.45`   
// Se não houver movimentações, mostrar:  
//`Não foram realizadas movimentações.`

//  Deposito 
//  Deve aceitar apenas valores positivos.
//  Todos os depósitos devem ser armazenados em memória.
//  O sistema considera apenas um único usuário (sem necessidade de autenticação ou identificação de conta).
//  Os depósitos devem aparecer no extrato.

// Saque 
// Permitir no máximo 3 saques diários.
// Cada saque pode ter o valor máximo de R$ 500,00.
// O sistema deve bloquear saques se o usuário não tiver saldo suficiente, exibindo mensagem:   
// `Saldo insuficiente para saque.` 
// Os saques devem ser armazenados e aparecer no extrato.