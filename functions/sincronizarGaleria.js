const Foto = require('../models/foto');
const respuesta= require('../response.json')
let posts= respuesta.last_post;
guardarFotos(posts);
/* const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://easy-instagram-service.p.rapidapi.com/username",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"easy-instagram-service.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPID_API_IG_KEY,
    "useQueryString":true
    },"params":{
    "random":"x8n3nsj2",
    "username":"esno23"
    }
    })
    .then((response)=>{
       // console.log(response);
        let posts = response.data.last_post;
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



