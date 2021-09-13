let el_temprature = document.querySelector("#temprature");
let el_isRaining = document.querySelector("#isRaining");
let el_isOpen = document.querySelector("#isOpen");
let el_result = document.querySelector("#result");

let el_card = document.querySelector("#card");

// console.log(typeof el_temprature.value);

function check_condition() {
  if (
    (el_temprature.value > 5 && el_temprature.value < 30) ||
    (el_isRaining.checked && el_isOpen.checked)
  ) {
    el_result.innerHTML = "YES";
    el_result.style.color = "green";
  } else if (
    (el_isRaining.checked && el_temprature.value > 5) ||
    (el_isRaining.checked && el_temprature.value < 30) ||
    el_isRaining.checked ||
    el_temprature.value < 5 ||
    el_temprature.value > 30 ||
    (el_isRaining.checked && el_temprature.value > 5) ||
    (el_isRaining.checked && el_temprature.value < 30) ||
    (el_isOpen.checked && el_temprature.value < 5)
  ) {
    el_result.innerHTML = "NO";
    el_result.style.color = "red";
  }
}

el_isRaining.addEventListener("click", check_condition);
el_isOpen.addEventListener("click", check_condition);

el_card.addEventListener("keyup", check_condition);

// console.log(el_isOpen.value)
