const type = document.getElementById("type");
const robux = document.getElementById("robux");
const resultElement = document.getElementsByClassName("result")[0];
const calculate = document.getElementsByClassName("calculate")[0];

var result = 0.0;

resultElement.innerHTML = result.toFixed(2);

const calculateResult = () => {
  if (type.value === "devex") {
    result = +robux.value * 0.0035;
    resultElement.innerHTML = result.toFixed(2);
  } else if (type.value === "purchase") {
    result = +robux.value * 0.0125;
    resultElement.innerHTML = result.toFixed(2);
  }
};
