function generateLink() {
  const yourName = document.getElementById("yourName").value.trim();
  const valentineName = document.getElementById("valentineName").value.trim();

  if (!yourName || !valentineName) {
    alert("Please enter both names 💔");
    return;
  }

  const url = `result.html?you=${encodeURIComponent(yourName)}&love=${encodeURIComponent(valentineName)}`;
  window.location.href = url;
}
