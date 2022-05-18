//Pasos para consumir un api con js puro

//1.DECLARO LA URI
const URI="https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=US"

//2.DECLARA LOS PARAMETROS DE LA PETICON (QUE VOY A HAVER?)

const TOKEN="Bearer BQCtFF_8PhNsxRzlwouEg14MnqA82AoaOJJWMJznWamcjPGS_FYwuV5CXKOgkSmncda896y58TG2LoP1iJiIgM-S-0GpCIkikp8FI8Zi8bYPhUVGIDbsQNoRKrN4uqZUDXg8KFkBv_z40UDFc-8oKUA7FVeE14k"

const PETICON={
    method:"GET",
    headers:{Authorization:TOKEN}
}


//RUTINA PARA CONSUMIR API CON METODO POST
//1. URI PARA DONDE VOY 
const URIPOST="https://accounts.spotify.com/api/token"

//2.almaceno los datos que voy a enviar
let dato1="client_id=870552a7570e4200bd539dcfc066cc5b"
let dato2="client_secret=bc4de3c53e8846d2a431e0d5d598231a"
let dato3="grant_type=client_credentials"

//3.configuro la peticon
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+"&"+dato2+"&"+dato3
}


//4.voy al servidor a consumir el servico
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+" "+respuesta.accesa_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})



//3.DECLARO EL FETCH (VOY AL SERVIDOR)
fetch(URI,PETICON)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta de un objeto
    console.log(respuesta.tracks) // arreglo de 10 canciones
    pitarcanciones(respuesta.tracks)
})
.catch(function(respuesta){
    console.log(respuesta)
})

//FUNCION PARA RECORRER UN ARREGLO 
function pitarcanciones(canciones){


    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //RUTINA PARA LLENADO 
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=cancion.album.images[0].url

        //padres e hijos 
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}