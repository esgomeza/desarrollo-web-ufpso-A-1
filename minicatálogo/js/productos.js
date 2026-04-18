class ProductCard extends HTMLElement{

connectedCallback(){

const nombre = this.getAttribute("nombre");
const precio = this.getAttribute("precio");
const descripcion = this.getAttribute("descripcion");
const imagen = this.getAttribute("imagen");

this.innerHTML = `
<div class="card">

<img src="${imagen}" class="producto-img">

<h3>${nombre}</h3>

<p>${descripcion}</p>

<div class="precio">$${precio}</div>

<button class="btn-comprar">Comprar</button>

</div>
`;

}

}

customElements.define("product-card", ProductCard);


const productos = [

{
nombre:"Chaqueta Deportiva ",
precio:"200.000",
descripcion:"Chaqueta de Running Adizero Essentials",
imagen:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/763cd951dbd644fa8ddbdecf4c544553_9366/Chaqueta_de_Running_Adizero_Essentials_Blanco_IT7586_HM1.jpg"
},

{
nombre:"Tenis Adidas ",
precio:"380.000",
descripcion:"Tenis para hombre. Adidas con diseño deportivo de suela elevada para ofrecer mayor amortiguación y comodidad.",
imagen:"https://lukshop.vtexassets.com/arquivos/ids/835171-800-auto?v=638490462523270000&width=800&height=auto&aspect=true"
},

{
nombre:"Shorts y Pantalonetas de hombre",
precio:"165.000",
descripcion:"Shorts de Entrenamiento D4T PrimeLift Estampado Integral",
imagen:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea6139571fd14fd38d6bcf363c523398_9366/Shorts_D4T_PrimeLift_3_RAYAS_Naranja_KA1197_000_plp_model.jpg"
},

{
nombre:"Camiseta Deportiva hombre sin manga",
precio:"52.000",
descripcion:"Descubre la camiseta deportiva hombre sin manga perfecta para tus entrenamientos con ALETA. Confeccionada en tejido 100% poliéster, esta prenda combina comodidad y estilo. Puedes entrenar al aire libre, gracias a su material con protección UV, además, se adapta a tus movimientos fácilmente. Entrena a gusto, por horas.",
imagen:"https://aleta.com.co/cdn/shop/files/CAMISETA_DEPORTIVA_HOMBRE_MANGA_SISA_NEGRO_1103031_1_0dce5f0a-2f11-40ce-a85f-abce46e1e724.jpg?v=1716480645"
}

];


const catalogo = document.getElementById("catalogo");

productos.forEach(producto =>{

const tarjeta = document.createElement("product-card");

tarjeta.setAttribute("nombre",producto.nombre);
tarjeta.setAttribute("precio",producto.precio);
tarjeta.setAttribute("descripcion",producto.descripcion);
tarjeta.setAttribute("imagen",producto.imagen);

catalogo.appendChild(tarjeta);

});