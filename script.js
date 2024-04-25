let totalTipAmount = 0;
let tipAmountPerPerson = 0;
let totalAmountWithTip = 0;
let totalPricePerPerson = 0;

const btnCalculate = document.querySelector(".calculate");
let selectedPercentage = 0;

function selectPercentage(percentage) {
    selectedPercentage = percentage;

    document.querySelectorAll(".btn-rate").forEach(function removeClassActive(button) {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
}

btnCalculate.addEventListener("click", () => {
    const value = document.querySelector("#total");
    const numberPeople = document.querySelector("#number-people");

    totalTipAmount = (value.value * selectedPercentage) / 100;
    console.log(`Valor da gorjeta: ${totalTipAmount}`);

    tipAmountPerPerson = selectedPercentage / numberPeople.value;
    console.log(`Valor da gorjeta por pessoa: ${tipAmountPerPerson}`);

    totalAmountWithTip = parseFloat(value.value) + selectedPercentage;
    console.log(`Valor total com gorjeta: ${totalAmountWithTip}`);

    totalPricePerPerson = totalAmountWithTip / numberPeople.value;
    console.log(`Valor total por pessoa: ${totalPricePerPerson}`);
});
