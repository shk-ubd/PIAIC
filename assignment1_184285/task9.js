var a,b,c;
a = prompt("Enter the first number: ");
b = prompt("Enter the second number: ");
a=parseInt(a);
b=parseInt(b);
c= a + b;
document.write("The sum of " + a + " and " + b + " is " + c + "<br>");


c= a - b;
document.write("The subtraction of " + a + " and " + b + " is " + c + "<br>" );


c= a * b;
document.write("The multiplication of " + a + " and " + b + " is " + c + "<br>");


c= a % b;
document.write("The modulus of " + a + " and " + b + " is " + c);