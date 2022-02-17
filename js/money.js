
document.getElementById('calculate-btn').addEventListener('click', function(){

   balance = mainCalculation();
   document.getElementById('display-balance').innerText = balance;

});

function inputCalculation(){
    let input= document.getElementById('input-income');
    let inputIncome = parseInt(input.value);
     return inputIncome;
}

function mainCalculation(){
    //error handle for inputField
    inputIncome = inputCalculation();
    let foodInputValue = document.getElementById('input-food-price') ;
    let foodValue = parseInt(foodInputValue.value);
    let rentInputValue = document.getElementById('input-rent-price');
    let rentValue = parseInt(rentInputValue.value);
    let clothesInputValue = document.getElementById('input-clothes-price');
    let clothesValue = parseInt(clothesInputValue.value);

  if(inputIncome ==String|| rentValue==String|| foodValue==String||clothesValue==String){
    return alert("Please write a number");
  }    
  //total expenses
   else{
       let totalExpenses = foodValue + rentValue + clothesValue ;
       document.getElementById('total-expenses').innerText = totalExpenses;

       let balance = inputIncome - totalExpenses;
       return balance;
   }
}

//saving part
function savingMoney(){
    inputIncome = inputCalculation();
    let saveParcent = document.getElementById('save-parcent');
    let savingAmount = parseInt(saveParcent.value);

    let totalSavingAmount =(inputIncome / 100) * savingAmount;
    return totalSavingAmount;
}

document.getElementById('saving-btn').addEventListener('click', function(){
 
    balance = mainCalculation();
    totalSavingAmount = savingMoney();

    if(balance < totalSavingAmount){
       return alert('you dont have sufficient balance !!');
    }
    else {
        document.getElementById('saving-amount').innerText = totalSavingAmount;
    }
    document.getElementById('remaining-balance').innerText = balance - totalSavingAmount ;
})