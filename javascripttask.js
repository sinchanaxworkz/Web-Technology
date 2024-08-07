console.log("Good Morning");
//Named function
function building(){
    console.log("This is named Function");
}
building();

//Self-invoking function

(function (){
    console.log("This is self invoking Function");
}())

//Arrow Function

const arrowFunction = () => {
    console.log("This is Arrow Function");
}

arrowFunction();

// Named Function Example
function fan(a,b){
    console.log("A value is " , a);
    console.log("B value is ", b);
    console.log(typeof(a));
    console.log(typeof(b));
    let total = a - Number(b);
    console.log(total);

    document.getElementById("mull").innerHTML = total
}
fan(40,"30")



//Heading

document.getElementById("Heading1").innerHTML = "<h2 style='color:green'>Summary</h2>"
document.getElementById("Heading2").innerHTML = "<h2 style='color:blue'>conclusion</h2>"
document.getElementById("Heading3").innerHTML = "<h2 style='color:pink'>system design</h2>"


//Paragraph

document.getElementById("Paragraph1").innerHTML = "<p style='color:blue'> im sinchana shetty i cmplted my BE in information science from sdmit clg ujire my technical skils are html css java bootstrap</p>"
document.getElementById("Paragraph2").innerHTML = "<p style='color:orange'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, asperiores!</p>"
document.getElementById("Paragraph3").innerHTML = "<p style='color:yellow'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, placeat eaque saepe neque magni explicabo fugit excepturi quo asperiores minus!</p>"



document.getElementById("table").innerHTML = "<tr> <th>EmpId</th> <th>First Name</th> <th>Last Name</th> <th>Email</th> <th>DOB</th></tr> <tr> <td>01</td> <td>Sinchi</td> <td>Shetty</td> <td>shettysinchi@321</td> <td>13-02-2003</td> </tr> <tr> <td>02</td> <td>raksh</td> <td>Shetty</td><td>rasha@321gmail.com</td> <td>14-01-2003</td> </tr>"




function formSubmit(event) {
    event.preventDefault()
    let fName = document.getElementById("name");
    let length = fName.value.length;
    console.log(length , fName.value , "          " , fName.placeholder , "           " , fName.type);
    document.getElementById("displayName").innerHTML = fName.value;
}

const clickMe = () => {
    document.getElementById("good").style.color = "blue"
}