var acc = {
    user:'aaa',
    pin:2002
}
var acc1 = {
    user:'bbb',
    pin:2312
}
var acc2 = {
    user:'ccc',
    pin:2222
}

let balance = document.querySelector('.balance__value');
let movements = document.querySelector(".movements")

const account = [acc, acc1, acc2];

function login(){
    let user1 = document.querySelector('.login__input--user').value;
    let pin1 = document.querySelector('.login__input--pin').value;

    for (let i=0; i<account.length; i++){
        if (account[i].user==user1 && account[i].pin==pin1){
            document.querySelector('.app').style.opacity = 1;
            if (account[i].user=="aaa") {
                balance.innerHTML="4000$"
            }
            else if (account[i].user=="bbb"){
                balance.innerHTML="5000$"
            }
            else{
                balance.innerHTML="6000$"
            }
           
            return;
        }
        
        
    }
    console.log("Invalid credentials");

}

function requestLoan(){
    let request = document.querySelector(".form__input--loan-amount");
    for (let i=0; i<account.length; i++){
    if(account[i].user){
        let bal = parseFloat(balance.textContent);
        let amt=parseFloat(request.value);

        let totalAmt = bal+amt
       balance.innerHTML=totalAmt+"$"

        let div1 = document.createElement("div")
        div1.classList.add("movements__row")
        let div2 = document.createElement("div")
        div2.classList.add("movements__type")
        div2.innerHTML= "deposit"

        let div3 = document.createElement("div")
        div3.classList.add("movements__date")
        div3.innerHTML= new Date().toLocaleDateString()

        let div4 = document.createElement("div")
        div4.classList.add("movements__value")
        div4.innerHTML= amt
        div1.appendChild(div2)
        div1.appendChild(div3)
        div1.appendChild(div4)
        movements.appendChild(div1)
        return
    }
}
}

function moneyTransfer(){
    let transferAccount = document.querySelector(".form__input--to").value;
    let transferAmount = document.querySelector(".form__input--amount");
    
    for (let i=0; i<account.length; i++){
        const { user, pin, balance: accountBalance } = account[i];
        if(transferAccount==user){
            let bal = parseFloat(balance.textContent);
            let amt = parseFloat(transferAmount.value);

            let minusAmt = bal-amt
            balance.innerHTML=minusAmt+"$"
            
            let div5 = document.createElement("div")
            div5.classList.add("movements__row")
            let div6 = document.createElement("div")
            div6.classList.add("movements__type1")
            div6.innerHTML= "Withdrawal"

            let div7 = document.createElement("div")
            div7.classList.add("movements__date")
            div7.innerHTML= new Date().toLocaleDateString()

            let div8 = document.createElement("div")
            div8.classList.add("movements__value")
            div8.innerHTML= minusAmt
            div5.appendChild(div6)
            div5.appendChild(div7)
            div5.appendChild(div8)
            movements.appendChild(div5)
        }
        else{
            console.log("No Account");
        }
    }
}