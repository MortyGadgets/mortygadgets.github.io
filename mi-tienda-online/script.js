const products = {
       hogar: [
           { name: "Lámpara de Mesa", price: "$50" },
           { name: "Cortinas", price: "$30" }
       ],
       tecnologia: [
           { name: "Smartphone", price: "$300" },
           { name: "Laptop", price: "$800" }
       ],
       cocina: [
           { name: "Licuadora", price: "$60" },
           { name: "Cafetera", price: "$40" }
       ],
       "audio-video": [
           { name: "Audífonos", price: "$100" },
           { name: "Altavoz Bluetooth", price: "$50" }
       ],
       juguetes: [
           { name: "Lego", price: "$20" },
           { name: "Peluche", price: "$15" }
       ],
       descuentos: [
           { name: "Reloj Inteligente", price: "$120" },
           { name: "Tablet", price: "$150" }
       ]
   };

   document.querySelectorAll(".sidebar a").forEach(link => {
       link.addEventListener("click", (e) => {
           e.preventDefault();
           const category = e.target.getAttribute("data-category");
           showProducts(category);
       });
   });

   function showProducts(category) {
       const productList = document.getElementById("product-list");
       const categoryTitle = document.getElementById("category-title");

       // Actualiza el título de la categoría
       categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

       // Limpia la lista de productos
       productList.innerHTML = "";

       // Muestra los productos de la categoría seleccionada
       products[category].forEach(product => {
           const productDiv = document.createElement("div");
           productDiv.className = "product";
           productDiv.innerHTML = `
               <h3>${product.name}</h3>
               <p>${product.price}</p>
           `;
           productList.appendChild(productDiv);
       });
   }