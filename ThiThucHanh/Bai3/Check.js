// input 2 string
let str1 = prompt("Input string 1");
let str2 = prompt("Input string 2");

let arr_str1 = str1.split("");
let arr_str2 = str2.split("");

console.log(arr_str1);
console.log(arr_str2);
var count = 0;
// function to check
function checkStringOneWithStringTwo(arr1, arr2){
    if(arr1.length > arr2.length){
        document.getElementById("result").innerHTML = "String one not in string two";
    }else{
        let flag = false;
        if (arr1.length > arr2.length) {
            flag = false;
        } else {
            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i] === arr2[j]) {
                        flag = true;
                    }
                }
            }
        }
        if (flag) {
            document.getElementById("result").innerHTML = ('String one in string two')
        } else {
            document.getElementById("result").innerHTML = ('String one not in string two')
        }

    }
}

checkStringOneWithStringTwo(arr_str1, arr_str2);