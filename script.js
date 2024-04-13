console.log("polytech Dijon");
let area = "vide";
const width = 1920;
const height = 1080;
area = height*width;
try {
  
    console.log(height);
    height = 1200;


}catch(exception){
    console.log(exception.message);
    console.log(exception.name);
    console.log(exception.stack);
    console.log(exception.toString());
    console.log(exception);



}

const array = [];
array.push(1);
array.push("vide");
console.log(array);


notTrue = false;
zero = 0;

if (notTrue === zero) {
    console.log("true");
}else{
    console.log("false");
}

const table = [];

for (let i = 0; i < 30; i++) {
    table.push(Math.random());

}

console.log(table);

function  myFunction(table){
    moyenne = 0;
    for (let i = 0; i < table.length; i++) {
        moyenne += table[i];
    }
    moyenne = moyenne/table.length;
    return moyenne;
}

moyenne = myFunction(table);

console.log(moyenne);




    

