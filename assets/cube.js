const THREE = require('three')

const geometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xe67479 })
const cube = new THREE.Mesh(geometry, boxMaterial)
cube.position.set(1, 1, 1)

module.exports.cube = cube
