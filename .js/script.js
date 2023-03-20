let productos = [];
console.log(productos);
let tbody = document.getElementById("bodyTable");


const form = document.getElementById("form");
form.addEventListener("submit", addProduct);

function addProduct(event) {
  event.preventDefault();

  const name1 = document.getElementById("name1");
  const amount = document.getElementById("amount1");
  const price = document.getElementById("price1");
  const category = document.getElementById("category");
 

  const producto = {
    name: name1.value,
    amount: amount.value,
    price: price.value,
    category: category.value,
  };

  productos.push(producto);
  printProduct(tbody, productos);
  console.log(productos);
}

function printProduct(tbody, productList) {
  tbody.innerHTML = "";

  productList.forEach((element, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.amount}</td>
        <td>${element.category}</td>
        <td>
          <button class="boton eliminar" data-index="${index}">Eliminar</button>
          <button class="boton actualizar" data-index="${index}">Actualizar</button>
        </td>    
      </tr>
    `;
  });
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminar")) {
    const index = event.target.getAttribute("data-index");

    productos.splice(index, 1);

    const tbody = document.getElementById("bodyTable");

    printProduct(tbody, productos);

    sessionStorage.setItem("productos", JSON.stringify(productos));
  }


if (event.target.classList.contains("actualizar")) {
    const index = event.target.getAttribute("data-index");
    const producto = productos[index];
    const form = document.getElementById("formActualizar");
    const updatedName = document.getElementById("name2").value;
    const updatedAmount = document.getElementById("amount2").value;
    const updatedPrice = document.getElementById("price2").value;
    const updatedCategory = document.getElementById("category2").value;
  
    const updatedProduct = {
        name: updatedName,
        amount: updatedAmount,
        price: updatedPrice,
        category: updatedCategory,
      };
  
      productos[index] = updatedProduct;
      printProduct(tbody, productos);
      sessionStorage.setItem("productos", JSON.stringify(productos));
      
      formActualizar.reset();
    }

});

// let productos = [];
// console.log(productos);
// let tbody = document.getElementById("bodyTable");

// const form = document.getElementById("form");
// form.addEventListener("submit", addProduct);

// function addProduct(event) {
//   event.preventDefault();

//   const name1 = document.getElementById("name1");
//   const amount = document.getElementById("amount1");
//   const price = document.getElementById("price1");
//   const category = document.getElementById("category");
 

//   const producto = {
//     name1: name1.value,
//     amount: amount.value,
//     price: price.value,
//     category: category.value,
//   };

//   productos.push(producto);

//   printProduct(tbody, productos);
// }

// function printProduct(tbody, productList) {
//   tbody.innerHTML = "";

//   productList.forEach((element, index) => {
//     tbody.innerHTML += `
//       <tr>
//         <td>${element.name1}</td>
//         <td>${element.price}</td>
//         <td>${element.amount}</td>
//         <td>${element.category}</td>
//         <td>
//           <button class="boton eliminar" data-index="${index}">Eliminar</button>
//           <button class="boton actualizar" data-index="${index}">Actualizar</button>
//         </td>    
//       </tr>
//     `;
//   });
// }

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("eliminar")) {
//     const index = event.target.getAttribute("data-index");

//     productos.splice(index, 1);

//     const tbody = document.getElementById("bodyTable");

//     printProduct(tbody, productos);

//     sessionStorage.setItem("productos", JSON.stringify(productos));
//   }

//   if (event.target.classList.contains("actualizar")) {
//     const index = event.target.getAttribute("data-index");
//     const producto = productos[index];
//     const form = document.getElementById("formActualizar");
//     const name = document.getElementById("name2");
//     const amount = document.getElementById("amount2");
//     const price = document.getElementById("price2");
//     const category = document.getElementById("category2");
    

//     name.value = producto.name1;
//     amount.value = producto.amount;
//     price.value = producto.price;
//     category.value = producto.category;

//     form.addEventListener("submit", (event) => {
//       event.preventDefault();

//       producto.name1 = name.value;
//       producto.amount = amount.value;
//       producto.price = price.value;
//       producto.category = category.value;

     

//      updateProduct(index, producto);
//       //printProduct(tbody, productos);

//       sessionStorage.setItem("productos", JSON.stringify(productos));
//     });
//   }
// });
// function updateProduct(productIndex, updatedProduct) {
//     productos[productIndex] = updatedProduct;
//     printProduct(tbody, productos);
//   }