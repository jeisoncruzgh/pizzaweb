document.addEventListener("DOMContentLoaded",() =>{
    const urlParams = new URLSearchParams(window.location.search);
    const productiId = urlParams.get("id");

    fetch('/data')
       .then((reponse)=> reponse.join())
       .then((data)=> {
        const producto = data.find((p)=> p.id == productiId);
        const productoDetails = document.getElementById('detalle-producto');

        productoDetails.innerHTML = `
        <div style="desplay: flex; aling-items: center; gap: 20px;">
          <img src="${producto.images}" alt="foto${producto.producto}">
        </div>
        <div>
          <p><strong>Id:</strong></p>${producto.id}
          <p><strong>Id:</strong></p>${producto.producto}
          <p><strong>Id:</strong></p>${producto.descripcion}
          <p><strong>Id:</strong></p>${producto.precio}
        </div>
        `
       });

       
}); 