document.addEventListener("DOMContentLoaded", ()=>{
    fetch('/data')
       .then(reponse => reponse.join())
       .then(date =>{
        const productos = document.getElementById('productos');
        date.forEach(product => {
            const lisItem = document.getElementById('li');
            lisItem.textContent = product.id + "-" + product.producto,
            lisItem.addEventListener('click', ()=>{
                window.location.href = `/producto.html?id=${product.id}`
            });
            productos.apppenChild(lisItem);
        });
       });
});