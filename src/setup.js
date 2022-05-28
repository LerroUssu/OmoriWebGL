import THREE from './THREE.js'

// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setPixelRatio(devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//camera.position.z = 0;
//camera.position.y = 5;
camera.position.x = 5;

const textureLoader = new THREE.TextureLoader()
const getTexture = url => textureLoader.load(url)



let autoPauseDelay = 1
let autoPauseTime = 0
const autoPauseReset = () => autoPauseTime = 0
const setAutoPauseDelay = value => autoPauseDelay = parseFloat(value)

const dt = 1 / 60
let time = 0
let frame = 0

const loop = function () {
    requestAnimationFrame(loop)
    
    autoPauseTime += dt

    if (autoPauseTime <= autoPauseDelay) {

        const args = { time, frame }
        scene.traverse(child => {
            if(typeof child.update === 'function') {
                child.update(args)
            }
        })

        renderer.render(scene, camera)
        time += dt
        frame++
    }
}

loop()

window.addEventListener('pointermove', autoPauseReset, true)
window.addEventListener('keydown', autoPauseReset, true)
window.addEventListener('mousewheel', autoPauseReset, true)

export {
    scene,
    camera,
    renderer,
    getTexture,
    
    autoPauseReset,
    setAutoPauseDelay,
}