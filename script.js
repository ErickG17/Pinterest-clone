const container = document.getElementById("galleries-container");

// Crear 5 contenedores de columna y agregarlos al contenedor principal
for (let i = 0; i < 5; i++) {
  const column = document.createElement("div");
  column.classList.add("column");
  container.appendChild(column);
}

// Agregar 20 galerías a los contenedores de columna
const columns = document.querySelectorAll(".column");
for (let i = 0; i < 40; i++) {
  const gallery = document.createElement("div");
  gallery.classList.add("responsive");
  
  const galleryContent = document.createElement("div");
  galleryContent.classList.add("gallery");
  
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = "img_mountains.jpg";
  
  const image = document.createElement("img");
  image.src = "https://i.pinimg.com/474x/35/b2/76/35b2766769ba66638f6eb92be9f46811.jpg";
  image.alt = "Mountains";
  image.width = "600";
  image.height = "400";
  
  const description = document.createElement("div");
  description.classList.add("desc");
  description.textContent = "Add a description of the image here";
  
  // Calcular el índice de la columna correspondiente
  const columnIndex = i % 5;
  
  // Agregar los elementos al árbol de elementos de la columna correspondiente
  link.appendChild(image);
  galleryContent.appendChild(link);
  galleryContent.appendChild(description);
  gallery.appendChild(galleryContent);
  columns[columnIndex].appendChild(gallery);
  
  // Agregar un separador para mantener la estructura de columnas
  const clearFix = document.createElement("div");
  clearFix.classList.add("clearfix");
}