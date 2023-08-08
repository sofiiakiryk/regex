const submitButton = document.getElementById("submitButton");
const displayValues = document.getElementById("displayValues");
const displayDates = document.getElementById("displayDates");

submitButton.addEventListener("click", function () {
  const noteValue = document.getElementById("note").value;
  const textareaValue = document.getElementById("textarea").value;
  const combinedValue = noteValue + " " + textareaValue;
  displayValues.innerHTML = `Значення: ${combinedValue}`;

  const datePattern = /\d{2}\.\d{2}\.\d{4}/g;
  const dates = combinedValue.match(datePattern);

  if (dates) {
    const formattedDates = dates.join(", ");
    displayDates.innerHTML = `Перелік дат: ${formattedDates}`;
  } else {
    displayDates.innerHTML = "Перелік дат: відсутні";
  }
});
