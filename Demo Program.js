const avaliable ={
    100: 3,
    50 : 6,
    20 : 10,
    10 : 50,
    1  : 50,
}
//Map (key, value)
const banknotes = Object.keys(avaliable);

const avaliableTotal = () =>{
    let total = 0; //valueOfBanknotes * quantity of each
    for(let i=0; i<banknotes.lenght; i++){
        total += banknotes[i]*avaliable[banknotes[i]]
        //Multiply quantity value of baknotes * quantity of banknotes of each value
    }
    return total;
}

const getNumberOfBankNotes = (valueToWithdraw,denomination) =>{
    let counter = valueToWithdraw / denomination;
    //1000/100, gives us 10 banknotes.
    if(counter > avaliable[denomination]){
        counter = avaliable[denomination] //convert the counter to an avaliable quantity
    }
    avaliable[denomination] -= counter
    return counter;
}

const process = valueToWithdraw =>{
    if(valueToWithdraw > avaliableTotal()){
        console.log("Error, there's not enough balance in the cashier")
        return;
    }
    let balanceToWithdraw = valueToWithdraw;
    while(valueToWithdraw > 0){
        let counter = 0;
        for(let i=0; i<banknotes.length; i++){
        counter = getNumberOfBankNotes(valueToWithdraw,banknotes[i]);
        console.log(`${contador} billetes de denominacion: ${banknotes[i]}`);
         balanceToWithdraw -= counter*banknotes[i] //sustract the balance on each iteration
        }
    }
}

process(1350);
