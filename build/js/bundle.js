document.addEventListener('DOMContent', function(){
    scrollNav();

    navegacionFija();
});

function navegacionFija(){
    
}

function scrollNav(){
    const enlaces=document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();

            const seccion=document-querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior:'smooth',
            });
        });
    });
}
document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
})

function crearGaleria() {
    const galeria=document.querySelector('.galeria-imagenes');
    for(let i=1;i<=12;i++){
        const imagen=document.createElement('IMG');
        console.log(imagen);
        imagen.src=`build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId=i;
        //Añadir funcion mostrarImagen
        imagen.onclick=mostrarImagen;

        const lista= document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
    
}

function mostrarImagen(e){
    const id= parseInt(e.target.dataset.imagenId);
    //Generar la imagen
    const imagen=document.createElement('IMG');
    imagen.src=`build/img/grande/${id}.webp`;

    const overlay=document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se da click cerrar la imagen
    overlay.onclick=function(){
        overlay.remove();
    }

    //Boton cerrar imagen
    const cerrarImagen=document.createElement('P');
    cerrarImagen.textContent='X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se presiona se cierra la imagen
    cerrarImagen.onclick=function(){
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen);
    //Mostrar en el HTML
    const body=document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

