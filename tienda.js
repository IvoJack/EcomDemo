setTimeout(function() {
  $(".unowhat").fadeIn(1000);
},8500);


const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);





function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;
  const itemCantidad = item.querySelector('.item_cantidad').value;
// console.log(itemTitle, itemPrice, itemImage, itemCantidad)
  

  addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemCantidad'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
    //   return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent= `
  <div class="row3 shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img class="imgpedido" src=${itemImage} class="shopping-cart-image  ">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0 itemtitulowa">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice itempricewa">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="item_cantidad shoppingCartItemCantidad itemcantidadwa" value="${itemCantidad}" type="number"
                    >
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;


  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow

    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
    

  shoppingCartRow
    .querySelector('.shoppingCartItemCantidad')
    .addEventListener('change', quantityChanged);


    // const changeitemcantidad = 

  updateShoppingCartTotal();
}

function itemchangedcantidad(event){
    

    // const changeitemcantidad =
    // shoppingCartRow2
    // .querySelector('.item-cantidad')
    // .addEventListener('change', quantityChanged);

    
        // const input = event.target;
        // input.value <= 0 ? (input.value = 1) : null;
        // updateShoppingCartTotal();

      
      

 
}

// function addwa(){
// console.log("addwa ->  addwa",  addwa)

//   let text = '';



//   const shoppingCarAddwa = document.querySelector(
//     '.shoppingCartItemsContainer'
//   );
  
//   shoppingCarAddwa.forEach(element => {
//     const buscarsolotext = document.querySelector('.row3')

//     const row3 = $(
//       shoppingCarAddwa.textContent.replace('$', '')
//     );
  
//     text = text + row3;


//   });

// shoppingCartTotal.innerHTML =`${total.toFixed(2)}$`


// }



function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');



  shoppingCartItems.forEach((shoppingCartItem) => {


    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );



    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemCantidad'
      
    );
    

    const shoppingCartItemCantidad = Number(
        shoppingCartItemQuantityElement.value
      );
    //   console.log(shoppingCartItemCantidad)


    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemCantidad;
  });
  shoppingCartTotal.innerHTML =`${total.toFixed(2)}$`
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

// function ocultaritem (){
//     var ocultaritem = document.addEventListener('click', function ocultar(){ $(".item_cantidad").fadeOut(3000)});


    
// }





// setTimeout(function() {
//          $(".unowhat").fadeOut(3000);
//  },19500);


// function resetear()
// {
//   var resetear = document.getElementById("myform").reset();
  
//   document.getElementById("demo").innerHTML =
//   "";
//   document.getElementById("divfantasma2");
//   divfantasma2.style.display='none';divfantasma2.style.transition='0.5s linear';
  


// }

// console.log(itemTitle, itemPrice, itemImage, itemCantidad)



 


function goToPage(){






//  console.log(itemTitle, itemPrice, itemImage, itemCantidad)
// const item = button.closest('.item');

//   const itemTitle = item.querySelector('.item-title').textContent;
//   const itemPrice = item.querySelector('.item-price').textContent;

//   const itemImage = item.querySelector('.item-image').src;
//   const itemCantidad = item.querySelector('.item_cantidad').value;

  var nombre = document.getElementById('entry.1').value;
  var email = document.getElementById('entry.2').value;
  var whatsapp = document.getElementById('entry.3').value;
  var delivery = document.getElementById('entry.4').value;
  var direccion = document.getElementById('entry.5').value;

  // var producto1 = document.getElementsByClassName('itemtitulowa').textContent;
  

  // const itemPrice = item.querySelector('.item-price').textContent;
  // const itemImage = item.querySelector('.item-image').src;
  // const itemCantidad = item.querySelector('.item_cantidad').value;
  // var precio1 = document.querySelector('.1.99$').textContent;
  // var cantidad1 = document.querySelector('.1').value;

  // var producto2 = document.querySelector('.Alitas').textContent;
  // var precio2 = document.querySelector('.5.99$').textContent;
  // var cantidad2 = document.querySelector('.1').value;

  // var producto3 = document.querySelector('.Papas').textContent;
  // var precio3 = document.querySelector('.1.99$').textContent;
  // var cantidad3 = document.querySelector('.1').value;


  // var producto4 = document.querySelector('.Hamburguesa').textContent;
  // var precio4 = document.querySelector('.2.99$').textContent;
  // var cantidad4 = document.querySelector('.1').value;

 

  
  if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
     
    return (document.getElementById("demo").innerHTML =
    "Ingresa tu nombre completo")
  }
  if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
     
    return (document.getElementById("demo").innerHTML =
    "Ingresa tu email")
  }
  if( delivery == null || delivery.length == 0 || /^\s+$/.test(delivery) ) {
     
    return (document.getElementById("demo").innerHTML =
    "Selecciona el sector")
  }
  if( whatsapp == null || whatsapp.length == 0 || /^\s+$/.test(whatsapp) ) {
     
    return (document.getElementById("demo").innerHTML =
    "Ingresa un número de WhatsApp")
  }
  if( direccion == null || direccion.length == 0 || /^\s+$/.test(direccion) ) {
     
    return (document.getElementById("demo").innerHTML =
    "Ingresa tu dirección con con referencia")
  }
  

var myWindow = window.open ("https://midominio.com/"+"Demo Ecommerce BurgerKings" + "%20" + "%0A"+"✅ _Pedido confirmado_" + "%0A"+"_________________________" + "%0A"+"%0A"+
 "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Email*" +"%0A" + email +  "%20" + "%0A"+"%0A"+"*Costo Delivery*"+"%0A" + delivery + "%20" +"%0A"+ "%0A"+"*Direcciòn con referencia*"+"%0A" +direccion+"%0A"+ "%0A"+"%0A"+ "%0A"
+"_________________________" + "%0A" + "%0A"+ "Su pedido es:"  + "%0A" + "%0A");


}