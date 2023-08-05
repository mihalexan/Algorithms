function sumTheeNumbers() {
    let sum = 0;
    let num1 = parseInt(prompt("Enter the 1st number: "));
    console.log(` ${num1}` );
    let num2 = parseInt(prompt("Enter the 2nd number: "));
    console.log(` ${num2}` );
    let num3 = parseInt(prompt("Enter the 3rd number: "));
    console.log(` ${num3}` );
    sum = num1 + num2 +num3;
    console.log(`Sum of the 3 numbers is = ${sum}`);
}