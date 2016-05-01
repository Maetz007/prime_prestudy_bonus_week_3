var num = prompt("Please enter a number: ");

function funcA(){
    num=num+4;
    console.log(num);
}
function funcB(){
    num=num*3;
    console.log(num);;
}
function funcC(){
    num=num-5;
    console.log(num);
}
function funcD(){
    num=num/2;
    console.log(num);
}

funcA(funcB(funcC(funcD(num))));
