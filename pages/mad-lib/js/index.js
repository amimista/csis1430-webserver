let submitted = false;
let story = 1;
let allInputsCollection = document.getElementsByTagName("input");
let allInputs = new Map();
for (let index = 0; index < allInputsCollection.length; index++) {
  if (!allInputsCollection.item(index).hidden == true) {
    allInputs.set(index, allInputsCollection.item(index));
  }
}
const changeStory = () => {
  if (story == 1) {
    document.getElementById("story-2").hidden = true;
    document.getElementById("story-1").hidden = false;
    reset();
    story = 2;
  } else if (story == 2) {
    document.getElementById("story-2").hidden = false;
    document.getElementById("story-1").hidden = true;
    reset();
    updateLinkedInputs;
    story = 1;

  }
};

const submit = () => {
  console.log("Submitted!");
  for (let index = 0; index < allInputs.size; index++) {
    allInputs.get(index).parentElement.innerText += allInputs.get(index).value;
  }
  submitted = true;
  clearInterval(updateLinkedInputs);
};

const reset = () => {
  if (!submitted) {
    for (let index = 0; index < allInputs.size; index++) {
      allInputs.get(index).value = "";
    }
    submitted = false;
  } else {
    window.location.reload();
    submitted = false;
  }
};

const changeLinkedInputs = (targetID) => {
  document.getElementById(`${targetID}-link`).value =
    document.getElementById(targetID).value;
  if (document.getElementById(`${targetID}-link2`)) {
    document.getElementById(`${targetID}-link2`).value =
      document.getElementById(targetID).value;
  }
};

const updateLinkedInputs = setInterval(() => {
  changeLinkedInputs("noun-3");
  changeLinkedInputs("adjective-1");
}, 300);
