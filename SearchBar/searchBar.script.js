/* Barra de busqueda */

const searchInput = document.getElementById('search');
const searchMessage = document.getElementById('search-message');

searchInput.addEventListener('click', function () {
    searchMessage.style.display = 'block';

    // Crear un elemento de párrafo y agregarlo al elemento de mensaje
    const messageText = document.createElement('p');
    messageText.textContent = 'Estas son las imágenes relacionadas con tu búsqueda.';
    searchMessage.appendChild(messageText);

    // Crear una tabla y agregarla al elemento de mensaje
    const table = document.createElement('table');
    searchMessage.appendChild(table);

    // Crear dos filas y agregarlas a la tabla
    const row1 = table.insertRow();
    const row2 = table.insertRow();

    // Crear tres celdas para la primera fila y agregarlas a la fila
    const cell11 = row1.insertCell();
    const cell12 = row1.insertCell();
    const cell13 = row1.insertCell();

    // Establecer el contenido de las celdas
    cell11.textContent = 'Celda 1-1';
    cell12.textContent = 'Celda 1-2';
    cell13.textContent = 'Celda 1-3';

    // Crear tres celdas para la segunda fila y agregarlas a la fila
    const cell21 = row2.insertCell();
    const cell22 = row2.insertCell();
    const cell23 = row2.insertCell();

    // Establecer el contenido de las celdas
    cell21.textContent = 'Celda 2-1';
    cell22.textContent = 'Celda 2-2';
    cell23.textContent = 'Celda 2-3';

    // Crear más filas y celdas según sea necesario y agregarlas a la tabla

});

searchInput.addEventListener('blur', function () {
    searchMessage.style.display = 'none';
});