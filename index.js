let sec1=document.getElementById("sec1")
let sec2=document.getElementById("sec2")

let display=document.getElementById("display")


let a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;


function input1(data)
{
    console.log(data);
    a=Number(data.value)
    console.log(a);
    display.value+=`${a}`
    
}
console.log(display.value);

function input2(data)
{
    b=Number(data.value)
    console.log(b);

    display.value+=`${b}`
    
}

function input3(data)
{
    c=Number(data.value)
    console.log(c);
display.value+=`${c}`}

function input4(data)
{
    d=Number(data.value)
    console.log(d);
display.value+=`${d}`}

function input5(data)
{
    e=Number(data.value)
    console.log(e);
display.value+=`${e}`}

function input6(data)
{
    f=Number(data.value)
    console.log(f);
display.value+=`${f}`}

function input7(data)
{
    g=Number(data.value)
    console.log(g);
display.value+=`${g}`}

function input8(data)
{
    h=Number(data.value)
    console.log(h);
display.value+=`${h}`}

function input9(data)
{
    i=Number(data.value)
    console.log(i);
display.value+=`${i}`}

function inputZero(data)
{
    j=Number(data.value)
    console.log(j);
display.value+=`${j}`}


function inputEqual(data)
{
    
    display.value=`${eval(display.value)}`
    console.log(`${eval(display.value)}`);

}

//! eval is the most important method to create a calcultor by using any language 
    

function inputPlus()
{
    console.log("+")
    display.value+=`+`
}

function inputMinus()
{
    console.log("-")
    display.value+=`-`
}
function inputMultiply()
{
    console.log("*")
    display.value+=`*`
}
function inputMinus()
{
    console.log("-")
    display.value+=`-`
}
function inpDivision()
{
    console.log("/")
    display.value+=`/`
}
function inpRemainder()
{
    console.log("%")
    display.value+=`%`
}
function inpDel()
{

   console.log(display.value=display.value.slice(String.length-1,String.length-2)); 
}

function AC()
{
    a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;
    display.value=``
}


