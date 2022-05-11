//Pasos para consumir un api con js puro

//1.DECLARO LA URI
const URI="https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=US"

//2.DECLARA LOS PARAMETROS DE LA PETICON (QUE VOY A HAVER?)

const TOKEN="Bearer BQAL3KW3fGZyZC5NV1EMXNcz0vvlBzKvqG-NYbWA_YUqtPtBYKzfMj17qd9DfAfnwTLpjt77-TICevbMM8FFI-EJkNE4pRXwqoFrqCafA9fbyzR9rEIMGFlBjMATB33iAvqIQzohRU2EUpYcnI9eP6smnfAOVeM"

const PETICON={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3.DECLARO EL FETCH (VOY AL SERVIDOR)
fetch(URI,PETICON)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta de un objeto
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta){
    console.log(respuesta)
})
