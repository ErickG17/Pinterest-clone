const container = document.getElementById("galleries-container");

// Crear 5 contenedores de columna y agregarlos al contenedor principal
for (let i = 0; i < 5; i++) {
  const column = document.createElement("div");
  column.classList.add("column");
  container.appendChild(column);
}

// Agregar 20 galerías a los contenedores de columna
const columns = document.querySelectorAll(".column");
for (let i = 0; i < 20; i++) {
  const gallery = document.createElement("div");
  gallery.classList.add("responsive");
  
  const galleryContent = document.createElement("div");
  galleryContent.classList.add("gallery");
  
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = "img_mountains.jpg";
  
  const image = document.createElement("img");
  const images = ["https://plus.unsplash.com/premium_photo-1681987448291-1e5985657c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1682009232730-8d396b933b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "","https://images.unsplash.com/photo-1681846125108-03271a22ff38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://unsplash.com/photos/I8BJqUejZJA", "https://images.unsplash.com/photo-1682057628665-9d0d51bae482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
  "https://images.unsplash.com/photo-1682044680656-117c308d985e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", "https://images.unsplash.com/photo-1682621077269-cac5773fbd3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", 
  "https://plus.unsplash.com/premium_photo-1682470058354-9ab742c769e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1682308999971-208126ba75ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80", 
  "https://images.unsplash.com/photo-1682353214260-e6b4b5741c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
   "https://images.unsplash.com/photo-1682643003204-7f1c800d74dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1682660633471-5aa94a734115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80", 
   "https://images.unsplash.com/photo-1680969194467-648f8af9a618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1682641188629-43e045412762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
   "https://images.unsplash.com/photo-1682641922233-aa8487458f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://plus.unsplash.com/premium_photo-1668790939880-175008e583db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80", 
   "https://images.unsplash.com/photo-1681956959633-06035057d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1682641188611-bd12cfabc066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
   "https://plus.unsplash.com/premium_photo-1679607677942-d07fcab72502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80", "https://images.unsplash.com/photo-1681057575626-a0301be28e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80", 
"https://plus.unsplash.com/premium_photo-1680378871613-bfacb34787f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
"https://images.unsplash.com/photo-1682100615199-5a90830ccbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80", "https://images.unsplash.com/photo-1682425515300-2a3ec5b7bf41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1682343159992-249e6ac38f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1682511366293-c34ecd291e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1682553481211-f3b0f6b5859e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1627369457632-5146d262af69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80", "https://images.unsplash.com/photo-1682344329149-1fce68a8b087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1682589182188-47f6f590d77d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1682321297132-3ef961aa764a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", ];
  
function getRandomImageUrl() {
const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];}
  
  image.src = images[i % images.length];
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
