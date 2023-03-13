const cardTop = document.querySelector('#cardTop').content    
const fragment = document.createDocumentFragment()
const contenido = document.querySelector('#contenido')
const btnBuscar = document.getElementById('buscador')
const imgMX = document.getElementById('MX')
const imgUSA = document.getElementById('USA')
const imgJP = document.getElementById('JP')
const imgBR = document.getElementById('BR')
const imgCH = document.getElementById('CH')
const imgES = document.getElementById('ES')
const inputAlbum = document.getElementById('inputAlbum')
const btnBuscarAlbum = document.getElementById('btnBuscar')
const canciones = document.getElementById('canciones')
const album = document.getElementById('album').content
const disco = document.getElementById('disco').content

let topTwoHundred = [] // Es un arreglo porque las respuestas que llegan de APIS llegan en forma de arreglo

// Cuando se cargue todo lo del diseño, imagenes, etc. Se ejecutara esto:
// **Investigar**
document.addEventListener('DOMContentLoaded', () => {
    loadMusicData() 
})

imgMX.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=MX', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = []
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
})

imgUSA.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=USA', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = []
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
})

imgJP.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=JP', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = []
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
})

imgBR.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=BR', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = []
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
})

imgCH.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=CH', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = []
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
})

imgES.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=ES', options)
        .then(response => response.json())
        .then(response => { // Llaves curvas?
            topTwoHundred = []
            topTwoHundred = response // Guardamos la respuesta en la variable topTwoHundred
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
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
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred) 
        })
        .catch(err => console.error(err));
}


const creaCards = (musica) => {
    contenido.innerHTML= ''
    musica.forEach((song) => { // Cada vez que lea un elemento del arreglo se guardara en "song"
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
    console.log('tecla', btnBuscar.value)
    let temp = []
    temp = topTwoHundred.filter((item) => item.trackMetadata.trackName.includes(btnBuscar.value))
    creaCards(temp)
    /*
    const canciones = btnBuscar.value.toLowerCase()
    const filtro = topTwoHundred.filter((song) => {
        return song.trackMetadata.trackName.toLowerCase().startsWith(canciones)
    })

    console.log('click', filtro)
    contenido.innerHTML = ''
    if(filtro.length > 0) {
        filtro.forEach((song) => { // Cada vez que lea un elemento del arreglo se guardara en "song"
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
    */
}) // Con keypress cada vez que se presiona una tecla

btnBuscarAlbum.addEventListener('click', () =>  {
    const request = inputAlbum.value.toLowerCase()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/search?q=${request}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.albums.items)
            pintaNombre(response.albums.items)
        })
        .catch(err => console.error(err));
})

const pintaNombre = (songs) => {
    canciones.innerHTML = ''
    songs.forEach(item => {
        album.querySelector('li').textContent = item.data.name
        let tmp = item.data.uri.split(':')
        // album.querySelector('p').textContent = tmp[2]
        album.querySelector('button'.dataset.id) = tmp[2]
        const clone = album.cloneNode(true)
        fragment.appendChild(clone)
    })
    canciones.appendChild(fragment)
}

canciones.addEventListener('click', e => {
    if(e.target.className === 'btn') {
        // Aqui va el API para traer la info del album
        obtenerAlbum(e.target.dataset.id)
    }
    e.preventDefault()
})

obtenerAlbum = (id) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e39151c7amsh86c23fd0ad07af8p1ebb07jsne2d4140fe256',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/albums?ids=${id}`, options)
        .then(response => response.json())
        .then(response => {
            dibujaDisco(response)
        }).catch(err => console.error(err));
}

const dibujaDisco = (album) => {
    console.log(album.albums)
    contenido.innerHTML = ''
    disco.querySelector('img').setAttribute('src', album.albums[0].images[0].url)
    disco.querySelectorAll('p')[0].textContent = album.albums[0].name
    disco.querySelectorAll('p')[1].textContent = album.albums[0].popularity

    const clone = disco.cloneNode(true)
    fragment.appendChild(clone)
    contenido.appendChild(fragment)
}