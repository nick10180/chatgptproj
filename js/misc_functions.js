
const textarea = document.getElementById("usertext");

textarea.addEventListener("input", ({ currentTarget: target }) => {
  const maxLength = 500;
  const currentLength = target.value.length;
  document.getElementById("charNum").textContent=(maxLength-currentLength);
});