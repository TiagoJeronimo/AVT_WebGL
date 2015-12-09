var Butter = function () {
  this.position = {x: 0, y: 0, z: 0}
  this.scale = {x: 1, y: 1, z: 1}
  this.rotation = {x: 0, y: 0, z: 0}
  this.gameObject = null
}

Butter.prototype = {
  create: function () {
    this.gameObject = new GameObject(CUBE_OBJ, "glass.gif")
    this.initBuffers()
  },
  draw: function () {
    mvPushMatrix()

    mat4.rotateX(mvMatrix,mvMatrix, degToRad(this.rotation.x))
    mat4.rotateY(mvMatrix,mvMatrix, degToRad(this.rotation.y))
    mat4.rotateZ(mvMatrix,mvMatrix, degToRad(this.rotation.z))
    mat4.translate(mvMatrix,mvMatrix, [this.position.x, this.position.y, this.position.z])
    mat4.scale(mvMatrix,mvMatrix, [0.7, 0.7, 0.7])

 		this.gameObject.cubeBindBuffers()

    mvPopMatrix()
  },
  initBuffers: function () {
    this.gameObject.initBuffers()
  }
}
