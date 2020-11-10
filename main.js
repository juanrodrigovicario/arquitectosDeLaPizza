let comentarios = ["Excelente Servicio", "Muy buen Servicio", "mal servicio","probando serivicio"],
cont = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            q = contenedor.querySelector('.q'),
            tgt = e.target;

            if(tgt==atras){
                if (cont>0){
                    q.src =comentarios[cont -1];
                    cont--;
                }else {
                    q.src = comentarios [comentarios.length -1];
                    cont = comentarios.length -1;
                }
            }else if(tgt==adelante){
                if (cont < comentarios.length -1){
                    q.src =comentarios[cont +1];
                    cont++;
                }else {
                    q.src = comentarios [0];
                    cont =0;
                }
            }
    });
} 

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);   
});