
document.getElementById('calculate-btn').addEventListener('click', function(){

   balance = mainCalculation();
  if(balance) {
      document.getElementById('display-balance').innerText = balance;
    }
});

function inputCalculation(){
    let input= document.getElementById('input-income');
    let inputIncome = parseInt(input.value);
     return inputIncome;
}

function mainCalculation(){
    inputIncome = inputCalculation();
    let foodInputValue = document.getElementById('input-food-price') ;
    let foodValue = parseInt(foodInputValue.value);

    let rentInputValue = document.getElementById('input-rent-price');
    let rentValue = parseInt(rentInputValue.value);

    let clothesInputValue = document.getElementById('input-clothes-price');
    let clothesValue = parseInt(clothesInputValue.value);
//error handle for inputField
  if(isNaN(inputIncome)|| isNaN(rentValue)|| isNaN(foodValue)||isNaN(clothesValue)){
    return alert("Please write a number !!");
  } 
  else if(inputIncome<0||foodValue<0||rentValue<0||clothesValue<0){
      return alert('Please write a positive number !!');
      
  }   
//total expenses and balance
   
     else {let totalExpenses = foodValue + rentValue + clothesValue ;

         if(inputIncome >= totalExpenses) {
             document.getElementById('total-expenses').innerText = totalExpenses;
           let balance = inputIncome - totalExpenses;
           return balance;
        }
        else{
            return alert('It cost more then your total money !');
        }
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
//for save btn
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