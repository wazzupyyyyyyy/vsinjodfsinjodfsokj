let grade = prompt("Enter your grade:");
switch(grade){
    case 'A':
        document.getElementById("message").innerHTML = "Excellent";
        break;
    case 'B':
        document.getElementById("message").innerHTML = "Excellent";
        break;
    case 'C':
        document.getElementById("message").innerHTML = "You passed!";
        break;
    case 'D':
        document.getElementById("message").innerHTML = "Needs improvment";
        break;
    case 'F':
        document.getElementById("message").innerHTML = "Failed";
        break;
}

let grade2 = prompt("Enter your grade:");
if(grade2 === 'A' || grade2 === 'B'){
    document.getElementById("message1").innerHTML = "Excellent";
}
else if(grade2 === 'C'){
    document.getElementById("message1").innerHTML = "You passed";
}
else if(grade2 === 'D'){
    document.getElementById("message1").innerHTML = "Needs improvement";
}
else if(grade2 === 'F'){
    document.getElementById("message1").innerHTML = "Failed";
}
else{
    document.getElementById("message1").innerHTML = "COOKED";
}

//First prac
let idHave = prompt("Do you have an ID?").toLowerCase();
switch(idHave){
    case 'yes':
        document.getElementById("welcome").innerHTML = "Welcome to the event!";
        break;
    default:
        document.getElementById("welcome").innerHTML = "Please show your ID.";
}


//2nd prac cannot be done due to the simple fact that it uses 2 variables

//3rd prac cannot be done due to the simple fact that it uses numbers and switch needs to account for all numbers in that range so this cannot be done

//4th prac
let choice = prompt("Choose your promo").toUpperCase();

if(choice === 'A'){
    document.getElementById("tele").innerHTML = "1GB for 1 day";
}
else if(choice === 'B'){
    document.getElementById("tele").innerHTML = "5GB for 7 days";
}
else if(choice === 'C'){
    document.getElementById("tele").innerHTML = "10GB for 30 days";
}
else{
    document.getElementById("tele").innerHTML = "Invalid choice";
}

//5th prac cannot be done cuz its a loop
