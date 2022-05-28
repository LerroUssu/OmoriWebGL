import THREE from './THREE.js'
import { scene } from './setup.js'

export const makeFlower = ({
    count = 1,
    radius = 2,
    angleOffset = 0,
    color = '#fff',
    position = new THREE.Vector3(0, 0, 0),
    opening = 0,
    rotationZ = 0,
    width = 1, 
    height = 1,
    scale = 1,
    parent = scene,
    alphaMap = null,
    onlyX = 0,
    
    /*added a parameter, basically you choose which occurence of the "petal" you want to appear,
    dismissing the rest. Kinda sketchy but oh well it's the first idea I got*/

}) => {

    const geometry = new THREE.PlaneGeometry(width, height)
    const material = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        alphaMap: alphaMap,
    })

    if(onlyX == 0)
    {
        for (let index = 0; index < count; index++) {

            const baseAngle = 2 * Math.PI * index / count
            const angle = baseAngle + angleOffset * Math.PI / 180

            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.x = position.x + radius * Math.cos(angle)
            mesh.position.y = position.y
            mesh.position.z = position.z + radius * Math.sin(angle)

            mesh.rotation.y = Math.PI / 2 - baseAngle
            mesh.rotation.x = opening * Math.PI / 180
            mesh.rotation.z = rotationZ * Math.PI / 180
            mesh.rotation.order = 'YXZ'

            mesh.scale.x = scale
            mesh.scale.y = scale
            mesh.scale.z = scale

            parent.add(mesh)
        }
    }
    else
    {
        const baseAngle = 2 * Math.PI * onlyX / count
        const angle = baseAngle + angleOffset * Math.PI / 180

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.x = position.x + radius * Math.cos(angle)
        mesh.position.y = position.y
        mesh.position.z = position.z + radius * Math.sin(angle)

        mesh.rotation.y = Math.PI / 2 - baseAngle
        mesh.rotation.x = opening * Math.PI / 180
        mesh.rotation.z = rotationZ * Math.PI / 180
        mesh.rotation.order = 'YXZ'

        mesh.scale.x = scale
        mesh.scale.y = scale
        mesh.scale.z = scale

        parent.add(mesh)
    }
} 