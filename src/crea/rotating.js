import THREE from '../THREE.js'
import { makeRing } from '../makeRing.js'
import { scene, getTexture, setAutoPauseDelay } from '../setup.js'
import { rad } from '../utils/utils.js'

const container = new THREE.Object3D()
scene.add(container)

let i = 80;
let j = true;

container.update = () => {
    container.rotation.y += rad(0.1)

    if (j)
    {
        container.scale.x += 0.001
        container.scale.z += 0.001
        i--;
    }
    else
    {
        container.scale.x -= 0.001
        container.scale.z -= 0.001
        i++;
    }

    if (i <= 0)
    {
        j = false;
    }

    if (i >= 80)
    {
        j = true;
    }

    if (container.scale.x < 0.1)
    {
        container.scale.x = 1
        container.scale.z = 1
    }
    
}

setAutoPauseDelay(60) // auto-pause au bout d'une minute (et non plus 1 seconde)

for (const obj of makeRing({
    // debug: true,
    position: new THREE.Vector3(0, 1.5, 0),
    color: 'red',
    rotationX: 135,
    radius: 3.2,
    count: 20,
    scale: 0.5,
})) {

    const geometry = new THREE.PlaneGeometry(1, 1.5)
    const material = new THREE.MeshBasicMaterial({ 
        color: 'red', 
        side: THREE.DoubleSide,
        transparent: true,
        alphaMap: getTexture('./assets/hands.png'),
    })
    
    const plane = new THREE.Mesh(geometry, material)
    plane.rotation.x = rad(80)
    obj.add(plane)

    container.add(obj)
}
