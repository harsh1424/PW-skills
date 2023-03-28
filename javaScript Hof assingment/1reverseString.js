let input = "PW skillls";

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr
}


setTimeout(() =>{
    console.log(reverseString(input))
}, 2000)