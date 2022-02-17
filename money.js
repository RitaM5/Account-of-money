
document.getElementById('calculate-btn').addEventListener('click', function(){

    if('input-income'=='string'||'input-food-price'=='string'||'input-rent-price'=='string'||'input-clothes-price'=='string'){
        alert('please write a number');
     }
    else if('input-income'>0||'input-food-price'>0||'input-rent-price'>0||'input-clothes-price'>0){
        alert('write a positive value');
    }

    let input= document.getElementById('input-income');
    let inputIncome = input.value;
    //error handle for inputField
   
    let foodValue = document.getElementById('input-food-price') ;
    let rentValue = document.getElementById('input-rent-price');
    let clothesValue = document.getElementById('input-clothes-price');

  
    //total expenses
    let totalExpenses = parseInt(foodValue.value)+ parseInt(rentValue.value) + parseInt(clothesValue.value);

    document.getElementById('total-expenses').innerText = totalExpenses;
    input.value = '';
    foodValue.value ='';
    rentValue.value ='';
    clothesValue.value ='';

    //balance
    let balance = (parseInt(inputIncome ) - totalExpenses);
    document.getElementById('display-balance').innerText = balance;
})