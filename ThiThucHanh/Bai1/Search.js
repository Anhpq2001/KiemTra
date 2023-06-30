// init an array
let listMart = new Array();
// function input arr
function inputArray(arr){
    let n = +prompt("Input number of element in array");
    while(n <= 0){
        n = +prompt("Must input number of element more than 0");
    }
    for(let i = 0; i < n; i++){
        arr[i] = +prompt("Input element " + i + " in array");
    }
}
// function to search digit
function checkDigitInNumberThree(arr){
    for(let i = 0; i<arr.length; i++){
        for(j = 0; j<arr.length; j++){
            if(arr[j] < arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    document.getElementById("result").innerHTML = "The mart number 3 in list Mart is: " + arr[2];
}
inputArray(listMart)
checkDigitInNumberThree(listMart)