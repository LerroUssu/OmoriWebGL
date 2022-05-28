import THREE from './THREE.js'
import { scene, getTexture, camera, renderer } from './setup.js'
import { makeFlower } from './makeFlower.js'

import { OrbitControls } from './utils/OrbitControls.js'

//creation importés 

import './crea/rotating.js'

/* j'avais déjà bien avancé avec le makeFlower original de la version faite en décembre, et j'avais un peu la flemme de tout
refaire en MakeRing bien que ce dernier retourne un obj etc, m'enfin bref, j'ai utilisé les deux, j'ai juste remplacé 
les "hands" en MakeRing pour pouvoir faire la rotation et l'update vu que MakeFlower ne renvoit pas d'objet et je n'avais
plus trop le temps de chercher comment faire un groupe de mesh et l'ajouter à un container (si c'est meme possible)*/



//on nomme les controls pour accéder aux parametres
let controls = new OrbitControls(camera, renderer.domElement)

//on lock la rotation ver..verticale? ou horitontale je sais pas c'est laquelle mais du coup on peut pas rotate vers le bas
// ça c'est pour le haut controls.minPolarAngle = Math.PI/2; // radians
controls.maxPolarAngle = Math.PI/2; // radians

//mettre en commentaire pour voir ce qu'il y a en bas du shape

//on change le bg color de la scene
scene.background = new THREE.Color( 0x000000 )

//floor
makeFlower({
    alphaMap: getTexture('./assets/square.png'),
    position: new THREE.Vector3(0, -1.2, 0),
    scale: 2.92,
    radius: 0.55,
    opening: -90,
    color: 'white',
    count: 5,
})

makeFlower({
    alphaMap: getTexture('./assets/square.png'),
    rotationZ: 0,
    position: new THREE.Vector3(0, 0, 0),
    scale: 2.92,
    color: 'white',
    count: 5,
})

//j'ai ajoute un parametre qui permet de choisir quelle itération afficher (in this : sur un count de 10, only show the 5th one)

makeFlower({
    alphaMap: getTexture('./assets/pshh.png'),
    position: new THREE.Vector3(0.6, 0.6, 0),
    color: 'black',
    opening: 90,
    scale: 0.7,
    height: 1.1,
    count: 10,
    onlyX: 5,
})

makeFlower({
    alphaMap: getTexture('./assets/omori.gif'),
    rotationZ: 0,
    position: new THREE.Vector3(0.8, 0 , 0.3),
    scale: 0.7,
    height: 1.2,
    opening: -90,
    radius: 0,
    color: 'black',
    count: 1,
})

makeFlower({
    alphaMap: getTexture('./assets/mewo.png'),
    rotationZ: 0,
    position: new THREE.Vector3(0.9, 0 , -0.3),
    scale: 0.4,
    width: 1.4,
    opening: -90,
    radius: 0,
    color: 'black',
    count: 1,
})

makeFlower({
    alphaMap: getTexture('./assets/welcome.png'),
    rotationZ: 0,
    position: new THREE.Vector3( -0.3, 0 , 0),
    scale: 0.5,
    height: 1,
    width: 6,
    opening: -90,
    radius: 0,
    color: 'black',
    count: 1,
})

makeFlower({
    alphaMap: getTexture('./assets/door.png'),
    position: new THREE.Vector3( 0, 0, 0),
    color: 'black',
    radius: 2.05,
    height: 2,
    scale: 1,
    count: 1,
    onlyX: 1,
})

makeFlower({
    alphaMap: getTexture('./assets/door.png'),
    position: new THREE.Vector3( 0, 0, 0),
    color: 'black',
    radius: 1.95,
    height: 2,
    scale: 1,
    count: 1,
    onlyX: 1,
})

/*makeFlower({
    alphaMap: getTexture('./assets/hands.png'),
    position: new THREE.Vector3(0, 1.5, 0),
    height: 1.5,
    color: 'red',
    opening: -135,
    radius: 3.2,
    count: 20,
    scale: 0.5,
})*/


//"easter egg" en rapport à la thématique du rendu, jouez à OMORI, excellent jeu
makeFlower({
    alphaMap: getTexture('./assets/something.png'),
    rotationZ: 0,
    position: new THREE.Vector3( 0, -1.4 , 0),
    scale: 1,
    height: 1.4,
    opening: 90,
    radius: 0,
    color: 'black',
    count: 1,
})




//rappel pour positioner les trucs là : z,y,x ??? par rapport à la page
