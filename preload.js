const THREE = require('three')
const OrbitControls = require('three-orbit-controls')(THREE)
const handlerInput = require('./handlers/input-handler')
const { cube } = require('./assets/cube')
const { house } = require('./assets/house')
const { player } = require('./assets/player')

window.addEventListener('DOMContentLoaded', () => {
  // SCENE
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xdddddd)

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.set(5, 10, 9)

  // RENDERER
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  document.body.appendChild(renderer.domElement)

  // ORBITCONTROLS
  controls = new OrbitControls(camera)
  controls.enableDamping = true
  controls.dampingFactor = 0.1

  // AXESHELPER
  const axesHelper = new THREE.AxesHelper(3)
  scene.add(axesHelper)

  // LIGHT
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 0.5)
  pointLight.position.set(2, 6, 4)
  scene.add(pointLight)
  pointLight.castShadow = true
  pointLight.shadow.mapSize.width = 1024 / 2
  pointLight.shadow.radius = 3

  // FLOOR
  const floorGeometry = new THREE.BoxGeometry(150, 0.05, 150)
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x74e6e1 })
  const floor = new THREE.Mesh(floorGeometry, floorMaterial)
  floor.position.y = -0.05
  floor.receiveShadow = true
  scene.add(floor)

  // CUBE
  scene.add(cube)

  // HOUSE
  scene.add(house)

  // PLAYER
  scene.add(player)
  player.position.x += 1

  // ANIMATE
  const animate = function () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.005
    cube.rotation.y += 0.005

    controls.update()
    renderer.render(scene, camera)

    handlerInput.keyPressed
    handlerInput.keyReleased
    player.position.x += player.speedX
    player.position.z += player.speedZ
  }

  animate()
})
