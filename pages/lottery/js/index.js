let lotteryLength = prompt("How many numbers do you want to pick?");

while(parseInt(lotteryLength) >= 6) {
  lotteryLength = prompt("That number is too high! How many numbers do you want to pick?");
}

let lottery = new Array(parseInt(lotteryLength));
let resultOutputList = new Array();

for (let index = 0; index < lottery.length; index++) {
  lottery[index] = Math.ceil(Math.random() * 99);
  resultOutputList.push(`${lottery[index]}`);
}
document.getElementById("result").style.opacity = 1;
document.getElementById("result").style.transform = "translateY(0)";
document.getElementById("result").innerText = resultOutputList.join("-");