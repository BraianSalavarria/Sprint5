 // Filtrado de tabla en tiempo real
    document.getElementById('filtroPais').addEventListener('input', function() {
        const filtro = this.value.toLowerCase();
        const filas = document.querySelectorAll('#tablaPaises tbody tr');
        filas.forEach(fila => {
            const nombre = fila.querySelector('td').textContent.toLowerCase();
            fila.style.display = nombre.includes(filtro) ? '' : 'none';
        });
    });