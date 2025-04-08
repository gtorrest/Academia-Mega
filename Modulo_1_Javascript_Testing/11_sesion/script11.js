function calcularPromedio(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      document.getElementById('resultado').textContent = 'Por favor, ingresa las tres notas.';
      return;
    }

    const promedio = (n1 + n2 + n3) / 3;
    document.getElementById('resultado').textContent = `El promedio es: ${promedio.toFixed(2)}`;
  }