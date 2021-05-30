const player = require('../assets/player')

document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyReleased)

function keyPressed(e) {
  if (e.code === 'KeyA') {
    player.player.speedX = -0.1
  }
  if (e.code === 'KeyD') {
    player.player.speedX = 0.1
  }
  if (e.code === 'KeyW') {
    player.player.speedZ = -0.1
  }
  if (e.code === 'KeyS') {
    player.player.speedZ = 0.1
  }
}

function keyReleased(e) {
  if (
    e.code === 'KeyW' ||
    e.code === 'KeyA' ||
    e.code === 'KeyS' ||
    e.code === 'KeyD'
  ) {
    player.player.speedX = 0
    player.player.speedZ = 0
  }
}

module.exports = {
  keyPressed,
  keyReleased,
}
