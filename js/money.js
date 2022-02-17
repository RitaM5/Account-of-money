
document.getElementById('calculate-btn').addEventListener('click', function(){

   balance = mainCalculation();
   document.getElementById('display-balance').innerText = balance;

});

function mainCalculation(){
    
    let input= document.getElementById('input-income');
    let inputIncome = parseInt(input.value);
    //error handle for inputField
   
    let foodValue = document.getElementById('input-food-price') ;
    let rentValue = document.getElementById('input-rent-price');
    let clothesValue = document.getElementById('input-clothes-price');

    //total expenses
    let totalExpenses = parseInt(foodValue.value)+ parseInt(rentValue.value) + parseInt(clothesValue.value);

    document.getElementById('total-expenses').innerText = totalExpenses;
    //input.value = '';
    /*foodValue.value ='';
    rentValue.value ='';
    clothesValue.value ='';*/

    //balance
    let balance = (inputIncome  - totalExpenses);
    return balance;
}

//saving part
function savingMoney(){
    let input= document.getElementById('input-income');
    let inputIncome = parseInt(input.value);

    let saveParcent = document.getElementById('save-parcent');
    let savingAmount = parseInt(saveParcent.value);

    let totalSavingAmount =(inputIncome / 100) * savingAmount;
    return totalSavingAmount;
}

document.getElementById('saving-btn').addEventListener('click', function(){
 
    balance = mainCalculation();
    totalSavingAmount = savingMoney();
     //saving part

    if(balance < totalSavingAmount){
       alert('you dont have sufficient balance !!');
    }

    else {
        document.getElementById('saving-amount').innerText = totalSavingAmount;
    }

    document.getElementById('remaining-balance').innerText = balance - totalSavingAmount ;
})