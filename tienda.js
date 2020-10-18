setTimeout(function() {
  $(".unowhat").fadeIn(1000);
},8500);





const escucharclic = document.querySelectorAll('.plus');

escucharclic.forEach((clickplus) => {

  clickplus.addEventListener('click', addToCartClicked);

  
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
  const itemtotal = item.querySelector('.item_total');

  addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad, itemtotal);
}



function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemCantidad, itemtotal) {
  

  const multptotal=0;
  const totalppush = document.querySelector('.itemtotal')
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName( 
    'shoppingCartItemTitle'
  );

  for (let i = 0; i < elementsTitle.length; i++) { 
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemCantidad'
        
      );
     

      elementQuantity.value++;
      updateShoppingCartTotal();
      return;

      
 
    }

  }


  
  const shoppingCartRow = document.createElement('div');

  const shoppingCartContent= `
  <div class="row3 shoppingCartItem" id="shop1">
        <span>
        <div class="shopping-cart-item" >
                <img class="imgpedido" src=${itemImage} class="shopping-cart-image  ">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0  " id="itemtitulowa">${itemTitle}</h6>
                </div>
        </span>
        <span>
                <p class="item-price mb-0 shoppingCartItemPrice itempricewa" >${itemPrice}</p>
        </span>
      

        <div class="item_cantidadt">
   
        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
        <input class="quantity item_cantidad  shoppingCartItemCantidad " type="number" name="" min="0" value="${itemCantidad}" id="preciod">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
      </div>


   

            <span class="xcerrar">
                <p class="item-total mb-0 shoppingCartItemTotal itemtotal" >${itemCantidad* Number(itemPrice.replace('$',''))}</p>
                <button id="btn-shop" class="btn btn-danger buttonDelete" type="button"> x </button>
            </span>


    </div>`;




  shoppingCartRow.innerHTML = shoppingCartContent;

  shoppingCartItemsContainer.append(shoppingCartRow);
  shoppingCartRow 

    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
    
    

  shoppingCartRow
    .querySelector('.shoppingCartItemCantidad')
    .addEventListener('change', quantityChanged);



  updateShoppingCartTotal();
}



  function ertd(){

var leteryu = 
    document.getElementById('cardnegocioid').innerHTML =  shoppingCartItemsContainer.childElementCount;

   

  }


  

function updateShoppingCartTotal() {
  let total = 0;
  let productoslist=""
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  var pushlistadeproducots=document.querySelector('.fantasma');


  shoppingCartItems.forEach((shoppingCartItem) => {

    const shopintitle=shoppingCartItem.querySelector(
      '.shoppingCartItemTitle'
    ).textContent;



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
      //console.log(shoppingCartItemCantidad)

     const shoppingCartItemQuantity = Number(
       shoppingCartItemQuantityElement.value
     );
    total = total + shoppingCartItemPrice * shoppingCartItemCantidad;
    

    productoslist=productoslist+shoppingCartItemCantidad+"%20"+"*x*"+" | "+shopintitle+" | "+"precio"+"%20"+shoppingCartItemPrice+" | "+"total:"+"%20"+"%0A";
  
   
  });
  shoppingCartTotal.innerHTML =`$${total.toFixed(2)}`;
  pushlistadeproducots.innerHTML=`${productoslist}`;
  ertd();
  
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




$("#ordernumber").val(function(){
  return Math.floor(Math.random() * 999) + 1000
})






function goToPage(){
  


var orden = document.getElementById('ordernumber').value;  
var nombre = document.getElementById('entry.1').value;
  var email = document.getElementById('entry.2').value;
  var whatsapp = document.getElementById('entry.3').value;
  var delivery = document.getElementById('entry.4').value;
  var direccion = document.getElementById('entry.5').value;
  

  var totalf = document.getElementById('totalwa').textContent;


  var totalfp = Number(
    totalf.replace('$', '')
  );if( totalfp <= 10|| /^\s+$/.test(totalfp) )  {
    return (document.getElementById("demo").innerHTML =
    "Tu pedido es menor $10.00")
  
}


var radios = document.getElementsByName('ok2');


for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
 
    var retornapagos = (radios[i].value);

 

  }
}


  

var mostrarpedidof=document.querySelector('.fantasma').textContent;


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






  
  

// var myWindow = window.open ("https://midominio.com/"+"Demo Ecommerce BurgerKings" + "%20" + "*WhatsBulkSender™*" + "%0A"+"✅  _Pedido confirmado_" + "Orden N°"+orden + "%0A"+"_________________________" + "%0A"+"%0A"+
//  "*Nombre*" +"%0A" + nombre + "%20" +"%0A"+"%0A" +"*Email*" +"%0A" + email +  "%20" + "%0A"+"%0A"+"*Costo Delivery*"+"%0A" + delivery + "%20" +"%0A"+ "%0A"+"*Dirección con referencia*"+"%0A" +direccion+"%0A"+totalf+ pedidof+ "%0A"+"%0A"+
//   "%0A"+"%0A"+ "%0A" +"_________________________" + "%0A" + "%0A"+"*P.D.*"+ "%20"+ "Guarda nuestro contacto como  para recibir 15 minutos antes el link de Zoom. Empezamos puntual 😉👍");



var myWindow = window.open("https://midominio.com/"+"*Demo Ecommerce FastFood*" + "%20" + "*WhatsBulkSender™*" + "%0A"+"✅ *Pedido confirmado*"+"%0A"+"_Orden N°_"+ "%20"+"---"+"%20"+orden+"%20"+"---"+ "%0A"+"_________________________" + "%0A"+"%0A"+"*Tu pedido es:*"+ "%0A"+ "%0A"+mostrarpedidof+ "%0A"+ "%0A"+"*Total:*"+ "%20"+totalfp+ "%0A"+"_________________________"+ "%0A"+"%0A"+
 "*Nombre:*" +"%20"+ nombre+"%0A"+"*Email:*" +"%20" + email+"%0A"+"*Costo Delivery:*"+"%20" + delivery+"%0A"+"*Dirección con referencia:*"+"%20" +direccion+"%0A" +"_________________________"  + "%0A"+"%0A"+"*Forma de pago:*"+"%0A"+ retornapagos+"%0A"+"%0A"+"*Total:*"+ "%20"+totalfp+"%0A"+"%0A"+ "_Para ver más demos ingresa al siguiente link:_"+"%0A");



}

$("#boton").on("click",function(event){
  event.preventDefault();

});



// animacion formas de pago 

$('.eti1').on('click', function(){
  $('.datos1').addClass('show btnpagos');
 
  $('.datos2').removeClass('show btnpagos');
  $('.datos3').removeClass('show btnpagos');
  $('.datos4').removeClass('show btnpagos');

})


$('.eti2').on('click', function(){
  $('.datos2').addClass('show btnpagos');
  $('.datos1').removeClass('show btnpagos');
  $('.datos3').removeClass('show btnpagos');
  $('.datos4').removeClass('show btnpagos');
})

$('.eti3').on('click', function(){
  $('.datos3').addClass('show btnpagos');
  $('.datos1').removeClass('show btnpagos');
  $('.datos2').removeClass('show btnpagos');
  $('.datos4').removeClass('show btnpagos');
})

$('.eti4').on('click', function(){
  $('.datos4').addClass('show btnpagos');
  $('.datos1').removeClass('show btnpagos');
  $('.datos2').removeClass('show btnpagos');
  $('.datos3').removeClass('show btnpagos');
})

// stylos input

$('.btn-plus, .btn-minus').on('click', function(e) {
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.input-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})

