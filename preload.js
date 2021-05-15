const THREE = require('three')
const OrbitControls = require('three-orbit-controls')(THREE)
const { cube } = require('./assets/cube')

window.addEventListener('DOMContentLoaded', () => {
  // SCENE
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  // RENDERER
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
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
  pointLight.position.x = 2
  pointLight.position.y = 3
  pointLight.position.z = 4
  scene.add(pointLight)

  // FLOOR
  const floorGeometry = new THREE.BoxGeometry(20, 0.05, 20)
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x74e6e1 })
  const floor = new THREE.Mesh(floorGeometry, floorMaterial)
  floor.position.y = -0.05
  scene.add(floor)

  // BOX
  scene.add(cube)

  // CAMERA
  camera.position.z = 5
  camera.position.x = 2
  camera.position.y = 1

  // ANIMATE
  const animate = function () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.005
    cube.rotation.y += 0.005

    controls.update()
    renderer.render(scene, camera)
  }

  animate()
})
