// init an array
let listElement = new Array();
let indexRemove = +prompt("Index of element need remove");
// function input arr
function inputArray(arr) {
    let n = +prompt("Input number of element in array");
    while(n <= 0){
        n = +prompt("Must input number of element more than 0");
    }
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Input element " + i + " in array");
    }
}

// function to remove element by index
function tryRemoveFromArray(arr, index) {
    if (index >= 0 && index < arr.length) {
        for (let i = index; i < arr.length-1; i++) {
            let a;
            a = arr[i];
            arr[i] = arr[i+1]
        }
        arr.length--;
        document.getElementById("result").innerHTML = "New array:" + arr;
    } else {
        document.getElementById("result").innerHTML = "Old array:" + arr;
    }
}
inputArray(listElement);
tryRemoveFromArray(listElement, indexRemove);
