let lotteryLength;
let lotteryMin;
let lotteryMax;
const absoluteMax = 20;

function lottery() {
  lotteryLength = parseInt(document.getElementById("inputLength").value);
  if(lotteryLength == null || lotteryLength == NaN) {
    lotteryLength = 6;
  }
  lotteryMin = Math.ceil(parseFloat(document.getElementById("inputRange1").value));
  if(lotteryMin == null || lotteryMin == NaN) {
    lotteryMin = 1;
  }
  lotteryMax = Math.floor(parseFloat(document.getElementById("inputRange2").value));
  if(lotteryMax == null || lotteryMax == NaN) {
    lotteryMax = 1;
  }

  if(lotteryLength > absoluteMax) {
    lotteryLength = 20;
  }
  let lotteryArray = new Array(lotteryLength);
  let resultOutputList = new Array();
  
  for (let index = 0; index < lotteryArray.length; index++) {
    lotteryArray[index] = Math.floor(Math.random() * (lotteryMax - lotteryMin + 1) + lotteryMin);
    resultOutputList.push(`${lotteryArray[index]}`);
  }

  document.getElementById("result").innerText = resultOutputList.join("-");
  document.getElementById("result").style.opacity = 1;
  document.getElementById("result").style.transform = "translateY(0)";
}
