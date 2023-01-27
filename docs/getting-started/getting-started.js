const preElementsWithCopy = document.getElementsByClassName("copy");

for (const el of preElementsWithCopy) {
  el.style.cursor = "copy";
  el.style.position = "relative";

  const textWithoutDollar = el.innerText.replace("$ ", "");

  const copyBtn = document.createElement("button");
  copyBtn.innerText = "Copy";
  copyBtn.style.position = "absolute";
  copyBtn.style.right = "1em";
  el.appendChild(copyBtn);

  el.addEventListener("click", () => {
    navigator.clipboard.writeText(textWithoutDollar);

    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerText = "Copy";
    }, 3000);
  });
}
