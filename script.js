var count = document.getElementById("counter");

function myFunction() {
    // var currentValue = parseInt(count.innerText);
    var x = parseInt(count.innerText)
    console.log(x);
    count.innerText = x + 1;
}

function myFunction1() {
    var y = parseInt(count.innerText)
    count.innerText = y - 1;
}


document.getElementById("btn").addEventListener("click", myFunction);
document.getElementById("btn1").addEventListener("click", myFunction1);