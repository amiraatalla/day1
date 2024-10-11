function myFunction() {
    let fName = "amira";
    let lName = "reda";
    let age = 20;
    
    document.getElementById('demo').innerHTML = age + " "+fName+" "+lName;

}


function chaneMe() {
    let ph = document.getElementsByClassName('chang');
    ph[0].style.color = 'red';
    // for (let i = 0; i < ph.length; i++) {
    //     ph[i].style.color = 'red';
    // }
}

let name = "amira"
// window.alert(`Hi ${name}!!`)
let num1 , num2 , result ;
num1 = 5 
num2 = 6
result = num1 + num2
alert(result )
alert(typeof(result))


