// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json

const dropdown = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

for (let select of dropdown) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
  }
  if (select.name === "from" && currCode === "USD") {
    newOption.selected = "selected";
  } else if (select.name === "to" && currCode === "INR") {
    newOption.selected = "selected";
  }
  select.append(newOption);
}
