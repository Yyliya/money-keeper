'use strict';

let money = 'Ваш бюджет на месяц?';
let time = 'Введите дату в формате YYYY-MM-DD';

let appData = {
   budget: money,
    timeData: time, 
    optionalExpenses: {},
    income: [],
    savings: false,


    answer: prompt('Введите обязательную статью расходов в этом месяце', '1000$'),
    price: prompt('Во сколько обойдется?', '100$'),
    expenses: {
       answer: 'price'
    },
    
};

alert('Бюджет на один день 333$');

