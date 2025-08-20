document.getElementById('copiar').addEventListener('click', () => {
  const correo = document.getElementById('correo');
  navigator.clipboard.writeText(correo.value).then(() => {
  });
});