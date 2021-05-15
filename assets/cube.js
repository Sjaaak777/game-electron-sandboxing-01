const THREE = require('three')

const geometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xe67479 })
const cube = new THREE.Mesh(geometry, boxMaterial)
cube.position.set(1, 2, 4)
cube.castShadow = true

module.exports.cube = cube
