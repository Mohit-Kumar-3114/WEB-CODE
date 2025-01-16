let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")

b1.onclick=()=>{
    alert("hi i am alert")
}

b2.onclick = function() {
    let userInput = prompt("Please enter your name:");
    if (userInput) {
        alert(`Hello, ${userInput}!`);
    } else {
        alert("You didn't enter anything.");
    }
};

b3.onclick = function() {
    const userConfirmed = confirm("Do you want to proceed?");
    if (userConfirmed) {
      console.log("User clicked OK.");
    } else {
      console.log("User clicked Cancel.");
    }
  };