const capitalize = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

const reverseString = (text) => {
  return text.split("").reverse().join("");
};

const button = document.querySelector("#testBtn");

button.addEventListener("click", () => {
  alert("Isabella er den bedste!");
});

button.addEventListener("click", () => {
  button.textContent = "Klikket!";
});

const hello = () => {
  console.log("hi");
};

hello();
