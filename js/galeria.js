let imagen_abierta = false;
document.querySelectorAll('.section_galeria__list--item').forEach(item =>{
        item.addEventListener('click', ()=>{
            if (!imagen_abierta){
                imagen_abierta = true;

                item.style.width = '100%';
                item.style.height = '100svh';

                item.style.display = 'flex'

                item.style.position = 'fixed';
                item.style.top = 0;
                item.style.left = 0;
                item.style.zIndex = 1500;

                document.getElementById('video').setAttribute('controls', true);
            }

            else if (imagen_abierta){
                imagen_abierta = false;
                item.style.width = 'auto';
                item.style.height = 'auto';

                item.style.position = 'relative';
                item.style.top = 'auto';
                item.style.left = 'auto';
                item.style.zIndex = 0;

                document.getElementById('video').removeAttribute('controls', true);

            }
        })
    }
)