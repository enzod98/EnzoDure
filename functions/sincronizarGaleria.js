const Foto = require('../models/foto');
const respuesta= require('../response.json')
let posts= respuesta.last_post;
guardarFotos(posts);
/* const axios = require("axios");

axios({
    aqui va el aux
    }
    })
    .then((response)=>{
        console.log(response);
        let posts = response.last_post;
        console.log(posts);
      guardarFotos(posts);
    })
    .catch((error)=>{
      console.log(error)
    })

    module.exports = axios;
    
    
     */
//console.log(respuesta.last_post);


function guardarFotos (resp){
    for(let i= 0; i <= resp.length - 1; i++){
        let foto = new Foto({
            descripcion: resp[i].caption.split('\n')[0],
            img: resp[i].display_url,
            urlInstagram: `https://instagram.com/p/${resp[i].shortcode}`
        });

        foto.save((error, fotoGuardada) => {
            /* if(error){
                console.log('No se pudo añadir');
            } */
        })
       
    }
    
    //console.log('Se terminó la sincronización');
}



