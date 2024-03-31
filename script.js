function anAlert() {
    alert("Assignment By M.Awais")
}
function prName() {
    let myname = document.getElementById("input").value
    document.getElementById("statement").innerHTML = "Enter your Name in Input field."
    if (myname == null) {
        alert("please! enter some text")
    }
    else {
        document.getElementById("output").innerHTML = myname
    }
}
// Cities Array /////////////////////////////////////////////////////////////////////////////////
let cities = ["Lahore", "Faisalabad", "Karachi", "Sialkot", "Multan", "Islamabad"]
for (let index = 0; index < cities.length; index++) {
    document.getElementById("statement").innerHTML += index + 1 + ")" + cities[index] + "&ensp;"
}
//  print all cityes 
function prCities() {
    document.getElementById("output").innerHTML = " "
    for (let index = 0; index < cities.length; index++) {
        document.getElementById("output").innerHTML += index + ")" + cities[index] + "<br>"
    }
}
// Add a City 
function adCities() {
    if (cities[cities.length] == " ") {
        alert("please Enter city")
    }
    else {
        cities.push(document.getElementById("input").value)
    }
}
// Print table 
function gTable() {
    let num = +prompt("Table of which Number")
    document.getElementById("output").innerHTML = "<h2 class='text-success'>Table of" + " " + num + "</h2>"
    for (let i = 1; i <= 10; i++) {
        document.getElementById("output").innerHTML += num + "x" + i + " = " + num * i + "<br>"
    }
}
// Clear output bttoon
function clearop(){
    document.getElementById("output").innerHTML =" "
}
// clear I/O field 
function clearinp(){
    document.getElementById(input).innerHTML=" "
}