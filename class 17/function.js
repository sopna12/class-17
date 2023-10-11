function add(num1, num2, num3,) {
    const total = num1 + num2 + num3;

    console.log(total);
    return total;
}
const returnedTotal =   add(10, 20, 30);




function sendMoneyToEmploye(salary, bonus = 0) {
    // const initialBonus = bonus || 0;
    const total = salary + bonus;

    console.log(total);
    return total;
}
const returnedTotals =  sendMoneyToEmploye(300, 500)

const salaryWithTrasportation = returnedTotals + 250;
console.log(salaryWithTrasportation);