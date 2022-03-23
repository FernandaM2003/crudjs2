document
.getElementById("producto-formulario")
.addEventListener("submit", function(evento)
{
    evento.preventDefault();

    //Obtener los valores del formulario
    const nombre= document.getElementById("nombre").value,
          precio= document.getElementById("precio").value,
          año= document.getElementById("año").value;

    //Crear un nuevo objeto (Es para ingresar producros)
    const producto = new Product (nombre, precio, año);
    
    //Crear un nuevo usuario de interfaz
    const ui = new UI();


    //Inpput para la validación de los datos
    if (nombre === " " || precio === " " || año === " " )
    {
        ui.showMessage("Recuerde llenar los campos del formulario");  
    }

    //Guardar datos
    ui.addProduct(producto),
    ui.showMessage("Producto Agregado Exitosamente :)"); 
    ui.resetFrom();
});

document.getElementById("producto-lista").addEventListener("click", (e) =>{
     const ui = new UI();
     ui.deleteProducto(e.target);
     e.preventDefault();
});


//Clase Producto

class Producto
{
    constructor(nombre, precio, año)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}


//Clase Usuario interfaz

class UI
{
  addProduct(producto)
  {
      const productoLista = document.getElementById("producto-lista");
      const elemento = document.createElement("div");
      elemento.innerHTML=`
      <div class="tarjeta texto margen4">
<div class="tarjeta-body">
<strong> PRODUCTO </strong> :  ${producto.nombre}-
<strong> PRECIO </strong> :  ${producto.precio}-
<strong> AÑO </strong> :  ${producto.año}-
<a href="" class="btn btn-error" name="eliminar" > Eliminar  </a> 
</div>
</div>
`;

productoLista.appendChild(element); //appendChild es un elemento fijo

//resetear datos de formulario
resetFrom(element)
{
document.getElementById("producto-formulario").reset();
}

deleteProducto(elemento)
{
    if(elemento.nombre === "eliminar")
    {
        element.parentElement.parentElement.remove();
        this.showMessage("El Producto se ha Eliminado Exitosamente :)")
    }
}

showMessage(mensaje, cssClass)
{
  const div = document.createElement("div");
  div.className = `alert alert-${cssClass}`;
  div.appendChild(document.createTextNode(mensaje));
}


//Mostrar en el DOM
const contenido = document.querySelector(".container")
const app = document.querySelector("#App")
    //Insertar mensaje en el interfaz usuario
    container.insertBefore(div, app);

    //Remover el mensaje luego de tres segundos

    setTimeout(function ()
    {
        document.querySelector(".alert").remove();
    }, 3000);

}
}