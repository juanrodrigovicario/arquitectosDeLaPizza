// const servicioDeCatering = document.getElementById('button-servicio-catering')
// servicioDeCatering.addEventListener('click', () =>{
//     const inicio = document.getElementById('inicio')
//     const whatsapp = document.getElementById('whatsapp')
//     const nosotros = document.getElementById('nosotros')
//     const tipoDeEvento = document.getElementById('tipo-de-evento')
//     const servicio = document.getElementById('servicio')
//     const clientes = document.getElementById('clientes')
//     const comentarios = document.getElementById('comentarios')
//     const hr1 = document.getElementById('hr1')
//     const hr2 = document.getElementById('hr2')
//     const hr3 = document.getElementById('hr3')
//     inicio.style.display = "none";
//     whatsapp.style.display = "none";
//     nosotros.style.display = "none";
//     tipoDeEvento.style.display = "none";
//     servicio.style.display = "none";
//     clientes.style.display = "none";
//     comentarios.style.display = "none";
//     hr1.style.display = "none";
//     hr2.style.display = "none"; 
//     hr3.style.display = "none";  
// })
// let comentarios = ["Excelente Servicio", "Muy buen Servicio", "mal servicio","probando serivicio"],
// cont = 0;
// function carrousel(contenedor) {
//     contenedor.addEventListener('click', e => {
//         let atras = contenedor.querySelector('.atras'),
//             adelante = contenedor.querySelector('.adelante'),
//             q = contenedor.querySelector('.q'),
//             tgt = e.target;
//             if(tgt==atras){
//                 if (cont>0){
//                     q.src =comentarios[cont -1];
//                     cont--;
//                 }else {
//                     q.src = comentarios [comentarios.length -1];
//                     cont = comentarios.length -1;
//                 }
//             }else if(tgt==adelante){
//                 if (cont < comentarios.length -1){
//                     q.src =comentarios[cont +1];
//                     cont++;
//                 }else {
//                     q.src = comentarios [0];
//                     cont =0;
//                 }
//             }
//     });
// } 
// document.addEventListener("DOMContentLoaded", () => {
//     let contenedor = document.querySelector('.contenedor');
//     carrousel(contenedor);   
// });
"use strict";