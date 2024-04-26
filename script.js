let totalTipAmount = 0;
let tipAmountPerPerson = 0;
let totalAmountWithTip = 0;
let totalPricePerPerson = 0;

let tipFee = document.querySelector("#tip-fee");
const btnCalculate = document.querySelector(".calculate");
let selectedPercentage = 0;

function formatedNumber(number) {
    return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function selectPercentage(percentage) {
    selectedPercentage = percentage;

    document.querySelectorAll(".btn-rate").forEach((button) => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
}

tipFee.addEventListener("focus", () => {
    document.querySelectorAll(".btn-rate").forEach((button) => {
        button.classList.remove("active");
    });
});

tipFee.addEventListener("blur", () => {
    selectedPercentage = tipFee.value;
});

btnCalculate.addEventListener("click", () => {
    const value = document.querySelector("#total");
    const numberPeople = document.querySelector("#number-people");

    if (value.value === "" || numberPeople.value === "") {
        alert("Voçe precisa preencher os dados");
    } else {
        totalTipAmount = (parseFloat(value.value) * parseFloat(selectedPercentage)) / 100;
        document.querySelector(".tip-total").textContent = formatedNumber(totalTipAmount);

        tipAmountPerPerson = parseFloat(totalTipAmount) / parseFloat(numberPeople.value);
        document.querySelector(".tip-per-person").textContent = formatedNumber(tipAmountPerPerson);

        totalAmountWithTip = parseFloat(value.value) + parseFloat(totalTipAmount);
        document.querySelector(".total-with-tip").textContent = formatedNumber(totalAmountWithTip);

        totalPricePerPerson = parseFloat(totalAmountWithTip) / parseFloat(numberPeople.value);
        document.querySelector(".total-per-person").textContent =
            formatedNumber(totalPricePerPerson);
    }

    value.value = "";
    numberPeople.value = "";
    tipFee.value = "";
    document.querySelectorAll(".btn-rate").forEach((button) => {
        button.classList.remove("active");
    });
});

document.querySelector("#reset").addEventListener("click", () => {
    const reset = 0;

    document.querySelector(".tip-total").textContent = formatedNumber(reset);

    document.querySelector(".tip-per-person").textContent = formatedNumber(reset);

    document.querySelector(".total-with-tip").textContent = formatedNumber(reset);

    document.querySelector(".total-per-person").textContent = formatedNumber(reset);
});
