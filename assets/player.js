const THREE = require('three')

const geometry = new THREE.CylinderGeometry(0.3, 0.3, 1.8, 16)
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xcccc00 })
const player = new THREE.Mesh(geometry, boxMaterial)
player.position.set(1, 0.85, 1)
player.castShadow = true
player.speedX = 0
player.speedZ = 0

module.exports.player = player
