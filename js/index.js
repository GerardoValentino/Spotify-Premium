const cardTop = document.querySelector('#cardTop').content    
const fragment = document.createDocumentFragment()
const contenido = document.querySelector('#contenido')
const btnBuscar = document.getElementById('buscador')
let topTwoHundred = [] // Es un arreglo porque las respuestas que llegan de APIS llegan en forma de arreglo

// Cuando se cargue todo lo del diseño, imagenes, etc. Se ejecutara esto:
// **Investigar**
document.addEventListener('DOMContentLoaded', () => {
    loadMusicData() 
})

// Creamos la funcion que acabamos de escribir:
const loadMusicData = () => {
    // Codigo del API que sacamos de Rapid de los Top 20
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards()
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
}


const creaCards = () => {
    topTwoHundred.forEach((song) => { // Cada vez que lea un elemento del arreglo se guardara en "song"
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri) // Grabacion 23-02-2023 minuto 1:28:50
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName // trackMetadata.trackName son parte del api de rapid que elegimos
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) => {
            if(index === size - 1){
                artists += item.name
            } else {
                artists += item.name + ' / '
            }
        })
        cardTop.querySelector('.artistname').textContent = artists

        const clone = cardTop.cloneNode(true) // Para que sirve esto?
        fragment.appendChild(clone) // ????
    })
    contenido.appendChild(fragment) // ????
}

btnBuscar.addEventListener('keyup', () => {
    const searchTerm = btnBuscar.value.toLowerCase()
    const filteredSongs = topTwoHundred.filter((song) => {
        return song.trackMetadata.trackName.toLowerCase().startsWith(searchTerm)
    })

    console.log('click', filteredSongs)
    contenido.innerHTML = ''
    if(filteredSongs.length > 0) {
        filteredSongs.forEach((song) => { // Cada vez que lea un elemento del arreglo se guardara en "song"
            cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri) // Grabacion 23-02-2023 minuto 1:28:50
            cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName // trackMetadata.trackName son parte del api de rapid que elegimos
            let artists = ''
            let size = song.trackMetadata.artists.length
            song.trackMetadata.artists.forEach((item, index) => {
                if(index === size - 1){
                    artists += item.name
                } else {
                    artists += item.name + ' / '
                }
            })
            cardTop.querySelector('.artistname').textContent = artists
    
            const clone = cardTop.cloneNode(true) // Para que sirve esto?
            fragment.appendChild(clone) // ????
        })
        contenido.appendChild(fragment) //
    }
}) // Con keypress cada vez que se presiona una tecla