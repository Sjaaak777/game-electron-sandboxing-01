const THREE = require('three')
const house = new THREE.Group()

// LAND
const land = new THREE.Mesh(
  new THREE.BoxGeometry(9, 0.1, 7),
  new THREE.MeshBasicMaterial({ color: 0x335533 })
)
land.position.set(5, 0, -5)

//WALLS
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(6, 4, 4),
  new THREE.MeshBasicMaterial({ color: 0x5577cc })
)
walls.position.set(5, 2, -5)

//ROOF
const roof = new THREE.Mesh(
  new THREE.BoxGeometry(7, 0.2, 5),
  new THREE.MeshBasicMaterial({ color: 0xcc7755 })
)
roof.position.set(5, walls.position.y + 2, -5)

// ADD ALL TO GROUP
house.add(land, walls, roof)
house.position.set(-4, 0, 0)

module.exports.house = house
