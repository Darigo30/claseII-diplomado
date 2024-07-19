// console.log("Hola Diplomado FullStack 🤓");

//Seleccionamos elementos por id
// const contenedor = document.getElementById('contenedor')
// console.log("Este es un contenedor", contenedor)

// //Seleccionamos elementos por etiqueta
// const listaLi = document.getElementsByTagName('li')
// console.log("Este es un parrafo", listaLi)

// //Seleccionamos elementos por clase
// const colorRojo = document.getElementsByClassName('fondo-rojo')
// console.log("Este es un color rojo", colorRojo)


//Seleccionamos elementos por selector 

// const selector = document.querySelector('.fondo-azul')
// console.log(selector)

//Seleccionamos elementos por selector All

// const colorRojo = document.querySelectorAll('.fondo-rojo')
// console.log(colorRojo)

//Creacion y modificacion de elementos 


// const toppingNuevo = document.createElement('li')
// console.log(toppingNuevo)

// const listaToppings = document.getElementById('lista-toppings')

// toppingNuevo.innerHTML = 'Ketchup'

// listaToppings.appendChild(toppingNuevo)

// toppingNuevo.classList.add('topping', 'fondo-rojo')

//TEXT CONTENT

// const titulo = document.getElementById('titulo')
// titulo.textContent = 'Tocomple'

// titulo.setAttribute('class', 'titulomodificado')

// titulo.style.color = 'blue'

// EVENTOS // 

// const titulo = document.getElementById('titulo')

// titulo.addEventListener('click', () => {
//     alert("Hiciste clic en el titulo")
//     console.log("Hiciste click en el titulo 2.0")
// })

//Mouse over    

// titulo.addEventListener('mouseover', () => {
//     console.log("Hiciste hover en el titulo")
// })

//CALLBACK 

// function saludar(nombre, callback){
//     console.log(`Hola ${nombre}`)
//     callback()
// }
// saludar('Hugo', adios)

// function adios(){
//     console.log("Adios")
// }

//PROMESA

// let promesa = new Promise((resolve, reject) => {
//     let exito = false;

//     if(exito) {
//         resolve('La operacion fue exitosa')
//     } else {
//         reject('Operación fallida')
//     }
// })

// promesa.then((mensaje) => {
//     console.log(mensaje)
// }).catch((error) => {
//     console.log(error)
// })


//Asyn await para la pokeapi 
//https://pokeapi.co/api/v2/pokemon

// const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon'

// async function getPokemones() {
//     try {
//         const response = await fetch(urlPokeApi)
//         const data = await response.json()
//         console.log(data.results)
//     } catch (error) {
//         console.error(error)
//     }
// }

// getPokemones()