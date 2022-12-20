let n=parseInt(prompt("enter the value"))
for(i=2;n%i==0;i++){
    a=i;
}
if(n%i==0){
    document.write("not prime");
}
else if(n%1==0 && n%n==0){
    document.write("prime");
}